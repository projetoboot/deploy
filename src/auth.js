const express = require('express');
const bcrypt = require('bcrypt');
const { Pool } = require('pg'); // Importa o módulo PostgreSQL
const session = require('express-session');
const pgSession = require('connect-pg-simple')(session);

const router = express.Router();

// Configurações do banco de dados PostgreSQL
const DB_CONFIG = {
    user: 'postgres',
    host: 'localhost',
    database: 'cardap',
    password: '719732',
    port: 5432
};

// Cria o pool de conexões
const pool = new Pool(DB_CONFIG);

// Configuração do middleware de sessão
app.use(session({
    store: new pgSession({
        pool: pool, // Usa o pool de conexões do PostgreSQL
        tableName: 'session' // Nome da tabela para armazenar sessões
    }),
    secret: 'seuSegredoSuperSecreto', // Substitua por um segredo seguro
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false } // Use 'true' se estiver usando HTTPS
}));

// Middleware para verificar login
function verificarAutenticacao(req, res, next) {
    if (!req.session.usuario) {
        console.log('Usuário não autenticado. Redirecionando para /login...');
        return res.redirect('/login');
    }
    console.log('Usuário autenticado. Continuando...');
    next();
}

// Página de Login
router.get('/login', (req, res) => {
    res.render('login', { erro: null });
});

// Rota de Login (POST)
router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    console.log('Tentativa de login:', username, password);
    let client;
    try {
        client = await pool.connect(); // Obtém uma conexão do pool
        const result = await client.query('SELECT * FROM usuarios WHERE tell = $1', [username]);
        const usuarios = result.rows;

        if (usuarios.length === 0) {
            return res.render('login', { erro: 'Usuário não encontrado' });
        }

        if (!(await bcrypt.compare(password, usuarios[0].password))) {
            return res.render('login', { erro: 'Usuário ou senha inválidos!' });
        }
        req.session.usuario = { 
            id: usuarios[0].id, 
            username: usuarios[0].username 
        };

      
       
        ////varficar se usuario tem algum restaurante 
        const restauranteResult = await client.query('SELECT id FROM restaurantes WHERE usuario_id = $1', [usuarios[0].id]);
        const restaurantes = restauranteResult.rows;
        if (restaurantes.length === 1) {
            req.session.usuario = {  ...req.session.usuario,     restaurante_id: restaurantes[0].id };

            } else {
            req.session.usuario = {  ...req.session.usuario,     restaurante_id: null};     
          
        } console.log('id:', req.session.usuario.id);
         console.log('user:', req.session.usuario.username);
         console.log('resta:', req.session.usuario.restaurante_id);
     
        // Força a gravação da sessão no armazenamento
        req.session.save((err) => {
            if (err) {
                console.error('Erro ao salvar a sessão:', err);
                return res.status(500).send('Erro ao salvar a sessão.');
            }
            console.log('Sessão salva com sucesso:', req.session.usuario);
            res.redirect('/dashboard');
        });
        console.log('Sessão definida após login:', req.session.usuario);
    } catch (error) {
        console.error('Erro no login:', error);
        res.status(500).send('Erro no login.');
    } finally {
        if (client) client.release(); // Libera a conexão do pool
    }
});

// Rota de Logout
router.get('/logout', (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            console.error('Erro ao fazer logout:', err);
            return res.status(500).send('Erro ao sair.');
        }
        res.redirect('/login');
    });
});

// Página de Cadastro
router.get('/register', (req, res) => {
    res.render('register', { erro: null });
});

// Rota de Cadastro (POST)
router.post('/register', async (req, res) => {
    const { username, password } = req.body;

    let client;
    try {
        client = await pool.connect(); // Obtém uma conexão do pool
        const result = await client.query('SELECT * FROM usuarios WHERE username = $1', [username]);
        const existe = result.rows;

        if (existe.length > 0) {
            return res.render('register', { erro: 'Usuário já existe!' });
        }

        const senhaCriptografada = await bcrypt.hash(password, 10);

        const resultInsert = await client.query(
            'INSERT INTO usuarios (username, password) VALUES ($1, $2) RETURNING id',
            [username, senhaCriptografada]
        );

        req.session.usuario = { id: resultInsert.rows[0].id, username };
        console.log('Sessão definida após cadastro:', req.session.usuario);

        res.redirect('/dashboard');
    } catch (error) {
        console.error('Erro no cadastro:', error);
        res.status(500).send('Erro ao cadastrar usuário.');
    } finally {
        if (client) client.release(); // Libera a conexão do pool
    }
});

module.exports = router;