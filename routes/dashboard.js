const express = require('express');
const router = express.Router();
const logger = require('../utils/logger');

// Add this route to get categories
router.get('/api/categorias', async (req, res) => {
    try {
        const [categorias] = await pool.query(
            'SELECT id, nome, icone FROM categorias_lista WHERE id_restaurante = ?',
            [req.session.restauranteId]
        );
        res.json(categorias);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar categorias' });
    }
});

// Rota para criar novo pedido
router.post('/api/pedidos', async (req, res) => {
    try {
        const { items, total } = req.body;
        const userId = req.session.userId;

        const [result] = await pool.query(
            'INSERT INTO pedidos (id_usuario, total, status) VALUES (?, ?, ?)',
            [userId, total, 'pendente']
        );

        const orderId = result.insertId;

        // Registra o log do pedido criado
        await logger.orderCreated(userId, orderId, { items, total });

        res.json({
            success: true,
            orderId: orderId
        });
    } catch (error) {
        console.error('Erro ao criar pedido:', error);
        res.status(500).json({ success: false, message: 'Erro ao criar pedido' });
    }
});

// Rota para atualizar status do pedido
router.put('/api/pedidos/:id', async (req, res) => {
    try {
        const orderId = req.params.id;
        const { status } = req.body;
        const userId = req.session.userId;

        await pool.query(
            'UPDATE pedidos SET status = ? WHERE id = ?',
            [status, orderId]
        );

        // Registra o log da atualização do pedido
        await logger.orderUpdated(userId, orderId, { status });

        res.json({ success: true });
    } catch (error) {
        console.error('Erro ao atualizar pedido:', error);
        res.status(500).json({ success: false, message: 'Erro ao atualizar pedido' });
    }
});

// Rota para cancelar pedido
router.delete('/api/pedidos/:id', async (req, res) => {
    try {
        const orderId = req.params.id;
        const userId = req.session.userId;

        await pool.query(
            'UPDATE pedidos SET status = ? WHERE id = ?',
            ['cancelado', orderId]
        );

        // Registra o log do cancelamento do pedido
        await logger.orderCanceled(userId, orderId);

        res.json({ success: true });
    } catch (error) {
        console.error('Erro ao cancelar pedido:', error);
        res.status(500).json({ success: false, message: 'Erro ao cancelar pedido' });
    }
});

// Modify the route to create new category
router.post('/api/categorias/nova', async (req, res) => {
    try {
        const { nome, icone } = req.body;
        const [result] = await pool.query(
            'INSERT INTO categorias_lista (nome, icone, id_restaurante) VALUES (?, ?, ?)',
            [nome, icone, req.session.restauranteId]
        );
        
        res.json({
            success: true,
            categoria: {
                id: result.insertId,
                nome,
                icone
            }
        });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Erro ao criar categoria' });
    }
});
