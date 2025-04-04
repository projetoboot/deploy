--
-- PostgreSQL database dump
--

-- Dumped from database version 17.4
-- Dumped by pg_dump version 17.4

-- Started on 2025-03-31 03:48:21

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'BIG5';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

DROP DATABASE cardap;
--
-- TOC entry 5141 (class 1262 OID 16387)
-- Name: cardap; Type: DATABASE; Schema: -; Owner: postgres
--

CREATE DATABASE cardap WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'pt-BR';


ALTER DATABASE cardap OWNER TO postgres;

\connect cardap

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'BIG5';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 4 (class 2615 OID 2200)
-- Name: public; Type: SCHEMA; Schema: -; Owner: pg_database_owner
--

CREATE SCHEMA public;


ALTER SCHEMA public OWNER TO pg_database_owner;

--
-- TOC entry 5142 (class 0 OID 0)
-- Dependencies: 4
-- Name: SCHEMA public; Type: COMMENT; Schema: -; Owner: pg_database_owner
--

COMMENT ON SCHEMA public IS 'standard public schema';


--
-- TOC entry 255 (class 1255 OID 16388)
-- Name: update_updated_at_column(); Type: FUNCTION; Schema: public; Owner: postgres
--

CREATE FUNCTION public.update_updated_at_column() RETURNS trigger
    LANGUAGE plpgsql
    AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$;


ALTER FUNCTION public.update_updated_at_column() OWNER TO postgres;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 217 (class 1259 OID 16389)
-- Name: cardapio; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.cardapio (
    id integer NOT NULL,
    nome character varying(255) NOT NULL,
    categoria character varying(255) NOT NULL,
    preco numeric(10,2) NOT NULL,
    imagem character varying(255),
    synonyms text[],
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.cardapio OWNER TO postgres;

--
-- TOC entry 218 (class 1259 OID 16395)
-- Name: cardapio_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.cardapio_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.cardapio_id_seq OWNER TO postgres;

--
-- TOC entry 5143 (class 0 OID 0)
-- Dependencies: 218
-- Name: cardapio_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.cardapio_id_seq OWNED BY public.cardapio.id;


--
-- TOC entry 219 (class 1259 OID 16396)
-- Name: categorias; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.categorias (
    id integer NOT NULL,
    restaurante_id integer,
    nome character varying(100) NOT NULL,
    descricao text,
    ordem integer DEFAULT 0
);


ALTER TABLE public.categorias OWNER TO postgres;

--
-- TOC entry 220 (class 1259 OID 16402)
-- Name: categorias_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.categorias_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.categorias_id_seq OWNER TO postgres;

--
-- TOC entry 5144 (class 0 OID 0)
-- Dependencies: 220
-- Name: categorias_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.categorias_id_seq OWNED BY public.categorias.id;


--
-- TOC entry 252 (class 1259 OID 33065)
-- Name: categorias_lista; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.categorias_lista (
    id integer NOT NULL,
    nome character varying(100) NOT NULL,
    icone character varying(255) NOT NULL,
    id_restaurante integer NOT NULL
);


ALTER TABLE public.categorias_lista OWNER TO postgres;

--
-- TOC entry 254 (class 1259 OID 33071)
-- Name: categorias_modal; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.categorias_modal (
    id integer NOT NULL,
    nome character varying(255) NOT NULL,
    icone character varying(255),
    id_restaurante integer NOT NULL
);


ALTER TABLE public.categorias_modal OWNER TO postgres;

--
-- TOC entry 253 (class 1259 OID 33070)
-- Name: categorias_modal_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.categorias_modal_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.categorias_modal_id_seq OWNER TO postgres;

--
-- TOC entry 5145 (class 0 OID 0)
-- Dependencies: 253
-- Name: categorias_modal_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.categorias_modal_id_seq OWNED BY public.categorias_modal.id;


--
-- TOC entry 221 (class 1259 OID 16403)
-- Name: cliente; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.cliente (
    id integer NOT NULL,
    telefone character varying(15) NOT NULL,
    data_primeiro_acesso timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    data_ultimo_acesso timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.cliente OWNER TO postgres;

--
-- TOC entry 222 (class 1259 OID 16408)
-- Name: cliente_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.cliente_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.cliente_id_seq OWNER TO postgres;

--
-- TOC entry 5146 (class 0 OID 0)
-- Dependencies: 222
-- Name: cliente_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.cliente_id_seq OWNED BY public.cliente.id;


--
-- TOC entry 223 (class 1259 OID 16409)
-- Name: combos; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.combos (
    id integer NOT NULL,
    restaurante_id integer,
    nome character varying(255) NOT NULL,
    descricao text,
    preco numeric(10,2) NOT NULL,
    ativo boolean DEFAULT true
);


ALTER TABLE public.combos OWNER TO postgres;

--
-- TOC entry 224 (class 1259 OID 16415)
-- Name: combos_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.combos_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.combos_id_seq OWNER TO postgres;

--
-- TOC entry 5147 (class 0 OID 0)
-- Dependencies: 224
-- Name: combos_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.combos_id_seq OWNED BY public.combos.id;


--
-- TOC entry 225 (class 1259 OID 16416)
-- Name: complementos; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.complementos (
    id integer NOT NULL,
    prato_id integer,
    nome character varying(100) NOT NULL,
    preco_adicional numeric(10,2) DEFAULT 0.00,
    maximo_escolhas integer DEFAULT 1
);


ALTER TABLE public.complementos OWNER TO postgres;

--
-- TOC entry 226 (class 1259 OID 16421)
-- Name: complementos_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.complementos_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.complementos_id_seq OWNER TO postgres;

--
-- TOC entry 5148 (class 0 OID 0)
-- Dependencies: 226
-- Name: complementos_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.complementos_id_seq OWNED BY public.complementos.id;


--
-- TOC entry 227 (class 1259 OID 16422)
-- Name: ingredientes; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.ingredientes (
    id integer NOT NULL,
    prato_id integer,
    nome character varying(100) NOT NULL,
    removivel boolean DEFAULT false
);


ALTER TABLE public.ingredientes OWNER TO postgres;

--
-- TOC entry 228 (class 1259 OID 16426)
-- Name: ingredientes_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.ingredientes_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.ingredientes_id_seq OWNER TO postgres;

--
-- TOC entry 5149 (class 0 OID 0)
-- Dependencies: 228
-- Name: ingredientes_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.ingredientes_id_seq OWNED BY public.ingredientes.id;


--
-- TOC entry 229 (class 1259 OID 16427)
-- Name: itens_combo; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.itens_combo (
    id integer NOT NULL,
    combo_id integer,
    prato_id integer,
    quantidade integer DEFAULT 1
);


ALTER TABLE public.itens_combo OWNER TO postgres;

--
-- TOC entry 230 (class 1259 OID 16431)
-- Name: itens_combo_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.itens_combo_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.itens_combo_id_seq OWNER TO postgres;

--
-- TOC entry 5150 (class 0 OID 0)
-- Dependencies: 230
-- Name: itens_combo_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.itens_combo_id_seq OWNED BY public.itens_combo.id;


--
-- TOC entry 231 (class 1259 OID 16432)
-- Name: opcionais; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.opcionais (
    id integer NOT NULL,
    nome character varying(255) NOT NULL,
    preco_adicional numeric(10,2) DEFAULT 0.00,
    id_restaurante numeric,
    id_prato numeric,
    pedido_item_id integer
);


ALTER TABLE public.opcionais OWNER TO postgres;

--
-- TOC entry 232 (class 1259 OID 16438)
-- Name: opcionais_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.opcionais_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.opcionais_id_seq OWNER TO postgres;

--
-- TOC entry 5151 (class 0 OID 0)
-- Dependencies: 232
-- Name: opcionais_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.opcionais_id_seq OWNED BY public.opcionais.id;


--
-- TOC entry 233 (class 1259 OID 16439)
-- Name: pedido_confirmacao; Type: TABLE; Schema: public; Owner: postgres
--

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
    status_confirmacao character varying(50) DEFAULT 'confirmado'::character varying,
    status_preparo character varying(50) DEFAULT 'pendente'::character varying,
    status_entrega character varying(50),
    observacoes text,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.pedido_confirmacao OWNER TO postgres;

--
-- TOC entry 234 (class 1259 OID 16452)
-- Name: pedido_confirmacao_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.pedido_confirmacao_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.pedido_confirmacao_id_seq OWNER TO postgres;

--
-- TOC entry 5152 (class 0 OID 0)
-- Dependencies: 234
-- Name: pedido_confirmacao_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.pedido_confirmacao_id_seq OWNED BY public.pedido_confirmacao.id;


--
-- TOC entry 235 (class 1259 OID 16453)
-- Name: pedido_itens; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.pedido_itens (
    id integer NOT NULL,
    pedido_id integer,
    produto_id integer,
    quantidade integer DEFAULT 1 NOT NULL,
    preco_unitario numeric(10,2) NOT NULL,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.pedido_itens OWNER TO postgres;

--
-- TOC entry 236 (class 1259 OID 16458)
-- Name: pedido_itens_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.pedido_itens_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.pedido_itens_id_seq OWNER TO postgres;

--
-- TOC entry 5153 (class 0 OID 0)
-- Dependencies: 236
-- Name: pedido_itens_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.pedido_itens_id_seq OWNED BY public.pedido_itens.id;


--
-- TOC entry 237 (class 1259 OID 16459)
-- Name: pedido_itens_opcionais; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.pedido_itens_opcionais (
    id integer NOT NULL,
    opcional_id integer,
    pedido_item_id integer,
    preco_adicional numeric(10,2) DEFAULT 0,
    prato_id integer,
    nome character varying(100),
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.pedido_itens_opcionais OWNER TO postgres;

--
-- TOC entry 238 (class 1259 OID 16464)
-- Name: pedido_itens_opcionais_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.pedido_itens_opcionais_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.pedido_itens_opcionais_id_seq OWNER TO postgres;

--
-- TOC entry 5154 (class 0 OID 0)
-- Dependencies: 238
-- Name: pedido_itens_opcionais_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.pedido_itens_opcionais_id_seq OWNED BY public.pedido_itens_opcionais.id;


--
-- TOC entry 239 (class 1259 OID 16465)
-- Name: pedidos; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.pedidos (
    id integer NOT NULL,
    cliente_telefone character varying(20),
    data_pedido timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    tipo_entrega character varying(20) NOT NULL,
    endereco_entrega text,
    status character varying(20) DEFAULT 'pendente'::character varying,
    total numeric(10,2) NOT NULL,
    observacoes text
);


ALTER TABLE public.pedidos OWNER TO postgres;

--
-- TOC entry 240 (class 1259 OID 16472)
-- Name: pedidos_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.pedidos_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.pedidos_id_seq OWNER TO postgres;

--
-- TOC entry 5155 (class 0 OID 0)
-- Dependencies: 240
-- Name: pedidos_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.pedidos_id_seq OWNED BY public.pedidos.id;


--
-- TOC entry 241 (class 1259 OID 16473)
-- Name: pratos; Type: TABLE; Schema: public; Owner: postgres
--

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
    preco_base numeric,
    ordem integer,
    ordem_categoria integer DEFAULT 0
);


ALTER TABLE public.pratos OWNER TO postgres;

--
-- TOC entry 242 (class 1259 OID 16481)
-- Name: pratos_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.pratos_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.pratos_id_seq OWNER TO postgres;

--
-- TOC entry 5156 (class 0 OID 0)
-- Dependencies: 242
-- Name: pratos_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.pratos_id_seq OWNED BY public.pratos.id;


--
-- TOC entry 243 (class 1259 OID 16482)
-- Name: precos_dinamicos; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.precos_dinamicos (
    id integer NOT NULL,
    prato_id integer,
    dia_semana integer,
    preco numeric(10,2) NOT NULL,
    hora_inicio time without time zone,
    hora_fim time without time zone,
    ativo boolean DEFAULT true
);


ALTER TABLE public.precos_dinamicos OWNER TO postgres;

--
-- TOC entry 244 (class 1259 OID 16486)
-- Name: precos_dinamicos_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.precos_dinamicos_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.precos_dinamicos_id_seq OWNER TO postgres;

--
-- TOC entry 5157 (class 0 OID 0)
-- Dependencies: 244
-- Name: precos_dinamicos_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.precos_dinamicos_id_seq OWNED BY public.precos_dinamicos.id;


--
-- TOC entry 245 (class 1259 OID 16487)
-- Name: produtos; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.produtos (
    id integer NOT NULL,
    nome character varying(255) NOT NULL,
    categoria character varying(255),
    preco numeric(10,2) NOT NULL,
    imagem text,
    synonyms text[],
    created_at timestamp without time zone DEFAULT now()
);


ALTER TABLE public.produtos OWNER TO postgres;

--
-- TOC entry 246 (class 1259 OID 16493)
-- Name: produtos_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.produtos_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.produtos_id_seq OWNER TO postgres;

--
-- TOC entry 5158 (class 0 OID 0)
-- Dependencies: 246
-- Name: produtos_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.produtos_id_seq OWNED BY public.produtos.id;


--
-- TOC entry 247 (class 1259 OID 16494)
-- Name: restaurantes; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.restaurantes (
    id integer NOT NULL,
    usuario_id integer,
    nome character varying(255),
    logo_url text,
    horario_abertura time without time zone,
    horario_fechamento time without time zone,
    dias_funcionamento text[],
    endereco text,
    latitude numeric(10,8) DEFAULT NULL::numeric,
    longitude numeric(11,8) DEFAULT NULL::numeric,
    permite_consumo_local boolean,
    permite_retirada boolean DEFAULT false,
    permite_entrega boolean DEFAULT false,
    taxa_entrega numeric(10,2),
    raio_entrega integer,
    tempo_medio_entrega integer,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    horarios_funcionamento jsonb,
    nome_usuario character varying(255)
);


ALTER TABLE public.restaurantes OWNER TO postgres;

--
-- TOC entry 248 (class 1259 OID 16504)
-- Name: restaurantes_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.restaurantes_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.restaurantes_id_seq OWNER TO postgres;

--
-- TOC entry 5159 (class 0 OID 0)
-- Dependencies: 248
-- Name: restaurantes_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.restaurantes_id_seq OWNED BY public.restaurantes.id;


--
-- TOC entry 249 (class 1259 OID 16505)
-- Name: session; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.session (
    sid character varying NOT NULL,
    sess json NOT NULL,
    expire timestamp(6) without time zone NOT NULL
);


ALTER TABLE public.session OWNER TO postgres;

--
-- TOC entry 250 (class 1259 OID 16510)
-- Name: usuarios; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.usuarios (
    id integer NOT NULL,
    username character varying(255) NOT NULL,
    password character varying(255) NOT NULL,
    tell text,
    senha2 character varying(255)
);


ALTER TABLE public.usuarios OWNER TO postgres;

--
-- TOC entry 251 (class 1259 OID 16515)
-- Name: usuarios_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.usuarios_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.usuarios_id_seq OWNER TO postgres;

--
-- TOC entry 5160 (class 0 OID 0)
-- Dependencies: 251
-- Name: usuarios_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.usuarios_id_seq OWNED BY public.usuarios.id;


--
-- TOC entry 4836 (class 2604 OID 16516)
-- Name: cardapio id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cardapio ALTER COLUMN id SET DEFAULT nextval('public.cardapio_id_seq'::regclass);


--
-- TOC entry 4838 (class 2604 OID 16517)
-- Name: categorias id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.categorias ALTER COLUMN id SET DEFAULT nextval('public.categorias_id_seq'::regclass);


--
-- TOC entry 4888 (class 2604 OID 33074)
-- Name: categorias_modal id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.categorias_modal ALTER COLUMN id SET DEFAULT nextval('public.categorias_modal_id_seq'::regclass);


--
-- TOC entry 4840 (class 2604 OID 16518)
-- Name: cliente id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cliente ALTER COLUMN id SET DEFAULT nextval('public.cliente_id_seq'::regclass);


--
-- TOC entry 4843 (class 2604 OID 16519)
-- Name: combos id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.combos ALTER COLUMN id SET DEFAULT nextval('public.combos_id_seq'::regclass);


--
-- TOC entry 4845 (class 2604 OID 16520)
-- Name: complementos id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.complementos ALTER COLUMN id SET DEFAULT nextval('public.complementos_id_seq'::regclass);


--
-- TOC entry 4848 (class 2604 OID 16521)
-- Name: ingredientes id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.ingredientes ALTER COLUMN id SET DEFAULT nextval('public.ingredientes_id_seq'::regclass);


--
-- TOC entry 4850 (class 2604 OID 16522)
-- Name: itens_combo id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.itens_combo ALTER COLUMN id SET DEFAULT nextval('public.itens_combo_id_seq'::regclass);


--
-- TOC entry 4852 (class 2604 OID 16523)
-- Name: opcionais id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.opcionais ALTER COLUMN id SET DEFAULT nextval('public.opcionais_id_seq'::regclass);


--
-- TOC entry 4854 (class 2604 OID 16524)
-- Name: pedido_confirmacao id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pedido_confirmacao ALTER COLUMN id SET DEFAULT nextval('public.pedido_confirmacao_id_seq'::regclass);


--
-- TOC entry 4863 (class 2604 OID 16525)
-- Name: pedido_itens id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pedido_itens ALTER COLUMN id SET DEFAULT nextval('public.pedido_itens_id_seq'::regclass);


--
-- TOC entry 4866 (class 2604 OID 16526)
-- Name: pedido_itens_opcionais id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pedido_itens_opcionais ALTER COLUMN id SET DEFAULT nextval('public.pedido_itens_opcionais_id_seq'::regclass);


--
-- TOC entry 4869 (class 2604 OID 16527)
-- Name: pedidos id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pedidos ALTER COLUMN id SET DEFAULT nextval('public.pedidos_id_seq'::regclass);


--
-- TOC entry 4872 (class 2604 OID 16528)
-- Name: pratos id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pratos ALTER COLUMN id SET DEFAULT nextval('public.pratos_id_seq'::regclass);


--
-- TOC entry 4877 (class 2604 OID 16529)
-- Name: precos_dinamicos id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.precos_dinamicos ALTER COLUMN id SET DEFAULT nextval('public.precos_dinamicos_id_seq'::regclass);


--
-- TOC entry 4879 (class 2604 OID 16530)
-- Name: produtos id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.produtos ALTER COLUMN id SET DEFAULT nextval('public.produtos_id_seq'::regclass);


--
-- TOC entry 4881 (class 2604 OID 16531)
-- Name: restaurantes id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.restaurantes ALTER COLUMN id SET DEFAULT nextval('public.restaurantes_id_seq'::regclass);


--
-- TOC entry 4887 (class 2604 OID 16532)
-- Name: usuarios id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.usuarios ALTER COLUMN id SET DEFAULT nextval('public.usuarios_id_seq'::regclass);


--
-- TOC entry 5098 (class 0 OID 16389)
-- Dependencies: 217
-- Data for Name: cardapio; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.cardapio (id, nome, categoria, preco, imagem, synonyms, created_at) FROM stdin;
1	Cachorro Quente	Lanches	12.50	cachorro_quente.png	{"hot dog",dog}	2025-03-16 15:13:24.831397
\.


