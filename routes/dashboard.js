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
