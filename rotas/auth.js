const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const { pool } = require('../app');
const { verificarAutenticacao } = require('../utils/auth');

// Rota de login
router.get('/login', (req, res) => {
    res.render('login', { mensagem: req.flash('mensagem') });
});

router.post('/login', async (req, res) => {
    const { username, senha } = req.body;
    try {
        const connection = await pool.getConnection();
        const [usuarios] = await connection.query('SELECT * FROM usuarios WHERE username = ?', [username]);
        connection.release();

        if (usuarios.length && await bcrypt.compare(senha, usuarios[0].senha)) {
            req.session.usuarioId = usuarios[0].id;
            req.session.username = usuarios[0].username;
            res.redirect('/dashboard');
        } else {
            req.flash('mensagem', 'Usuário ou senha inválidos');
            res.redirect('/login');
        }
    } catch (error) {
        console.error('Erro no login:', error);
        res.status(500).send('Erro no login');
    }
});

// Rota de registro
router.get('/register', (req, res) => {
    res.render('register', { mensagem: req.flash('mensagem') });
});

router.post('/register', async (req, res) => {
    const { username, senha, email, telefone } = req.body;
    try {
        const connection = await pool.getConnection();
        const [existente] = await connection.query('SELECT * FROM usuarios WHERE username = ? OR email = ?', [username, email]);

        if (existente.length) {
            connection.release();
            req.flash('mensagem', 'Usuário ou email já existe');
            return res.redirect('/register');
        }

        const senhaHash = await bcrypt.hash(senha, 10);
        await connection.query('INSERT INTO usuarios (username, senha, email, telefone) VALUES (?, ?, ?, ?)', 
            [username, senhaHash, email, telefone]);
        
        connection.release();
        req.flash('mensagem', 'Cadastro realizado com sucesso');
        res.redirect('/login');
    } catch (error) {
        console.error('Erro no registro:', error);
        res.status(500).send('Erro no registro');
    }
});

// Rota de logout
router.get('/sair', (req, res) => {
    req.session.destroy();
    res.redirect('/login');
});

module.exports = router;