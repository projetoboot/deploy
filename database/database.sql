-- Criação do banco de dados
CREATE DATABASE IF NOT EXISTS lanchonete_bot;
USE lanchonete_bot;

-- Tabela de usuários
CREATE TABLE IF NOT EXISTS usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    tell VARCHAR(20) NOT NULL,
    senha2 VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabela de restaurantes
CREATE TABLE IF NOT EXISTS restaurantes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    usuario_id INT NOT NULL,
    nome_usuario VARCHAR(255),
    nome VARCHAR(255) NOT NULL,
    horarios_funcionamento JSON,
    dias_funcionamento TEXT,
    endereco TEXT,
    latitude DECIMAL(10, 8),
    longitude DECIMAL(11, 8),
    permite_consumo_local BOOLEAN DEFAULT FALSE,
    permite_retirada BOOLEAN DEFAULT FALSE,
    permite_entrega BOOLEAN DEFAULT FALSE,
    taxa_entrega DECIMAL(10, 2),
    raio_entrega INT,
    tempo_medio_entrega INT,
    logo_url VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id) ON DELETE CASCADE
);

-- Tabela de categorias
CREATE TABLE IF NOT EXISTS categorias_modal (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    icone VARCHAR(255),
    id_restaurante INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (id_restaurante) REFERENCES restaurantes(id) ON DELETE CASCADE
);

-- Tabela de pratos
CREATE TABLE IF NOT EXISTS pratos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    restaurante_id INT NOT NULL,
    categoria VARCHAR(255),
    nome VARCHAR(255) NOT NULL,
    descricao TEXT,
    preco DECIMAL(10, 2) NOT NULL,
    imagem VARCHAR(255),
    tempo_preparo INT,
    disponivel BOOLEAN DEFAULT TRUE,
    ordem INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (restaurante_id) REFERENCES restaurantes(id) ON DELETE CASCADE
);

-- Tabela de ingredientes
CREATE TABLE IF NOT EXISTS ingredientes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    prato_id INT NOT NULL,
    nome VARCHAR(255) NOT NULL,
    removivel BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (prato_id) REFERENCES pratos(id) ON DELETE CASCADE
);

-- Tabela de complementos
CREATE TABLE IF NOT EXISTS complementos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    prato_id INT NOT NULL,
    nome VARCHAR(255) NOT NULL,
    preco_adicional DECIMAL(10, 2) DEFAULT 0.00,
    maximo_escolhas INT DEFAULT 1,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (prato_id) REFERENCES pratos(id) ON DELETE CASCADE
);

-- Tabela de pedidos
CREATE TABLE IF NOT EXISTS pedidos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    cliente_telefone VARCHAR(20) NOT NULL,
    tipo_entrega VARCHAR(50),
    endereco_entrega TEXT,
    status VARCHAR(50) DEFAULT 'pendente',
    total DECIMAL(10, 2),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabela de confirmação de pedidos
CREATE TABLE IF NOT EXISTS pedido_confirmacao (
    id INT AUTO_INCREMENT PRIMARY KEY,
    pedido_id INT NOT NULL,
    dados_completos JSON,
    telefone VARCHAR(20) NOT NULL,
    tipo_entrega VARCHAR(50),
    endereco_entrega TEXT,
    total DECIMAL(10, 2),
    hora_pedido TIME,
    previsao_entrega TIME,
    ultimo_pedido_data TIMESTAMP,
    restaurante_id INT,
    restaurante_nome VARCHAR(255),
    restaurante_telefone VARCHAR(20),
    restaurante_endereco TEXT,
    subtotal DECIMAL(10, 2),
    status_preparo VARCHAR(50) DEFAULT 'pendente',
    forma_pagamento VARCHAR(50),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (pedido_id) REFERENCES pedidos(id) ON DELETE CASCADE,
    FOREIGN KEY (restaurante_id) REFERENCES restaurantes(id) ON DELETE SET NULL
);

-- Tabela de clientes
CREATE TABLE IF NOT EXISTS cliente (
    id INT AUTO_INCREMENT PRIMARY KEY,
    telefone VARCHAR(20) NOT NULL UNIQUE,
    data_primeiro_acesso TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    data_ultimo_acesso TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Índices para melhor performance
CREATE INDEX idx_usuario_tell ON usuarios(tell);
CREATE INDEX idx_restaurante_usuario ON restaurantes(usuario_id);
CREATE INDEX idx_prato_restaurante ON pratos(restaurante_id);
CREATE INDEX idx_pedido_telefone ON pedidos(cliente_telefone);
CREATE INDEX idx_cliente_telefone ON cliente(telefone); 