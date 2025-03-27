const express = require('express');
const { Pool } = require('pg'); // Para PostgreSQL
const session = require('express-session');
const pgSession = require('connect-pg-simple')(session); // Para sessões com PostgreSQL
const bcrypt = require('bcrypt');
const multer = require('multer');
const path = require('path');
const flash = require('express-flash');
const upload = require('./config/multer');
const readline = require('readline');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/../views');

// Remove all other static middleware and use a single configuration
app.use(express.static(path.join(__dirname, '..', 'public')));
//app.use(express.static(__dirname + '/../public'));
app.use('/uploads', express.static(path.join(__dirname, '..', 'public', 'uploads')));
app.use('/img', express.static(path.join(__dirname, '..', 'public', 'img')));
app.use(express.static(__dirname + '/public'));
app.use('/css', express.static(path.join(__dirname, '..', 'public', 'css')));
const DB_CONFIG = require('./config/database');
// Configurações do banco de dados PostgreSQL
const pool = new Pool(DB_CONFIG);

// Middleware para verificar login
function verificarAutenticacao(req, res, next) {
    console.log('Sessão atual:', req.session.usuario);
    if (!req.session.usuario) {
        console.log('Usuário não autenticado. Redirecionando para /login...');
        return res.redirect('/login');
    }
    console.log('Usuário autenticado. Continuando...');
    next();
}

// Middleware para logar a sessão completa
app.use((req, res, next) => {
    console.log('Sessão completa:', req.session);
    next();
});

// Configuração de sessão com PostgreSQL
const sessionStore = new pgSession({
    pool: pool, // Conexão do pool de PostgreSQL
    tableName: 'session', // nome da tabela para armazenar sessões
});

app.use(session({
    key: 'sessao_usuario',
    secret: 'seuSegredoSeguro',
    store: sessionStore, // Usando PostgreSQL para sessões
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false, httpOnly: false, maxAge: 24 * 60 * 60 * 1000 } // 1 dia
}));
app.use(flash()); // Configuração CORRETA do flash

async function conectarBanco() {
    try {
        const client = await pool.connect();
        console.log('Conexão com o banco de dados estabelecida.');
        return client;
    } catch (error) {
        console.error('Erro ao conectar ao banco de dados:', error);
        throw error;
    }
}

app.get('/', (req, res) => {
    if (req.session.usuario) {
        return res.redirect('/dashboard');
    }
    res.redirect('/login');
});

// Rotas do Cardápio
app.get('/cardapio', async (req, res) => {
    try {
        const pratos = await pool.query(
            `SELECT p.*, c.nome as categoria_nome 
             FROM pratos p 
             LEFT JOIN LATERAL (
                SELECT id::text as categoria_id, nome 
                FROM json_populate_recordset(null::record, $1::json)
                AS (id int, nome text, descricao text)
             ) c ON p.categoria_id = c.categoria_id 
             WHERE p.disponivel = true
             ORDER BY p.nome`,
            [JSON.stringify(CATEGORIAS)]
        );

        res.render('cardapio_digital', {
            categorias: CATEGORIAS,
            pratos: pratos.rows
        });
    } catch (error) {
        console.error('Erro ao carregar cardápio:', error);
        res.status(500).send('Erro ao carregar cardápio');
    }
});

app.get('/dashboard/cardapio', verificarAutenticacao, async (req, res) => {
    const client = await conectarBanco();
    try {
        console.log('Buscando cardápio...');
        
        // Buscar o cardápio do banco de dados
        const result = await client.query('SELECT * FROM cardapio');
        const cardapio = result.rows;

        console.log('Cardápio encontrado:', cardapio);
        res.render('cardapio', { cardapio });
    } catch (error) {
        console.error('Erro ao buscar cardápio:', error);
        res.status(500).send('Erro ao carregar cardápio');
    } finally {
        client.release(); // Liberar o cliente do banco
    }
});

app.post('/dashboard/cardapio/categoria', verificarAutenticacao, async (req, res) => {
    const { nome, descricao, ordem } = req.body;
    const client = await conectarBanco();
    try {
        const result = await client.query(
            'INSERT INTO categorias (restaurante_id, nome, descricao, ordem) VALUES ($1, $2, $3, $4) RETURNING id, nome',
            [req.session.usuario.restaurante_id, nome, descricao, ordem]
        );
        res.json({ success: true, categoria: result.rows[0] });
    } catch (error) {
        console.error('Erro ao criar categoria:', error);
        res.status(500).send('Erro ao criar categoria');
    } finally {
        client.release();
    }
});

app.delete('/dashboard/cardapio/categoria/:id', verificarAutenticacao, async (req, res) => {
    const client = await conectarBanco();
    try {
        await client.query('DELETE FROM categorias WHERE id = $1 AND restaurante_id = $2', 
            [req.params.id, req.session.usuario.restaurante_id]);
        res.json({ success: true });
    } catch (error) {
        console.error('Erro ao excluir categoria:', error);
        res.status(500).json({ success: false });
    } finally {
        client.release();
    }
});

app.post('/dashboard/cardapio/prato', verificarAutenticacao, upload.single('imagem'), async (req, res) => {
    const { categoria_id, nome, descricao, preco, tempo_preparo } = req.body;
    const disponivel = req.body.disponivel === 'on';
    const destaque = req.body.destaque === 'on';
    const imagem_url = req.file ? `/uploads/${req.file.filename}` : null;

    const client = await conectarBanco();
    try {
        await client.query(
            'INSERT INTO pratos (restaurante_id, categoria_id, nome, descricao, preco, imagem_url, tempo_preparo, disponivel, destaque) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)',
            [req.session.usuario.restaurante_id, categoria_id, nome, descricao, preco, imagem_url, tempo_preparo, disponivel, destaque]
        );
        res.redirect('/dashboard/cardapio');
    } catch (error) {
        console.error('Erro ao criar prato:', error);
        res.status(500).send('Erro ao criar prato');
    } finally {
        client.release();
    }
});

app.delete('/dashboard/cardapio/prato/:id', verificarAutenticacao, async (req, res) => {
    const client = await conectarBanco();
    try {
        await client.query('DELETE FROM pratos WHERE id = $1 AND restaurante_id = $2', 
            [req.params.id, req.session.usuario.restaurante_id]);
        res.json({ success: true });
    } catch (error) {
        console.error('Erro ao excluir prato:', error);
        res.status(500).json({ success: false });
    } finally {
        client.release();
    }
});

app.put('/dashboard/cardapio/prato/:id/disponibilidade', verificarAutenticacao, async (req, res) => {
    const { disponivel } = req.body;
    const client = await conectarBanco();
    try {
        await client.query(
            'UPDATE pratos SET disponivel = $1 WHERE id = $2 AND restaurante_id = $3',
            [disponivel, req.params.id, req.session.usuario.restaurante_id]
        );
        res.json({ success: true });
    } catch (error) {
        console.error('Erro ao atualizar disponibilidade:', error);
        res.status(500).json({ success: false });
    } finally {
        client.release();
    }
});

app.post('/dashboard/cardapio/ingrediente', verificarAutenticacao, async (req, res) => {
    const { prato_id, nome, removivel } = req.body;
    const client = await conectarBanco();
    try {
        await client.query(
            'INSERT INTO ingredientes (prato_id, nome, removivel) VALUES ($1, $2, $3)',
            [prato_id, nome, removivel === 'on']
        );
        res.redirect('/dashboard/cardapio');
    } catch (error) {
        console.error('Erro ao adicionar ingrediente:', error);
        res.status(500).send('Erro ao adicionar ingrediente');
    } finally {
        client.release();
    }
});

app.post('/dashboard/cardapio/complemento', verificarAutenticacao, async (req, res) => {
    const { prato_id, nome, preco_adicional, maximo_escolhas } = req.body;
    console.log('Recebendo dados do complemento:', req.body);

    const client = await conectarBanco();
    try {
        console.log('Inserindo complemento no banco...');
        await client.query(
            'INSERT INTO complementos (prato_id, nome, preco_adicional, maximo_escolhas) VALUES ($1, $2, $3, $4)',
            [prato_id, nome, preco_adicional, maximo_escolhas]
        );
        console.log('Complemento adicionado com sucesso!');
        res.redirect('/dashboard/cardapio');
    } catch (error) {
        console.error('Erro ao adicionar complemento:', error);
        res.status(500).send('Erro ao adicionar complemento');
    } finally {
        client.release();
    }
});

app.post('/dashboard/cardapio/confirmar', verificarAutenticacao, async (req, res) => {
    try {
        console.log('Processando confirmação do pedido...');
        // Seu código de confirmação aqui...
        res.redirect('/cardapio_digital');
    } catch (error) {
        console.error('Erro ao processar confirmação do pedido:', error);
        res.redirect('/cardapio_digital');
    }
});

app.get('/dashboard/pedidos', verificarAutenticacao, async (req, res) => {
    const client = await conectarBanco();
    try {
        const result = await client.query(`
            SELECT 
                id,
                pedido_id,
                hora_pedido,
                previsao_entrega,
                telefone,
                tipo_entrega,
                endereco_entrega,
                total,
                status_preparo,
                dados_completos
            FROM pedido_confirmacao 
            WHERE restaurante_id = $1 
            ORDER BY created_at DESC`, 
            [req.session.usuario.restaurante_id]
        );

        // Map the results to include only necessary data
        const pedidosSimplificados = result.rows.map(pedido => {
            const dadosCompletos = typeof pedido.dados_completos === 'string' 
                ? JSON.parse(pedido.dados_completos) 
                : pedido.dados_completos;
            return {
                id: pedido.id,
                pedido_id: pedido.pedido_id,
                hora_pedido: pedido.hora_pedido 
    ? new Date(`1970-01-01T${pedido.hora_pedido}`).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }) 
    : 'Hora inválida',
                previsao_entrega: pedido.previsao_entrega,
                telefone: pedido.telefone,
                tipo_entrega: pedido.tipo_entrega,
                endereco_entrega: pedido.endereco_entrega,
                total: pedido.total,
                status_preparo: pedido.status_preparo,
                itens: dadosCompletos.carrinho?.items || []
            };
        });
        console.log('Pedidos retornados do banco:', JSON.stringify(pedidosSimplificados, null, 2));
        res.render('dashboard', {
            currentPage: 'pedido_gerente',
            pedidos: pedidosSimplificados,
            usuario: req.session.usuario
        });
    } catch (error) {
        console.error('Erro ao buscar pedidos:', error);
        res.render('dashboard', {
            currentPage: 'pedido_gerente',
            pedidos: [],
            usuario: req.session.usuario,
            error: 'Erro ao carregar pedidos'
        });
    } finally {
        client.release();
    }
});

// Página de Login
app.get('/login', (req, res) => {
    res.render('login', { erro: null });
});

app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const client = await conectarBanco();
    console.log('Tentando fazer login com:', username, password);
    try {
        const result = await client.query('SELECT * FROM usuarios WHERE tell = $1', [username]);
        const usuarios = result.rows;
        if (usuarios.length === 0) {
            return res.render('login', { erro: 'Usuário não encontrado' });
        }

        if (!(await bcrypt.compare(password, usuarios[0].password))) {
            return res.render('login', { erro: 'Usuário ou senha inválidos!' });
        }

        req.session.usuario = { id: usuarios[0].id, username: usuarios[0].username };
      
      
        ////varficar se usuario tem algum restaurante 
        const restauranteResult = await client.query('SELECT id FROM restaurantes WHERE usuario_id = $1', [usuarios[0].id]);
        const restaurantes = restauranteResult.rows;
        if (restaurantes.length === 1) {
            req.session.usuario = {  ...req.session.usuario,     restaurante_id: restaurantes[0].id };
           
            console.log('loginda Dashboard após login:', req.session.usuario);
        } else {
            req.session.usuario = {  ...req.session.usuario,     restaurante_id: null };
       
           
            
        }
        // Força a gravação da sessão no armazenamento
        req.session.save((err) => {
            if (err) {
                console.error('Erro ao salvar a sessão:', err);
            } else {
                console.log('Sessão salva com sucesso.');
            }
        });

        res.redirect('/dashboard');
    } catch (error) {
        console.error('Erro no login:', error);
        res.status(500).send('Erro no login.');
    } finally {
        client.release(); // Liberar o cliente do pool
    }
});

app.get('/logout', (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            console.error('Erro ao fazer logout:', err);
            return res.status(500).send('Erro ao sair.');
        }
        res.redirect('/login');
    });
});

app.get('/dashboard', verificarAutenticacao, async (req, res) => {
    const client = await conectarBanco();
    try {
        const result = await client.query('SELECT * FROM restaurantes WHERE usuario_id = $1', [req.session.usuario.id]);
        res.render('dashboard', { 
            currentPage: 'dashboard',
            usuario: req.session.usuario, 
            qrCode: '/qrcode.png',
            restaurante: result.rows[0] || null
        });
    } catch (error) {
        console.error('Erro ao buscar restaurante:', error);
        res.render('dashboard', { 
            usuario: req.session.usuario, 
            qrCode: '/qrcode.png',
            restaurante: null
        });
    } finally {
        client.release();
    }
});

// Rota para página de cadastro de restaurante
app.get('/dashboard/restaurante', verificarAutenticacao, (req, res) => {
    res.render('restaurante');
});

// Rota para processar o cadastro do restaurante
app.post('/dashboard/restaurante/cadastrar', verificarAutenticacao, async (req, res) => {
    const {
        nome, horario_abertura, horario_fechamento, dias_funcionamento,
        endereco, latitude, longitude, permite_consumo_local, permite_retirada,
        permite_entrega, taxa_entrega, raio_entrega, tempo_medio_entrega
    } = req.body;

    const client = await conectarBanco();
    try {
        const result = await client.query(
            `INSERT INTO restaurantes (
                usuario_id, nome, horarios_funcionamento,
                dias_funcionamento, endereco, latitude, longitude,
                permite_consumo_local, permite_retirada, permite_entrega,
                taxa_entrega, raio_entrega, tempo_medio_entrega
            ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13) RETURNING id`,
            [
                req.session.usuario.id, nome,
                req.body.horarios_funcionamento,
                dias_funcionamento, endereco, latitude, longitude,
                permite_consumo_local === 'on', permite_retirada === 'on', permite_entrega === 'on',
                taxa_entrega, raio_entrega, tempo_medio_entrega
            ]
        );

        // Se houver upload de logo
        if (req.files && req.files.logo) {
            const logoPath = `/uploads/logos/${result.rows[0].id}_${req.files.logo.name}`;
            await req.files.logo.mv(path.join(__dirname, '..', 'public', logoPath));
            await client.query('UPDATE restaurantes SET logo_url = $1 WHERE id = $2', [logoPath, result.rows[0].id]);
        }
     
            req.session.usuario = {  ...req.session.usuario,     restaurante_id: result.rows[0].id};
      

        res.redirect('/dashboard');
    } catch (error) {
        console.error('Erro ao cadastrar restaurante:', error);
        res.status(500).send('Erro ao cadastrar restaurante.');
    } finally {
        client.release();
    }
});

// Chamar QR Code do bot.js após login
const bot = require('./bot'); // Importa e inicia o bot automaticamente

// Rotas de Gerenciamento de Categorias
app.get('/dashboard/categorias', verificarAutenticacao, async (req, res) => {
    const client = await conectarBanco();
    try {
        const result = await client.query('SELECT * FROM categorias WHERE restaurante_id = (SELECT id FROM restaurantes WHERE usuario_id = $1)', [req.session.usuario.id]);
        res.render('categorias', { categorias: result.rows });
    } catch (error) {
        console.error('Erro ao buscar categorias:', error);
        res.status(500).send('Erro ao buscar categorias.');
    } finally {
        client.release();
    }
});

app.post('/dashboard/categorias', verificarAutenticacao, async (req, res) => {
    const { nome, descricao } = req.body;
    const client = await conectarBanco();
    try {
        await client.query(
            'INSERT INTO categorias (nome, descricao, restaurante_id) VALUES ($1, $2, (SELECT id FROM restaurantes WHERE usuario_id = $3))',
            [nome, descricao, req.session.usuario.id]
        );
        res.redirect('/dashboard/categorias');
    } catch (error) {
        console.error('Erro ao criar categoria:', error);
        res.status(500).send('Erro ao criar categoria.');
    } finally {
        client.release();
    }
});

// Rotas de Gerenciamento de Pratos
app.get('/dashboard/pratos', verificarAutenticacao, async (req, res) => {
    const client = await conectarBanco();
    try {
        const result = await client.query('SELECT * FROM pratos WHERE restaurante_id = $1', [req.session.usuario.restaurante_id]);
        console.log('pratos', result.rows),
        res.render('dashboard', {
            currentPage: 'pratos',
            pratos: result.rows,
           
            success: req.flash('success'),
            error: req.flash('error'),
            restaurante: req.session.restaurante
        });
    } catch (error) {
        console.error('Erro ao buscar pratos:', error);
        req.flash('error', 'Erro ao buscar pratos');
        res.redirect('/dashboard');
    } finally {
        client.release();
    }
});

app.post('/dashboard/pratos', verificarAutenticacao, upload.single('imagem'), async (req, res) => {
    const { nome, descricao, preco, categoria_id } = req.body;
    const client = await conectarBanco();
    try {
        const imagem_url = req.file ? `/uploads/${req.file.filename}` : null;
        await client.query(
            'INSERT INTO pratos (nome, descricao, preco, categoria_id, imagem_url, restaurante_id) VALUES ($1, $2, $3, $4, $5, (SELECT id FROM restaurantes WHERE usuario_id = $6))',
            [nome, descricao, preco, categoria_id, imagem_url, req.session.usuario.id]
        );
        res.redirect('/dashboard/pratos');
    } catch (error) {
        console.error('Erro ao criar prato:', error);
        res.status(500).send('Erro ao criar prato.');
    } finally {
        client.release();
    }
});

// Rotas de Gerenciamento de Ingredientes
app.get('/dashboard/ingredientes', verificarAutenticacao, async (req, res) => {
    const client = await conectarBanco();
    try {
        const result = await client.query(
            'SELECT * FROM ingredientes WHERE restaurante_id = (SELECT id FROM restaurantes WHERE usuario_id = $1)',
            [req.session.usuario.id]
        );
        res.render('ingredientes', { ingredientes: result.rows });
    } catch (error) {
        console.error('Erro ao buscar ingredientes:', error);
        res.status(500).send('Erro ao buscar ingredientes.');
    } finally {
        client.release();
    }
});

app.post('/dashboard/ingredientes', verificarAutenticacao, async (req, res) => {
    const { nome, descricao, estoque } = req.body;
    const client = await conectarBanco();
    try {
        await client.query(
            'INSERT INTO ingredientes (nome, descricao, estoque, restaurante_id) VALUES ($1, $2, $3, (SELECT id FROM restaurantes WHERE usuario_id = $4))',
            [nome, descricao, estoque, req.session.usuario.id]
        );
        res.redirect('/dashboard/ingredientes');
    } catch (error) {
        console.error('Erro ao criar ingrediente:', error);
        res.status(500).send('Erro ao criar ingrediente.');
    } finally {
        client.release();
    }
});

// Rotas de Gerenciamento de Complementos
app.get('/dashboard/complementos', verificarAutenticacao, async (req, res) => {
    const client = await conectarBanco();
    try {
        const result = await client.query(
            'SELECT * FROM complementos WHERE restaurante_id = (SELECT id FROM restaurantes WHERE usuario_id = $1)',
            [req.session.usuario.id]
        );
        res.render('complementos', { complementos: result.rows });
    } catch (error) {
        console.error('Erro ao buscar complementos:', error);
        res.status(500).send('Erro ao buscar complementos.');
    } finally {
        client.release();
    }
});

app.post('/dashboard/complementos', verificarAutenticacao, async (req, res) => {
    const { nome, descricao, preco } = req.body;
    const client = await conectarBanco();
    try {
        await client.query(
            'INSERT INTO complementos (nome, descricao, preco, restaurante_id) VALUES ($1, $2, $3, (SELECT id FROM restaurantes WHERE usuario_id = $4))',
            [nome, descricao, preco, req.session.usuario.id]
        );
        res.redirect('/dashboard/complementos');
    } catch (error) {
        console.error('Erro ao criar complemento:', error);
        res.status(500).send('Erro ao criar complemento.');
    } finally {
        client.release();
    }
});

// Rota para exibir formulário de cadastro de pratos
app.get('/dashboard/pratos/novo', verificarAutenticacao, async (req, res) => {
    const client = await conectarBanco();
    try {
        const categorias = await client.query(
            'SELECT id, nome FROM categorias WHERE restaurante_id = $1 ORDER BY nome',
            [req.session.usuario.restaurante_id]
        );
        
       console.log(req.session.usuario.restaurante_id)
       res.render('prato_cadastrar', {
           categorias: categorias.rows,
           success: req.flash('success'), // Mensagens de sucesso
           error: req.flash('error')      // Mensagens de erro
       });
    } catch (error) {
        console.error('Erro ao carregar categorias:', error);
        res.status(500).send('Erro ao carregar formulário');
    } finally {
        client.release();
    }
});

// Rota para processar cadastro de pratos
app.post('/dashboard/pratos/novo', verificarAutenticacao, upload.single('imagem'), async (req, res) => {
    const client = await conectarBanco();
    try {
        await client.query('BEGIN');
        console.log(req.body)
        const preco = req.body.preco_base.replace(/[^\d.,]/g, '');
        const tempo_preparo = req.body.tempo_preparo.replace(/[^\d]/g, '');
        const imagem = req.file?.path;
        console.log("dados da imagem",req.file)
        const disponivel = req.body.disponivel === 'on';
        // Insert the main dish first
        const pratoResult = await client.query(
            'INSERT INTO pratos (restaurante_id, categoria, nome, descricao, preco, imagem, tempo_preparo, disponivel) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING id',
            [req.session.usuario.restaurante_id, req.body.categoria, req.body.nome, req.body.descricao, 
                preco, req.file?.filename, tempo_preparo, req.body.disponivel === 'on']
        );

        const pratoId = pratoResult.rows[0].id;
        console.log(req.body)
         // Insert ingredients if any
         if (req.body.ingredientes && Array.isArray(req.body.ingredientes) && req.body.ingredientes.length > 0) {
            for (let i = 0; i < req.body.ingredientes.length; i++) {
                const ingrediente = req.body.ingredientes[i]?.trim();
                const removivel = req.body.ingredientes_removiveis?.[i] === '1'; // Usa ?. para evitar erro
                
                console.log("ingredientes", pratoId, ingrediente, removivel);
        
                if (ingrediente) {
                    await client.query(
                        'INSERT INTO ingredientes (prato_id, nome, removivel) VALUES ($1, $2, $3)',
                        [pratoId, ingrediente, removivel]
                    );
                }
            }
        }

        // Insert complementos if any
        if (req.body.complementos && req.body.complementos.length > 0) {
            for (let i = 0; i < req.body.complementos.length; i++) {
                const complemento = req.body.complementos[i]?.trim(); // Verifica se o valor existe e remove espaços extras
                const preco = parseFloat(req.body.precos_complementos[i]?.replace(',', '.')); // Substitui vírgula por ponto e converte
                const maxEscolhas = parseInt(req.body.max_escolhas[i]);
        
                // Validações para garantir que os valores são válidos
                if (complemento && !isNaN(preco) && !isNaN(maxEscolhas)) {
                    await client.query(
                        'INSERT INTO complementos (prato_id, nome, preco_adicional, maximo_escolhas) VALUES ($1, $2, $3, $4)',
                        [pratoId, complemento, preco, maxEscolhas]
                    );
                } else {
                    console.error(`Erro: Dados inválidos para complemento ${complemento}. Preço ou máximo de escolhas inválidos.`);
                }
            }
        }

        await client.query('COMMIT');
        req.flash('success', 'Prato cadastrado com sucesso!');
        res.redirect('/dashboard/pratos');
    } catch (error) {
        await client.query('ROLLBACK');
        console.error('Erro ao cadastrar prato:', error);
        req.flash('error', 'Erro ao cadastrar prato');
        res.redirect('/dashboard/pratos/novo');
    } finally {
        client.release();
    }
});

app.get('/dashboard/pratos/editar/:id', verificarAutenticacao, async (req, res) => {
    const client = await conectarBanco();
    try {
        // Buscar o prato
        const prato = await client.query(
            'SELECT * FROM pratos WHERE id = $1 AND restaurante_id = $2',
            [req.params.id, req.session.usuario.restaurante_id]
        );

        // Buscar os ingredientes do prato
        const ingredientes = await client.query(
            'SELECT * FROM ingredientes WHERE prato_id = $1',
            [req.params.id]
        );

        // Buscar todas as categorias disponíveis
        const categorias = await client.query(
            'SELECT id, nome FROM categorias WHERE restaurante_id = $1 ORDER BY nome',
            [req.session.usuario.restaurante_id]
        );

        if (prato.rows.length === 0) {
            req.flash('error', 'Prato não encontrado');
            return res.redirect('/dashboard/pratos');
        }

        res.render('prato_editar', {
            prato: prato.rows[0],            
            ingredientes: ingredientes.rows,
            categorias: categorias.rows,
            success: req.flash('success'),
            error: req.flash('error')
        });
    } catch (error) {
        // ... existing error handling ...
    }
});

app.post('/dashboard/pratos/editar/:id', verificarAutenticacao, upload.single('imagem'), async (req, res) => {
    const client = await conectarBanco();
    try {
      
        console.log(req.body);
        const { nome, descricao, preco, categoria, ingredientes, ingredientes_removiveis } = req.body;
        const disponivel = req.body.disponivel === 'on';

        // Atualizar informações básicas do prato
        let query = `
            UPDATE pratos 
            SET nome = $1, 
                descricao = $2, 
                preco = $3, 
                categoria = $4, 
                disponivel = $5
        `;
        const preco_lmpo = preco.replace(/[^\d.,]/g, '');
       
        let params = [nome, descricao, preco_lmpo, categoria, disponivel];

        // Se uma nova imagem foi enviada
        if (req.file) {
            query += ', imagem = $' + (params.length + 1);
            params.push(`${req.file.filename}`);
        }

        query += ' WHERE id = $' + (params.length + 1) + ' AND restaurante_id = $' + (params.length + 2);
        params.push(req.params.id, req.session.usuario.restaurante_id);

        await client.query(query, params);

        // Atualizar ingredientes
        if (ingredientes && Array.isArray(ingredientes)) {
            // Primeiro, remover ingredientes existentes
            await client.query('DELETE FROM ingredientes WHERE prato_id = $1', [req.params.id]);

            // Inserir novos ingredientes
            for (let i = 0; i < ingredientes.length; i++) {
                const removivel = Array.isArray(ingredientes_removiveis) && ingredientes_removiveis[i] === '1';
                await client.query(
                    'INSERT INTO ingredientes (prato_id, nome, removivel) VALUES ($1, $2, $3)',
                    [req.params.id, ingredientes[i], removivel]
                );
            }
        }

        req.flash('success', 'Prato atualizado com sucesso!');
        res.redirect('/dashboard/pratos');
    } catch (error) {
        console.error('Erro ao atualizar prato:', error);
        req.flash('error', 'Erro ao atualizar prato: ' + error.message);
        res.redirect(`/dashboard/pratos/editar/${req.params.id}`);
    } finally {
        client.release();
    }
});

app.post('/dashboard/pratos/:id/toggle-disponivel', verificarAutenticacao, async (req, res) => {
    const client = await conectarBanco();
    try {
        const result = await client.query(
            'UPDATE pratos SET disponivel = $1 WHERE id = $2 AND restaurante_id = $3 RETURNING disponivel',
            [req.body.disponivel, req.params.id, req.session.usuario.restaurante_id]
        );

        if (result.rows.length > 0) {
            res.json({ success: true, disponivel: result.rows[0].disponivel });
        } else {
            res.status(404).json({ success: false, message: 'Prato não encontrado' });
        }
    } catch (error) {
        console.error('Erro ao atualizar disponibilidade:', error);
        res.status(500).json({ success: false, message: 'Erro ao atualizar disponibilidade' });
    } finally {
        client.release();
    }
});

app.post('/dashboard/pratos/:id/update-price', verificarAutenticacao, async (req, res) => {
    const client = await conectarBanco();
    try {
        const { preco } = req.body;
        
        // Verificar se o prato pertence ao restaurante do usuário logado
        const prato = await client.query('SELECT * FROM pratos WHERE id = $1 AND restaurante_id = $2', [req.params.id, req.session.usuario.restaurante_id]);
        
        if (prato.rows.length === 0) {
            return res.status(404).json({ success: false, message: 'Prato não encontrado' });
        }
        
        // Atualizar o preço
        await client.query('UPDATE pratos SET preco = $1 WHERE id = $2', [preco, req.params.id]);
        
        res.json({ success: true, message: 'Preço atualizado com sucesso' });
    } catch (error) {
        console.error('Erro ao atualizar preço:', error);
        res.status(500).json({ success: false, message: 'Erro ao atualizar preço' });
    } finally {
        client.release();
    }
});

app.get('/dashboard/qrcode', verificarAutenticacao, (req, res) => {
    res.render('qrcode', { qrCode: bot.getQRCode() });
});

// Add this route before your other routes
app.get('/check-username', async (req, res) => {
    const { username } = req.query;
    const client = await conectarBanco();
    
    try {
        const result = await client.query(
            'SELECT COUNT(*) FROM restaurantes WHERE nome = $1',
            [username]
        );
        
        res.json({ available: result.rows[0].count === '0' });
    } catch (error) {
        console.error('Erro ao verificar nome:', error);
        res.status(500).json({ error: 'Erro ao verificar disponibilidade' });
    } finally {
        client.release();
    }
});

app.get('/check-phone', async (req, res) => {
    const { phone } = req.query;
    const client = await conectarBanco();
    console.log('Telefone',phone)
    try {
        const result = await client.query(
            'SELECT COUNT(*) FROM usuarios WHERE tell = $1',
            [phone.replace(/\D/g, '')]  // Remove caracteres não numéricos
        );
        
        res.json({ available: result.rows[0].count === '0' });
    } catch (error) {
        console.error('Erro ao verificar telefone:', error);
        res.status(500).json({ error: 'Erro ao erro 866 verificar disponibilidade' });
    } finally {
        client.release();
    }
});
// Página de Cadastro
app.get('/register', (req, res) => {
    res.render('cadastrar_restaurante', {
        erro: null,
        process: {
            env: {
                DOMAIN_URL: process.env.DOMAIN_URL || 'www.zejacaredominio.com',
                GOOGLE_MAPS_API_KEY: process.env.GOOGLE_MAPS_API_KEY
            }
        }
    });
});

app.post('/register', upload.single('logo'), async (req, res) => {
    if (!req.body) {
        return res.render('cadastrar_restaurante', { erro: 'Dados do formulário não recebidos' });
    }

    const { username, password, tell } = req.body;
    console.log('Dados recebidos:', username, password, tell);
    const numeroLimpo = tell.replace(/\D/g, "");
    if (!username?.trim() || !password?.trim()) {
        return res.render('cadastrar_restaurant', { erro: 'Nome de usuário e senha são obrigatórios!' });
    }

    const client = await conectarBanco();

    try {
        console.log('Verificando se usuário já existe...');
        const result = await client.query('SELECT * FROM usuarios WHERE username = $1', [username]);

        if (result.rows.length > 0) {
            console.log('Usuário já existe!');
            return res.render('register', { erro: 'Usuário já existe!' });
        }

        console.log('Criando senha criptografada...');
        const senhaCriptografada = await bcrypt.hash(password, 10);

        console.log('Inserindo novo usuário...');
        const resultInsert = await client.query(
            'INSERT INTO usuarios (username, password, tell) VALUES ($1, $2, $3) RETURNING id',
            [username, senhaCriptografada, numeroLimpo]
        );
        /// para p codigo aqui 
        //throw new Error("Erro crítico! Interrompendo a execução.");


        req.session.usuario = { id: resultInsert.rows[0].id, username };
        console.log('Sessão definida após cadastro:', req.session.usuario);

        const {
            nome, endereco, latitude, longitude, permite_consumo_local, permite_retirada,
            permite_entrega, taxa_entrega, raio_entrega, tempo_medio_entrega
        } = req.body;

        // Convertendo valores vazios para NULL antes de enviar ao banco
        const dias_funcionamento = req.body.dias_funcionamento || null;
        const enderecoFormatado = req.body.endereco?.trim() || null;
        const latitudeNum = req.body.latitude?.trim() !== '' ? parseFloat(req.body.latitude) : null;
        const longitudeNum = req.body.longitude?.trim() !== '' ? parseFloat(req.body.longitude) : null;
        const taxaEntregaNum = req.body.taxa_entrega?.trim() !== '' ? parseFloat(req.body.taxa_entrega) : null;
        const raioEntregaNum = req.body.raio_entrega?.trim() !== '' ? parseFloat(req.body.raio_entrega) : null;
        const tempoMedioEntregaNum = req.body.tempo_medio_entrega?.trim() !== '' ? parseInt(req.body.tempo_medio_entrega) : null;

        console.log('Conectando ao banco para inserir restaurante...');
        const client2 = await conectarBanco();

        try {
            console.log('Dados que serão inseridos na tabela restaurantes:', {
                usuario_id: req.session.usuario.id,
                nome,
                horarios_funcionamento: JSON.stringify({
                    Segunda: { abertura: req.body.horario_abertura_segunda || null, fechamento: req.body.horario_fechamento_segunda || null },
                    Terca: { abertura: req.body.horario_abertura_terca || null, fechamento: req.body.horario_fechamento_terca || null },
                    Quarta: { abertura: req.body.horario_abertura_quarta || null, fechamento: req.body.horario_fechamento_quarta || null },
                    Quinta: { abertura: req.body.horario_abertura_quinta || null, fechamento: req.body.horario_fechamento_quinta || null },
                    Sexta: { abertura: req.body.horario_abertura_sexta || null, fechamento: req.body.horario_fechamento_sexta || null },
                    Sabado: { abertura: req.body.horario_abertura_sabado || null, fechamento: req.body.horario_fechamento_sabado || null },
                    Domingo: { abertura: req.body.horario_abertura_domingo || null, fechamento: req.body.horario_fechamento_domingo || null }
                }),
                dias_funcionamento,
                endereco: enderecoFormatado,
                latitude: latitudeNum,
                longitude: longitudeNum,
                permite_consumo_local: permite_consumo_local === 'on',
                permite_retirada: permite_retirada === 'on',
                permite_entrega: permite_entrega === 'on',
                taxa_entrega: taxaEntregaNum,
                raio_entrega: raioEntregaNum,
                tempo_medio_entrega: tempoMedioEntregaNum
            });

            console.log('Inserindo restaurante no banco...');
            const resultRestaurante = await client2.query(
                `INSERT INTO restaurantes (
                    usuario_id, nome, horarios_funcionamento,
                    dias_funcionamento, endereco, latitude, longitude,
                    permite_consumo_local, permite_retirada, permite_entrega,
                    taxa_entrega, raio_entrega, tempo_medio_entrega
                ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13) RETURNING id`,
                [
                    req.session.usuario.id, nome,
                    JSON.stringify({
                        Segunda: { abertura: req.body.horario_abertura_segunda || null, fechamento: req.body.horario_fechamento_segunda || null },
                        Terca: { abertura: req.body.horario_abertura_terca || null, fechamento: req.body.horario_fechamento_terca || null },
                        Quarta: { abertura: req.body.horario_abertura_quarta || null, fechamento: req.body.horario_fechamento_quarta || null },
                        Quinta: { abertura: req.body.horario_abertura_quinta || null, fechamento: req.body.horario_fechamento_quinta || null },
                        Sexta: { abertura: req.body.horario_abertura_sexta || null, fechamento: req.body.horario_fechamento_sexta || null },
                        Sabado: { abertura: req.body.horario_abertura_sabado || null, fechamento: req.body.horario_fechamento_sabado || null },
                        Domingo: { abertura: req.body.horario_abertura_domingo || null, fechamento: req.body.horario_fechamento_domingo || null }
                    }),
                    dias_funcionamento,
                    enderecoFormatado,
                    latitudeNum,
                    longitudeNum,
                    permite_consumo_local === 'on',
                    permite_retirada === 'on',
                    permite_entrega === 'on',
                    taxaEntregaNum,
                    raioEntregaNum,
                    tempoMedioEntregaNum
                ]
            );

            console.log('Restaurante cadastrado com sucesso! ID:', resultRestaurante.rows[0].id);

            // Se houver upload de logo
            if (req.file) {
                console.log('Logo detectada:', req.file);
                const logoPath = `/uploads/${req.file.filename}`;
                console.log('Salvando logo em:', logoPath);

                await client2.query('UPDATE restaurantes SET logo_url = $1 WHERE id = $2', [logoPath, resultRestaurante.rows[0].id]);
                /////////craindo a seesion  do restaurante
               
                req.session.usuario = {  ...req.session.usuario,     restaurante_id: resultRestaurante.rows[0].id};     
 
                  console.log('sessiom id restaurantes :', req.session.usuario);
            }

            console.log('Redirecionando para dashboard...');
            res.redirect('/dashboard');
        } catch (error) {
            console.error('Erro ao cadastrar restaurante:', error);
            res.status(500).send('Erro ao cadastrar restaurante.');
        } finally {
            client2.release();
        }

    } catch (error) {
        console.error('Erro no cadastro do usuário:', error);
        res.status(500).send('Erro ao cadastrar usuário.');
    } finally {
        client.release();
    }
});

// Rota para editar o restaurante
app.get('/dashboard/restaurante/editar', verificarAutenticacao, async (req, res) => {
    const client = await conectarBanco();
    try {
        const result = await client.query(
            'SELECT * FROM restaurantes WHERE id = $1',
            [req.session.usuario.restaurante_id]
        );
        
        if (result.rows.length > 0) {
            res.render('restaurante_editar', { 
                restaurante: result.rows[0],
                success: req.flash('success'),
                error: req.flash('error')
            });
        } else {
            req.flash('error', 'Restaurante não encontrado');
            res.redirect('/dashboard');
        }
    } catch (error) {
        console.error('Erro ao buscar dados do restaurante:', error);
        req.flash('error', 'Erro ao carregar dados do restaurante');
        res.redirect('/dashboard');
    } finally {
        client.release();
    }
});

app.post('/dashboard/restaurante/atualizar', verificarAutenticacao, upload.single('logo'), async (req, res) => {
    const client = await conectarBanco();
    try {
        const {
            nome, horario_abertura, horario_fechamento, 
            dias_funcionamento, endereco, latitude, longitude,
            permite_consumo_local, permite_retirada, permite_entrega,
            taxa_entrega, raio_entrega, tempo_medio_entrega
        } = req.body;

        const logo_url = req.file ? `/uploads/${req.file.filename}` : req.body.logo_atual;

        await client.query(
            `UPDATE restaurantes SET 
                nome = $1, horario_abertura = $2, horario_fechamento = $3,
                dias_funcionamento = $4, endereco = $5, latitude = $6,
                longitude = $7, permite_consumo_local = $8, permite_retirada = $9,
                permite_entrega = $10, taxa_entrega = $11, raio_entrega = $12,
                tempo_medio_entrega = $13, logo_url = $14
            WHERE id = $15`,
            [
                nome, horario_abertura, horario_fechamento,
                dias_funcionamento, endereco, latitude,
                longitude, permite_consumo_local === 'on', permite_retirada === 'on',
                permite_entrega === 'on', taxa_entrega || null, raio_entrega || null,
                tempo_medio_entrega || null, logo_url, req.session.usuario.restaurante_id
            ]
        );

        req.flash('success', 'Restaurante atualizado com sucesso!');
        res.redirect('/dashboard/restaurante/editar');
    } catch (error) {
        console.error('Erro ao atualizar restaurante:', error);
        req.flash('error', 'Erro ao atualizar restaurante');
        res.redirect('/dashboard/restaurante/editar');
    } finally {
        client.release();
    }
});

app.post('/dashboard/categorias/nova', verificarAutenticacao, async (req, res) => {
    try {
        const { nome } = req.body;
        
        if (!nome || nome.trim() === '') {
            return res.status(400).json({ success: false, message: 'Nome da categoria é obrigatório' });
        }
        
        // Inserir nova categoria no banco de dados
        const result = await pool.query(
            'INSERT INTO categorias (nome, restaurante_id) VALUES ($1, $2) RETURNING id, nome',
            [nome, req.session.usuario.restaurante_id]
        );
        
        const novaCategoria = result.rows[0];
        
        res.json({
            success: true,
            message: 'Categoria criada com sucesso',
            categoria: novaCategoria
        });
    } catch (error) {
        console.error('Erro ao criar categoria:', error);
        res.status(500).json({ success: false, message: 'Erro ao criar categoria' });
    }
});

app.get('/dashboard/cardapio', verificarAutenticacao, async (req, res) => {
    const client = await conectarBanco();
    try {
        const restaurante = await client.query('SELECT id FROM restaurantes WHERE usuario_id = $1', [req.session.usuario.id]);
        if (!restaurante.rows[0]) {
            return res.redirect('/dashboard');
        }

        const restaurante_id = restaurante.rows[0].id;
        const categorias = await client.query('SELECT * FROM categorias WHERE restaurante_id = $1 ORDER BY ordem', [restaurante_id]);
        const pratos = await client.query(
            `SELECT p.*, c.nome as categoria 
             FROM pratos p 
             LEFT JOIN categorias c ON p.categoria_id = c.id 
             WHERE p.restaurante_id = $1
             ORDER BY c.ordem, p.nome`,
            [restaurante_id]
        );

        res.render('cardapio_gerenciar', {
            categorias: categorias.rows,
            pratos: pratos.rows
        });
    } catch (error) {
        console.error('Erro ao buscar cardápio:', error);
        res.status(500).send('Erro ao carregar cardápio.');
    } finally {
        client.release();
    }
});

app.post('/dashboard/cardapio/categoria/salvar', verificarAutenticacao, async (req, res) => {
    const { nome, descricao, ordem } = req.body;
    const client = await conectarBanco();

    try {
        const restaurante = await client.query('SELECT id FROM restaurantes WHERE usuario_id = $1', [req.session.usuario.id]);
        await client.query(
            'INSERT INTO categorias (restaurante_id, nome, descricao, ordem) VALUES ($1, $2, $3, $4)',
            [restaurante.rows[0].id, nome, descricao, ordem]
        );
        res.redirect('/dashboard/cardapio');
    } catch (error) {
        console.error('Erro ao salvar categoria:', error);
        res.status(500).send('Erro ao salvar categoria.');
    } finally {
        client.release();
    }
});

app.post('/dashboard/cardapio/prato/salvar', verificarAutenticacao, async (req, res) => {
    const client = await conectarBanco();
    try {
        await client.query('BEGIN');
        const restaurante = await client.query('SELECT id FROM restaurantes WHERE usuario_id = $1', [req.session.usuario.id]);
        const restaurante_id = restaurante.rows[0].id;

        // Inserir prato
        const pratoResult = await client.query(
            `INSERT INTO pratos (
                restaurante_id, categoria_id, nome, descricao, preco,
                imagem_url, tempo_preparo
            ) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING id`,
            [
                restaurante_id, req.body.categoria_id, req.body.nome,
                req.body.descricao, req.body.preco, req.body.imagem_url,
                req.body.tempo_preparo
            ]
        );

        const prato_id = pratoResult.rows[0].id;

        // Inserir ingredientes
        if (req.body.ingredientes && req.body.ingredientes.length > 0) {
            for (let i = 0; i < req.body.ingredientes.length; i++) {
                await client.query(
                    'INSERT INTO ingredientes (prato_id, nome, removivel) VALUES ($1, $2, $3)',
                    [prato_id, req.body.ingredientes[i], req.body.ingredientes_removiveis[i] === 'on']
                );
            }
        }

        // Inserir complementos
        if (req.body.complementos && req.body.complementos.length > 0) {
            for (let i = 0; i < req.body.complementos.length; i++) {
                await client.query(
                    'INSERT INTO complementos (prato_id, nome, preco_adicional, maximo_escolhas) VALUES ($1, $2, $3, $4)',
                    [prato_id, req.body.complementos[i], req.body.complementos_precos[i], req.body.complementos_max[i]]
                );
            }
        }

        await client.query('COMMIT');
        res.redirect('/dashboard/cardapio');
    } catch (error) {
        await client.query('ROLLBACK');
        console.error('Erro ao salvar prato:', error);
        res.status(500).send('Erro ao salvar prato.');
    } finally {
        client.release();
    }
});

app.get('/dashboard/cardapio/categoria/excluir/:id', verificarAutenticacao, async (req, res) => {
    const client = await conectarBanco();
    try {
        await client.query('DELETE FROM categorias WHERE id = $1', [req.params.id]);
        res.redirect('/dashboard/cardapio');
    } catch (error) {
        console.error('Erro ao excluir categoria:', error);
        res.status(500).send('Erro ao excluir categoria.');
    } finally {
        client.release();
    }
});

app.get('/dashboard/cardapio/prato/excluir/:id', verificarAutenticacao, async (req, res) => {
    const client = await conectarBanco();
    try {
        await client.query('BEGIN');
        await client.query('DELETE FROM ingredientes WHERE prato_id = $1', [req.params.id]);
        await client.query('DELETE FROM complementos WHERE prato_id = $1', [req.params.id]);
        await client.query('DELETE FROM pratos WHERE id = $1', [req.params.id]);
        await client.query('COMMIT');
        res.redirect('/dashboard/cardapio');
    } catch (error) {
        await client.query('ROLLBACK');
        console.error('Erro ao excluir prato:', error);
        res.status(500).send('Erro ao excluir prato.');
    } finally {
        client.release();
    }
});

app.post('/dashboard/cardapio/adicionar', verificarAutenticacao, async (req, res) => {
    const { nome, descricao, preco, categoria_id, tempo_preparo } = req.body;
    const client = await conectarBanco();
    
    try {
        await client.query(
            'INSERT INTO pratos (restaurante_id, categoria_id, nome, descricao, preco, tempo_preparo) VALUES ($1, $2, $3, $4, $5, $6)',
            [req.session.usuario.restaurante_id, categoria_id, nome, descricao, preco, tempo_preparo]
        );
        res.redirect('/dashboard/cardapio');
    } catch (error) {
        console.error('Erro ao adicionar prato:', error);
        res.status(500).send('Erro ao adicionar prato.');
    } finally {
        client.release();
    }
});

app.post('/dashboard/cardapio/atualizar/:id', verificarAutenticacao, async (req, res) => {
    const { id } = req.params;
    const { nome, descricao, preco, tempo_preparo } = req.body;
    const client = await conectarBanco();
    try {
        await client.query(
            'UPDATE pratos SET nome = $1, descricao = $2, preco = $3, tempo_preparo = $4 WHERE id = $5 AND restaurante_id = $6',
            [nome, descricao, preco, tempo_preparo, id, req.session.usuario.restaurante_id]
        );
        res.redirect('/dashboard/cardapio');
    } catch (error) {
        console.error('Erro ao atualizar prato:', error);
        res.status(500).send('Erro ao atualizar prato.');
    } finally {
        client.release();
    }
});


app.post('/dashboard/pedidos/criar', verificarAutenticacao, async (req, res) => {
    const { produtos, total } = req.body;
    const usuario_id = req.session.usuario.id; // ID do usuário logado
    const client = await conectarBanco();

    try {
        console.log('Criando novo pedido para o usuário:', usuario_id);
        console.log('Produtos recebidos:', produtos);
        console.log('Total do pedido:', total);

        const result = await client.query(
            'INSERT INTO pedidos (usuario_id, produtos, total, status) VALUES ($1, $2, $3, $4) RETURNING id',
            [usuario_id, produtos, total, 'pendente']
        );

        console.log('Pedido criado com sucesso. ID do pedido:', result.rows[0].id);
        res.redirect('/dashboard/pedidos');
    } catch (error) {
        console.error('Erro ao criar pedido:', error);
        res.status(500).send('Erro ao criar pedido.');
    } finally {
        client.release();
    }
});

app.post('/dashboard/pedidos/atualizar/:id', verificarAutenticacao, async (req, res) => {
    const { id } = req.params;
    const { status } = req.body;
    const client = await conectarBanco();

    try {
        console.log(`Atualizando status do pedido ${id} para "${status}"...`);
        const result = await client.query(
            'UPDATE pedidos SET status = $1 WHERE id = $2',
            [status, id]
        );

        if (result.rowCount === 0) {
            console.log(`Pedido ${id} não encontrado.`);
            return res.status(404).send('Pedido não encontrado.');
        }

        console.log(`Status do pedido ${id} atualizado para "${status}".`);
        res.redirect('/dashboard/pedidos');
    } catch (error) {
        console.error('Erro ao atualizar pedido:', error);
        res.status(500).send('Erro ao atualizar pedido.');
    } finally {
        client.release();
    }
});

app.get('/dashboard/pedidos/excluir/:id', verificarAutenticacao, async (req, res) => {
    const { id } = req.params;
    const client = await conectarBanco();

    try {
        console.log(`Excluindo pedido ${id}...`);
        const result = await client.query('DELETE FROM pedidos WHERE id = $1', [id]);

        if (result.rowCount === 0) {
            console.log(`Pedido ${id} não encontrado.`);
            return res.status(404).send('Pedido não encontrado.');
        }

        console.log(`Pedido ${id} excluído com sucesso.`);
        res.redirect('/dashboard/pedidos');
    } catch (error) {
        console.error('Erro ao excluir pedido:', error);
        res.status(500).send('Erro ao excluir pedido.');
    } finally {
        client.release();
    }
});

app.get('/dashboard/pedidos/gerenciar', verificarAutenticacao, async (req, res) => {
    const client = await conectarBanco();
    try {
        console.log('Buscando pedidos para gerenciamento...');
        const result = await client.query('SELECT * FROM pedidos ORDER BY data_criacao DESC');
        console.log('Pedidos encontrados para gerenciamento:', result.rows);
        res.render('pedido_gerente', { pedidos: result.rows });
    } catch (error) {
        console.error('Erro ao buscar pedidos para gerenciamento:', error);
        res.status(500).send('Erro ao carregar interface de gerenciamento de pedidos.');
    } finally {
        client.release();
    }
});

app.post('/api/pedidos/:id/status', verificarAutenticacao, async (req, res) => {
    const { id } = req.params;
    const { status } = req.body;
    const client = await conectarBanco();

    try {
        console.log(`API: Atualizando status do pedido ${id} para "${status}"...`);
        const result = await client.query(
            'UPDATE pedido_confirmacao SET status_confirmacao = $1 WHERE id = $2 RETURNING *',
            [status, id]
        );

        if (result.rowCount === 0) {
            console.log(`API: Pedido ${id} não encontrado.`);
            return res.status(404).json({ success: false, message: 'Pedido não encontrado.' });
        }

        console.log(`API: Status do pedido ${id} atualizado para "${status}".`);
        return res.json({ success: true, pedido: result.rows[0] });
    } catch (error) {
        console.error('API: Erro ao atualizar pedido:', error);
        return res.status(500).json({ success: false, message: 'Erro ao atualizar pedido.' });
    } finally {
        client.release();
    }
});

// Iniciar servidor
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`🌐 Dashboard rodando em http://localhost:${PORT}`));