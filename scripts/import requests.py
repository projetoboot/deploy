import os
import json
import requests
from faker import Faker

# Configuração inicial
PEXELS_API_KEY = 'yT08KsPFKvhWJuNiN0qxLVYOto7O4tGj4KtvKuCucKpjBjFyo5gm8JtV'  # Substitua pela sua chave da API do Pexels
fake = Faker('pt_BR')  # Gerador de dados fictícios em português do Brasil
categorias = ['Brasileira', 'Lanches', 'Pizzas', 'Japonesa', 'Bebidas']

# Função para buscar imagens usando a API do Pexels
def buscar_imagem(nome_prato):
    url = "https://api.pexels.com/v1/search"
    headers = {"Authorization": PEXELS_API_KEY}
    params = {"query": nome_prato + " comida", "per_page": 1}  # Busca uma imagem por vez
    try:
        response = requests.get(url, headers=headers, params=params)
        response.raise_for_status()
        data = response.json()
        if data['photos']:
            return data['photos'][0]['src']['medium']  # Retorna a URL da imagem média
        else:
            print(f"Nenhuma imagem encontrada para: {nome_prato}")
            return None
    except Exception as e:
        print(f"Erro ao buscar imagem: {e}")
        return None

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

# Função para gerar dados fictícios de pratos
def gerar_dados_pratos():
    pratos = {}

    for categoria in categorias:
        pratos[categoria] = []
        for i in range(3):  # Gera 3 pratos por categoria
            nome = fake.sentence(nb_words=3).replace('.', '').title()
            descricao = fake.paragraph(nb_sentences=2)
            preco = round(fake.random_number(digits=2) + fake.random.random(), 2)
            tempo_preparo = fake.random_int(min=10, max=120)
            ingredientes = [fake.word() for _ in range(fake.random_int(min=3, max=8))]
            ingredientes_removiveis = [fake.boolean() for _ in ingredientes]

            # Buscar imagem
            imagem_url = buscar_imagem(nome)
            if imagem_url:
                nome_arquivo = f"imagens/{nome.replace(' ', '_')}.jpg"
                os.makedirs('imagens', exist_ok=True)
                if salvar_imagem(imagem_url, nome_arquivo):
                    imagem = nome_arquivo
                else:
                    imagem = None
            else:
                imagem = None

            # Adicionar prato à categoria
            pratos[categoria].append({
                'nome': nome,
                'descricao': descricao,
                'preco': preco,
                'tempo_preparo': tempo_preparo,
                'ingredientes': ingredientes,
                'ingredientes_removiveis': ingredientes_removiveis,
                'imagem': imagem
            })

    # Salvar os dados em um arquivo JSON
    with open('pratos.json', 'w', encoding='utf-8') as f:
        json.dump(pratos, f, ensure_ascii=False, indent=4)

    print("Dados salvos em pratos.json")
    return pratos

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

# Executar o script
if __name__ == "__main__":
    pratos = gerar_dados_pratos()
    sql = gerar_sql_pratos(pratos)
    
    # Criar diretório sql se não existir
    os.makedirs('sql', exist_ok=True)

    # Salvar o SQL em um arquivo
    with open('sql/inserir_novos_produtos.sql', 'w', encoding='utf-8') as f:
        f.write('-- Inserindo pratos e seus ingredientes\n')
        f.write(sql)

    print('Arquivo SQL gerado com sucesso!')