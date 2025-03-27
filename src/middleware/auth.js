const pool = require('../db').pool;

// Middleware para verificar autenticação
function checkAuth(req, res, next) {
    if (!req.session.usuario) {
        console.log('Usuário não autenticado. Redirecionando para /login...');
        return res.redirect('/login');
    }
    console.log('Usuário autenticado. Continuando...');
    next();
}

// Middleware para verificar se o usuário tem um restaurante associado
async function checkRestaurante(req, res, next) {
    try {
        const result = await pool.query(
            'SELECT * FROM restaurantes WHERE usuario_id = $1',
            [req.session.usuario.id]
        );

        if (result.rows.length === 0) {
            console.log('Usuário sem restaurante associado. Redirecionando...');
            req.flash('erro', 'Você precisa cadastrar um restaurante primeiro');
            return res.redirect('/dashboard/restaurante');
        }

        req.restaurante = result.rows[0];
        next();
    } catch (error) {
        console.error('Erro ao verificar restaurante:', error);
        res.status(500).send('Erro ao verificar restaurante');
    }
}

module.exports = {
    checkAuth,
    checkRestaurante
};