const express = require('express');
const router = express.Router();
const { pool } = require('../src/app');

router.post('/api/avaliar', async (req, res) => {
    const { produto_id, rating } = req.body;

    try {
        const connection = await pool.getConnection();

        try {
            // Inserir nova avaliação
            await connection.query(
                'INSERT INTO avaliacoes (produto_id, rating) VALUES (?, ?)',
                [produto_id, rating]
            );

            // Calcular nova média
            const [mediaRows] = await connection.query(
                'SELECT AVG(rating) as media FROM avaliacoes WHERE produto_id = ?',
                [produto_id]
            );

            // Contar total de avaliações
            const [totalRows] = await connection.query(
                'SELECT COUNT(*) as total FROM avaliacoes WHERE produto_id = ?',
                [produto_id]
            );

            const media = mediaRows[0].media || 0;
            const total = totalRows[0].total || 0;

            res.json({ media, total });
        } finally {
            connection.release(); // Sempre liberar a conexão
        }
    } catch (error) {
        console.error('Erro ao processar avaliação:', error);
        res.status(500).json({ error: 'Erro ao processar avaliação' });
    }
});


module.exports = router;