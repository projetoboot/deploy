-- Create database
CREATE DATABASE cardap WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'pt_BR.UTF-8';

\connect cardap

-- Function for updating timestamps
CREATE FUNCTION public.update_updated_at_column() RETURNS trigger
    LANGUAGE plpgsql
    AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$;

-- Tables
CREATE TABLE public.cardapio (
    id integer NOT NULL,
    nome character varying(255) NOT NULL,
    categoria character varying(255) NOT NULL,
    preco numeric(10,2) NOT NULL,
    imagem character varying(255),
    synonyms text[],
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE public.categorias (
    id integer NOT NULL,
    restaurante_id integer,
    nome character varying(100) NOT NULL,
    descricao text,
    ordem integer DEFAULT 0
);

CREATE TABLE public.cliente (
    id integer NOT NULL,
    telefone character varying(15) NOT NULL,
    data_primeiro_acesso timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    data_ultimo_acesso timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE public.combos (
    id integer NOT NULL,
    restaurante_id integer,
    nome character varying(255) NOT NULL,
    descricao text,
    preco numeric(10,2) NOT NULL,
    ativo boolean DEFAULT true
);

CREATE TABLE public.complementos (
    id integer NOT NULL,
    prato_id integer,
    nome character varying(100) NOT NULL,
    preco_adicional numeric(10,2) DEFAULT 0.00,
    maximo_escolhas integer DEFAULT 1
);

CREATE TABLE public.ingredientes (
    id integer NOT NULL,
    prato_id integer,
    nome character varying(100) NOT NULL,
    removivel boolean DEFAULT false
);

CREATE TABLE public.itens_combo (
    id integer NOT NULL,
    combo_id integer,
    prato_id integer,
    quantidade integer DEFAULT 1
);

CREATE TABLE public.opcionais (
    id integer NOT NULL,
    nome character varying(255) NOT NULL,
    preco_adicional numeric(10,2) DEFAULT 0.00,
    id_restaurante numeric,
    id_prato numeric,
    pedido_item_id integer
);

CREATE TABLE public.pedido_confirmacao (
    id integer NOT NULL,
    pedido_id integer,
    dados_completos jsonb,
    data_confirmacao timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    hora_pedido time without time zone DEFAULT CURRENT_TIME,
    hora_entrega time without time zone,
    previsao_entrega time without time zone,
    telefone character varying(20),
    ultimo_pedido_data timestamp without time zone,
    frequencia_pedidos integer DEFAULT 1,
    restaurante_id integer,
    restaurante_nome character varying(100),
    restaurante_telefone character varying(20),
    restaurante_endereco text,
    tipo_entrega character varying(50),
    endereco_entrega text,
    distancia_entrega numeric(10,2),
    taxa_entrega numeric(10,2) DEFAULT 0,
    subtotal numeric(10,2),
    total numeric(10,2),
    forma_pagamento character varying(50),
    status_confirmacao character varying(50) DEFAULT 'confirmado',
    status_preparo character varying(50) DEFAULT 'pendente',
    status_entrega character varying(50),
    observacoes text,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE public.pedido_itens (
    id integer NOT NULL,
    pedido_id integer,
    produto_id integer,
    quantidade integer DEFAULT 1 NOT NULL,
    preco_unitario numeric(10,2) NOT NULL,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE public.pedido_itens_opcionais (
    id integer NOT NULL,
    opcional_id integer,
    pedido_item_id integer,
    preco_adicional numeric(10,2) DEFAULT 0,
    prato_id integer,
    nome character varying(100),
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE public.pedidos (
    id integer NOT NULL,
    cliente_telefone character varying(20),
    data_pedido timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    tipo_entrega character varying(20) NOT NULL,
    endereco_entrega text,
    status character varying(20) DEFAULT 'pendente',
    total numeric(10,2) NOT NULL,
    observacoes text
);

CREATE TABLE public.pratos (
    id integer NOT NULL,
    restaurante_id integer,
    nome character varying(255) NOT NULL,
    descricao text,
    preco numeric(10,2),
    imagem text,
    tempo_preparo numeric,
    disponivel boolean DEFAULT true,
    destaque boolean DEFAULT false,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    categoria text,
    preco_base numeric
);

CREATE TABLE public.precos_dinamicos (
    id integer NOT NULL,
    prato_id integer,
    dia_semana integer,
    preco numeric(10,2) NOT NULL,
    hora_inicio time without time zone,
    hora_fim time without time zone,
    ativo boolean DEFAULT true
);

CREATE TABLE public.produtos (
    id integer NOT NULL,
    nome character varying(255) NOT NULL,
    categoria character varying(255),
    preco numeric(10,2) NOT NULL,
    imagem text,
    synonyms text[],
    created_at timestamp without time zone DEFAULT now()
);

CREATE TABLE public.restaurantes (
    id integer NOT NULL,
    usuario_id integer,
    nome character varying(255),
    logo_url text,
    horario_abertura time without time zone,
    horario_fechamento time without time zone,
    dias_funcionamento text[],
    endereco text,
    latitude numeric(10,8),
    longitude numeric(11,8),
    permite_consumo_local boolean,
    permite_retirada boolean DEFAULT false,
    permite_entrega boolean DEFAULT false,
    taxa_entrega numeric(10,2),
    raio_entrega integer,
    tempo_medio_entrega integer,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    horarios_funcionamento jsonb
);

CREATE TABLE public.session (
    sid character varying NOT NULL,
    sess json NOT NULL,
    expire timestamp(6) without time zone NOT NULL
);

CREATE TABLE public.usuarios (
    id integer NOT NULL,
    username character varying(255) NOT NULL,
    password character varying(255) NOT NULL,
    tell text
);

-- Add primary keys and sequences
ALTER TABLE ONLY public.cardapio ADD CONSTRAINT cardapio_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.categorias ADD CONSTRAINT categorias_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.cliente ADD CONSTRAINT cliente_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.combos ADD CONSTRAINT combos_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.complementos ADD CONSTRAINT complementos_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.ingredientes ADD CONSTRAINT ingredientes_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.itens_combo ADD CONSTRAINT itens_combo_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.opcionais ADD CONSTRAINT opcionais_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.pedido_confirmacao ADD CONSTRAINT pedido_confirmacao_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.pedido_itens ADD CONSTRAINT pedido_itens_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.pedido_itens_opcionais ADD CONSTRAINT pedido_itens_opcionais_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.pedidos ADD CONSTRAINT pedidos_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.pratos ADD CONSTRAINT pratos_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.precos_dinamicos ADD CONSTRAINT precos_dinamicos_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.produtos ADD CONSTRAINT produtos_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.restaurantes ADD CONSTRAINT restaurantes_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.session ADD CONSTRAINT session_pkey PRIMARY KEY (sid);
ALTER TABLE ONLY public.usuarios ADD CONSTRAINT usuarios_pkey PRIMARY KEY (id);