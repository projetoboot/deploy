const express = require('express');
const { Pool } = require('pg');
const session = require('express-session');
const pgSession = require('connect-pg-simple')(session);
const multer = require('multer');
const upload = require('./config/multer');
const path = require('path');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/../views');
app.use(express.static(__dirname + '/../public'));
app.use(express.static(__dirname + '/public'));
app.use('/images', express.static(path.join(__dirname, '..', 'public', 'uploads')));
// Configurações do banco de dados PostgreSQL
const DB_CONFIG = {
    user: 'postgres',
    host: 'localhost',
    database: 'cardap',
    password: '719732',
    port: 5432
};

const pool = new Pool(DB_CONFIG);

// Configuração de sessão com PostgreSQL
const sessionStore = new pgSession({
    pool: pool,
    tableName: 'session',
});

app.use(session({
    key: 'sessao_usuario',
    secret: 'seuSegredoSeguro',
    store: sessionStore,
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false, httpOnly: false, maxAge: 24 * 60 * 60 * 1000 }
}));

async function conectarBanco() {
    try {
        const client = await pool.connect();
        console.log('Conexão com o banco de dados estabelecida em cardapio.js.');
        return client;
    } catch (error) {
        console.error('Erro ao conectar ao banco de dados:', error);
        throw error;
    }
}

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
        const result = await client.query('SELECT id FROM cliente WHERE telefone = $1', [telefone]);
        
        if (result.rows.length > 0) {
            // Se já existir, atualizar o último acesso
            await client.query('UPDATE cliente SET data_ultimo_acesso = $1 WHERE telefone = $2', [new Date(), telefone]);
        } else {
            // Se não existir, criar um novo cliente com o primeiro acesso
            await client.query('INSERT INTO cliente (telefone, data_primeiro_acesso, data_ultimo_acesso) VALUES ($1, $2, $3)', [telefone, new Date(), new Date()]);
        }

        req.session.telefone = telefone;
        res.redirect('/cardapio_digital');
    } catch (error) {
        console.error('Erro ao salvar telefone:', error);
        res.status(500).send('Erro ao salvar número de telefone.');
    } finally {
        client.release();
    }
});
// Página de visualização do cardápio







app.get('/cardapio_digital', async (req, res) => {
    const restauranteId = req.query.id; // Get restaurant ID from query parameter
    const client = await conectarBanco();
    req.session.id_restaurante=restauranteId
    try {
        // Get restaurant info first
        const restauranteResult = await client.query('SELECT * FROM restaurantes WHERE id = $1', [restauranteId]);
        
        if (!restauranteResult.rows.length) {
            return res.status(404).send('Restaurante não encontrado');
        }

        // Modified query to include restaurant ID
        const query = `
            SELECT 
                p.id AS prato_id, 
                p.restaurante_id AS restaurante_id, 
                p.nome AS prato_nome, 
                p.descricao AS descricao, 
                p.preco AS prato_preco, 
                p.imagem AS prato_imagem, 
                c.id AS complemento_id, 
                c.nome AS complemento_nome, 
                c.preco_adicional
            FROM pratos p
            LEFT JOIN complementos c ON p.id = c.prato_id
            WHERE p.restaurante_id = $1;
        `;
        
        const result = await client.query(query, [restauranteId]);
        
        
        const pratosMap = new Map();

        result.rows.forEach(row => {
            if (!pratosMap.has(row.prato_id)) {
                pratosMap.set(row.prato_id, {
                    id: row.prato_id,
                    nome: row.prato_nome,
                    preco: parseFloat(row.prato_preco),
                    imagem:row.prato_imagem,
                    descricao:row.descricao,
                    restaurante_id:row.restaurante_id,
                    opcionais: []
                });
            }
            
            if (row.complemento_id) {
                pratosMap.get(row.prato_id).opcionais.push({
                    id: row.complemento_id,
                    nome: row.complemento_nome,
                    preco_adicional: parseFloat(row.preco_adicional)
                });
            }
        });
       
        const cardapio = Array.from(pratosMap.values());
       
        ///console.log(JSON.stringify(cardapio, null, 2));
        res.render('cardapio_digital', { 
            cardapio, 
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



// Rota para processar a finalização do pedido
// Rota para confirmação do pedido







app.post('/finalizar_pedido', async (req, res) => {
    console.log(" Iniciando finalização do pedido");
    const client = await conectarBanco();
    let pedidoId = null;

    try {
        await client.query('BEGIN');
        const restauranteResult = await client.query('SELECT * FROM restaurantes WHERE id=$1 LIMIT 1' ,[req.session.id_restaurante]);
        const restaurante = restauranteResult.rows[0];  
        console.log("dados do restaurante ",restaurante);
        const id = req.query; // Captura o valor do parâmetro "id"        
        console.log("id do Restaurante",req.session.id_restaurante); 
        const telefone = req.body.telefone;       
        console.log("Requisição recebida:", req.body);
         console.log("Telefone recebido:", req.body.telefone);
        // Save the phone number to the session for future use
        req.session.telefone = telefone;

        // Verificar se o cliente já existe no banco de dados
        const clienteResult = await client.query(
            'SELECT id FROM cliente WHERE telefone = $1',
            [telefone]
        );

        // Se o cliente não existir, cadastrá-lo
        if (clienteResult.rows.length === 0) {
           console.log("Cliente não encontrado, cadastrando novo cliente com telefone:", telefone);
            await client.query(
                'INSERT INTO cliente (telefone, data_primeiro_acesso, data_ultimo_acesso) VALUES ($1, $2, $3)',
                [telefone, new Date(), new Date()]
            );
        } else {
            console.log("Cliente encontrado  com telefone:", telefone);
        
            await client.query(
                'UPDATE cliente SET data_ultimo_acesso = $1 WHERE telefone = $2',
                [new Date(), telefone]
            );
        }
        // Get customer's last order
        const ultimoPedidoResult = await client.query(
            'SELECT data_confirmacao FROM pedido_confirmacao WHERE telefone = $1 ORDER BY data_confirmacao DESC LIMIT 1',
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
            'INSERT INTO pedidos (cliente_telefone, tipo_entrega, endereco_entrega, status, total) VALUES ($1, $2, $3, $4, $5) RETURNING *',
            [req.body.telefone, req.body.tipoEntrega, req.body.enderecoEntrega, 'pendente', req.body.carrinho.total]
        );        
        pedidoId = orderResult.rows[0].id;
        // Insert order confirmation with extended details
        await client.query(`
            INSERT INTO pedido_confirmacao (
                pedido_id, dados_completos, telefone, tipo_entrega, 
                endereco_entrega, total, hora_pedido, previsao_entrega,
                ultimo_pedido_data, restaurante_id, restaurante_nome,
                restaurante_telefone, restaurante_endereco, subtotal,
                status_preparo, forma_pagamento
            ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16)
        `, [
            pedidoId,
            req.body,
            req.body.telefone,
            req.body.tipoEntrega,
            req.body.enderecoEntrega,
            req.body.carrinho.total,
            hora,
            previsaoHora,
            ultimoPedidoResult.rows[0]?.data_confirmacao,
            restaurante.id,
            restaurante.nome,
            restaurante.telefone,
            restaurante.endereco,
            req.body.carrinho.total,
            'pendente',
            'dinheiro' // You might want to add payment method selection in your frontend
        ]);
    
        // ... rest of your existing code for inserting items and optional items ...

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
            return res.redirect('/cardapio_digital');
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
            WHERE pc.pedido_id = $1
            ORDER BY pc.data_confirmacao DESC
        `, [dadosPedido]);
        
        const pedidos = pedidosResult.rows.map(pedido => {
            const dadosCompletos = typeof pedido.dados_pedido === 'string' 
                ? JSON.parse(pedido.dados_pedido) 
                : pedido.dados_pedido;
            
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
        
        const pedidoCompleto = pedidosResult.rows[0];
        console.log("pedidoCompleto", pedidoCompleto);
        
        // Parse dados_completos if it exists
        const dadosCompletos = pedidoCompleto.dados_pedido ? 
            (typeof pedidoCompleto.dados_pedido === 'string' ? 
                JSON.parse(pedidoCompleto.dados_pedido) : 
                pedidoCompleto.dados_pedido) : 
            {};

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
            WHERE pc.telefone = $1
            ORDER BY pc.data_confirmacao DESC
        `, [telefone]);

        const pedidos = pedidosResult.rows.map(pedido => {
            const dadosCompletos = typeof pedido.dados_pedido === 'string' 
                ? JSON.parse(pedido.dados_pedido) 
                : pedido.dados_pedido;
            
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
const HOST = '0.0.0.0'; // Permite acesso via IP na rede local
const PORT = process.env.PORT || 4000;
app.listen(PORT, HOST, () => {
    console.log(`Servidor rodando em http://${HOST}:${PORT}`);
});