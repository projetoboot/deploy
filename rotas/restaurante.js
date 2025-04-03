const express = require('express');
const router = express.Router();
const { pool } = require('../app');

// Rota principal do restaurante
router.get('/:restaurante', async (req, res, next) => {
    try {
        const connection = await pool.getConnection();
        const [restaurante] = await connection.query('SELECT * FROM restaurantes WHERE username = ?', [req.params.restaurante]);
        
        if (!restaurante.length) {
            connection.release();
            return next();
        }

        const [categorias] = await connection.query('SELECT * FROM categorias WHERE restaurante_id = ?', [restaurante[0].id]);
        const [pratos] = await connection.query('SELECT * FROM pratos WHERE restaurante_id = ?', [restaurante[0].id]);
        
        connection.release();
        res.render('cardapio', { restaurante: restaurante[0], categorias, pratos });
    } catch (error) {
        console.error('Erro ao carregar restaurante:', error);
        res.status(500).send('Erro ao carregar restaurante');
    }
});

// Rota do cardápio
router.get('/cardapio', async (req, res) => {
    try {
        const connection = await pool.getConnection();
        const [categorias] = await connection.query('SELECT * FROM categorias');
        const [pratos] = await connection.query('SELECT * FROM pratos');
        connection.release();
        res.render('cardapio', { categorias, pratos });
    } catch (error) {
        console.error('Erro ao carregar cardápio:', error);
        res.status(500).send('Erro ao carregar cardápio');
    }
});

module.exports = router;