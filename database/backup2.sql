-- MySQL dump
-- Versão do servidor: 8.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

-- Base de dados: `lanchonete_bot`
CREATE DATABASE IF NOT EXISTS `lanchonete_bot`;
USE `lanchonete_bot`;

-- Criar tabela de usuários primeiro (sem dependências)
CREATE TABLE `usuarios` (
    `id` int NOT NULL AUTO_INCREMENT,
    `username` varchar(255) NOT NULL,
    `password` varchar(255) NOT NULL,
    `tell` text,
    `senha2` varchar(255),
    PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Criar tabela de restaurantes (depende de usuarios)
CREATE TABLE `restaurantes` (
    `id` int NOT NULL AUTO_INCREMENT,
    `usuario_id` int,
    `nome` varchar(255),
    `logo_url` text,
    `horario_abertura` time,
    `horario_fechamento` time,
    `dias_funcionamento` text,
    `endereco` text,
    `latitude` decimal(10,8),
    `longitude` decimal(11,8),
    `permite_consumo_local` boolean DEFAULT false,
    `permite_retirada` boolean DEFAULT false,
    `permite_entrega` boolean DEFAULT false,
    `taxa_entrega` decimal(10,2),
    `raio_entrega` int,
    `tempo_medio_entrega` int,
    `created_at` timestamp DEFAULT CURRENT_TIMESTAMP,
    `horarios_funcionamento` json,
    `nome_usuario` varchar(255),
    PRIMARY KEY (`id`),
    KEY `fk_restaurantes_usuario` (`usuario_id`),
    CONSTRAINT `fk_restaurantes_usuario` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Criar tabela de categorias (depende de restaurantes)
CREATE TABLE `categorias` (
    `id` int NOT NULL AUTO_INCREMENT,
    `restaurante_id` int,
    `nome` varchar(100) NOT NULL,
    `descricao` text,
    `ordem` int DEFAULT 0,
    PRIMARY KEY (`id`),
    KEY `fk_categorias_restaurante` (`restaurante_id`),
    CONSTRAINT `fk_categorias_restaurante` FOREIGN KEY (`restaurante_id`) REFERENCES `restaurantes` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Criar tabela de categorias_modal (depende de restaurantes)
CREATE TABLE `categorias_modal` (
    `id` int NOT NULL AUTO_INCREMENT,
    `nome` varchar(255) NOT NULL,
    `icone` varchar(255),
    `id_restaurante` int NOT NULL,
    PRIMARY KEY (`id`),
    KEY `fk_categorias_modal_restaurante` (`id_restaurante`),
    CONSTRAINT `fk_categorias_modal_restaurante` FOREIGN KEY (`id_restaurante`) REFERENCES `restaurantes` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Criar tabela de pratos (depende de restaurantes)
CREATE TABLE `pratos` (
    `id` int NOT NULL AUTO_INCREMENT,
    `restaurante_id` int,
    `nome` varchar(255) NOT NULL,
    `descricao` text,
    `preco` decimal(10,2),
    `imagem` text,
    `tempo_preparo` decimal(10,2),
    `disponivel` boolean DEFAULT true,
    `destaque` boolean DEFAULT false,
    `created_at` timestamp DEFAULT CURRENT_TIMESTAMP,
    `categoria` text,
    `preco_base` decimal(10,2),
    `ordem` int,
    `ordem_categoria` int DEFAULT 0,
    PRIMARY KEY (`id`),
    KEY `fk_pratos_restaurante` (`restaurante_id`),
    CONSTRAINT `fk_pratos_restaurante` FOREIGN KEY (`restaurante_id`) REFERENCES `restaurantes` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Criar tabela de complementos (depende de pratos)
CREATE TABLE `complementos` (
    `id` int NOT NULL AUTO_INCREMENT,
    `prato_id` int,
    `nome` varchar(100) NOT NULL,
    `preco_adicional` decimal(10,2) DEFAULT '0.00',
    `maximo_escolhas` int DEFAULT 1,
    PRIMARY KEY (`id`),
    KEY `fk_complementos_prato` (`prato_id`),
    CONSTRAINT `fk_complementos_prato` FOREIGN KEY (`prato_id`) REFERENCES `pratos` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Criar tabela de ingredientes (depende de pratos)
CREATE TABLE `ingredientes` (
    `id` int NOT NULL AUTO_INCREMENT,
    `prato_id` int,
    `nome` varchar(100) NOT NULL,
    `removivel` boolean DEFAULT false,
    PRIMARY KEY (`id`),
    KEY `fk_ingredientes_prato` (`prato_id`),
    CONSTRAINT `fk_ingredientes_prato` FOREIGN KEY (`prato_id`) REFERENCES `pratos` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Criar tabela de combos (depende de restaurantes)
CREATE TABLE `combos` (
    `id` int NOT NULL AUTO_INCREMENT,
    `restaurante_id` int,
    `nome` varchar(255) NOT NULL,
    `descricao` text,
    `preco` decimal(10,2) NOT NULL,
    `ativo` boolean DEFAULT true,
    PRIMARY KEY (`id`),
    KEY `fk_combos_restaurante` (`restaurante_id`),
    CONSTRAINT `fk_combos_restaurante` FOREIGN KEY (`restaurante_id`) REFERENCES `restaurantes` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Criar tabela de clientes (sem dependências)
CREATE TABLE `cliente` (
    `id` int NOT NULL AUTO_INCREMENT,
    `telefone` varchar(15) NOT NULL,
    `data_primeiro_acesso` timestamp DEFAULT CURRENT_TIMESTAMP,
    `data_ultimo_acesso` timestamp DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (`id`),
    UNIQUE KEY `uk_cliente_telefone` (`telefone`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Criar tabela de pedidos (depende de cliente)
CREATE TABLE `pedidos` (
    `id` int NOT NULL AUTO_INCREMENT,
    `cliente_telefone` varchar(20),
    `data_pedido` timestamp DEFAULT CURRENT_TIMESTAMP,
    `tipo_entrega` varchar(20) NOT NULL,
    `endereco_entrega` text,
    `status` varchar(20) DEFAULT 'pendente',
    `total` decimal(10,2) NOT NULL,
    `observacoes` text,
    PRIMARY KEY (`id`),
    KEY `idx_pedidos_telefone` (`cliente_telefone`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Criar tabela de pedido_confirmacao (depende de pedidos e restaurantes)
CREATE TABLE `pedido_confirmacao` (
    `id` int NOT NULL AUTO_INCREMENT,
    `pedido_id` int,
    `dados_completos` json,
    `data_confirmacao` timestamp DEFAULT CURRENT_TIMESTAMP,
    `hora_pedido` time,
    `hora_entrega` time,
    `previsao_entrega` time,
    `telefone` varchar(20),
    `ultimo_pedido_data` timestamp NULL,
    `frequencia_pedidos` int DEFAULT 1,
    `restaurante_id` int,
    `restaurante_nome` varchar(100),
    `restaurante_telefone` varchar(20),
    `restaurante_endereco` text,
    `tipo_entrega` varchar(50),
    `endereco_entrega` text,
    `distancia_entrega` decimal(10,2),
    `taxa_entrega` decimal(10,2) DEFAULT '0.00',
    `subtotal` decimal(10,2),
    `total` decimal(10,2),
    `forma_pagamento` varchar(50),
    `status_confirmacao` varchar(50) DEFAULT 'confirmado',
    `status_preparo` varchar(50) DEFAULT 'pendente',
    `status_entrega` varchar(50),
    `observacoes` text,
    `created_at` timestamp DEFAULT CURRENT_TIMESTAMP,
    `updated_at` timestamp DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (`id`),
    KEY `fk_pedido_confirmacao_pedido` (`pedido_id`),
    KEY `fk_pedido_confirmacao_restaurante` (`restaurante_id`),
    CONSTRAINT `fk_pedido_confirmacao_pedido` FOREIGN KEY (`pedido_id`) REFERENCES `pedidos` (`id`) ON DELETE CASCADE,
    CONSTRAINT `fk_pedido_confirmacao_restaurante` FOREIGN KEY (`restaurante_id`) REFERENCES `restaurantes` (`id`) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Criar tabela de cardápio (sem dependências)
CREATE TABLE `cardapio` (
    `id` int NOT NULL AUTO_INCREMENT,
    `nome` varchar(255) NOT NULL,
    `categoria` varchar(255) NOT NULL,
    `preco` decimal(10,2) NOT NULL,
    `imagem` varchar(255),
    `created_at` timestamp DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Criar tabela de sessões (sem dependências)
CREATE TABLE `sessions` (
    `session_id` varchar(128) NOT NULL,
    `expires` int(11) unsigned NOT NULL,
    `data` mediumtext,
    PRIMARY KEY (`session_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Inserir dados iniciais do cardápio
INSERT INTO `cardapio` (`id`, `nome`, `categoria`, `preco`, `imagem`, `created_at`) VALUES
(1, 'Cachorro Quente', 'Lanches', 12.50, 'cachorro_quente.png', '2025-03-16 15:13:24');

COMMIT;


