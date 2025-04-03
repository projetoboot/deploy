const express = require('express');
const router = express.Router();
const { verificarAutenticacao } = require('../utils/auth');
const { pool } = require('../app');

// Rota principal do dashboard
router.get('/', verificarAutenticacao, async (req, res) => {
    try {
        const connection = await pool.getConnection();
        const [pedidos] = await connection.query('SELECT * FROM pedidos ORDER BY data_pedido DESC LIMIT 5');
        connection.release();
        res.render('dashboard/index', { pedidos });
    } catch (error) {
        console.error('Erro ao carregar dashboard:', error);
        res.status(500).send('Erro ao carregar dashboard');
    }
});

// Rotas de complementos
router.get('/complementos', verificarAutenticacao, async (req, res) => {
    try {
        const connection = await pool.getConnection();
        const [complementos] = await connection.query('SELECT * FROM complementos');
        connection.release();
        res.render('dashboard/complementos', { complementos });
    } catch (error) {
        console.error('Erro ao carregar complementos:', error);
        res.status(500).send('Erro ao carregar complementos');
    }
});

// Rotas de cardápio
router.get('/cardapio', verificarAutenticacao, async (req, res) => {
    try {
        const connection = await pool.getConnection();
        const [categorias] = await connection.query('SELECT * FROM categorias');
        const [pratos] = await connection.query('SELECT * FROM pratos');
        connection.release();
        res.render('dashboard/cardapio', { categorias, pratos });
    } catch (error) {
        console.error('Erro ao carregar cardápio:', error);
        res.status(500).send('Erro ao carregar cardápio');
    }
});

// Rotas de pedidos
router.get('/pedidos', verificarAutenticacao, async (req, res) => {
    try {
        const connection = await pool.getConnection();
        const [pedidos] = await connection.query('SELECT * FROM pedidos ORDER BY data_pedido DESC');
        connection.release();
        res.render('dashboard/pedidos', { pedidos });
    } catch (error) {
        console.error('Erro ao carregar pedidos:', error);
        res.status(500).send('Erro ao carregar pedidos');
    }
});

module.exports = router;