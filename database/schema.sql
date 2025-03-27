-- Tabela de Clientes
CREATE TABLE IF NOT EXISTS cliente (
    id SERIAL PRIMARY KEY,
    telefone VARCHAR(20) UNIQUE NOT NULL,
    data_primeiro_acesso TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    data_ultimo_acesso TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabela de Restaurantes
CREATE TABLE IF NOT EXISTS restaurante (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    endereco TEXT,
    telefone VARCHAR(20)
);

-- Tabela de Pratos
CREATE TABLE IF NOT EXISTS pratos (
    id SERIAL PRIMARY KEY,
    restaurante_id INTEGER REFERENCES restaurante(id),
    nome VARCHAR(100) NOT NULL,
    descricao TEXT,
    preco DECIMAL(10,2) NOT NULL,
    categoria VARCHAR(50),
    imagem VARCHAR(255),
    disponivel BOOLEAN DEFAULT true,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabela de Complementos (Opcionais)
CREATE TABLE IF NOT EXISTS complementos (
    id SERIAL PRIMARY KEY,
    prato_id INTEGER REFERENCES pratos(id),
    nome VARCHAR(100) NOT NULL,
    preco_adicional DECIMAL(10,2) NOT NULL DEFAULT 0,
    disponivel BOOLEAN DEFAULT true
);

-- Tabela de Pedidos
CREATE TABLE IF NOT EXISTS pedidos (
    id SERIAL PRIMARY KEY,
    cliente_telefone VARCHAR(20) REFERENCES cliente(telefone),
    data_pedido TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    tipo_entrega VARCHAR(20) NOT NULL,
    endereco_entrega TEXT,
    status VARCHAR(20) DEFAULT 'pendente',
    total DECIMAL(10,2) NOT NULL,
    observacoes TEXT
);

-- Tabela de Itens do Pedido
CREATE TABLE IF NOT EXISTS pedido_itens (
    id SERIAL PRIMARY KEY,
    pedido_id INTEGER REFERENCES pedidos(id),
    produto_id INTEGER REFERENCES pratos(id),
    quantidade INTEGER NOT NULL DEFAULT 1,
    preco_unitario DECIMAL(10,2) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabela de Opcionais dos Itens do Pedido
CREATE TABLE IF NOT EXISTS pedido_itens_opcionais (
    id SERIAL PRIMARY KEY,
    pedido_item_id INTEGER REFERENCES pedido_itens(id),
    opcional_id INTEGER REFERENCES complementos(id),
    preco_adicional DECIMAL(10,2) NOT NULL DEFAULT 0,
    nome VARCHAR(100)
);

-- Índices para melhor performance
CREATE INDEX idx_pedidos_cliente ON pedidos(cliente_telefone);
CREATE INDEX idx_pedido_itens_pedido ON pedido_itens(pedido_id);
CREATE INDEX idx_complementos_prato ON complementos(prato_id);