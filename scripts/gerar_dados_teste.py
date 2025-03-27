import os
import json
from faker import Faker

# Configuração inicial
fake = Faker('pt_BR')  # Gerador de dados fictícios em português do Brasil
categorias = ['Brasileira', 'Lanches', 'Pizzas', 'Japonesa', 'Bebidas', 'Italiana', 'Mexicana', 'Sobremesas']
imagens_urls = [
    "https://source.unsplash.com/800x600/?food",
    "https://source.unsplash.com/800x600/?dish",
    "https://source.unsplash.com/800x600/?meal",
    "https://source.unsplash.com/800x600/?recipe",
    "https://source.unsplash.com/800x600/?drink"
]

# Função para gerar dados fictícios de pratos
def gerar_pratos_ficticios():
    pratos = {}

    for categoria in categorias:
        pratos[categoria] = []
        for i in range(10000):  # Gera 12 pratos por categoria (total ~100 pratos)
            nome = fake.sentence(nb_words=3).replace('.', '').title()
            descricao = fake.paragraph(nb_sentences=2)
            preco = round(fake.random_number(digits=2) + fake.random.random(), 2)
            tempo_preparo = fake.random_int(min=5, max=120)
            ingredientes = [fake.word() for _ in range(fake.random_int(min=3, max=8))]
            ingredientes_removiveis = [fake.boolean() for _ in ingredientes]
            imagem_url = imagens_urls[fake.random_int(min=0, max=len(imagens_urls) - 1)]

            # Adicionar prato à categoria
            pratos[categoria].append({
                'nome': nome,
                'descricao': descricao,
                'preco': preco,
                'tempo_preparo': tempo_preparo,
                'ingredientes': ingredientes,
                'ingredientes_removiveis': ingredientes_removiveis,
                'imagem_url': imagem_url
            })

    return pratos

# Função para salvar imagens localmente
def salvar_imagem(url, nome_arquivo):
    try:
        response = requests.get(url, stream=True)
        if response.status_code == 200:
            with open(nome_arquivo, 'wb') as f:
                for chunk in response.iter_content(1024):
                    f.write(chunk)
            return True
        else:
            print(f"Erro ao baixar imagem: {response.status_code}")
            return False
    except Exception as e:
        print(f"Erro ao salvar imagem: {e}")
        return False

# Função para gerar SQL para inserção dos pratos
def gerar_sql_pratos(pratos):
    sql_commands = []
    
    for categoria, lista_pratos in pratos.items():
        for prato in lista_pratos:
            # Insert prato
            sql_prato = f"""INSERT INTO pratos (nome, descricao, categoria, preco_base, tempo_preparo, disponivel)
                    VALUES ('{prato['nome']}', '{prato['descricao']}', '{categoria}', {prato['preco']}, {prato['tempo_preparo']}, true)
                    RETURNING id;"""
            
            sql_commands.append(sql_prato)
            
            # Insert ingredientes for this prato
            for i, ingrediente in enumerate(prato['ingredientes']):
                removivel = 'true' if prato['ingredientes_removiveis'][i] else 'false'
                sql_ingrediente = f"""
                    WITH prato_id AS (
                        SELECT id FROM pratos WHERE nome = '{prato['nome']}'
                    )
                    INSERT INTO ingredientes (prato_id, nome, removivel)
                    SELECT id, '{ingrediente}', {removivel}
                    FROM prato_id;"""
                
                sql_commands.append(sql_ingrediente)
            
            # Add a separator between different pratos
            sql_commands.append('\n')
    
    return '\n'.join(sql_commands)

# Salvar os dados em JSON e baixar imagens
def salvar_dados(pratos):
    os.makedirs('imagens', exist_ok=True)

    for categoria, lista_pratos in pratos.items():
        for prato in lista_pratos:
            nome_arquivo = f"imagens/{prato['nome'].replace(' ', '_')}.jpg"
            if salvar_imagem(prato['imagem_url'], nome_arquivo):
                prato['imagem_local'] = nome_arquivo
            else:
                prato['imagem_local'] = None

    # Salvar os dados em um arquivo JSON
    with open('pratos_com_fotos.json', 'w', encoding='utf-8') as f:
        json.dump(pratos, f, ensure_ascii=False, indent=4)

    print("Dados salvos em pratos_com_fotos.json")

# Gerar e salvar SQL
def salvar_sql(pratos):
    os.makedirs('sql', exist_ok=True)

    with open('sql/inserir_novos_produtos.sql', 'w', encoding='utf-8') as f:
        f.write('-- Inserindo pratos e seus ingredientes\n')
        f.write(gerar_sql_pratos(pratos))

    print("Arquivo SQL gerado com sucesso!")

# Executar o script
if __name__ == "__main__":
    pratos = gerar_pratos_ficticios()
    salvar_dados(pratos)
    salvar_sql(pratos)