const express = require('express');
const mysql = require('mysql2/promise'); // Para MySQL
const session = require('express-session');
const MySQLStore = require('express-mysql-session')(session); // Para sessões com MySQL
const bcrypt = require('bcrypt');
const multer = require('multer');
const path = require('path');
const flash = require('express-flash');
const upload = require('./config/multer');
const readline = require('readline');
const startNgrok = require('./ngrok');
const avaliacoesRouter = require('../routes/avaliacoes');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/../views');
// Add this near other app.use() statements
app.use('/images/icons', express.static(path.join(__dirname, '..', 'public', 'images', 'icons')));
// Remove all other static middleware and use a single configuration
app.use(express.static(path.join(__dirname, '..', 'public')));
//app.use(express.static(__dirname + '/../public'));
app.use('dados/uploads', express.static(path.join(__dirname, '..', 'public', 'uploads')));
app.use('dados/img', express.static(path.join(__dirname, '..', 'public', 'img')));
app.use(express.static(__dirname + '/public'));
app.use('dados/css', express.static(path.join(__dirname, '..', 'public', 'css')));
app.use('fonts', express.static(path.join(__dirname, '..', 'public', 'fonts')));
app.use(express.static('public'));
app.use('/js', express.static(path.join(__dirname, '..', 'js')));
app.use(avaliacoesRouter);
const DB_CONFIG = {
    host: 'localhost',
    user: 'irismar',
    password: '719732',
    database: 'lanchonete_bot',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
};

// Criar pool de conexões MySQL
const pool = mysql.createPool(DB_CONFIG);

// Configuração da sessão com MySQL
const sessionStore = new MySQLStore({
    expiration: 86400000, // 24 horas
    createDatabaseTable: true,
    schema: {
        tableName: 'sessions',
        columnNames: {
            session_id: 'session_id',
            expires: 'expires',
            data: 'data'
        }
    }
}, pool);

app.use(session({
    key: 'sessao_usuario',
    secret: 'seuSegredoSeguro',
    store: sessionStore,
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false, httpOnly: false, maxAge: 24 * 60 * 60 * 1000 }
}));
app.use(flash()); // Configuração CORRETA do flash

async function conectarBanco() {
    try {
        const connection = await pool.getConnection();
        ///console.log('Conexão com o banco de dados estabelecida.');
        return connection;
    } catch (error) {
        console.error('Erro ao conectar ao banco de dados:', error);
        throw error;
    }
}




app.get('/:restaurante', async (req, res, next) => { 
    const nomeRestaurante = req.params.restaurante;  
    const nomeRestauranteURL = nomeRestaurante.replace(/\s+/g, '-');
    //console.log("consultar ", nomeRestaurante, 'consulta com url=', nomeRestauranteURL);
    //console.log("url", nomeRestauranteURL);

    // Se a URL for "cardapio_digital", interrompe a execução do código
    if (nomeRestauranteURL === 'cardapio_digital') {
       // console.log("Interrompendo execução devido à URL 'cardapio_digital'");
        return next(); // Pula para a próxima rota
    }

    const nomeRestauranteLike = `%${nomeRestauranteURL}%`;
    const nomeRestauranteSimilar = `%${nomeRestauranteURL.replace(/-/g, '_')}%`;

    //console.log("Consultar LIKE:", nomeRestauranteLike);
    //console.log("Consultar SIMILAR:", nomeRestauranteSimilar);

    const rotasServico = [
        'login', 'cadastro', 'register', 'dashboard', 'cardapio', 
        'cardapio_digital', 'pedidos', 'sair', 'pedido_confirmado', 
        'finalizar_pedido', 'salvar-telefone', 'uploads', 'img', 'css', 'dashboard'
    ];
    if (rotasServico.includes(nomeRestauranteURL)) {
        //console.log("Pulando código e indo para a próxima rota...");
        return next();
    }

    if (!nomeRestauranteURL) {
        //console.log("Erro: ID do restaurante não fornecido.");
        return res.status(400).send('ID do restaurante não fornecido.');
    }

    const client = await conectarBanco();    

    try {
        // Consultar informações do restaurante
        //console.log("Consultando restaurante: ", nomeRestaurante);
        //console.log("Consultar similar:", nomeRestauranteSimilar);
        const [restauranteResult] = await client.query(
            `SELECT 
                r.id AS restaurante_id,
                u.id AS usuario_id, 
                r.nome AS nome,
                r.tempo_medio_entrega AS tempo_medio_entrega,
                u.username 
            FROM usuarios u 
            INNER JOIN restaurantes r ON r.usuario_id = u.id 
            WHERE LOWER(r.nome) LIKE LOWER(?) 
               OR LOWER(r.nome) LIKE LOWER(?)`,
            [nomeRestauranteLike, nomeRestauranteSimilar]
        );

        //console.log("Resultado da consulta ao restaurante:", restauranteResult);
        if (!restauranteResult || restauranteResult.length === 0) {
            //console.log("Restaurante não encontrado");
            return res.status(404).send('Restaurante não encontrado');
        }

        //console.log("restaurante_id encontrado:", restauranteResult[0].restaurante_id);
        req.session.id_restaurante = restauranteResult[0].restaurante_id;
        const tempo_medio_entrega = restauranteResult[0].tempo_medio_entrega;
        // Consultar os pratos do restaurante
        //c//onsole.log("Consultando pratos do restaurante com ID:", req.session.id_restaurante);
        const [pratosResult] = await client.query(`
            SELECT DISTINCT
                p.id AS prato_id,
                p.categoria AS categoria,
                p.restaurante_id AS restaurante_id,
                p.nome AS prato_nome,
                p.tempo_preparo AS tempo_preparo,
                p.descricao AS descricao,
                p.preco AS prato_preco,
                p.imagem AS prato_imagem,
                p.ordem,
                c.id AS complemento_id,
                c.nome AS complemento_nome,
                c.preco_adicional,
                cat.icone AS categoria_icone
            FROM pratos p
            LEFT JOIN complementos c ON p.id = c.prato_id
            LEFT JOIN categorias_modal cat ON p.restaurante_id = cat.id_restaurante
            WHERE p.restaurante_id = ?
            ORDER BY p.id ASC
        `, [req.session.id_restaurante]);

        ///console.log("Pratos encontrados:", pratosResult);
        const pratosMap = new Map();

        pratosResult.forEach(row => {
            ///console.log("Processando prato:", row.prato_id);
            if (!pratosMap.has(row.prato_id)) {
                pratosMap.set(row.prato_id, {
                    id: row.prato_id,
                    ordem: row.ordem,
                    tempo_preparo: row.tempo_preparo,
                    nome: row.prato_nome,
                    categoria: row.categoria,
                    tempo_medio_entrega:tempo_medio_entrega,
                    icone: row.categoria_icone,
                    preco: parseFloat(row.prato_preco),
                    imagem: row.prato_imagem,
                    descricao: row.descricao,
                    restaurante_id: row.restaurante_id,
                    opcionais: []
                });
            }

            if (row.complemento_id && !pratosMap.get(row.prato_id).opcionais.some(opt => opt.id === row.complemento_id)) {
                pratosMap.get(row.prato_id).opcionais.push({
                    id: row.complemento_id,
                    nome: row.complemento_nome,
                    preco_adicional: parseFloat(row.preco_adicional)
                });
            }
        });

        // Converter o mapa para um array e ordenar pelo campo 'ordem'
        const cardapio = Array.from(pratosMap.values()).sort((a, b) => a.ordem - b.ordem);

        ///onsole.log("Cardápio gerado:", cardapio);

        // Renderizar a página com os dados
        res.render('cardapio_digital', { 
            cardapio, 
            telefone: req.session.telefone,
            titulo: restauranteResult[0].nome,
            carrinho: [] // O carrinho agora é gerenciado pelo localStorage no cliente
        });

    } catch (error) {
        console.error('Erro ao buscar cardápio:', error);
        res.status(500).send('Erro ao carregar cardápio.');
    } finally {
        // Libera a conexão do cliente para o pool
        client.release();
    }
});

app.get('/cardapio', async (req, res) => {
    console.log("url", req.query);
    const restauranteId = req.query.Id;
    console.log("url", restauranteId);
    if (!restauranteId) {
        return res.status(400).send('ID do restaurante não fornecido.');
    }
    const client = await conectarBanco();
    req.session.id_restaurante = restauranteId;
    console.log("url_sessom", req.session.id_restaurante);
    try {
        // Get restaurant info first
        const [restauranteResult] = await client.execute(
            'SELECT * FROM restaurantes WHERE id = ?',
            [restauranteId]
        );
        
        if (!restauranteResult || restauranteResult.length === 0) {
            return res.status(404).send('Restaurante não encontrado');
        }

        // Modified query to include restaurant ID
        const [pratosResult] = await client.execute(`
            SELECT DISTINCT
                p.id AS prato_id,
                p.categoria AS categoria,
                p.restaurante_id AS restaurante_id,
                p.nome AS prato_nome,
                p.descricao AS descricao,
                p.preco AS prato_preco,
                p.imagem AS prato_imagem,
                p.ordem,
                c.id AS complemento_id,
                c.nome AS complemento_nome,
                c.preco_adicional,
                cat.icone AS categoria_icone
            FROM pratos p
            LEFT JOIN complementos c ON p.id = c.prato_id
            LEFT JOIN categorias_modal cat ON p.restaurante_id = cat.id_restaurante
            WHERE p.restaurante_id = ?
            ORDER BY p.id ASC
        `, [req.session.id_restaurante]);
        
        const pratosMap = new Map();

        if (pratosResult && pratosResult.length > 0) {
            pratosResult.forEach(row => {
                if (!pratosMap.has(row.prato_id)) {
                    pratosMap.set(row.prato_id, {
                        id: row.prato_id,
                        ordem: row.ordem,
                        nome: row.prato_nome,
                        categoria: row.categoria,
                        icone: row.categoria_icone,
                        preco: parseFloat(row.prato_preco),
                        imagem: row.prato_imagem,
                        descricao: row.descricao,
                        restaurante_id: row.restaurante_id,
                        opcionais: []
                    });
                }
              
                if (row.complemento_id && !pratosMap.get(row.prato_id).opcionais.some(opt => opt.id === row.complemento_id)) {
                    pratosMap.get(row.prato_id).opcionais.push({
                        id: row.complemento_id,
                        nome: row.complemento_nome,
                        preco_adicional: parseFloat(row.preco_adicional)
                    });
                }
            });
        }

        // Converter o mapa para um array e ordenar pelo campo 'ordem'
        const cardapio = Array.from(pratosMap.values()).sort((a, b) => a.ordem - b.ordem);
       
        res.render('cardapio_digital', { 
            cardapio,  
            titulo: restauranteResult[0].nome,
            telefone: req.session.telefone,
            carrinho: [] // O carrinho agora é gerenciado pelo localStorage no cliente
        });
    } catch (error) {
        console.error('Erro ao buscar cardápio:', error);
        res.status(500).send('Erro ao carregar cardápio.');
    } finally {
        client.release();
    }
});

// Página inicial - Página de apresentação do serviço
app.get('/', (req, res) => {
    res.render('home');
});

app.post('/salvar-telefone', async (req, res) => {
    const { telefone } = req.body;
    if (!telefone) {
        return res.render('telefone', { erro: 'Número de telefone é obrigatório' });
    }
    const client = await conectarBanco();
    try {
        // Verificar se o telefone já existe
        const result = await client.query('SELECT id FROM cliente WHERE telefone = ?', [telefone]);
        
        if (result.rows.length > 0) {
            // Se já existir, atualizar o último acesso
            await client.query('UPDATE cliente SET data_ultimo_acesso = ? WHERE telefone = ?', [new Date(), telefone]);
        } else {
            // Se não existir, criar um novo cliente com o primeiro acesso
            await client.query('INSERT INTO cliente (telefone, data_primeiro_acesso, data_ultimo_acesso) VALUES (?, ?, ?)', [telefone, new Date(), new Date()]);
        }

        req.session.telefone = telefone;

        ////res.redirect('/cardapio_digital');
    } catch (error) {
        console.error('Erro ao salvar telefone:', error);
        res.status(500).send('Erro ao salvar número de telefone.');
    } finally {
        client.release();
    }
});
// Página de visualização do cardápio




// ... código existente ...


// ... resto do código existente ...






app.post('/dashboard/pratos/reorder', verificarAutenticacao, async (req, res) => {
    const client = await conectarBanco();
    try {
        await client.query('BEGIN');
        
        for (const item of req.body.ordem) {
            await client.query(
                'UPDATE pratos SET ordem = ? WHERE id = ? AND restaurante_id = ?',
                [item.ordem, item.id, req.session.usuario.restaurante_id]
            );
        }
        
        await client.query('COMMIT');
        res.json({ success: true });
    } catch (error) {
        await client.query('ROLLBACK');
        console.error('Erro ao reordenar pratos:', error);
        res.status(500).json({ success: false, error: 'Erro ao reordenar pratos' });
    } finally {
        client.release();
    }
});
 app.get('/dashboard/pratos/organizar', verificarAutenticacao, async (req, res) => {
    const client = await conectarBanco();
    try {
        const result = await client.query(`
            SELECT p.*, c.nome as categoria_nome 
            FROM pratos p 
            LEFT JOIN categorias c ON p.categoria = c.nome
            WHERE p.restaurante_id = ? 
            ORDER BY p.ordem NULLS LAST, p.id`, 
            [req.session.usuario.restaurante_id]
        );
        
        res.render('organizar_pratos', { 
            pratos: result.rows,
            currentPage: 'organizar_pratos'
        });
    } catch (error) {
        console.error('Erro ao carregar pratos:', error);
        res.status(500).send('Erro ao carregar pratos');
    } finally {
        client.release();
    }
});

app.post('/dashboard/pratos/atualizar-ordem', verificarAutenticacao, async (req, res) => {
    const { ordens } = req.body;
    const client = await conectarBanco();
    
    try {
        await client.query('BEGIN');
        
        for (const [pratoId, ordem] of Object.entries(ordens)) {
            await client.query(
                'UPDATE pratos SET ordem = ? WHERE id = ? AND restaurante_id = ?',
                [ordem, pratoId, req.session.usuario.restaurante_id]
            );
        }
        
        await client.query('COMMIT');
        res.json({ success: true });
    } catch (error) {
        await client.query('ROLLBACK');
        console.error('Erro ao atualizar ordem:', error);
        res.status(500).json({ success: false });
    } finally {
        client.release();
    }
});

// Rota para processar a finalização do pedido
// Rota para confirmação do pedido







app.post('/finalizar_pedido', async (req, res) => {
    console.log(" Iniciando finalização do pedido");
    const client = await conectarBanco();
    let pedidoId = null;

    try {
        await client.query('BEGIN');
        const [restauranteResult] = await client.query('SELECT * FROM restaurantes WHERE id=? LIMIT 1' ,[req.session.id_restaurante]);
        const restaurante = restauranteResult[0];
        if (!restaurante) {
            throw new Error('Restaurante não encontrado');
        }
        console.log("dados do restaurante ", restaurante);  
      
        const id = req.query; // Captura o valor do parâmetro "id"        
         const telefone = req.body.telefone.replace(/\D/g, '');     
        // Save the phone number to the session for future use
        req.session.telefone = telefone;

        // Verificar se o cliente já existe no banco de dados
        const [clienteResult] = await client.query(
            'SELECT id FROM cliente WHERE telefone = ?',
            [telefone]
        );
       
        // Se o cliente não existir, cadastrá-lo
        if (clienteResult.length === 0) {
            console.log("Cliente não encontrado, cadastrando novo cliente com telefone:", telefone);
            await client.query(
                'INSERT INTO cliente (telefone, data_primeiro_acesso, data_ultimo_acesso) VALUES (?, ?, ?)',
                [telefone, new Date(), new Date()]
            );
        } else {
            console.log("Cliente encontrado com telefone:", telefone);
            await client.query(
                'UPDATE cliente SET data_ultimo_acesso = ? WHERE telefone = ?',
                [new Date(), telefone]
            );
        }
        // Get customer's last order
        const ultimoPedidoResult = await client.query(
            'SELECT data_confirmacao FROM pedido_confirmacao WHERE telefone = ? ORDER BY data_confirmacao DESC LIMIT 1',
            [telefone]
        );
        console.log("Telefone recebido:", req.body.telefone);
        // Calculate delivery time (example: 30 minutes for delivery, 15 for local)
        const previsaoEntrega = new Date();
        const agora = new Date();
        const hora = agora.toTimeString().split(' ')[0]; // Extrai "HH:MM:SS"
        ///console.log("hora agora",hora);
        previsaoEntrega.setMinutes(previsaoEntrega.getMinutes() + (req.body.tipoEntrega === 'entrega' ? 30 : 15));
        const previsaoHora = previsaoEntrega.toTimeString().split(' ')[0];
        //console.log("previsao de entrega",previsaoEntrega);
        // Insert main order
        console.log("Telefone recebido 290:", req.body.telefone);
        const orderResult = await client.query(
            'INSERT INTO pedidos (cliente_telefone, tipo_entrega, endereco_entrega, status, total) VALUES (?, ?, ?, ?, ?)',
            [req.body.telefone, req.body.tipoEntrega, req.body.enderecoEntrega, 'pendente', req.body.carrinho.total]
        );
        const [insertedOrder] = await client.query('SELECT id FROM pedidos WHERE id = LAST_INSERT_ID()');
        const pedidoId = insertedOrder[0].id;
        console.log("SELECT id FROM pedidos WHERE id = LAST_INSERT_ID() ",insertedOrder);
        console.log("somete a ID  id", pedidoId,"############");
        // Insert order confirmation with extended details
        await client.query(`
            INSERT INTO pedido_confirmacao (
                pedido_id, dados_completos, telefone, tipo_entrega, 
                endereco_entrega, total, hora_pedido, previsao_entrega,
                ultimo_pedido_data, restaurante_id, restaurante_nome,
                restaurante_telefone, restaurante_endereco, subtotal,
                status_preparo, forma_pagamento
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `, [
            pedidoId,
            JSON.stringify(req.body),
            req.body.telefone,
            req.body.tipoEntrega,
            req.body.enderecoEntrega,
            req.body.carrinho.total,
            hora,
            previsaoHora,
            ultimoPedidoResult?.rows?.[0]?.data_confirmacao || null,
            restaurante.id,
            restaurante.nome,
            restaurante.telefone,
            restaurante.endereco,
            req.body.carrinho.total,
            'pendente',
            'dinheiro' // You might want to add payment method selection in your frontend
        ]);
    
        // ... rest of your existing code for inserting items and optional items ...
         console.log("id do pedido saindo de app 522:", pedidoId);
        await client.query('COMMIT');

        res.json({
            success: true,
            pedido: {
                pedidoId,
                previsaoEntrega: previsaoEntrega.toISOString(),
                restaurante: {
                    nome: restaurante.nome,
                    telefone: restaurante.telefone
                }
            }
        });

    } catch (error) {
        await client.query('ROLLBACK');
        console.error(' Erro ao processar pedido:', error);
        res.status(500).json({
            success: false,
            error: error.message || "Erro ao processar pedido. Por favor, tente novamente."
        });
    } finally {
        client.release();
    }
});

// Update the pedido_confirmado route
app.get('/pedido_confirmado', async (req, res) => {
    const client = await conectarBanco();
    try {
        const dadosPedidoStr = req.query.pedidoId;
        if (!dadosPedidoStr) {
            ///return res.redirect('/cardapio_digital');
        }
        console.log('numero id pedido',dadosPedidoStr);
        const dadosPedido =  dadosPedidoStr.trim();
        console.log("url",req.query); 
        // Get complete order details
        const pedidosResult = await client.query(`
            SELECT 
                pc.pedido_id as id,
                pc.data_confirmacao as data_pedido,
                pc.tipo_entrega,
                pc.endereco_entrega,
                pc.total,
                pc.status_preparo as status,
                pc.hora_pedido,
                pc.previsao_entrega,
                pc.taxa_entrega,
                pc.dados_completos as dados_pedido
            FROM pedido_confirmacao pc
            WHERE pc.pedido_id = ?
            ORDER BY pc.data_confirmacao DESC
        `, [dadosPedido]);
        
        if (!pedidosResult || !pedidosResult.rows || pedidosResult.rows.length === 0) {
            console.log('Nenhum pedido encontrado em SELECT pc.pedido_id as id linha 581,' ,pedidosResult.rows);
            console.log('todos os arquivos linha 581,' ,pedidosResult); //return res.redirect('/cardapio_digital');
        }

        const pedidos = pedidosResult[0].map ? pedidosResult[0].map(pedido => {
            const dadosCompletos = typeof pedido.dados_pedido === 'string' 
                ? JSON.parse(pedido.dados_pedido) 
                : pedido.dados_pedido;
            
            if (!dadosCompletos || !dadosCompletos.carrinho || !dadosCompletos.carrinho.items) {
                console.log('Dados do pedido incompletos:', dadosCompletos);
                return null;
            }
            console.log('dados do pedido :', dadosCompletos);
            
            return {
                id: pedido.id,
                data_hora: new Date(pedido.data_pedido).toLocaleString('pt-BR'),
                tipo_entrega: pedido.tipo_entrega,
                endereco: pedido.endereco_entrega || 'Retirada no local',
                total: Number(pedido.total),
                status: pedido.status || 'pendente',
                hora_pedido: pedido.hora_pedido,
                previsao_entrega: pedido.previsao_entrega,
                taxa_entrega: pedido.taxa_entrega ? Number(pedido.taxa_entrega) : 0,
                subtotal: Number(pedido.total) - (pedido.taxa_entrega ? Number(pedido.taxa_entrega) : 0),
                itens: dadosCompletos.carrinho.items.map(item => ({
                    ...item,
                    imagem: item.imagem || null // Adiciona a imagem do prato
                }))
            };
        }) : [];
        
        if (!pedidosResult || !pedidosResult[0] || pedidosResult[0].length === 0) {
            console.log('erro 515,' ,pedidosResult);
            return res.status(404).json({ error: 'Pedido não encontrado' });
        }

        const pedidoCompleto = pedidosResult[0] && pedidosResult[0].length > 0 ? pedidosResult[0][0] : null;

        if (!pedidoCompleto || !pedidoCompleto.dados_pedido) {
            console.log('Dados do pedido não encontrados');
            return res.status(404).json({ error: 'Pedido não encontrado' });
        }

        // Parse dados_completos if it exists
        const dadosCompletos = typeof pedidoCompleto.dados_pedido === 'string' ? 
            JSON.parse(pedidoCompleto.dados_pedido) : 
            pedidoCompleto.dados_pedido;

        if (!dadosCompletos || !dadosCompletos.carrinho || !dadosCompletos.carrinho.items) {
            console.log('Dados do carrinho incompletos:', dadosCompletos);
            //return res.redirect('/cardapio_digital');
        }

        res.render('pedido_confirmado', {
            carrinho: {
                items: dadosCompletos.carrinho?.items.map(item => ({
                    ...item,
                    imagem: item.imagem || null // Adiciona a imagem do prato
                })) || [],
                total: Number(pedidoCompleto.total)
            },
            tipoEntrega: pedidoCompleto.tipo_entrega,
            enderecoEntrega: pedidoCompleto.endereco_entrega,
            total: Number(pedidoCompleto.total),
            telefone: pedidoCompleto.telefone,
            pedidoId: pedidoCompleto.pedido_id,
            previsaoEntrega: pedidoCompleto.previsao_entrega,
            restaurante: {
            nome: pedidoCompleto.restaurante_nome,
            telefone: pedidoCompleto.restaurante_telefone
            },
            status: pedidoCompleto.status_preparo
        });

    } catch (error) {
        console.error('Erro ao processar confirmação do pedido:', error);
        ///res.redirect('/cardapio_digital');
    } finally {
        client.release();
    }
});




////////////////////////////////
// Middleware para verificar se o telefone está na sessão
function verificarTelefone(req, res, next) {
    if (!req.session.telefone) {
        // Redirecionar para o cardápio digital com um parâmetro para mostrar o modal de telefone
        return res.redirect('/cardapio_digital?requirePhone=true');
    }
    next();
}
app.post('/atualizar_quantidade', async (req, res) => {
    try {
        const { itemId, acao } = req.body;
        const carrinho = req.session.carrinho || [];
        
        let novoCarrinho = [...carrinho];
        
        if (acao === 'aumentar') {
            const itemIndex = novoCarrinho.findIndex(item => item.id === itemId);
            if (itemIndex >= 0) {
                novoCarrinho[itemIndex].quantidade += 1;
            }
        } else if (acao === 'diminuir') {
            const itemIndex = novoCarrinho.findIndex(item => item.id === itemId);
            if (itemIndex >= 0 && novoCarrinho[itemIndex].quantidade > 1) {
                novoCarrinho[itemIndex].quantidade -= 1;
            } else if (itemIndex >= 0) {
                novoCarrinho = novoCarrinho.filter(item => item.id !== itemId);
            }
        } else if (acao === 'remover') {
            novoCarrinho = novoCarrinho.filter(item => item.id !== itemId);
        }
        
        req.session.carrinho = novoCarrinho;
        
        res.json({ 
            success: true, 
            carrinho: novoCarrinho,
            total: novoCarrinho.reduce((acc, item) => acc + (item.preco * item.quantidade), 0)
        });
    } catch (error) {
        console.error('Erro ao atualizar quantidade:', error);
        res.status(500).json({ success: false, message: 'Erro ao atualizar quantidade' });
    }
});

function formatTimeDifference(dataPedido) {
    const agora = Date.now(); // Data e hora atuais em milissegundos
    const diferencaMs = agora - new Date(dataPedido).getTime(); // Diferença em milissegundos
    const segundos = Math.floor(diferencaMs / 1000); // Converte para segundos
    const minutos = Math.floor(segundos / 60); // Converte para minutos
    const horas = Math.floor(minutos / 60); // Converte para horas
    const dias = Math.floor(horas / 24); // Converte para dias

    if (dias > 0) {
        return `Há ${dias} dia${dias > 1 ? 's' : ''}`;
    } else if (horas > 0) {
        return `Há ${horas} hora${horas > 1 ? 's' : ''}`;
    } else if (minutos >= 30) {
        return 'Há meia hora';
    } else if (minutos > 0) {
        return `Há ${minutos} minuto${minutos > 1 ? 's' : ''}`;
    } else {
        return 'Agora mesmo';
    }
}
// Rota para exibir os pedidos do cliente
app.get('/pedidos', verificarTelefone, async (req, res) => {
    const telefone = req.session.telefone;
    const client = await conectarBanco();

    try {
        const pedidosResult = await client.query(`
            SELECT 
                pc.pedido_id as id,
                pc.data_confirmacao as data_pedido,
                pc.tipo_entrega,
                pc.endereco_entrega,
                pc.total,
                pc.status_preparo as status,
                pc.hora_pedido,
                pc.previsao_entrega,
                pc.taxa_entrega,
                pc.dados_completos as dados_pedido
            FROM pedido_confirmacao pc
            WHERE pc.telefone = ?
            ORDER BY pc.data_confirmacao DESC
        `, [telefone]);

        if (!pedidosResult || !pedidosResult.rows || pedidosResult.rows.length === 0) {
            console.log('Nenhum pedido encontrado');
            return res.redirect('/cardapio_digital');
        }

        const pedidos = pedidosResult.rows.map(pedido => {
            const dadosCompletos = typeof pedido.dados_pedido === 'string' 
                ? JSON.parse(pedido.dados_pedido) 
                : pedido.dados_pedido;
            
            if (!dadosCompletos || !dadosCompletos.carrinho || !dadosCompletos.carrinho.items) {
                console.log('Dados do pedido incompletos:', dadosCompletos);
                return null;
            }

            return {
                id: pedido.id,
                data_hora: new Date(pedido.data_pedido).toLocaleString('pt-BR'),
                tipo_entrega: pedido.tipo_entrega,
                endereco: pedido.endereco_entrega || 'Retirada no local',
                total: Number(pedido.total),
                status: pedido.status || 'pendente',
                hora_pedido: pedido.hora_pedido,
                previsao_entrega: pedido.previsao_entrega,
                taxa_entrega: pedido.taxa_entrega ? Number(pedido.taxa_entrega) : 0,
                subtotal: Number(pedido.total) - (pedido.taxa_entrega ? Number(pedido.taxa_entrega) : 0),
                itens: dadosCompletos.carrinho.items.map(item => ({
                    ...item,
                    imagem: item.imagem || null // Adiciona a imagem do prato
                }))
            };
        });
        
        console.log("pedidos", pedidosResult.rows);
        res.render('pedidos', { pedidos, telefone });
    } catch (error) {
        console.error('Erro ao buscar pedidos:', error);
        res.status(500).send('Erro ao carregar pedidos.');
    } finally {
        client.release();
    }
});
// Sair (limpar sessão)
app.get('/sair', (req, res) => {
    req.session.destroy();
    res.redirect('/');
});
//////////////////////////

///193.186.4.239
// Iniciar servidor 192.168.1.3

// Middleware para verificar login
function verificarAutenticacao(req, res, next) {
   /// console.log('Sessão atual:', req.session.usuario);
    if (!req.session.usuario) {
        console.log('Usuário não autenticado. Redirecionando para /login...');
        return res.redirect('/login');
    }
    console.log('Usuário autenticado. Continuando...');
    next();
}

// Middleware para logar a sessão completa
app.use((req, res, next) => {
    ///console.log('Sessão completa:', req.session);
    next();
});

// Add this route to handle category search
app.get('/api/categorias/buscar', verificarAutenticacao, async (req, res) => {
    const client = await pool.getConnection();
    try {
        const { termo } = req.query;
        const result = await client.query(
            `SELECT id, nome, icone
             FROM categorias_modal 
             WHERE 
                id_restaurante = ? AND 
                LOWER(nome) LIKE LOWER(?)
             ORDER BY nome 
             LIMIT 10`,
            [req.session.usuario.restaurante_id, `%${termo}%`]
        );
        res.json(result.rows);
    } catch (error) {
        console.error('Erro ao buscar categorias:', error);
        res.status(500).json({ error: 'Erro ao buscar categorias' });
    } finally {
        client.release();
    }
});


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
                FROM json_populate_recordset(null::record, ?::json)
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
            'INSERT INTO categorias (restaurante_id, nome, descricao, ordem) VALUES (?, ?, ?, ?) RETURNING id, nome',
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
        await client.query('DELETE FROM categorias WHERE id = ? AND restaurante_id = ?', 
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
            'INSERT INTO pratos (restaurante_id, categoria_id, nome, descricao, preco, imagem_url, tempo_preparo, disponivel, destaque) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)',
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
        await client.query('DELETE FROM pratos WHERE id = ? AND restaurante_id = ?', 
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
            'UPDATE pratos SET disponivel = ? WHERE id = ? AND restaurante_id = ? RETURNING disponivel',
            [disponivel, req.params.id, req.session.usuario.restaurante_id]
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

app.post('/dashboard/cardapio/ingrediente', verificarAutenticacao, async (req, res) => {
    const { prato_id, nome, removivel } = req.body;
    const client = await conectarBanco();
    try {
        await client.query(
            'INSERT INTO ingredientes (prato_id, nome, removivel) VALUES (?, ?, ?)',
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

// Rota para remover ingrediente
app.post('/dashboard/ingredientes/remover', verificarAutenticacao, async (req, res) => {
    const { prato_id, nome } = req.body;
    const client = await conectarBanco();

    try {
        // Verificar se o prato pertence ao restaurante do usuário
        const [prato] = await client.execute(
            'SELECT id FROM pratos WHERE id = ? AND restaurante_id = ?',
            [prato_id, req.session.usuario.restaurante_id]
        );

        if (!prato.length) {
            return res.status(403).json({ 
                success: false, 
                message: 'Você não tem permissão para modificar este prato' 
            });
        }

        // Remover o ingrediente
        await client.execute(
            'DELETE FROM ingredientes WHERE prato_id = ? AND nome = ?',
            [prato_id, nome]
        );

        res.json({ success: true, message: 'Ingrediente removido com sucesso' });
    } catch (error) {
        console.error('Erro ao remover ingrediente:', error);
        res.status(500).json({ 
            success: false, 
            message: 'Erro ao remover ingrediente' 
        });
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
            'INSERT INTO complementos (prato_id, nome, preco_adicional, maximo_escolhas) VALUES (?, ?, ?, ?)',
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

// Rota para remover complemento
app.post('/dashboard/complementos/remover', verificarAutenticacao, async (req, res) => {
    const { prato_id, nome } = req.body;
    const client = await conectarBanco();

    try {
        // Verificar se o prato pertence ao restaurante do usuário
        const [prato] = await client.execute(
            'SELECT id FROM pratos WHERE id = ? AND restaurante_id = ?',
            [prato_id, req.session.usuario.restaurante_id]
        );

        if (!prato.length) {
            return res.status(403).json({ 
                success: false, 
                message: 'Você não tem permissão para modificar este prato' 
            });
        }

        // Remover o complemento
        await client.execute(
            'DELETE FROM complementos WHERE prato_id = ? AND nome = ?',
            [prato_id, nome]
        );

        res.json({ success: true, message: 'Complemento removido com sucesso' });
    } catch (error) {
        console.error('Erro ao remover complemento:', error);
        res.status(500).json({ 
            success: false, 
            message: 'Erro ao remover complemento' 
        });
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
            WHERE restaurante_id = ? 
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
    let { username, password } = req.body;
    // Remove espaços extras e garante que o username seja somente números
    username = username.trim().replace(/\D/g, ''); // Remove qualquer caractere que não seja número
    password = password.trim(); // Remove espaços extras
    console.log('Tentando fazer login com:', username, password);
    const client = await conectarBanco();  
    try {
        // Verifica se o número de telefone ('tell') corresponde
        const [usuarios] = await client.execute('SELECT * FROM usuarios WHERE tell = ?', [username]);
        console.log('Resultado',usuarios.length );
        
        if (usuarios.length === 0) {
            return res.render('login', { erro: 'Usuário não encontrado' });
        }
        // Verifica a senha
        if (!(await bcrypt.compare(password, usuarios[0].password))) {
            return res.render('login', { erro: 'Usuário ou senha inválidos! 1078' });
        }
        // Se tudo estiver correto, salva a sessão do usuário
        req.session.usuario = { id: usuarios[0].id, username: usuarios[0].username };
      
      ////varficar se usuario tem algum restaurante 
        const restauranteResult = await client.execute('SELECT id FROM restaurantes WHERE usuario_id = ?', [usuarios[0].id]);
        const restaurantes = restauranteResult[0];
        console.log('Resultado',restauranteResult[0] );
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

app.get('/sair', (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            console.error('Erro ao fazer logout:', err);
            return res.status(500).send('Erro ao sair.');
        }
        res.redirect('/login');
    });
});

// Add this function after your existing database connection code
async function getPedidosCounts(restauranteId) {
    const client = await conectarBanco();
    try {
        const [result] = await client.execute(`
            SELECT 
                tipo_entrega,
                COUNT(*) as count,
                COUNT(CASE WHEN status_preparo = 'pendente' THEN 1 END) as pendentes
            FROM pedido_confirmacao 
            WHERE restaurante_id = ? 
            AND data_confirmacao >= NOW() - INTERVAL 24 HOUR
            GROUP BY tipo_entrega
        `, [restauranteId]);
        
        return {
            entrega: result.find(r => r.tipo_entrega === 'entrega') || { count: 0, pendentes: 0 },
            retirada: result.find(r => r.tipo_entrega === 'retirada') || { count: 0, pendentes: 0 },
            consumoLocal: result.find(r => r.tipo_entrega === 'consumo_local') || { count: 0, pendentes: 0 }
        };
    } catch (error) {
        console.error('Erro ao buscar contagem de pedidos:', error);
        return { 
            entrega: { count: 0, pendentes: 0 }, 
            retirada: { count: 0, pendentes: 0 }, 
            consumoLocal: { count: 0, pendentes: 0 } 
        };
    } finally {
        client.release();
    }
}

// Modify your dashboard route to include the pedidos counts
app.get('/dashboard', verificarAutenticacao, async (req, res) => {
    const client = await conectarBanco();
    try {
        // Get restaurant info
        const [restauranteResult] = await client.execute(
            'SELECT * FROM restaurantes WHERE usuario_id = ?',
            [req.session.usuario.id]
        );
        const restaurante = restauranteResult[0];
        
        // Get pedidos counts
        const pedidosCounts = await getPedidosCounts(restaurante.id);
        console.log('pedidos ', pedidosCounts);
        
        res.render('dashboard', {
            currentPage: 'dashboard',
            restaurante,
            qrCode: null,
            pedidosCounts
        });
    } catch (error) {
        console.error('Erro ao carregar dashboard:', error);
        res.status(500).send('Erro ao carregar dashboard');
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
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?) RETURNING id`,
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
            await client.query('UPDATE restaurantes SET logo_url = ? WHERE id = ?', [logoPath, result.rows[0].id]);
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


// Rotas de Gerenciamento de Categorias
app.get('/dashboard/categorias', verificarAutenticacao, async (req, res) => {
    const client = await conectarBanco();
    try {
        const result = await client.query('SELECT * FROM categorias WHERE restaurante_id = (SELECT id FROM restaurantes WHERE usuario_id = ?)', [req.session.usuario.id]);
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
            'INSERT INTO categorias (nome, descricao, restaurante_id) VALUES (?, ?, (SELECT id FROM restaurantes WHERE usuario_id = ?))',
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
        const result = await client.execute(
            'SELECT * FROM pratos WHERE restaurante_id = ? ORDER BY COALESCE(ordem, 999999), id',
            [req.session.usuario.restaurante_id]
        );
        
        res.render('dashboard', {
            currentPage: 'pratos',
            pratos: result[0],
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
            'INSERT INTO pratos (nome, descricao, preco, categoria_id, imagem_url, restaurante_id) VALUES (?, ?, ?, ?, ?, (SELECT id FROM restaurantes WHERE usuario_id = ?))',
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
            'SELECT * FROM ingredientes WHERE restaurante_id = (SELECT id FROM restaurantes WHERE usuario_id = ?)',
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
            'INSERT INTO ingredientes (nome, descricao, estoque, restaurante_id) VALUES (?, ?, ?, (SELECT id FROM restaurantes WHERE usuario_id = ?))',
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
            'SELECT * FROM complementos WHERE restaurante_id = (SELECT id FROM restaurantes WHERE usuario_id = ?)',
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
            'INSERT INTO complementos (nome, descricao, preco, restaurante_id) VALUES (?, ?, ?, (SELECT id FROM restaurantes WHERE usuario_id = ?))',
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
            'SELECT id, nome FROM categorias WHERE restaurante_id = ? ORDER BY nome',
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
        const preco = req.body.preco.replace(/[^\d.,]/g, '');
        const tempo_preparo = req.body.tempo_preparo.replace(/[^\d]/g, '');
        const imagem = req.file?.path;
        console.log("dados da imagem",req.file)
        const disponivel = req.body.disponivel === 'on';
        
        // Insert the main dish first
        const [pratoResult] = await client.execute(
            'INSERT INTO pratos (restaurante_id, categoria, nome, descricao, preco, imagem, tempo_preparo, disponivel) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
            [req.session.usuario.restaurante_id, req.body.categoria, req.body.nome, req.body.descricao, 
                preco, req.file?.filename, tempo_preparo, disponivel]
        );

        const pratoId = pratoResult.insertId;
        console.log("ID do prato inserido:", pratoId);

        // Insert ingredients if any
        if (req.body.ingredientes && Array.isArray(req.body.ingredientes) && req.body.ingredientes.length > 0) {
            for (let i = 0; i < req.body.ingredientes.length; i++) {
                const ingrediente = req.body.ingredientes[i]?.trim();
                const removivel = req.body.ingredientes_removiveis?.[i] === '1';
                
                console.log("ingredientes", pratoId, ingrediente, removivel);
        
                if (ingrediente) {
                    await client.execute(
                        'INSERT INTO ingredientes (prato_id, nome, removivel) VALUES (?, ?, ?)',
                        [pratoId, ingrediente, removivel]
                    );
                }
            }
        }

        // Insert complementos if any
        if (req.body.complementos && req.body.complementos.length > 0) {
            for (let i = 0; i < req.body.complementos.length; i++) {
                const complemento = req.body.complementos[i]?.trim();
                const preco = parseFloat(req.body.precos_complementos[i]?.replace(',', '.'));
                const maxEscolhas = parseInt(req.body.max_escolhas[i]);
        
                if (complemento && !isNaN(preco) && !isNaN(maxEscolhas)) {
                    await client.execute(
                        'INSERT INTO complementos (prato_id, nome, preco_adicional, maximo_escolhas) VALUES (?, ?, ?, ?)',
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

app.delete('/dashboard/pratos/excluir/:id', verificarAutenticacao, async (req, res) => {
    const client = await conectarBanco();
    
    try {
        await client.query('BEGIN');

        // Verificar se o prato existe
        const [verificaPrato] = await client.execute(
            'SELECT id FROM pratos WHERE id = ? AND restaurante_id = ?',
            [req.params.id, req.session.usuario.restaurante_id]
        );
        console.log("[1] Verificação do prato:", verificaPrato);
        
        if (verificaPrato.length === 0) {
            throw new Error('Prato não encontrado ou sem permissão');
        }

        // Verificar ingredientes antes de excluir
        const [ingredientesAntes] = await client.execute(
            'SELECT COUNT(*) as total FROM ingredientes WHERE prato_id = ?', 
            [req.params.id]
        );
        console.log("[2] Ingredientes antes:", ingredientesAntes.total);

        // Excluir ingredientes
        const [resultIngredientes] = await client.execute(
            'DELETE FROM ingredientes WHERE prato_id = ?', 
            [req.params.id]
        );
        console.log("[3] Resultado exclusão ingredientes:", resultIngredientes.affectedRows);
        
        // Verificar complementos antes de excluir
        const [complementosAntes] = await client.execute(
            'SELECT COUNT(*) as total FROM complementos WHERE prato_id = ?', 
            [req.params.id]
        );
        console.log("[4] Complementos antes:", complementosAntes.total);

        // Excluir complementos
        const [resultComplementos] = await client.execute(
            'DELETE FROM complementos WHERE prato_id = ?', 
            [req.params.id]
        );
        console.log("[5] Resultado exclusão complementos:", resultComplementos.affectedRows);
        
        // Excluir o prato
        const [resultPrato] = await client.execute(
            'DELETE FROM pratos WHERE id = ? AND restaurante_id = ?',
            [req.params.id, req.session.usuario.restaurante_id]
        );
        console.log("[6] Resultado exclusão prato:", resultPrato.affectedRows);

        await client.query('COMMIT');
        res.json({ success: true });
    } catch (error) {
        await client.query('ROLLBACK');
        console.error('Erro ao excluir prato:', error);
        res.status(500).json({ success: false, message: 'Erro ao excluir o prato' });
    } finally {
        client.release();
    }
});

app.get('/dashboard/pratos/editar/:id', verificarAutenticacao, async (req, res) => {
    const client = await conectarBanco();
    console.log("ID do prato:", req.params.id);
    try {
        // Buscar o prato
        const prato = await client.query(
            'SELECT * FROM pratos WHERE id = ? AND restaurante_id = ?',
            [req.params.id, req.session.usuario.restaurante_id]
        );
        
        // Aqui, acessamos o primeiro item da resposta
        console.log("prato retornado:", prato);  // Verifique a estrutura do retorno

        // Verifique se há pelo menos um resultado
        if (prato[0].length === 0) {
            req.flash('error', 'Prato não encontrado');
            return res.redirect('/dashboard/pratos');
        }

        // Buscar os ingredientes do prato
        const ingredientes = await client.query(
            'SELECT * FROM ingredientes WHERE prato_id = ?',
            [req.params.id]
        );
        console.log("ingredientes encontrados:", ingredientes); 
        
        // Buscar todas as categorias disponíveis
        const categorias = await client.query(
            'SELECT id, nome FROM categorias_modal WHERE id_restaurante = ? ORDER BY nome',
            [req.session.usuario.restaurante_id]
        );
        console.log("categorias encontradas:", categorias); 

        // Buscar os complementos do prato
        const complementos = await client.query(
            'SELECT * FROM complementos WHERE prato_id = ?',
            [req.params.id]
        );
        console.log("complementos encontrados:", complementos);
        
        res.render('prato_editar', {
            prato: prato[0][0],  // Acesse o primeiro prato encontrado
            ingredientes: ingredientes[0],  // Ingredientes encontrados
            categorias: categorias[0],  // Categorias disponíveis
            complementos: complementos[0],  // Complementos encontrados
            success: req.flash('success'),
            error: req.flash('error')
        });
    } catch (error) {
        console.error("Erro ao editar prato:", error);
        req.flash('error', 'Ocorreu um erro ao tentar editar o prato.');
        res.redirect('/dashboard/pratos');
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
            SET nome = ?, 
                descricao = ?, 
                preco = ?, 
                categoria = ?, 
                disponivel = ?
        `;
        const preco_lmpo = preco.replace(/[^\d.,]/g, '');
       
        let params = [nome, descricao, preco_lmpo, categoria, disponivel];

        // Se uma nova imagem foi enviada
        if (req.file) {
            query += ', imagem = ?';
            params.push(`${req.file.filename}`);
        }

        query += ' WHERE id = ? AND restaurante_id = ?';
        params.push(req.params.id, req.session.usuario.restaurante_id);

        await client.query(query, params);

        // Atualizar ingredientes
        if (ingredientes && Array.isArray(ingredientes)) {
            // Primeiro, remover ingredientes existentes
            await client.query('DELETE FROM ingredientes WHERE prato_id = ?', [req.params.id]);

            // Inserir novos ingredientes
            for (let i = 0; i < ingredientes.length; i++) {
                const removivel = Array.isArray(ingredientes_removiveis) && ingredientes_removiveis[i] === '1';
                await client.query(
                    'INSERT INTO ingredientes (prato_id, nome, removivel) VALUES (?, ?, ?)',
                    [req.params.id, ingredientes[i], removivel]
                );
            }
        }

        // Atualizar complementos
        await client.query('DELETE FROM complementos WHERE prato_id = ?', [req.params.id]);
        if (req.body.complementos && Array.isArray(req.body.complementos)) {
            for (let i = 0; i < req.body.complementos.length; i++) {
                const nome = req.body.complementos[i];
                const preco = parseFloat(req.body.precos_complementos[i].replace(',', '.'));
                const max_escolhas = parseInt(req.body.max_escolhas[i]);
                
                if (nome && !isNaN(preco) && !isNaN(max_escolhas)) {
                    await client.query(
                        'INSERT INTO complementos (prato_id, nome, preco_adicional, maximo_escolhas) VALUES (?, ?, ?, ?)',
                        [req.params.id, nome, preco, max_escolhas]
                    );
                }
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
        // Primeiro, atualiza o status
        await client.execute(
            'UPDATE pratos SET disponivel = ? WHERE id = ? AND restaurante_id = ?',
            [req.body.disponivel, req.params.id, req.session.usuario.restaurante_id]
        );

        // Depois, busca o status atualizado
        const [result] = await client.execute(
            'SELECT disponivel FROM pratos WHERE id = ? AND restaurante_id = ?',
            [req.params.id, req.session.usuario.restaurante_id]
        );

        if (result && result.length > 0) {
            res.json({ success: true, disponivel: result[0].disponivel });
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
        const [pratoResult] = await client.execute(
            'SELECT * FROM pratos WHERE id = ? AND restaurante_id = ?', 
            [req.params.id, req.session.usuario.restaurante_id]
        );
        
        if (!pratoResult || pratoResult.length === 0) {
            return res.status(404).json({ success: false, message: 'Prato não encontrado' });
        }
        
        // Atualizar o preço
        await client.execute(
            'UPDATE pratos SET preco = ? WHERE id = ?', 
            [preco, req.params.id]
        );
        
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
app.get('/dashboard/check-username', async (req, res) => {
    const { username } = req.query;
    const client = await conectarBanco();

    try {
        // Executa a consulta SQL para verificar se o nome de usuário já existe
        const [rows] = await client.query(
            'SELECT COUNT(*) AS count FROM restaurantes WHERE nome = ?',
            [username]
        );

        // Acessa o valor da contagem diretamente
        const count = rows[0].count;
        console.log("consulta numero", count);

        // Retorna se o nome de usuário está disponível (count === 0)
        res.json({ available: count === 0 });
    } catch (error) {
        console.error('Erro ao verificar nome:', error);
        res.status(500).json({ error: 'Erro ao verificar disponibilidade' });
    } finally {
        client.release();
    }
});

app.get('/dashboard/check-phone', async (req, res) => {
    const { phone } = req.query;
    const client = await conectarBanco();
    console.log('Telefone', phone);
    try {
        const [rows] = await client.query(
            'SELECT COUNT(*) AS count FROM usuarios WHERE tell = ?',
            [phone.replace(/\D/g, '')]  // Remove caracteres não numéricos
        );
        const count = rows[0].count;
        console.log("consulta numero", count);

        // Retorna se o nome de usuário está disponível (count === 0)
        res.json({ available: count === 0 });
    } catch (error) {
        console.error('Erro ao verificar telefone:', error);
        res.status(500).json({ error: 'Erro ao verificar disponibilidade' });
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
        return res.render('cadastrar_restaurante', { erro: 'Nome de usuário e senha são obrigatórios!' });
    }

    const client = await conectarBanco();

    try {
        await client.query('START TRANSACTION');

        console.log('Verificando se usuário já existe...');
        const [result] = await client.query(
            'SELECT * FROM usuarios WHERE username = ?',
            [username]
        );

        if (result.length > 0) {
            console.log('Usuário já existe!');
            await client.query('ROLLBACK');
            return res.render('register', { erro: 'Usuário já existe!' });
        }

        console.log('Criando senha criptografada...');
        const senhaCriptografada = await bcrypt.hash(password, 10);

        console.log('Inserindo novo usuário...');
        const [resultInsert] = await client.query(
            'INSERT INTO usuarios (username, password, tell, senha2) VALUES (?, ?, ?, ?)',
            [username, senhaCriptografada, numeroLimpo, password]
        );

        const usuarioId = resultInsert.insertId;
        req.session.usuario = { id: usuarioId, username };

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

        // Criando objeto de horários
        const horariosFuncionamento = {
            Segunda: { abertura: req.body.horario_abertura_segunda || null, fechamento: req.body.horario_fechamento_segunda || null },
            Terca: { abertura: req.body.horario_abertura_terca || null, fechamento: req.body.horario_fechamento_terca || null },
            Quarta: { abertura: req.body.horario_abertura_quarta || null, fechamento: req.body.horario_fechamento_quarta || null },
            Quinta: { abertura: req.body.horario_abertura_quinta || null, fechamento: req.body.horario_fechamento_quinta || null },
            Sexta: { abertura: req.body.horario_abertura_sexta || null, fechamento: req.body.horario_fechamento_sexta || null },
            Sabado: { abertura: req.body.horario_abertura_sabado || null, fechamento: req.body.horario_fechamento_sabado || null },
            Domingo: { abertura: req.body.horario_abertura_domingo || null, fechamento: req.body.horario_fechamento_domingo || null }
        };

        console.log('Inserindo restaurante no banco...',req.body);
        const [resultRestaurante] = await client.query(
            `INSERT INTO restaurantes (
                usuario_id, nome_usuario, nome, logo_url,
                horario_abertura, horario_fechamento, dias_funcionamento,
                endereco, latitude, longitude, permite_consumo_local,
                permite_retirada, permite_entrega, taxa_entrega,
                raio_entrega, tempo_medio_entrega, horarios_funcionamento,
                created_at
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, NOW())`,
            [
                usuarioId,
                username,
                nome,
                req.file ? `/uploads/${req.file.filename}` : null,
                req.body.horario_abertura || null,
                req.body.horario_fechamento || null,
                dias_funcionamento,
                enderecoFormatado,
                latitudeNum,
                longitudeNum,
                permite_consumo_local === 'on' ? 1 : 0,
                permite_retirada === 'on' ? 1 : 0,
                permite_entrega === 'on' ? 1 : 0,
                taxaEntregaNum || 0,
                raioEntregaNum || 0,
                tempoMedioEntregaNum || 0,
                JSON.stringify(horariosFuncionamento) || '{}'
            ]
        );
        console.log('log do insert:', resultRestaurante);
        const restauranteId = resultRestaurante.insertId;
        console.log('Restaurante cadastrado com sucesso! ID:', restauranteId);

        req.session.usuario = { ...req.session.usuario, restaurante_id: restauranteId };
        console.log('Sessão atualizada:', req.session.usuario);

        await client.query('COMMIT');

        console.log('Redirecionando para dashboard...');
        res.redirect('/dashboard');

    } catch (error) {
        await client.query('ROLLBACK');
        console.error('Erro ao cadastrar restaurante:', error);
        res.status(500).send('Erro ao cadastrar restaurante.');
    } finally {
        client.release();
    }
});

// Rota para editar o restaurante
app.get('/dashboard/restaurante/editar', verificarAutenticacao, async (req, res) => {
    const client = await conectarBanco();
    try {
        const result = await client.query(
            'SELECT * FROM restaurantes WHERE id = ?',
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
                nome = ?, horario_abertura = ?, horario_fechamento = ?,
                dias_funcionamento = ?, endereco = ?, latitude = ?,
                longitude = ?, permite_consumo_local = ?, permite_retirada = ?,
                permite_entrega = ?, taxa_entrega = ?, raio_entrega = ?,
                tempo_medio_entrega = ?, logo_url = ?
            WHERE id = ?`,
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
// Rota para atualizar ordem das categorias
app.post('/dashboard/categorias/reorder', verificarAutenticacao, async (req, res) => {
    const client = await conectarBanco();
    try {
        await client.query('BEGIN');

        // Atualiza a ordem das categorias
        for (const item of req.body.categorias) {
            await client.query(
                `UPDATE pratos 
                 SET ordem_categoria = ? 
                 WHERE categoria = ? AND restaurante_id = ?`,
                [item.ordem, item.categoria, req.session.usuario.restaurante_id]
            );
        }

        await client.query('COMMIT');
        res.json({ success: true });
    } catch (error) {
        await client.query('ROLLBACK');
        console.error('Erro ao reordenar categorias:', error);
        res.status(500).json({ success: false, error: 'Erro ao reordenar categorias' });
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
            'INSERT INTO categorias (nome, restaurante_id) VALUES (?, ?) RETURNING id, nome',
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
        const restaurante = await client.query('SELECT id FROM restaurantes WHERE usuario_id = ?', [req.session.usuario.id]);
        if (!restaurante.rows[0]) {
            return res.redirect('/dashboard');
        }

        const restaurante_id = restaurante.rows[0].id;
        const categorias = await client.query('SELECT * FROM categorias WHERE restaurante_id = ? ORDER BY ordem', [restaurante_id]);
        const pratos = await client.query(
            `SELECT p.*, c.nome as categoria 
             FROM pratos p 
             LEFT JOIN categorias c ON p.categoria_id = c.id 
             WHERE p.restaurante_id = ?
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
        const restaurante = await client.query('SELECT id FROM restaurantes WHERE usuario_id = ?', [req.session.usuario.id]);
        await client.query(
            'INSERT INTO categorias (restaurante_id, nome, descricao, ordem) VALUES (?, ?, ?, ?) RETURNING id, nome',
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
        const restaurante = await client.query('SELECT id FROM restaurantes WHERE usuario_id = ?', [req.session.usuario.id]);
        const restaurante_id = restaurante.rows[0].id;

        // Inserir prato
        const pratoResult = await client.query(
            `INSERT INTO pratos (
                restaurante_id, categoria_id, nome, descricao, preco,
                imagem_url, tempo_preparo
            ) VALUES (?, ?, ?, ?, ?, ?, ?) RETURNING id`,
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
                    'INSERT INTO ingredientes (prato_id, nome, removivel) VALUES (?, ?, ?) RETURNING id',
                    [prato_id, req.body.ingredientes[i], req.body.ingredientes_removiveis[i] === 'on']
                );
            }
        }

        // Inserir complementos
        if (req.body.complementos && req.body.complementos.length > 0) {
            for (let i = 0; i < req.body.complementos.length; i++) {
                await client.query(
                    'INSERT INTO complementos (prato_id, nome, preco_adicional, maximo_escolhas) VALUES (?, ?, ?, ?) RETURNING id',
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
        await client.query('DELETE FROM categorias WHERE id = ?', [req.params.id]);
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
        await client.query('DELETE FROM ingredientes WHERE prato_id = ?', [req.params.id]);
        await client.query('DELETE FROM complementos WHERE prato_id = ?', [req.params.id]);
        await client.query('DELETE FROM pratos WHERE id = ?', [req.params.id]);
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
            'INSERT INTO pratos (restaurante_id, categoria_id, nome, descricao, preco, tempo_preparo) VALUES (?, ?, ?, ?, ?, ?) RETURNING id',
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
            'UPDATE pratos SET nome = ?, descricao = ?, preco = ?, tempo_preparo = ? WHERE id = ? AND restaurante_id = ?',
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
            'INSERT INTO pedidos (usuario_id, produtos, total, status) VALUES (?, ?, ?, ?) RETURNING id',
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
            'UPDATE pedidos SET status = ? WHERE id = ?',
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
        const result = await client.query('DELETE FROM pedidos WHERE id = ?', [id]);

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
app.get('/dashboard/api/categorias', async (req, res) => {
    try {
        // Verifique se o restauranteId está presente na sessão
        if (!req.session.usuario.restaurante_id) {
            return res.status(400).json({ error: 'restauranteId não encontrado na sessão' });
        }

        const categorias = await pool.query(
            'SELECT id, nome, icone FROM categorias_modal WHERE id_restaurante = ?',
            [req.session.usuario.restaurante_id]
        );

        res.json(categorias);
    } catch (error) {
        console.error('Erro ao buscar categorias:', error);  // Melhor log de erro
        res.status(500).json({ error: `Erro ao buscar categorias Linha 2117: ${error.message}` });
    }
});


// Modify the route to create new category
app.post('/api/categorias/nova', async (req, res) => {
    console.log('Recebido POST para /api/categorias/nova');
    try {
        const { nome, icone } = req.body;
        console.log('Dados recebidos:', { nome, icone });

        // Consulta para inserir a nova categoria
        const query = `
            INSERT INTO categorias_modal (nome, icone, id_restaurante)
            VALUES (?, ?, ?)
        `;
        
        // Parâmetros da consulta
        const params = [nome, icone, req.session.usuario.restaurante_id];
        
        // Executa a consulta no banco de dados
        const [result] = await pool.execute(query, params);

        // Recupera o id da categoria inserida usando LAST_INSERT_ID()
        const [idResult] = await pool.execute('SELECT LAST_INSERT_ID() as id');
        const id = idResult[0].id;

        // Retorna a resposta com os dados da nova categoria
        res.json({
            success: true,
            categoria: {
                id,
                nome,
                icone
            }
        });
    } catch (error) {
        console.error('Erro ao criar categoria:', error);
        res.status(500).json({ success: false, message: 'Erro ao criar categoria' });
    }
});

app.post('/api/pedidos/:id/status', verificarAutenticacao, async (req, res) => {
    const { id } = req.params;
    const { status } = req.body;
    const client = await conectarBanco();

    try {
        console.log(`API: Atualizando status do pedido ${id} para "${status}"...`);
        const result = await client.query(
            'UPDATE pedido_confirmacao SET status_confirmacao = ? WHERE id = ? RETURNING *',
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
const fs = require('fs'); // Importando o módulo fs

const { promises: fsPromises } = fs;

function similarityScore(str1, str2) {
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();
    
    if (str1 === str2) return 1;
    if (str1.includes(str2) || str2.includes(str1)) return 0.8;
    
    const len1 = str1.length;
    const len2 = str2.length;
    const maxDist = Math.floor(Math.max(len1, len2) / 2) - 1;
    let matches = 0;
    
    const hash1 = {};
    const hash2 = {};
    
    for (let i = 0; i < len1; i++) {
        const ch = str1[i];
        hash1[ch] = (hash1[ch] || 0) + 1;
    }
    
    for (let i = 0; i < len2; i++) {
        const ch = str2[i];
        hash2[ch] = (hash2[ch] || 0) + 1;
    }
    
    for (const key in hash1) {
        if (hash2[key]) {
            matches += Math.min(hash1[key], hash2[key]);
        }
    }
    
    return (2.0 * matches) / (len1 + len2);
}

app.get('/api/icons/search', async (req, res) => {
    const term = req.query.term.toLowerCase(); // Termo digitado pelo usuário
    const iconMap = {
        'pizza': 'icons8-pizza-100.png',
        'hamburguer': 'icons8-hamburger-100.png',
        'burger': 'icons8-hamburger-100.png',
        'bebida': 'icons8-cola-100.png',
        'sobremesa': 'icons8-cake-100.png',
        'salada': 'icons8-greek-salad-100.png',
        'italiana': 'icons8-pasta-100.png',
        'frango': 'icons8-fried-chicken-100.png',
        'carne': 'icons8-beef-100.png',
        'peixe': 'icons8-fish-food-100.png',
        'sushi': 'icons8-bento-100.png',
        'lanche': 'icons8-hot-dog-100.png',
        'cafe': 'icons8-coffee-beans-100.png',
        'doce': 'icons8-candy-100.png',
        'salgados': 'icons8-french-fries-100.png'
    };

    try {
        let iconFileName = 'default-category.png'; // Valor padrão caso não encontre
        let bestMatch = { score: 0, fileName: 'default-category.png' };
        
        // Busca o ícone baseado no termo digitado
        for (const [key, fileName] of Object.entries(iconMap)) {
            const score = similarityScore(term, key);
            if (score > bestMatch.score) {
                bestMatch = { score, fileName };
            }
        }
        
        if (bestMatch.score > 0.7) {
            iconFileName = bestMatch.fileName;
        } else {
            iconFileName = 'default-category.png';
        }

        // Caminho do ícone onde será salvo
        const iconPath = path.join(__dirname, '..', 'public', 'images', 'icons', iconFileName);
        const sourceIconPath = path.join(__dirname, '..', 'public', 'images', 'icons', 'source', iconFileName);

        // Verifica se o arquivo do ícone já existe no diretório
        try {
            await fsPromises.access(iconPath);
        } catch {
            // Se não existir, verifica se o arquivo existe no diretório source
            try {
                await fsPromises.access(sourceIconPath);
                // Se existir no source, copia para o diretório principal
                await fsPromises.copyFile(sourceIconPath, iconPath);
            } catch (error) {
                console.error('Erro ao copiar ícone:', error);
                // Se houver erro, usa o ícone padrão
                iconFileName = 'default-category.png';
            }
        }

        // Retorna o URL do ícone para a resposta
        res.json({ iconUrl: `/images/icons/${iconFileName}` });
    } catch (error) {
        console.error('Error handling icon:', error);
        res.json({ iconUrl: '/images/icons/default-category.png' });
    }
});

///193.186.4.239
// Iniciar servidor 192.168.1.3
const HOST = '0.0.0.0'; // Permite acesso via IP na rede local
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    if (process.env.NODE_ENV !== 'production') {
       // startNgrok();
    }
});