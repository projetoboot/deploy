-- Tabela para restaurantes
CREATE TABLE IF NOT EXISTS restaurantes (
    id SERIAL PRIMARY KEY,
    usuario_id INTEGER REFERENCES usuarios(id),
    nome VARCHAR(255) NOT NULL,
    logo_url TEXT,
    horarios_funcionamento JSONB NOT NULL DEFAULT '{}'::jsonb,
    dias_funcionamento TEXT[] NOT NULL,
    endereco TEXT NOT NULL,
    latitude DECIMAL(10, 8),
    longitude DECIMAL(11, 8),
    permite_consumo_local BOOLEAN DEFAULT false,
    permite_retirada BOOLEAN DEFAULT false,
    permite_entrega BOOLEAN DEFAULT false,
    taxa_entrega DECIMAL(10, 2),
    raio_entrega INTEGER,
    tempo_medio_entrega INTEGER,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabela para categorias de pratos
CREATE TABLE IF NOT EXISTS categorias (
    id SERIAL PRIMARY KEY,
    restaurante_id INTEGER REFERENCES restaurantes(id),
    nome VARCHAR(100) NOT NULL,
    descricao TEXT,
    ordem INTEGER DEFAULT 0
);

-- Tabela para pratos
CREATE TABLE IF NOT EXISTS pratos (
    id SERIAL PRIMARY KEY,
    restaurante_id INTEGER REFERENCES restaurantes(id),
    categoria_id INTEGER REFERENCES categorias(id),
    nome VARCHAR(255) NOT NULL,
    descricao TEXT,
    preco_base DECIMAL(10, 2) NOT NULL,
    imagem_url TEXT,
    tempo_preparo INTEGER NOT NULL, -- em minutos
    disponivel BOOLEAN DEFAULT true,
    destaque BOOLEAN DEFAULT false,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabela para preços dinâmicos
CREATE TABLE IF NOT EXISTS precos_dinamicos (
    id SERIAL PRIMARY KEY,
    prato_id INTEGER REFERENCES pratos(id),
    dia_semana INTEGER, -- 0 (domingo) a 6 (sábado), NULL para qualquer dia
    preco DECIMAL(10, 2) NOT NULL,
    hora_inicio TIME, -- NULL para qualquer horário
    hora_fim TIME, -- NULL para qualquer horário
    ativo BOOLEAN DEFAULT true
);

-- Tabela para combos
CREATE TABLE IF NOT EXISTS combos (
    id SERIAL PRIMARY KEY,
    restaurante_id INTEGER REFERENCES restaurantes(id),
    nome VARCHAR(255) NOT NULL,
    descricao TEXT,
    preco DECIMAL(10, 2) NOT NULL,
    ativo BOOLEAN DEFAULT true
);

-- Tabela para itens do combo
CREATE TABLE IF NOT EXISTS itens_combo (
    id SERIAL PRIMARY KEY,
    combo_id INTEGER REFERENCES combos(id),
    prato_id INTEGER REFERENCES pratos(id),
    quantidade INTEGER DEFAULT 1
);

-- Tabela para ingredientes
CREATE TABLE IF NOT EXISTS ingredientes (
    id SERIAL PRIMARY KEY,
    prato_id INTEGER REFERENCES pratos(id),
    nome VARCHAR(100) NOT NULL,
    removivel BOOLEAN DEFAULT false
);

-- Tabela para complementos
CREATE TABLE IF NOT EXISTS complementos (
    id SERIAL PRIMARY KEY,
    prato_id INTEGER REFERENCES pratos(id),
    nome VARCHAR(100) NOT NULL,
    preco_adicional DECIMAL(10, 2) DEFAULT 0.00,
    maximo_escolhas INTEGER DEFAULT 1
);