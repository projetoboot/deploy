#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
Script para cadastro automático de produtos no sistema Lanchonete Bot
Este script utiliza os dados do arquivo cardapio.py e envia para o sistema via API
"""

import os
import json
import random
import requests
import time
from pathlib import Path
from PIL import Image, ImageDraw
import io
import base64
import sys

# Adiciona o diretório parent para importar o cardapio.py
sys.path.append(str(Path(__file__).parent.parent))

try:
    # Tenta importar do cardapio.py existente
    from cardapio import categorias as categorias_existentes
except ImportError:
    # Se não encontrar, define categorias padrão
    categorias_existentes = {
        "Massas": [
            "Espaguete ao Sugo", "Lasanha Bolonhesa", "Macarrão Carbonara",
            "Fettuccine Alfredo", "Ravioli de Queijo", "Nhoque ao Molho Branco"
        ],
        "Frutos do Mar": [
            "Camarão à Milanesa", "Lula Grelhada", "Bacalhau à Brás",
            "Salmão ao Molho de Maracujá", "Risoto de Frutos do Mar"
        ],
        "Lanches": [
            "Hambúrguer Clássico", "Cheeseburger", "X-Bacon", "Sanduíche de Frango",
            "Wrap Vegetariano", "Cachorro-Quente"
        ],
        "Pizzas": [
            "Pizza Marguerita", "Pizza de Calabresa", "Pizza Portuguesa",
            "Pizza de Pepperoni", "Pizza Quatro Queijos", "Pizza de Frango com Catupiry"
        ],
        "Sobremesas": [
            "Torta de Chocolate", "Pudim de Leite", "Brownie com Sorvete",
            "Cheesecake de Morango", "Mousse de Maracujá"
        ],
        "Bebidas": [
            "Coca-Cola 600ml", "Suco Natural de Laranja", "Água com Gás",
            "Cerveja Artesanal", "Vinho Tinto", "Refrigerante Diet"
        ]
    }

# Configurações
BASE_URL = "http://localhost:3000"  # Altere se seu servidor estiver em outro endereço
IMAGENS_DIR = Path(__file__).parent.parent / "public" / "img" / "produtos_gerados"
IMAGENS_DIR.mkdir(parents=True, exist_ok=True)

# Descrições genéricas por categoria para complementar os nomes dos produtos
DESCRICOES = {
    "Massas": [
        "Deliciosa massa fresca preparada com molho caseiro e ingredientes selecionados.",
        "Uma combinação perfeita de massa al dente com molho especial do chef.",
        "Massa artesanal preparada no dia, com sabor incomparável."
    ],
    "Frutos do Mar": [
        "Frutos do mar frescos selecionados diariamente, preparados com temperos especiais.",
        "Uma explosão de sabores do mar que vai te surpreender.",
        "Prato requintado com frutos do mar da melhor qualidade."
    ],
    "Lanches": [
        "Lanche preparado com pão artesanal e ingredientes frescos de alta qualidade.",
        "Combinação perfeita de sabores para matar sua fome a qualquer hora do dia.",
        "Receita exclusiva que faz deste lanche uma experiência única."
    ],
    "Pizzas": [
        "Pizza com massa fina e crocante, coberta com ingredientes premium.",
        "Nossa massa é fermentada naturalmente por 24h para garantir sabor e textura perfeitos.",
        "Combinação harmoniosa de sabores em uma pizza irresistível."
    ],
    "Sobremesas": [
        "Sobremesa artesanal que derrete na boca e conquista pelo sabor.",
        "Feita com ingredientes selecionados para uma experiência doce inesquecível.",
        "O toque perfeito para finalizar sua refeição com chave de ouro."
    ],
    "Bebidas": [
        "Bebida refrescante para acompanhar seu pedido.",
        "O complemento perfeito para sua refeição.",
        "Sabor refrescante que combina com todas as opções do cardápio."
    ]
}

# Ingredientes comuns por categoria
INGREDIENTES = {
    "Massas": ["Massa fresca", "Molho de tomate", "Parmesão", "Manjericão", "Azeite extra virgem"],
    "Frutos do Mar": ["Frutos do mar", "Alho", "Cebola", "Azeite", "Limão", "Ervas frescas"],
    "Lanches": ["Pão", "Carne", "Queijo", "Alface", "Tomate", "Maionese especial"],
    "Pizzas": ["Massa", "Molho de tomate", "Queijo mussarela", "Orégano", "Azeite"],
    "Sobremesas": ["Açúcar", "Chocolate", "Leite", "Farinha", "Essência de baunilha"],
    "Bebidas": ["Água", "Gelo", "Açúcar"]
}

# Complementos comuns por categoria
COMPLEMENTOS = {
    "Massas": [
        {"nome": "Parmesão extra", "preco": 3.00, "max": 1},
        {"nome": "Molho extra", "preco": 4.00, "max": 1},
        {"nome": "Manjericão fresco", "preco": 1.50, "max": 1}
    ],
    "Frutos do Mar": [
        {"nome": "Porção extra de camarão", "preco": 12.00, "max": 1},
        {"nome": "Limão siciliano", "preco": 2.00, "max": 2}
    ],
    "Lanches": [
        {"nome": "Bacon extra", "preco": 3.50, "max": 2},
        {"nome": "Queijo cheddar", "preco": 2.50, "max": 1},
        {"nome": "Cebola caramelizada", "preco": 2.00, "max": 1},
        {"nome": "Molho especial", "preco": 1.50, "max": 1}
    ],
    "Pizzas": [
        {"nome": "Borda recheada", "preco": 8.00, "max": 1},
        {"nome": "Queijo extra", "preco": 5.00, "max": 1},
        {"nome": "Calabresa extra", "preco": 6.00, "max": 1}
    ],
    "Sobremesas": [
        {"nome": "Calda extra", "preco": 2.00, "max": 2},
        {"nome": "Chantilly", "preco": 3.00, "max": 1}
    ],
    "Bebidas": [
        {"nome": "Gelo extra", "preco": 0.50, "max": 1},
        {"nome": "Limão", "preco": 0.50, "max": 3}
    ]
}

def gerar_imagem(nome, categoria):
    """Gera uma imagem simples para o produto com texto indicando nome e categoria"""
    width, height = 500, 500
    cores_fundo = {
        "Massas": (255, 222, 173),      # Cor de massa
        "Frutos do Mar": (173, 216, 230), # Azul claro
        "Lanches": (255, 228, 196),     # Cor de pão
        "Pizzas": (255, 127, 80),       # Vermelho tomate
        "Sobremesas": (255, 182, 193),  # Rosa claro
        "Bebidas": (173, 255, 230)      # Verde água
    }
    
    cor_fundo = cores_fundo.get(categoria, (240, 240, 240))
    
    # Criar uma imagem com fundo colorido
    imagem = Image.new('RGB', (width, height), color=cor_fundo)
    d = ImageDraw.Draw(imagem)
    
    # Desenhar texto na imagem
    d.rectangle([(50, height//2-60), (width-50, height//2+60)], fill=(255, 255, 255, 128))
    d.text((width//2, height//2-30), categoria, fill=(0, 0, 0), anchor="mm")
    d.text((width//2, height//2+10), nome, fill=(0, 0, 0), anchor="mm")
    
    # Salvar a imagem
    nome_arquivo = f"{categoria}_{nome.replace(' ', '_')}.jpg"
    caminho_completo = IMAGENS_DIR / nome_arquivo
    imagem.save(caminho_completo)
    
    return str(caminho_completo)

def preco_formatado_para_valor(preco_formatado):
    """Converte um preço formatado (ex: '10,90') para um valor numérico (ex: 10.90)"""
    return float(preco_formatado.replace(',', '.'))

def valor_para_preco_formatado(valor):
    """Converte um valor numérico (ex: 10.90) para um preço formatado (ex: '10,90')"""
    return f"{valor:.2f}".replace('.', ',')

def cadastrar_produto(produto):
    """Simula o envio de um produto para o sistema"""
    print(f"Cadastrando: {produto['nome']} ({produto['categoria']})")
    print(f"  Preço: R$ {produto['preco_formatado']}")
    print(f"  Descrição: {produto['descricao']}")
    print(f"  Ingredientes: {', '.join(produto['ingredientes'])}")
    print(f"  Complementos: {len(produto['complementos'])}")
    print(f"  Imagem: {produto['imagem']}")
    print("-" * 50)
    
    # Aqui você pode implementar o código para enviar esses dados para sua API
    # Exemplo com requests:
    """
    try:
        response = requests.post(
            f"{BASE_URL}/api/produtos", 
            json=produto
        )
        if response.status_code == 200 or response.status_code == 201:
            print("Cadastro realizado com sucesso!")
            return True
        else:
            print(f"Erro ao cadastrar: {response.status_code} - {response.text}")
            return False
    except Exception as e:
        print(f"Erro na requisição: {str(e)}")
        return False
    """
    
    # Por enquanto, apenas simula o cadastro
    time.sleep(0.5)  # Simula o tempo de resposta da API
    return True

def main():
    print("=" * 80)
    print("CADASTRO AUTOMÁTICO DE PRODUTOS PARA O CARDÁPIO DIGITAL")
    print("=" * 80)
    
    total_a_cadastrar = input("Quantos produtos deseja cadastrar? (padrão: 10): ")
    total_a_cadastrar = int(total_a_cadastrar) if total_a_cadastrar.isdigit() else 10
    
    print(f"\nGerando {total_a_cadastrar} produtos aleatórios para cadastro...")
    
    sucessos = 0
    for i in range(total_a_cadastrar):
        # Escolher categoria e item aleatoriamente
        categoria = random.choice(list(categorias_existentes.keys()))
        nome = random.choice(categorias_existentes[categoria])
        
        # Gerar preço aleatório conforme a categoria
        precos_base = {
            "Massas": (25, 45),
            "Frutos do Mar": (35, 65),
            "Lanches": (15, 30),
            "Pizzas": (30, 50),
            "Sobremesas": (10, 20),
            "Bebidas": (5, 15)
        }
        preco_min, preco_max = precos_base.get(categoria, (10, 40))
        preco = round(random.uniform(preco_min, preco_max), 2)
        preco_formatado = valor_para_preco_formatado(preco)
        
        # Gerar tempo de preparo aleatório
        tempo_preparo = random.randint(10, 40)
        
        # Escolher descrição aleatória
        descricao = random.choice(DESCRICOES.get(categoria, ["Produto delicioso para você aproveitar!"]))
        
        # Escolher ingredientes para este produto
        ingredientes_base = INGREDIENTES.get(categoria, ["Ingredientes selecionados"])
        num_ingredientes = min(len(ingredientes_base), random.randint(3, 5))
        ingredientes = random.sample(ingredientes_base, num_ingredientes)
        
        # Escolher complementos para este produto
        complementos_base = COMPLEMENTOS.get(categoria, [])
        num_complementos = min(len(complementos_base), random.randint(0, 3))
        complementos = random.sample(complementos_base, num_complementos)
        
        # Gerar ou obter imagem do produto
        imagem = gerar_imagem(nome, categoria)
        
        # Criar objeto do produto
        produto = {
            "nome": nome,
            "descricao": descricao,
            "categoria": categoria,
            "preco_base": preco,
            "preco_formatado": preco_formatado,
            "tempo_preparo": tempo_preparo,
            "disponivel": True,
            "ingredientes": ingredientes,
            "complementos": complementos,
            "imagem": imagem
        }
        
        # Cadastrar o produto
        print(f"\nCadastrando produto {i+1}/{total_a_cadastrar}")
        if cadastrar_produto(produto):
            sucessos += 1
    
    print("\n" + "=" * 80)
    print(f"Cadastro finalizado! {sucessos}/{total_a_cadastrar} produtos cadastrados com sucesso.")
    print("=" * 80)

if __name__ == "__main__":
    main()
