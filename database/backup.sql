PGDMP  :    4                }            cardap    17.4    17.4 �               0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                           false                       0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                           false                       0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                           false                       1262    16387    cardap    DATABASE     l   CREATE DATABASE cardap WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'pt-BR';
    DROP DATABASE cardap;
                     postgres    false                        2615    2200    public    SCHEMA        CREATE SCHEMA public;
    DROP SCHEMA public;
                     pg_database_owner    false                       0    0    SCHEMA public    COMMENT     6   COMMENT ON SCHEMA public IS 'standard public schema';
                        pg_database_owner    false    4            �            1255    16388    update_updated_at_column()    FUNCTION     �   CREATE FUNCTION public.update_updated_at_column() RETURNS trigger
    LANGUAGE plpgsql
    AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$;
 1   DROP FUNCTION public.update_updated_at_column();
       public               postgres    false    4            �            1259    16389    cardapio    TABLE     3  CREATE TABLE public.cardapio (
    id integer NOT NULL,
    nome character varying(255) NOT NULL,
    categoria character varying(255) NOT NULL,
    preco numeric(10,2) NOT NULL,
    imagem character varying(255),
    synonyms text[],
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);
    DROP TABLE public.cardapio;
       public         heap r       postgres    false    4            �            1259    16395    cardapio_id_seq    SEQUENCE     �   CREATE SEQUENCE public.cardapio_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public.cardapio_id_seq;
       public               postgres    false    4    217                       0    0    cardapio_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public.cardapio_id_seq OWNED BY public.cardapio.id;
          public               postgres    false    218            �            1259    16396 
   categorias    TABLE     �   CREATE TABLE public.categorias (
    id integer NOT NULL,
    restaurante_id integer,
    nome character varying(100) NOT NULL,
    descricao text,
    ordem integer DEFAULT 0
);
    DROP TABLE public.categorias;
       public         heap r       postgres    false    4            �            1259    16402    categorias_id_seq    SEQUENCE     �   CREATE SEQUENCE public.categorias_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public.categorias_id_seq;
       public               postgres    false    4    219                       0    0    categorias_id_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public.categorias_id_seq OWNED BY public.categorias.id;
          public               postgres    false    220            �            1259    33065    categorias_lista    TABLE     �   CREATE TABLE public.categorias_lista (
    id integer NOT NULL,
    nome character varying(100) NOT NULL,
    icone character varying(255) NOT NULL,
    id_restaurante integer NOT NULL
);
 $   DROP TABLE public.categorias_lista;
       public         heap r       postgres    false    4            �            1259    33071    categorias_modal    TABLE     �   CREATE TABLE public.categorias_modal (
    id integer NOT NULL,
    nome character varying(255) NOT NULL,
    icone character varying(255),
    id_restaurante integer NOT NULL
);
 $   DROP TABLE public.categorias_modal;
       public         heap r       postgres    false    4            �            1259    33070    categorias_modal_id_seq    SEQUENCE     �   CREATE SEQUENCE public.categorias_modal_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 .   DROP SEQUENCE public.categorias_modal_id_seq;
       public               postgres    false    4    254                       0    0    categorias_modal_id_seq    SEQUENCE OWNED BY     S   ALTER SEQUENCE public.categorias_modal_id_seq OWNED BY public.categorias_modal.id;
          public               postgres    false    253            �            1259    16403    cliente    TABLE       CREATE TABLE public.cliente (
    id integer NOT NULL,
    telefone character varying(15) NOT NULL,
    data_primeiro_acesso timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    data_ultimo_acesso timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);
    DROP TABLE public.cliente;
       public         heap r       postgres    false    4            �            1259    16408    cliente_id_seq    SEQUENCE     �   CREATE SEQUENCE public.cliente_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 %   DROP SEQUENCE public.cliente_id_seq;
       public               postgres    false    221    4                       0    0    cliente_id_seq    SEQUENCE OWNED BY     A   ALTER SEQUENCE public.cliente_id_seq OWNED BY public.cliente.id;
          public               postgres    false    222            �            1259    16409    combos    TABLE     �   CREATE TABLE public.combos (
    id integer NOT NULL,
    restaurante_id integer,
    nome character varying(255) NOT NULL,
    descricao text,
    preco numeric(10,2) NOT NULL,
    ativo boolean DEFAULT true
);
    DROP TABLE public.combos;
       public         heap r       postgres    false    4            �            1259    16415    combos_id_seq    SEQUENCE     �   CREATE SEQUENCE public.combos_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 $   DROP SEQUENCE public.combos_id_seq;
       public               postgres    false    223    4                       0    0    combos_id_seq    SEQUENCE OWNED BY     ?   ALTER SEQUENCE public.combos_id_seq OWNED BY public.combos.id;
          public               postgres    false    224            �            1259    16416    complementos    TABLE     �   CREATE TABLE public.complementos (
    id integer NOT NULL,
    prato_id integer,
    nome character varying(100) NOT NULL,
    preco_adicional numeric(10,2) DEFAULT 0.00,
    maximo_escolhas integer DEFAULT 1
);
     DROP TABLE public.complementos;
       public         heap r       postgres    false    4            �            1259    16421    complementos_id_seq    SEQUENCE     �   CREATE SEQUENCE public.complementos_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 *   DROP SEQUENCE public.complementos_id_seq;
       public               postgres    false    225    4                       0    0    complementos_id_seq    SEQUENCE OWNED BY     K   ALTER SEQUENCE public.complementos_id_seq OWNED BY public.complementos.id;
          public               postgres    false    226            �            1259    16422    ingredientes    TABLE     �   CREATE TABLE public.ingredientes (
    id integer NOT NULL,
    prato_id integer,
    nome character varying(100) NOT NULL,
    removivel boolean DEFAULT false
);
     DROP TABLE public.ingredientes;
       public         heap r       postgres    false    4            �            1259    16426    ingredientes_id_seq    SEQUENCE     �   CREATE SEQUENCE public.ingredientes_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 *   DROP SEQUENCE public.ingredientes_id_seq;
       public               postgres    false    4    227                       0    0    ingredientes_id_seq    SEQUENCE OWNED BY     K   ALTER SEQUENCE public.ingredientes_id_seq OWNED BY public.ingredientes.id;
          public               postgres    false    228            �            1259    16427    itens_combo    TABLE     �   CREATE TABLE public.itens_combo (
    id integer NOT NULL,
    combo_id integer,
    prato_id integer,
    quantidade integer DEFAULT 1
);
    DROP TABLE public.itens_combo;
       public         heap r       postgres    false    4            �            1259    16431    itens_combo_id_seq    SEQUENCE     �   CREATE SEQUENCE public.itens_combo_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 )   DROP SEQUENCE public.itens_combo_id_seq;
       public               postgres    false    4    229                       0    0    itens_combo_id_seq    SEQUENCE OWNED BY     I   ALTER SEQUENCE public.itens_combo_id_seq OWNED BY public.itens_combo.id;
          public               postgres    false    230            �            1259    16432 	   opcionais    TABLE     �   CREATE TABLE public.opcionais (
    id integer NOT NULL,
    nome character varying(255) NOT NULL,
    preco_adicional numeric(10,2) DEFAULT 0.00,
    id_restaurante numeric,
    id_prato numeric,
    pedido_item_id integer
);
    DROP TABLE public.opcionais;
       public         heap r       postgres    false    4            �            1259    16438    opcionais_id_seq    SEQUENCE     �   CREATE SEQUENCE public.opcionais_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 '   DROP SEQUENCE public.opcionais_id_seq;
       public               postgres    false    4    231                       0    0    opcionais_id_seq    SEQUENCE OWNED BY     E   ALTER SEQUENCE public.opcionais_id_seq OWNED BY public.opcionais.id;
          public               postgres    false    232            �            1259    16439    pedido_confirmacao    TABLE     �  CREATE TABLE public.pedido_confirmacao (
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
 &   DROP TABLE public.pedido_confirmacao;
       public         heap r       postgres    false    4            �            1259    16452    pedido_confirmacao_id_seq    SEQUENCE     �   CREATE SEQUENCE public.pedido_confirmacao_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 0   DROP SEQUENCE public.pedido_confirmacao_id_seq;
       public               postgres    false    233    4                        0    0    pedido_confirmacao_id_seq    SEQUENCE OWNED BY     W   ALTER SEQUENCE public.pedido_confirmacao_id_seq OWNED BY public.pedido_confirmacao.id;
          public               postgres    false    234            �            1259    16453    pedido_itens    TABLE     	  CREATE TABLE public.pedido_itens (
    id integer NOT NULL,
    pedido_id integer,
    produto_id integer,
    quantidade integer DEFAULT 1 NOT NULL,
    preco_unitario numeric(10,2) NOT NULL,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);
     DROP TABLE public.pedido_itens;
       public         heap r       postgres    false    4            �            1259    16458    pedido_itens_id_seq    SEQUENCE     �   CREATE SEQUENCE public.pedido_itens_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 *   DROP SEQUENCE public.pedido_itens_id_seq;
       public               postgres    false    4    235            !           0    0    pedido_itens_id_seq    SEQUENCE OWNED BY     K   ALTER SEQUENCE public.pedido_itens_id_seq OWNED BY public.pedido_itens.id;
          public               postgres    false    236            �            1259    16459    pedido_itens_opcionais    TABLE     '  CREATE TABLE public.pedido_itens_opcionais (
    id integer NOT NULL,
    opcional_id integer,
    pedido_item_id integer,
    preco_adicional numeric(10,2) DEFAULT 0,
    prato_id integer,
    nome character varying(100),
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);
 *   DROP TABLE public.pedido_itens_opcionais;
       public         heap r       postgres    false    4            �            1259    16464    pedido_itens_opcionais_id_seq    SEQUENCE     �   CREATE SEQUENCE public.pedido_itens_opcionais_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 4   DROP SEQUENCE public.pedido_itens_opcionais_id_seq;
       public               postgres    false    237    4            "           0    0    pedido_itens_opcionais_id_seq    SEQUENCE OWNED BY     _   ALTER SEQUENCE public.pedido_itens_opcionais_id_seq OWNED BY public.pedido_itens_opcionais.id;
          public               postgres    false    238            �            1259    16465    pedidos    TABLE     x  CREATE TABLE public.pedidos (
    id integer NOT NULL,
    cliente_telefone character varying(20),
    data_pedido timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    tipo_entrega character varying(20) NOT NULL,
    endereco_entrega text,
    status character varying(20) DEFAULT 'pendente'::character varying,
    total numeric(10,2) NOT NULL,
    observacoes text
);
    DROP TABLE public.pedidos;
       public         heap r       postgres    false    4            �            1259    16472    pedidos_id_seq    SEQUENCE     �   CREATE SEQUENCE public.pedidos_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 %   DROP SEQUENCE public.pedidos_id_seq;
       public               postgres    false    239    4            #           0    0    pedidos_id_seq    SEQUENCE OWNED BY     A   ALTER SEQUENCE public.pedidos_id_seq OWNED BY public.pedidos.id;
          public               postgres    false    240            �            1259    16473    pratos    TABLE     �  CREATE TABLE public.pratos (
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
    DROP TABLE public.pratos;
       public         heap r       postgres    false    4            �            1259    16481    pratos_id_seq    SEQUENCE     �   CREATE SEQUENCE public.pratos_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 $   DROP SEQUENCE public.pratos_id_seq;
       public               postgres    false    4    241            $           0    0    pratos_id_seq    SEQUENCE OWNED BY     ?   ALTER SEQUENCE public.pratos_id_seq OWNED BY public.pratos.id;
          public               postgres    false    242            �            1259    16482    precos_dinamicos    TABLE     �   CREATE TABLE public.precos_dinamicos (
    id integer NOT NULL,
    prato_id integer,
    dia_semana integer,
    preco numeric(10,2) NOT NULL,
    hora_inicio time without time zone,
    hora_fim time without time zone,
    ativo boolean DEFAULT true
);
 $   DROP TABLE public.precos_dinamicos;
       public         heap r       postgres    false    4            �            1259    16486    precos_dinamicos_id_seq    SEQUENCE     �   CREATE SEQUENCE public.precos_dinamicos_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 .   DROP SEQUENCE public.precos_dinamicos_id_seq;
       public               postgres    false    243    4            %           0    0    precos_dinamicos_id_seq    SEQUENCE OWNED BY     S   ALTER SEQUENCE public.precos_dinamicos_id_seq OWNED BY public.precos_dinamicos.id;
          public               postgres    false    244            �            1259    16487    produtos    TABLE       CREATE TABLE public.produtos (
    id integer NOT NULL,
    nome character varying(255) NOT NULL,
    categoria character varying(255),
    preco numeric(10,2) NOT NULL,
    imagem text,
    synonyms text[],
    created_at timestamp without time zone DEFAULT now()
);
    DROP TABLE public.produtos;
       public         heap r       postgres    false    4            �            1259    16493    produtos_id_seq    SEQUENCE     �   CREATE SEQUENCE public.produtos_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public.produtos_id_seq;
       public               postgres    false    245    4            &           0    0    produtos_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public.produtos_id_seq OWNED BY public.produtos.id;
          public               postgres    false    246            �            1259    16494    restaurantes    TABLE     �  CREATE TABLE public.restaurantes (
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
     DROP TABLE public.restaurantes;
       public         heap r       postgres    false    4            �            1259    16504    restaurantes_id_seq    SEQUENCE     �   CREATE SEQUENCE public.restaurantes_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 *   DROP SEQUENCE public.restaurantes_id_seq;
       public               postgres    false    4    247            '           0    0    restaurantes_id_seq    SEQUENCE OWNED BY     K   ALTER SEQUENCE public.restaurantes_id_seq OWNED BY public.restaurantes.id;
          public               postgres    false    248            �            1259    16505    session    TABLE     �   CREATE TABLE public.session (
    sid character varying NOT NULL,
    sess json NOT NULL,
    expire timestamp(6) without time zone NOT NULL
);
    DROP TABLE public.session;
       public         heap r       postgres    false    4            �            1259    16510    usuarios    TABLE     �   CREATE TABLE public.usuarios (
    id integer NOT NULL,
    username character varying(255) NOT NULL,
    password character varying(255) NOT NULL,
    tell text,
    senha2 character varying(255)
);
    DROP TABLE public.usuarios;
       public         heap r       postgres    false    4            �            1259    16515    usuarios_id_seq    SEQUENCE     �   CREATE SEQUENCE public.usuarios_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public.usuarios_id_seq;
       public               postgres    false    4    250            (           0    0    usuarios_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public.usuarios_id_seq OWNED BY public.usuarios.id;
          public               postgres    false    251            �           2604    16516    cardapio id    DEFAULT     j   ALTER TABLE ONLY public.cardapio ALTER COLUMN id SET DEFAULT nextval('public.cardapio_id_seq'::regclass);
 :   ALTER TABLE public.cardapio ALTER COLUMN id DROP DEFAULT;
       public               postgres    false    218    217            �           2604    16517    categorias id    DEFAULT     n   ALTER TABLE ONLY public.categorias ALTER COLUMN id SET DEFAULT nextval('public.categorias_id_seq'::regclass);
 <   ALTER TABLE public.categorias ALTER COLUMN id DROP DEFAULT;
       public               postgres    false    220    219                       2604    33074    categorias_modal id    DEFAULT     z   ALTER TABLE ONLY public.categorias_modal ALTER COLUMN id SET DEFAULT nextval('public.categorias_modal_id_seq'::regclass);
 B   ALTER TABLE public.categorias_modal ALTER COLUMN id DROP DEFAULT;
       public               postgres    false    254    253    254            �           2604    16518 
   cliente id    DEFAULT     h   ALTER TABLE ONLY public.cliente ALTER COLUMN id SET DEFAULT nextval('public.cliente_id_seq'::regclass);
 9   ALTER TABLE public.cliente ALTER COLUMN id DROP DEFAULT;
       public               postgres    false    222    221            �           2604    16519 	   combos id    DEFAULT     f   ALTER TABLE ONLY public.combos ALTER COLUMN id SET DEFAULT nextval('public.combos_id_seq'::regclass);
 8   ALTER TABLE public.combos ALTER COLUMN id DROP DEFAULT;
       public               postgres    false    224    223            �           2604    16520    complementos id    DEFAULT     r   ALTER TABLE ONLY public.complementos ALTER COLUMN id SET DEFAULT nextval('public.complementos_id_seq'::regclass);
 >   ALTER TABLE public.complementos ALTER COLUMN id DROP DEFAULT;
       public               postgres    false    226    225            �           2604    16521    ingredientes id    DEFAULT     r   ALTER TABLE ONLY public.ingredientes ALTER COLUMN id SET DEFAULT nextval('public.ingredientes_id_seq'::regclass);
 >   ALTER TABLE public.ingredientes ALTER COLUMN id DROP DEFAULT;
       public               postgres    false    228    227            �           2604    16522    itens_combo id    DEFAULT     p   ALTER TABLE ONLY public.itens_combo ALTER COLUMN id SET DEFAULT nextval('public.itens_combo_id_seq'::regclass);
 =   ALTER TABLE public.itens_combo ALTER COLUMN id DROP DEFAULT;
       public               postgres    false    230    229            �           2604    16523    opcionais id    DEFAULT     l   ALTER TABLE ONLY public.opcionais ALTER COLUMN id SET DEFAULT nextval('public.opcionais_id_seq'::regclass);
 ;   ALTER TABLE public.opcionais ALTER COLUMN id DROP DEFAULT;
       public               postgres    false    232    231            �           2604    16524    pedido_confirmacao id    DEFAULT     ~   ALTER TABLE ONLY public.pedido_confirmacao ALTER COLUMN id SET DEFAULT nextval('public.pedido_confirmacao_id_seq'::regclass);
 D   ALTER TABLE public.pedido_confirmacao ALTER COLUMN id DROP DEFAULT;
       public               postgres    false    234    233            �           2604    16525    pedido_itens id    DEFAULT     r   ALTER TABLE ONLY public.pedido_itens ALTER COLUMN id SET DEFAULT nextval('public.pedido_itens_id_seq'::regclass);
 >   ALTER TABLE public.pedido_itens ALTER COLUMN id DROP DEFAULT;
       public               postgres    false    236    235                       2604    16526    pedido_itens_opcionais id    DEFAULT     �   ALTER TABLE ONLY public.pedido_itens_opcionais ALTER COLUMN id SET DEFAULT nextval('public.pedido_itens_opcionais_id_seq'::regclass);
 H   ALTER TABLE public.pedido_itens_opcionais ALTER COLUMN id DROP DEFAULT;
       public               postgres    false    238    237                       2604    16527 
   pedidos id    DEFAULT     h   ALTER TABLE ONLY public.pedidos ALTER COLUMN id SET DEFAULT nextval('public.pedidos_id_seq'::regclass);
 9   ALTER TABLE public.pedidos ALTER COLUMN id DROP DEFAULT;
       public               postgres    false    240    239                       2604    16528 	   pratos id    DEFAULT     f   ALTER TABLE ONLY public.pratos ALTER COLUMN id SET DEFAULT nextval('public.pratos_id_seq'::regclass);
 8   ALTER TABLE public.pratos ALTER COLUMN id DROP DEFAULT;
       public               postgres    false    242    241                       2604    16529    precos_dinamicos id    DEFAULT     z   ALTER TABLE ONLY public.precos_dinamicos ALTER COLUMN id SET DEFAULT nextval('public.precos_dinamicos_id_seq'::regclass);
 B   ALTER TABLE public.precos_dinamicos ALTER COLUMN id DROP DEFAULT;
       public               postgres    false    244    243                       2604    16530    produtos id    DEFAULT     j   ALTER TABLE ONLY public.produtos ALTER COLUMN id SET DEFAULT nextval('public.produtos_id_seq'::regclass);
 :   ALTER TABLE public.produtos ALTER COLUMN id DROP DEFAULT;
       public               postgres    false    246    245                       2604    16531    restaurantes id    DEFAULT     r   ALTER TABLE ONLY public.restaurantes ALTER COLUMN id SET DEFAULT nextval('public.restaurantes_id_seq'::regclass);
 >   ALTER TABLE public.restaurantes ALTER COLUMN id DROP DEFAULT;
       public               postgres    false    248    247                       2604    16532    usuarios id    DEFAULT     j   ALTER TABLE ONLY public.usuarios ALTER COLUMN id SET DEFAULT nextval('public.usuarios_id_seq'::regclass);
 :   ALTER TABLE public.usuarios ALTER COLUMN id DROP DEFAULT;
       public               postgres    false    251    250            �          0    16389    cardapio 
   TABLE DATA           \   COPY public.cardapio (id, nome, categoria, preco, imagem, synonyms, created_at) FROM stdin;
    public               postgres    false    217   ��       �          0    16396 
   categorias 
   TABLE DATA           P   COPY public.categorias (id, restaurante_id, nome, descricao, ordem) FROM stdin;
    public               postgres    false    219   ��                 0    33065    categorias_lista 
   TABLE DATA           K   COPY public.categorias_lista (id, nome, icone, id_restaurante) FROM stdin;
    public               postgres    false    252   ��                 0    33071    categorias_modal 
   TABLE DATA           K   COPY public.categorias_modal (id, nome, icone, id_restaurante) FROM stdin;
    public               postgres    false    254   ��       �          0    16403    cliente 
   TABLE DATA           Y   COPY public.cliente (id, telefone, data_primeiro_acesso, data_ultimo_acesso) FROM stdin;
    public               postgres    false    221   5�       �          0    16409    combos 
   TABLE DATA           S   COPY public.combos (id, restaurante_id, nome, descricao, preco, ativo) FROM stdin;
    public               postgres    false    223   p�       �          0    16416    complementos 
   TABLE DATA           \   COPY public.complementos (id, prato_id, nome, preco_adicional, maximo_escolhas) FROM stdin;
    public               postgres    false    225   ��       �          0    16422    ingredientes 
   TABLE DATA           E   COPY public.ingredientes (id, prato_id, nome, removivel) FROM stdin;
    public               postgres    false    227   ��       �          0    16427    itens_combo 
   TABLE DATA           I   COPY public.itens_combo (id, combo_id, prato_id, quantidade) FROM stdin;
    public               postgres    false    229   0�       �          0    16432 	   opcionais 
   TABLE DATA           h   COPY public.opcionais (id, nome, preco_adicional, id_restaurante, id_prato, pedido_item_id) FROM stdin;
    public               postgres    false    231   M�       �          0    16439    pedido_confirmacao 
   TABLE DATA           �  COPY public.pedido_confirmacao (id, pedido_id, dados_completos, data_confirmacao, hora_pedido, hora_entrega, previsao_entrega, telefone, ultimo_pedido_data, frequencia_pedidos, restaurante_id, restaurante_nome, restaurante_telefone, restaurante_endereco, tipo_entrega, endereco_entrega, distancia_entrega, taxa_entrega, subtotal, total, forma_pagamento, status_confirmacao, status_preparo, status_entrega, observacoes, created_at, updated_at) FROM stdin;
    public               postgres    false    233   ��       �          0    16453    pedido_itens 
   TABLE DATA           i   COPY public.pedido_itens (id, pedido_id, produto_id, quantidade, preco_unitario, created_at) FROM stdin;
    public               postgres    false    235   ��       �          0    16459    pedido_itens_opcionais 
   TABLE DATA           ~   COPY public.pedido_itens_opcionais (id, opcional_id, pedido_item_id, preco_adicional, prato_id, nome, created_at) FROM stdin;
    public               postgres    false    237   ��                  0    16465    pedidos 
   TABLE DATA           �   COPY public.pedidos (id, cliente_telefone, data_pedido, tipo_entrega, endereco_entrega, status, total, observacoes) FROM stdin;
    public               postgres    false    239   
�                 0    16473    pratos 
   TABLE DATA           �   COPY public.pratos (id, restaurante_id, nome, descricao, preco, imagem, tempo_preparo, disponivel, destaque, created_at, categoria, preco_base, ordem, ordem_categoria) FROM stdin;
    public               postgres    false    241   q�                 0    16482    precos_dinamicos 
   TABLE DATA           i   COPY public.precos_dinamicos (id, prato_id, dia_semana, preco, hora_inicio, hora_fim, ativo) FROM stdin;
    public               postgres    false    243   Y�                 0    16487    produtos 
   TABLE DATA           \   COPY public.produtos (id, nome, categoria, preco, imagem, synonyms, created_at) FROM stdin;
    public               postgres    false    245   v�                 0    16494    restaurantes 
   TABLE DATA           <  COPY public.restaurantes (id, usuario_id, nome, logo_url, horario_abertura, horario_fechamento, dias_funcionamento, endereco, latitude, longitude, permite_consumo_local, permite_retirada, permite_entrega, taxa_entrega, raio_entrega, tempo_medio_entrega, created_at, horarios_funcionamento, nome_usuario) FROM stdin;
    public               postgres    false    247   :�       
          0    16505    session 
   TABLE DATA           4   COPY public.session (sid, sess, expire) FROM stdin;
    public               postgres    false    249   ?�                 0    16510    usuarios 
   TABLE DATA           H   COPY public.usuarios (id, username, password, tell, senha2) FROM stdin;
    public               postgres    false    250   @      )           0    0    cardapio_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.cardapio_id_seq', 5, true);
          public               postgres    false    218            *           0    0    categorias_id_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public.categorias_id_seq', 39, true);
          public               postgres    false    220            +           0    0    categorias_modal_id_seq    SEQUENCE SET     E   SELECT pg_catalog.setval('public.categorias_modal_id_seq', 8, true);
          public               postgres    false    253            ,           0    0    cliente_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public.cliente_id_seq', 117, true);
          public               postgres    false    222            -           0    0    combos_id_seq    SEQUENCE SET     <   SELECT pg_catalog.setval('public.combos_id_seq', 1, false);
          public               postgres    false    224            .           0    0    complementos_id_seq    SEQUENCE SET     A   SELECT pg_catalog.setval('public.complementos_id_seq', 5, true);
          public               postgres    false    226            /           0    0    ingredientes_id_seq    SEQUENCE SET     B   SELECT pg_catalog.setval('public.ingredientes_id_seq', 42, true);
          public               postgres    false    228            0           0    0    itens_combo_id_seq    SEQUENCE SET     A   SELECT pg_catalog.setval('public.itens_combo_id_seq', 1, false);
          public               postgres    false    230            1           0    0    opcionais_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public.opcionais_id_seq', 32, true);
          public               postgres    false    232            2           0    0    pedido_confirmacao_id_seq    SEQUENCE SET     I   SELECT pg_catalog.setval('public.pedido_confirmacao_id_seq', 147, true);
          public               postgres    false    234            3           0    0    pedido_itens_id_seq    SEQUENCE SET     C   SELECT pg_catalog.setval('public.pedido_itens_id_seq', 129, true);
          public               postgres    false    236            4           0    0    pedido_itens_opcionais_id_seq    SEQUENCE SET     L   SELECT pg_catalog.setval('public.pedido_itens_opcionais_id_seq', 61, true);
          public               postgres    false    238            5           0    0    pedidos_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public.pedidos_id_seq', 299, true);
          public               postgres    false    240            6           0    0    pratos_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.pratos_id_seq', 484, true);
          public               postgres    false    242            7           0    0    precos_dinamicos_id_seq    SEQUENCE SET     F   SELECT pg_catalog.setval('public.precos_dinamicos_id_seq', 1, false);
          public               postgres    false    244            8           0    0    produtos_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public.produtos_id_seq', 48, true);
          public               postgres    false    246            9           0    0    restaurantes_id_seq    SEQUENCE SET     B   SELECT pg_catalog.setval('public.restaurantes_id_seq', 21, true);
          public               postgres    false    248            :           0    0    usuarios_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public.usuarios_id_seq', 44, true);
          public               postgres    false    251                       2606    16534    cardapio cardapio_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.cardapio
    ADD CONSTRAINT cardapio_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.cardapio DROP CONSTRAINT cardapio_pkey;
       public                 postgres    false    217            E           2606    33069 &   categorias_lista categorias_lista_pkey 
   CONSTRAINT     d   ALTER TABLE ONLY public.categorias_lista
    ADD CONSTRAINT categorias_lista_pkey PRIMARY KEY (id);
 P   ALTER TABLE ONLY public.categorias_lista DROP CONSTRAINT categorias_lista_pkey;
       public                 postgres    false    252            G           2606    33078 &   categorias_modal categorias_modal_pkey 
   CONSTRAINT     d   ALTER TABLE ONLY public.categorias_modal
    ADD CONSTRAINT categorias_modal_pkey PRIMARY KEY (id);
 P   ALTER TABLE ONLY public.categorias_modal DROP CONSTRAINT categorias_modal_pkey;
       public                 postgres    false    254                       2606    16536    categorias categorias_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public.categorias
    ADD CONSTRAINT categorias_pkey PRIMARY KEY (id);
 D   ALTER TABLE ONLY public.categorias DROP CONSTRAINT categorias_pkey;
       public                 postgres    false    219                       2606    16538    cliente cliente_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public.cliente
    ADD CONSTRAINT cliente_pkey PRIMARY KEY (id);
 >   ALTER TABLE ONLY public.cliente DROP CONSTRAINT cliente_pkey;
       public                 postgres    false    221                        2606    16540    cliente cliente_telefone_key 
   CONSTRAINT     [   ALTER TABLE ONLY public.cliente
    ADD CONSTRAINT cliente_telefone_key UNIQUE (telefone);
 F   ALTER TABLE ONLY public.cliente DROP CONSTRAINT cliente_telefone_key;
       public                 postgres    false    221            "           2606    16542    combos combos_pkey 
   CONSTRAINT     P   ALTER TABLE ONLY public.combos
    ADD CONSTRAINT combos_pkey PRIMARY KEY (id);
 <   ALTER TABLE ONLY public.combos DROP CONSTRAINT combos_pkey;
       public                 postgres    false    223            $           2606    16544    complementos complementos_pkey 
   CONSTRAINT     \   ALTER TABLE ONLY public.complementos
    ADD CONSTRAINT complementos_pkey PRIMARY KEY (id);
 H   ALTER TABLE ONLY public.complementos DROP CONSTRAINT complementos_pkey;
       public                 postgres    false    225            '           2606    16546    ingredientes ingredientes_pkey 
   CONSTRAINT     \   ALTER TABLE ONLY public.ingredientes
    ADD CONSTRAINT ingredientes_pkey PRIMARY KEY (id);
 H   ALTER TABLE ONLY public.ingredientes DROP CONSTRAINT ingredientes_pkey;
       public                 postgres    false    227            )           2606    16548    itens_combo itens_combo_pkey 
   CONSTRAINT     Z   ALTER TABLE ONLY public.itens_combo
    ADD CONSTRAINT itens_combo_pkey PRIMARY KEY (id);
 F   ALTER TABLE ONLY public.itens_combo DROP CONSTRAINT itens_combo_pkey;
       public                 postgres    false    229            +           2606    16550    opcionais opcionais_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public.opcionais
    ADD CONSTRAINT opcionais_pkey PRIMARY KEY (id);
 B   ALTER TABLE ONLY public.opcionais DROP CONSTRAINT opcionais_pkey;
       public                 postgres    false    231            2           2606    16552 2   pedido_itens_opcionais pedido_itens_opcionais_pkey 
   CONSTRAINT     p   ALTER TABLE ONLY public.pedido_itens_opcionais
    ADD CONSTRAINT pedido_itens_opcionais_pkey PRIMARY KEY (id);
 \   ALTER TABLE ONLY public.pedido_itens_opcionais DROP CONSTRAINT pedido_itens_opcionais_pkey;
       public                 postgres    false    237            0           2606    16554    pedido_itens pedido_itens_pkey 
   CONSTRAINT     \   ALTER TABLE ONLY public.pedido_itens
    ADD CONSTRAINT pedido_itens_pkey PRIMARY KEY (id);
 H   ALTER TABLE ONLY public.pedido_itens DROP CONSTRAINT pedido_itens_pkey;
       public                 postgres    false    235            4           2606    16556    pedidos pedidos_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public.pedidos
    ADD CONSTRAINT pedidos_pkey PRIMARY KEY (id);
 >   ALTER TABLE ONLY public.pedidos DROP CONSTRAINT pedidos_pkey;
       public                 postgres    false    239            6           2606    16558    pratos pratos_pkey 
   CONSTRAINT     P   ALTER TABLE ONLY public.pratos
    ADD CONSTRAINT pratos_pkey PRIMARY KEY (id);
 <   ALTER TABLE ONLY public.pratos DROP CONSTRAINT pratos_pkey;
       public                 postgres    false    241            8           2606    16560 &   precos_dinamicos precos_dinamicos_pkey 
   CONSTRAINT     d   ALTER TABLE ONLY public.precos_dinamicos
    ADD CONSTRAINT precos_dinamicos_pkey PRIMARY KEY (id);
 P   ALTER TABLE ONLY public.precos_dinamicos DROP CONSTRAINT precos_dinamicos_pkey;
       public                 postgres    false    243            :           2606    16562    produtos produtos_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.produtos
    ADD CONSTRAINT produtos_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.produtos DROP CONSTRAINT produtos_pkey;
       public                 postgres    false    245            <           2606    16564    restaurantes restaurantes_pkey 
   CONSTRAINT     \   ALTER TABLE ONLY public.restaurantes
    ADD CONSTRAINT restaurantes_pkey PRIMARY KEY (id);
 H   ALTER TABLE ONLY public.restaurantes DROP CONSTRAINT restaurantes_pkey;
       public                 postgres    false    247            ?           2606    16566    session session_pkey 
   CONSTRAINT     S   ALTER TABLE ONLY public.session
    ADD CONSTRAINT session_pkey PRIMARY KEY (sid);
 >   ALTER TABLE ONLY public.session DROP CONSTRAINT session_pkey;
       public                 postgres    false    249            A           2606    16568    usuarios usuarios_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.usuarios
    ADD CONSTRAINT usuarios_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.usuarios DROP CONSTRAINT usuarios_pkey;
       public                 postgres    false    250            C           2606    16570    usuarios usuarios_username_key 
   CONSTRAINT     ]   ALTER TABLE ONLY public.usuarios
    ADD CONSTRAINT usuarios_username_key UNIQUE (username);
 H   ALTER TABLE ONLY public.usuarios DROP CONSTRAINT usuarios_username_key;
       public                 postgres    false    250            =           1259    16571    IDX_session_expire    INDEX     J   CREATE INDEX "IDX_session_expire" ON public.session USING btree (expire);
 (   DROP INDEX public."IDX_session_expire";
       public                 postgres    false    249            %           1259    16572    idx_complementos_prato    INDEX     S   CREATE INDEX idx_complementos_prato ON public.complementos USING btree (prato_id);
 *   DROP INDEX public.idx_complementos_prato;
       public                 postgres    false    225            ,           1259    16573    idx_pedido_confirmacao_data    INDEX     f   CREATE INDEX idx_pedido_confirmacao_data ON public.pedido_confirmacao USING btree (data_confirmacao);
 /   DROP INDEX public.idx_pedido_confirmacao_data;
       public                 postgres    false    233            -           1259    16574 "   idx_pedido_confirmacao_restaurante    INDEX     k   CREATE INDEX idx_pedido_confirmacao_restaurante ON public.pedido_confirmacao USING btree (restaurante_id);
 6   DROP INDEX public.idx_pedido_confirmacao_restaurante;
       public                 postgres    false    233            .           1259    16575    idx_pedido_confirmacao_telefone    INDEX     b   CREATE INDEX idx_pedido_confirmacao_telefone ON public.pedido_confirmacao USING btree (telefone);
 3   DROP INDEX public.idx_pedido_confirmacao_telefone;
       public                 postgres    false    233            X           2620    16576 7   pedido_confirmacao update_pedido_confirmacao_updated_at    TRIGGER     �   CREATE TRIGGER update_pedido_confirmacao_updated_at BEFORE UPDATE ON public.pedido_confirmacao FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
 P   DROP TRIGGER update_pedido_confirmacao_updated_at ON public.pedido_confirmacao;
       public               postgres    false    233    255            H           2606    16577 )   categorias categorias_restaurante_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.categorias
    ADD CONSTRAINT categorias_restaurante_id_fkey FOREIGN KEY (restaurante_id) REFERENCES public.restaurantes(id);
 S   ALTER TABLE ONLY public.categorias DROP CONSTRAINT categorias_restaurante_id_fkey;
       public               postgres    false    4924    247    219            I           2606    16582 !   combos combos_restaurante_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.combos
    ADD CONSTRAINT combos_restaurante_id_fkey FOREIGN KEY (restaurante_id) REFERENCES public.restaurantes(id);
 K   ALTER TABLE ONLY public.combos DROP CONSTRAINT combos_restaurante_id_fkey;
       public               postgres    false    223    4924    247            J           2606    16587 '   complementos complementos_prato_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.complementos
    ADD CONSTRAINT complementos_prato_id_fkey FOREIGN KEY (prato_id) REFERENCES public.pratos(id);
 Q   ALTER TABLE ONLY public.complementos DROP CONSTRAINT complementos_prato_id_fkey;
       public               postgres    false    4918    241    225            K           2606    16592 '   ingredientes ingredientes_prato_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.ingredientes
    ADD CONSTRAINT ingredientes_prato_id_fkey FOREIGN KEY (prato_id) REFERENCES public.pratos(id);
 Q   ALTER TABLE ONLY public.ingredientes DROP CONSTRAINT ingredientes_prato_id_fkey;
       public               postgres    false    4918    241    227            L           2606    16597 %   itens_combo itens_combo_combo_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.itens_combo
    ADD CONSTRAINT itens_combo_combo_id_fkey FOREIGN KEY (combo_id) REFERENCES public.combos(id);
 O   ALTER TABLE ONLY public.itens_combo DROP CONSTRAINT itens_combo_combo_id_fkey;
       public               postgres    false    223    229    4898            M           2606    16602 %   itens_combo itens_combo_prato_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.itens_combo
    ADD CONSTRAINT itens_combo_prato_id_fkey FOREIGN KEY (prato_id) REFERENCES public.pratos(id);
 O   ALTER TABLE ONLY public.itens_combo DROP CONSTRAINT itens_combo_prato_id_fkey;
       public               postgres    false    241    229    4918            N           2606    16607 4   pedido_confirmacao pedido_confirmacao_pedido_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.pedido_confirmacao
    ADD CONSTRAINT pedido_confirmacao_pedido_id_fkey FOREIGN KEY (pedido_id) REFERENCES public.pedidos(id);
 ^   ALTER TABLE ONLY public.pedido_confirmacao DROP CONSTRAINT pedido_confirmacao_pedido_id_fkey;
       public               postgres    false    239    4916    233            O           2606    16612 9   pedido_confirmacao pedido_confirmacao_restaurante_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.pedido_confirmacao
    ADD CONSTRAINT pedido_confirmacao_restaurante_id_fkey FOREIGN KEY (restaurante_id) REFERENCES public.restaurantes(id);
 c   ALTER TABLE ONLY public.pedido_confirmacao DROP CONSTRAINT pedido_confirmacao_restaurante_id_fkey;
       public               postgres    false    247    4924    233            R           2606    16617 A   pedido_itens_opcionais pedido_itens_opcionais_pedido_item_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.pedido_itens_opcionais
    ADD CONSTRAINT pedido_itens_opcionais_pedido_item_id_fkey FOREIGN KEY (pedido_item_id) REFERENCES public.pedido_itens(id) ON DELETE CASCADE;
 k   ALTER TABLE ONLY public.pedido_itens_opcionais DROP CONSTRAINT pedido_itens_opcionais_pedido_item_id_fkey;
       public               postgres    false    237    4912    235            S           2606    16622 ;   pedido_itens_opcionais pedido_itens_opcionais_prato_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.pedido_itens_opcionais
    ADD CONSTRAINT pedido_itens_opcionais_prato_id_fkey FOREIGN KEY (prato_id) REFERENCES public.pratos(id);
 e   ALTER TABLE ONLY public.pedido_itens_opcionais DROP CONSTRAINT pedido_itens_opcionais_prato_id_fkey;
       public               postgres    false    241    237    4918            P           2606    16627 (   pedido_itens pedido_itens_pedido_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.pedido_itens
    ADD CONSTRAINT pedido_itens_pedido_id_fkey FOREIGN KEY (pedido_id) REFERENCES public.pedidos(id);
 R   ALTER TABLE ONLY public.pedido_itens DROP CONSTRAINT pedido_itens_pedido_id_fkey;
       public               postgres    false    239    4916    235            Q           2606    16632 )   pedido_itens pedido_itens_produto_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.pedido_itens
    ADD CONSTRAINT pedido_itens_produto_id_fkey FOREIGN KEY (produto_id) REFERENCES public.pratos(id);
 S   ALTER TABLE ONLY public.pedido_itens DROP CONSTRAINT pedido_itens_produto_id_fkey;
       public               postgres    false    241    235    4918            T           2606    16637 %   pedidos pedidos_cliente_telefone_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.pedidos
    ADD CONSTRAINT pedidos_cliente_telefone_fkey FOREIGN KEY (cliente_telefone) REFERENCES public.cliente(telefone);
 O   ALTER TABLE ONLY public.pedidos DROP CONSTRAINT pedidos_cliente_telefone_fkey;
       public               postgres    false    4896    239    221            U           2606    16642 !   pratos pratos_restaurante_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.pratos
    ADD CONSTRAINT pratos_restaurante_id_fkey FOREIGN KEY (restaurante_id) REFERENCES public.restaurantes(id);
 K   ALTER TABLE ONLY public.pratos DROP CONSTRAINT pratos_restaurante_id_fkey;
       public               postgres    false    247    241    4924            V           2606    16647 /   precos_dinamicos precos_dinamicos_prato_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.precos_dinamicos
    ADD CONSTRAINT precos_dinamicos_prato_id_fkey FOREIGN KEY (prato_id) REFERENCES public.pratos(id);
 Y   ALTER TABLE ONLY public.precos_dinamicos DROP CONSTRAINT precos_dinamicos_prato_id_fkey;
       public               postgres    false    241    243    4918            W           2606    16652 )   restaurantes restaurantes_usuario_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.restaurantes
    ADD CONSTRAINT restaurantes_usuario_id_fkey FOREIGN KEY (usuario_id) REFERENCES public.usuarios(id);
 S   ALTER TABLE ONLY public.restaurantes DROP CONSTRAINT restaurantes_usuario_id_fkey;
       public               postgres    false    247    250    4929            �   *  x�}��N�0���SD�S�&�f����"U�HҦq�P�x1V^�-�S�Ο�ݏ�{4�u�Ə#u�
;S��X&�����@Y�U�9�����%��%T6z.ob��R�*e�Z��"R������U#�uƄ�:�� ��)!����]kx�Wׄg85}GES����]����-%ޖxՙ��hl\R���y�g�b�� �표�`CRQ�C�dzp�@{�6��5a�؂�lv1��9wT`k���b!���~nl��طKϕ�K.4�ӱM��#n�,i��_�����i�&e���EQ�cۙ�      �     x�eS=o�0��_�`����ؤڢi����D�-�蒔]d�O	:2]���x�?�*���G>�wV����@>.Od���}���ǉ�����Cg1�X�]��t�7n�I�t��Q�1��i�Tq�6;���:t��S�����t�b�[�E��̎Z�.~�p!���KB�Ē�[����{X�>�7�����eOL�$�m�*��f���l+��9?snH�1d�Ae����A�Bmh-r����i�8s����hZT��1���d徱�9��V�C����d�fmZC��ƣ��bw*s��]��@�<�O��������zq&sV�֖[�ȋ7VGJ�����T�l�e��ϸpf��q@""�[�����hj�ɜ��+.1�c~�V���}��'#��q%�e��8�pP���S��|�M��Qۖ.�H�X������	���Ukm��>`'��xn����Mb�r�L�ݖ��;}5<��ٓ_�UJ�]�`߯j��%�_z�SQ�`��4�T����Ħ�N�ԢNe11>��_4}�Y��d�:�E�խ���-��%6��PSY���4��t5�����ĴMӜJj&�����d� É*AL����u.�^I)�9�            x������ � �         �   x�}��
�0���cj���^6v�I�D/~}E��:�i�����S�<L��8e��䡩M�3��3o*qdB:(�e�PP�D���0btk�+e�B�x���1���c�/��7{��+c���j5      �   +  x�uX[��*�nFџ�?b)�����wa�}���u��RϿG�[�-�7�=�]s�QW8�+��ݥ2����ä�O.�>w{�o;נuSy}J�{�R[��eg�Ҵ©�>�ok�5���u����
���h>�P6�N��%s�q�{�PS�06�m��-����'{}44�Z��mޮ=(�A�,pc���	�s|����X�c%�N������6i<��\��)-qJ`��a��eMm��[�򩢱ʖU�3st�I�d�S*�AT[S7�"� 8�*~8%K���es��E�Z�*�`�O���w�0�\�9����]Hw�oe�(���ǃ���S��(�<�A��pJr���U�y�+�`�v�;۞-h6��uj�U��j��G�Gy�B�S�l���S�$*m���N�HW=On�.���q���ʣ���!�Cΰ����e.ʮ�c��V8A��"�U�����ԣ�$[���2�)��5<X��{d��V0I꓅��\��K�D|v:�,V�����'���A�|����j8I�N��g�2H�w��I�p����-��V8�"���,����_G�T^)� �ߥ$����
'����K��� ��G�᤭�~�YJv���a��7���j�֭+�rg�\��R�uBh-qʝq�)�eõ˘6F��N�Z��g1s�,a�~�|�P6��d���r�Y��yrۑ�_4y�S��t�Oǵ_���©t����³X񌨓�/8�
���{�h�m�S�E9ܮ��%�%N�;�)P�y�u��l9��Z/�y�%W�K�p.g+\.:�뷻��8U�L��9©���iS�n�[5~J��P.γ�#��R;(W{���乄�6��S�#�<�8�t���yg�5��LM�p�5}-u���
��
'k��dvs�;'6��~8�[q�=�Ы���m+�Z9�Ճ	��N�Y��ve��b��-�+�Zg_Y� ��y���pjgu Tmu��zD�|��d��{Q�v[����ӄ#�z�.�d�qW�l?K��ȁۼ�N�	x������Z�dr��:.W�BwN�p2�W�A�v�~�,4����z�*~�i6��P̆(��Ɏ��z�3�&tH��N֩g�T�@�9�-�M8����`�v��o�G�3��N։g��z�c�b�������}f9�L�{�1�[h�G�%������� �a�P��,�9���}qL������R��������ށ�b��cX�
��ο�������;���CE9b ��Q�/)��MԺ���$T�}�gJ��ŰsM�
����Q�Dt��\���c7Wd[��E���+>6��܋S�6��^v��!���5�i �m��IV��ce�C�d���q�uף�^#N�}��gh�#��yР�A����I����m��zk���(�/J��ρ|A�8E��3��hc`�~:#�dx��74�>6����$�������۰���ǖ���p^ޓ��tR��o\Rl�_p㳎D'�a�\�8q�
��%��?�>=[�T�Ѐ �A<ʛӢ���_CԪv��\�׃�i^��_ ��2�      �      x������ � �      �   B   x�3�4�0�,,M���WH�O*JL��44�30�4�2Jr����+�*�d�^��i�g
������ ��k      �   A   x�31�4�0�LN,�K�L�21r�8KS3���RKA�F@Ac� P�X! �(�81(���� #��      �      x������ � �      �   �  x��S�n�0</_�c{A���8B�r)�>�\�d��9	*�P����jJi��T)��xwfvW�cC�+�lIE�T;�`�p�Z����BKA��3B|"��.���1b�DC��'ʗ�B��)�Y/Y�Vk�KԮ�9�9՟ZްfC����.1g����^��aݬK��^x�5�����Α���t�;�W^�`b�4��[m"�![��K��Av2q�AMbd�4E�0"ͮ���SZ�ɲ)�@e�;�!�9��n{a�~t��|g�:�PE.C�sK~�M<KJ��~}�`Z���(n�`Q���=\,�`GN�A7{�1�����Idl
2�!92*�g�r�#��� *��g���ۇ�a�~����:���v_\�V�:�G�ԣ�����7Vǋ���98k�Z�O��      �   �  x��Ko������hU!1�wy�(�Az�b,2oER���"A>M]�]���X�P�5�D�t,Ǫ%�䌆2g����g6�"�J_'�rig������VUV|*ჯ�l��H��{ռ*��rsQ�����E��.��旫�j�V���tZ�_�L�۫4w�S!Q�J̈R��P3���&�m~5��^�b�%6q���{��iV6[\���N&e]�_��
�^E���p�ǲ���'cΑq��\ݖټ|],��ʺ+�t�U6��(-����+�|(�"�,�asS	b8�A�~y��B�t瞮���%%zfJ+�>~�{�ާIU�wi��EI�.������_�yZ�e�}A!z��zQ�E6���=#�h�wJ�+Ӭ*胹ugתb����}Kk�"q#�4g�r`Gz�P1 ���]r����b�lsS��͵1R��hL9'����P����H�W�?����Dc4��$\�sǃCC���E�A�fZM�!����#F1��m� o��3C}f^��]�V��a}����R	BB��$�b͋=��1G�C�9"���r�Mr?8"��X^���J׳o�ۊz�h���"B/�bZ�����.����P:���~F	�)�&�$�J �������N3�|G�(Ǩ
^U>�Ђ׳��J��P�����JQb����Z_��~J�n7�
a�j�t#�iYLg�,�����lsiO8zF�����/�\��
�����̶������P���4�2���=)�M_o���'H�����ԯ��߻�x^V���ugN+�T�b�#&�u\tm��1v��{��0Zl+��cV���7��r?"��m�|��$u�s�{v��75�:���ɧ�cV��\�4���7Ьɓs�B�c�K.B��?����XȘ��N�3�:�!	�;�ܐtH��/�����id_PQ��O��c	
ꇺ1zXPpxP���c���?�0������X���}Ťa��C����𤇶-w�`")%����ON�
0ל6���`�<��5�hZ�W��`!0� ���'>�h�ft�^=�9p�#��w���sG��ecd�d�\�����p`�4~ 緫��Eh~B�	"ψal�= �6��-)@;���ě"�{~��y�[W0hޭ���O�i
��i��)��!����xי�M[{��_���m��K�O�k�"i��n�FjLCC)��H�3�������tF6���8'�_՛��|���I��m���V�Im��¢�2���9�����G��4sk� ,ix�dkh���ŝ����m��y����q4ȭ�� �@��'��c*��q�c y���"`Y˭�m,�!"���k�;{�֎�7qA���aQ�P�s�����[����5����Nt�Wsm�}�lm0yYN-zY�,��%�/p>kEI�u���OI(0���@&w�����),Eo����e�nQ7��;@�#,���c�je�$��F��4#�M�vCHwn�.S�*�)4���2o��"�
[���H���ݬ=���c����#D�w�Tt�kg���e�i_([Դf�ِ�{$�*��q��{ v�W�M]��������A��앢uz�(��C��nÖR�=�d����"`N������n��t�"���[rF8@�	П�$��t�����_�BÌ�&D���������ǅ�A�U9Ϧv֚gc}��UTA)��� �T�cd��;f3�����]���)̾�`
s�e2)fA���Y&��y� �n��M[��qj�6���@A��������j�9:5�M�/5�X��U��j�.����~�b�OY���U�آ��nQ�:i�I�H�(��N��� �S=��1{j4��X��ʢw6/+X�ٕ�𭭦�����ޕU	=��5�������Y����x��U�0x�&�Q����ԥ��g��Q���i�V[f�+ ����<����{�)�X��J��|�J]���*@��:�"Vqb��
|^�pw���n���&�;��Q)dW*�n'�1$h�� �� AP�Xq# A����{V�-�%��O��`܅����k3���l0��93��{��>�J����<����;b��u��?�P��h�L��0Z��m���8T�b�V���w�6����hbꦺ#I���m�M,�t�^Ӿ�&�h��Ps�᎝���~������_��      �      x������ � �      �      x������ � �          W  x�śˎ����Sp��ƹT�w��E��B������ �]��/��N�����`8􈂥�7��W�_�Bؽ��a_�u��]p�.B�{>�|��%�s����������~9?}8?}9��rş�
q#(�`�h��1��B��Moq-�lP�J��MP��1g2Ae(��ɛ��T�d���*�=�#�~�R���)�Uk�&hM�7PI���6a��a�Eصs�[�qU���]WC-�Ѫ�{%rf��Ua��.��M�;.������M�5iw�й�%(��:�gM�7NI^�����@G��s�9)��ycǄ�&�+)y=!MHk��H�#��6Z�v��Lٛ�O7m#�Q�3P��r��j�Zʛ@�G)�ڦ�b�B
̼���<^NN/��6V�!��ح���w��d�7��@�(m/�a(W��b�q!G1ESML�@!Ô��f������
�%ۜ5y_9H%^Ko#hM�=v��*Z�v�IT|6�6蚛%�SR� k�Zmg���6G���` ����>�~>_Η_�<_�4�Z�qK�_}w-�3�e�h�~�����o�4CG_�W��LףC#R�g-��J_gӚ��Iٻ��؄�fk@��Exc���p���+(x}r(ۦ&����b]R�� �]���53z[�lGS��ш��D��ΧF��a$�w�Ԇ٩:���z���f�x��U�7�윟�!���]�8�����\��3�-ֲ��Ssk	���qT���GIݦV윟�����=FJ�����GN�^���Ċme(R9N����2�D�,��Z�ې��x��N��D���G�D��b;3>��G4�jV��qDv|d��f�Ԫ�CF����i�α��l-�ё�b��J��ҏ*��6�(��h�]���c=2z�Z�0;Eڞ�`�q�9W�b$�T�s~�gy��T�P%2�5Ed�a���^Z� ,eV;�)
�&zؓ��6GA����״\�@��3�����4!�	@�gr4&u��:	�-�H4y}��&�<��F|����Ǘ5|��#�!_��P7qBq!h;3���6I��S,�/G45���&�U�NPa$��R���11s[��+�"jIuB����tt�����q�yq�J8���$� r-�%.I[�dji$���R�#'�J����Ͳ���)��Bj;>!�:�I$�Ƙm�SG�&�/{@fBP8z,���
�L��{ɜ��N{K"�5�0f�0Ѻ��?�Vu��#�3G����I)�z=4�ʪ�Iu圇\�rVu�s6��8|1t��8�1��`pl������}�O	&$C� !<�1��;��9"#@�8�m;@�!l����PE�e7��N��z�.Ő���E�h��m��(wMP\*j2;C�SR��|D5��sH8>".9i������9��MH���|����d�{$etg��M8�&�p\A��/3R�u �A2�|�_~�(9.�~�7gꨪ^<���<�,\��E4�N���W��r.ՅX�~^�p@ߢ}8p��,�w���]��א)Ҍ�����-a#6F� R;[u�+�$����t׮��WJ���~&$��qƀK��(0�8��Rb7��]1�bXp$t���⍫�!��D�5��q��s^��Ʉʎ� ����(k�1��`V����#��]����Ɋ�0㈡y=v�Ͳ6l����Q2}�번M�є�0_EfQ�"o,��}S*$/fR%����D�R��������nׂ�e��TmS�H̹�).����4��sFqPH��Ñq.�{� �|�K��.��!���}q�V����9�[A���*00�qɠ#c�hقR����	�# ����J@��P��d�13��fj�=dl�BI��%��7ENKX.N}4ׄn�����#~��WkM^����VF��XHD�#��$�,���������5"K�=��pEs��bT�P�G����5� �E�i�Ut�:F�4Zs�[��3J{&ˣX��ŨrW��eF�0��@�G�v��v�42�*CRt6����6�
�$yV����6�<CP�>X+����!�b��^���>�\ß�U�b^���FJ�k[��_)�1���{�5sy�nI��Y4]��_K�<�v}��hɉ:�V�\]�}-V�H���`aE�F���#�T҄�H;�Z�M/�8��9�5Q[ځsM�Pb��.ǹ�R�&���U]]$���:E��ǥ���E���G�S*�x�(�����9&ɡ�<�T?=�wj��n��� N8G-5A�ס�^+�h��e��ѿ)>���n!��SSb��JI��½I�U�|k��q��7�1��U��"J�2F��]��9�T[Ik1�]�Q.���Ē�(dR�ˁD�YiT&���Ū��=���u�F#�-�"�)�Hh��hh˲OFr������'��D����� {.��\�3�p{��SU(��\`(s��ֻU�Z	?�k���Л���+�|ߛS���C`E�8%��{Z_���H?��ᬎ�?���_NɹaN��AT1|�A�AD[c�A�`4PՒd|�6K�Q:c-L�׬۸�rn������F�1-ʻ��ǟj�qNi�� y����	9cJ9h�����uJ�$����9I�22{RN�����i�n�,ϸj��q`ɓ�a/*��*35�P�(9ol��[��A�� �*�rn�q"�sD r�?>v��`���ܜS���;����$��p_�zN�yQLZ�6�u�Er��]<a4�1�q�Ԣ<��΍�fˇd[�QL��;W5M@�#� ��7W����!�����};$<ܟ�֤�vR�P�n��n������}z|�8��x�pz����ߟ?w�o��?�����x��f��O��/�/���;�{�f��:wH�����r���q:��񗻱��!Js��ӱ����m��`��;����Hb	��}��͟53R=��*�������A�����|�Z0٣T��+8?=>��O�H#ا��Q�2�1>주�6g�Y|�9#�-��/x�\�ma�As���_�+�Z��G��~V�~S�\�mB�@�5�\�a��m:H�4��/ 'w̎�z�_O�'���$�Ć4� �.0�F�d����_��j����S��;�{�䣯��\�ɋi�
����4;YN�b�0�3�2$��TXi�����D�('��8}d�{���ӧ��i���ǟ�%��.����>/�{�<?�y�����n����?Q@��z�^�nPh
R����-�uXr��I��Ȩ&~v����w�(>LR�>
q�Y�m��=d�ݍ��y���)��(�����v�py޿;?�v������~ �b��S��'|�Y/��֮*�3�k���{���� K_�m         �  x�m�;r�0�k�{r���)3�S�YQH0 ���6�>�.��S�n����.t#I�z���<����,���!D7��=]"
7�`�B�ZQ���Z��`��lH���qR��,��
jAR�M'e�e��݉��C���L��������^Xx;��Ї~mֽ��l{��np�	��WB�GʚLk�ta*J�|������t�:iJʛ����vH�!����Ӆ�A'�Ĳ��|�e��UX��Kb����!ړ��j���i��1;��ƴc�瓻�q���o�M�?�1����� �ѱ5�L�UAu�����Q}r$��$�Vhj�qh�4�%f�o������bp�,���p�1,����3��,�9&��F��fj�
۶hL�jmtS�ӗ���i��*M\x<nq�l�tz�ә.uo�?�C�B���U��U���=4B! �0l�1���gU)�<� au�U            x������ � �         �  x��V�n�8]�_Ah-zٱ��h�Hڴ�b��hZ�-�.)�$-����/�6?6�=&���s��{��e��ğ[^7]Ӛ�Fq2_D��,�f����\�FΏ����;Y!<~�$J$JI|���2J.�<N�,[��V�㿪h�4�(Bȴ6A�j��5-�	sz W�)�߿S��(��g�!UŁ+�P�k��d���J�&5E�����T��yR&O<�r7M�@w-�x��5�#��/��$)]�ԴiUW�@B����
ƃ� '���zZ�}R.��(I��=�8i�	&d_�.>Pz2�I��;�j���ʜ➸�"\�9���O@r�_����2Z̗�u�,g+P��%��^ �����'�x�a0V�6L
�]��@s-�w�j�"�%�}w�I�8�ԟ[�8�������,�8� ��g��0p�>0��+���3}�~3��5X	Z�c[��B��@S����Nb\�0���Q��8�$�%Y&�'�:a���0p}���#����f��(��zz�U�߈�_�Z����!��8�&4�@��*��G3;c�	m ��.CM�Y�i��%e�Lc�q����\���h�/����z�J��Yl����Ɂ�9��XGi֡��g���d+�[�����,���=�Y'0��;3��׊����=���z=��-l�<�i{�e��"/����}�a��/�.�s��ː�U�i�������xB�����Ƕ(xc���\�vT�pN�o��/��U�����/~��Z���٩������@�� 
�8�G�)�Pi�{�c�����!:M����7��gNw&w���hf;�&wM�0����#j$�@��~PڎE�[�l���f��a
�{�+a����%�R��Zp��wn��amAs�jp�>G�>;-��|6�����         �  x���n�F��� t�ݙ��-�sh��]�d��M�f!�I�E?L�CO���b��,)$%9N��hS$��˝��gf�L K�j�`���ӯIq��FEU�Ҭ���U���Bj�|i�P!8����:��)-U�8(��/����r�j6�t|<jz�sX_D�4�i�\����t��yrv]%Y���P9:��O�Q�����73�cf�~�G�F�R�f�F4y{�	dg�Y��$E����I��I~��/�I��f������%�,��?>J~�G�Q�?x�Y���˹�� 4����q�	�g�h��i�;��w9̧nЏ� o����Q�P�^?����L3��4p9@�+��c�F��T�	�P�g�'uҜ�8񋤬"��UI\g;�5�ϯ���2��-A&�2�C��)��B����3I���0�?�"�dl���`���߭���W�1��`f�N���-��	��/�/�c�W��Z�׹�������O�X�J#%�At��?��<�o���Ey�M����{G�]�.Ҳ��ͽ8��FY���÷c�U��� �uր��:� �e��: m$��E� �ZjXQ��Mbf����%+��`������|؛�i����YYf���yx��`+;�:�Ĉ�xȪ���泸\�G�֨���D}j�gz����l:����1����͆�]�8�֢��.-Z���b扝:iW��M�?	����V��F�1P�ྑJk����fJ]�E佦q_�B�.*��NZ}9ȋ<���އ4�"z��hIfx�
4�e�R8�����sB��F=s���)�h�U��f� C`�(;�L�*�:�Q\T/(npe���t��M��q����EzM��iv�D+�(���1�!�D�����
l?]]'ET�5�/h����B�r;k5 ,bZS@���&(ƫq�H�S�6��L9�/���:�1p�P"\<$9A?K�?J$C��ԋs�մ�H
�C ��D
�} �E+�4�#-<�}�wb���Q����2xd� !�hāR]
7�b -p��LH�^��&Õ�2XD�M�\)��Տ��X������H!y� }�(�P�Tp��^σ����-@ePن�x~7���4�⨤��+�@Qف�VNH� _	9\(�|�+��X	9r%�h���P��
�%�a6�A��`�h����ܮ����vu�Ѷ��o$xwC\t�(5C���2>�P:�����hHӖ\Pvx/�����͋�Du6DF]{'e�N���{SVE2��s_�`J���������	���ĳ�m�U��;02-�/��#r
��cttEU07��e��&s^�/��$�
�nzZ��K�ƸU�4�'�A�`�o�"�C)B��5�^�zD��# ����#z�NH�cEJ~�HY����W�@P	CQ�'�Ў+\ū\�?P�l��8�/�ӃReB�!� �z.����t�)�y����Hn�ۤ>:X�8*����4:A�]c�����P,�$x?I���U(m�� ��ԽN;'(�)s��Pò-����.��?� Gŕ!���]�4n��Z*�C���D�nR�yL�ج�])W��8��U��)���s�M!q�v�9��vO��ojػ��W���@0)�~~�x��*�:ͯ:�nm��+��f^��\!�URdQ�Y#o����lY������r:i��~i�eH�lu��=w9 b�J^3Ee&����p��J?>������䴡e�8����}��      
   �  x���I��0�ϓ_�|�H�&��ľ�m �ʀ*E&1$�L��a��Υ��TU�X�;��������QkP���nCG��p*�e/��Kys��ϱ �do�'#�w7J�lԫ	�>�Q����ZȜB� b��	AK����
[�MUU6N��EƫHe��M���W�m��J�@�	�	/��I�+���L�|��m�:Ԧ-[	p��y��I�e0hi�!�y���$�����l�&���'�׻�����p�63�!��r^0�y[ny��PqƵJ)��C_�+���*|����<���AG{�wwY�x��ozn����0n������U� u�U7�oz뿢 fb���*|�x��r&�QYV"���N;	&0��$Lmh���m6����8��K������>��=/&�BƓ+Q��0�1��xF/�"Ʒ\�V-~{�6�fٚ���Iw]z3�ه"�\A���S�e=��T��nC�ο8�
־隦}l��-         ?	  x�m�ɲ�ڲ�۬�؍�8�q���]JQ@@j�D��"  �O�Nu�}��0l}cd�(gu�@c��(�7�r�]����c�ޚN+@������'��ѽ�U��pp%䅸v����~aP��oH꺙��m/G��1�l��X����?��QMWc��llֵ��_ �xȆ�$l�\V�<񆪓3M�c���l\f:y�_ޣ��� v��a����ʾ���(8�<��/�)8Lv��`h�׵��ʤ1��]9b�Ց�_0���Ϡ��4u���J0ɑb�i�M�M�Fa����1��_T�ұ��3^4
�o�io���S��t�6�������� �f�X|)�rv|��Na�
}b����6�NCvz��y�z�ovsO�}�����iwt$%V#�6��M�5&l���U
���6'��c�앆/{�yC�.�鵻�M�f6k�Z9~�qf�jnI�bt�=�;@��b=���~���^�=�g�;=F]�X��:����ZGc�]��W��,K��~E�}~$䑖����J�����Rp����Y�n�A�ɨ��7��8RDӢ�6��8�(��
x�9�VjZ������όQ��Al�v��W\��CD�� {
��7��Ad����Sgϔ�o}DLϞg3_vbO�Z\��0H�@�q�K5�Uw��p(m���	���nG�x����z.�;�S/�����S���n;���J>7@z�דG|����7�nm�
�\;���(�D9�-��8������DPܩ-	��ka)rսx��?�msX⮦n�e�Tv�� <�)�����X/B�L��G��]�c���n8A�$N�o\��Yr�w����ꌹ	���;�᝕��^l��߄mZ���q���p૚��X�Ϋ���,T-6�*�AF�Bb�[����lԽ�c$ǐ:�� ^Lz�~и�]*v�w�k����vgH�r��as������|Un�&	�Ec����?iv��K\au�^�/)�Jڭ�M/�Y��jCV�=�\�1aқ���b����iԒ�c�6�ƑX���f�Up`Z�K˞ĺ�TG�7�1�������J�䢎��^z�k�@@`��0���{խ��݊N(S�����a���Og'���0���r���^��M��2d	�P�GW�\��(O��F�|�p�+�?����͌"&�B\Q�1/K ��t�z���K���' ���k������:#�nQ�&��'�N�V��|�b�[v���3̴'���1��y�O�th��6'�C{G9.al1W�=��*�(�^e��v7�^8�^
�(�"�gB��ƱjhY'&U��`h!����䡣wwQ$������|Δ���?�k�\Ys'�#�O�Rv��H,֤t���4����V�ԓ�f���ުa��M�Z��8�
��p�,��9<����1YA�jJ`J�;�(�0�)��[֟	Z��{C/�M�$l�k�
�&���L)��A�Q�l�m�T��ğ5B`��}��tj����G��ocD8 �A��6���04D�=Lڦ�	�����w�N�:��b7)<��=��fčn�mmdu�b��a,Tu��VG��hm1�^e�c�%n��u�'��=��Cx��R��6JV����,}B��k|9�̺�zJ3�};�� �8t��#�w�R����&)��uR�dC�������ilFO!�$U�/����E=��$���/0��s<�3��S���8`�)��i��Gm��
t4��m�eջ�F#�	k��/���%�#���F�h���6ˀ���dc	�Q^e���o]`���pJ�����-Ĳ,�4A��LA����=^�`+*ΓWME"�T��x~�X�`�Yb}�.���vbY�m��g�z��/��<�4�|��/n7�7��bo���@����ziL�f���HV�?'���y�����c?�'m��Z0�7̌�:��E0�ٌdZӔ�#�A�J����aE�����c�|6�b���a���n�.܂������]|4i���Q���7�Ǆ}?���?
�}���GnFD�p����miX�^�"I�Ph_-��&��L����ŕ�]"��'������޳�����h�`v����B��Ƈ��Ŝ)0��HTeA�c�A,�28���<�Դ5�����4��k�I�;=V��+��K}�����r �e�T5��m�gҾ�7|H*Ə c�/�;�����M��|�|.Xmx�U�C��"�x���λ=�1���zrI`�r����!��F�Ǵ�s��������K���-;�d�Q7��%mׁ˞��b}����-�FK�vp���?� �q˿�_�~�?��Q#     