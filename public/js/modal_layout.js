/**
 * modal_layout.js
 * Arquivo consolidado para gerenciamento do carrinho e modais da lanchonete
 */

// Classe para gerenciar o carrinho
class Carrinho {
    constructor() {
        this.items = [];
        this.total = 0;
        this.quantidade = 0;
    }

    adicionarItem(produto, quantidade, opcionaisSelecionados) {
        // Garantir que todos os dados necessários do produto sejam salvos
        const item = {
            produto: {
                id: produto.id,
                nome: produto.nome,
                preco: Number(produto.preco),
                imagem: produto.imagem
            },
            quantidade: Number(quantidade),
            opcionaisSelecionados: opcionaisSelecionados.map(opcional => ({
                nome: opcional.nome,
                preco: Number(opcional.preco)
            }))
        };

        this.items.push(item);
        this.atualizarTotais();
        this.salvarCarrinho();
        this.atualizarUI();
    }

    removerItem(index) {
        this.items.splice(index, 1);
        this.atualizarTotais();
        this.salvarCarrinho();
        this.atualizarUI();
    }

    calcularPrecoItem(produto, quantidade, opcionaisSelecionados) {
        if (!produto || typeof produto.preco === 'undefined') {
            console.error('Produto inválido:', produto);
            return 0;
        }

        // Garantir que produto.preco seja um número
        const precoBase = Number(produto.preco) || 0;
        const precoTotal = precoBase * quantidade;

        // Calcular o preço dos opcionais
        const precoOpcionais = Array.isArray(opcionaisSelecionados) ? 
            opcionaisSelecionados.reduce((total, opcional) => {
                const precoOpcional = Number(opcional.preco) || 0;
                return total + (precoOpcional * quantidade);
            }, 0) : 0;

        return precoTotal + precoOpcionais;
    }
    
    atualizarTotais() {
        this.quantidade = this.items.reduce((total, item) => total + Number(item.quantidade), 0);
        this.total = this.items.reduce((total, item) => {
            return total + this.calcularPrecoItem(
                item.produto,
                item.quantidade,
                item.opcionaisSelecionados
            );
        }, 0);
    }

    salvarCarrinho() {
        const dadosParaSalvar = {
            items: this.items.map(item => ({
                produto: {
                    id: item.produto.id,
                    nome: item.produto.nome,
                    preco: Number(item.produto.preco),
                    imagem: item.produto.imagem
                },
                quantidade: Number(item.quantidade),
                opcionaisSelecionados: item.opcionaisSelecionados.map(opcional => ({
                    nome: opcional.nome,
                    preco: Number(opcional.preco)
                }))
            })),
            total: Number(this.total),
            quantidade: Number(this.quantidade)
        };

        try {
            localStorage.setItem('carrinho', JSON.stringify(dadosParaSalvar));
        } catch (error) {
            console.error('Erro ao salvar carrinho:', error);
            alert('Erro ao salvar carrinho. Por favor, tente novamente.');
        }
    }

    carregarCarrinho() {
        const carrinhoSalvo = localStorage.getItem('carrinho');
        if (carrinhoSalvo) {
            try {
                const dados = JSON.parse(carrinhoSalvo);
                
                // Garantir que os dados carregados tenham a estrutura correta
                this.items = Array.isArray(dados.items) ? dados.items.map(item => ({
                    produto: {
                        id: item.produto.id,
                        nome: item.produto.nome,
                        preco: Number(item.produto.preco),
                        imagem: item.produto.imagem  // Fixed typo from 'imamgem'
                    },
                    quantidade: Number(item.quantidade),
                    opcionaisSelecionados: Array.isArray(item.opcionaisSelecionados) ? 
                        item.opcionaisSelecionados.map(opcional => ({
                            nome: opcional.nome,
                            preco: Number(opcional.preco)
                        })) : []
                })) : [];

                this.total = Number(dados.total) || 0;
                this.quantidade = Number(dados.quantidade) || 0;
                this.atualizarUI();
            } catch (error) {
                console.error('Erro ao carregar carrinho:', error);
                this.items = [];
                this.total = 0;
                this.quantidade = 0;
                localStorage.removeItem('carrinho');
            }
        }
    }

    atualizarUI() {
        const contadorCarrinho = document.querySelector('.carrinho-quantidade');
        if (contadorCarrinho) {
            contadorCarrinho.textContent = this.quantidade || 0;
        }

        const totalCarrinho = document.querySelector('.carrinho-total');
        if (totalCarrinho) {
            const total = this.total || 0;
            totalCarrinho.textContent = `R$ ${total.toFixed(2)}`;
        }

        // Atualizar o modal do carrinho
        this.atualizarModalCarrinho();
    }

    atualizarModalCarrinho() {
        const listaCarrinho = document.querySelector('.carrinho-lista');
        const carrinhoVazio = document.querySelector('.carrinho-vazio');
        const totalModal = document.querySelector('.carrinho-total-modal');
        const finalizarBtn = document.querySelector('.finalizar-pedido-btn');

        if (!listaCarrinho || !carrinhoVazio || !totalModal || !finalizarBtn) return;

        // Mostrar mensagem de carrinho vazio ou lista de items
        if (this.items.length === 0) {
            listaCarrinho.style.display = 'none';
            carrinhoVazio.style.display = 'block';
            finalizarBtn.disabled = true;
        } else {
            listaCarrinho.style.display = 'block';
            carrinhoVazio.style.display = 'none';
            finalizarBtn.disabled = false;

            // Atualizar lista de items
            console.log("🛒 Itens do carrinho:", this.items);
            listaCarrinho.innerHTML = this.items.map((item, index) => `
                <div class="carrinho-item">
                    <div class="carrinho-item-info">
                        <img src="/uploads/${item.produto.imagem || 'default.jpg'}" alt="${item.produto.nome}" class="produto-imagem_mini">
                        <h4>${item.produto.nome}</h4>
                        <div class="quantidade-controle">
                            <button class="quantidade-btn diminuir" data-index="${index}">-</button>
                            <span class="quantidade">${item.quantidade}</span>
                            <button class="quantidade-btn aumentar" data-index="${index}">+</button>
                        </div>
                        ${item.opcionaisSelecionados.length > 0 ? `
                            <small>
                                Opcionais: ${item.opcionaisSelecionados.map(op => op.nome).join(', ')}
                            </small>
                        ` : ''}
                    </div>
                    <div class="carrinho-item-acoes">
                        <div class="carrinho-item-preco">
                            R$ ${this.calcularPrecoItem(item.produto, item.quantidade, item.opcionaisSelecionados).toFixed(2)}
                        </div>
                        <button class="remover-item" data-index="${index}">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                </div>
            `).join('');

            // Adicionar eventos aos botões de remover
            listaCarrinho.querySelectorAll('.remover-item').forEach(btn => {
                btn.addEventListener('click', () => {
                    const index = parseInt(btn.dataset.index);
                    this.removerItem(index);
                });
            });
            // Adicionar eventos aos botões de quantidade
            listaCarrinho.querySelectorAll('.quantidade-btn').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    const index = parseInt(btn.dataset.index);
                    const item = this.items[index];
                    if (btn.classList.contains('aumentar')) {
                        if (item.quantidade < 10) {
                            item.quantidade++;
                        }
                    } else if (btn.classList.contains('diminuir')) {
                        if (item.quantidade > 1) {
                            item.quantidade--;
                        } else {
                            this.removerItem(index);
                            return;
                        }
                    }
                    this.atualizarTotais();
                    this.salvarCarrinho();
                    this.atualizarUI();
                });
            });
        }

        // Atualizar total
        totalModal.textContent = `Total: R$ ${this.total.toFixed(2)}`;
    }
}

// Classe para gerenciar a UI do cardápio
class CardapioUI {
    constructor() {
        this.carrinho = new Carrinho();
        this.produtoAtual = null;
        this.quantidadeAtual = 1;
        this.opcionaisSelecionados = [];
        this.tipoEntrega = 'local';
        this.enderecoEntrega = '';
        this.inicializar();
    }

    inicializar() {
        this.configurarProdutos();
        this.configurarModal();
        this.configurarCarrinho();
        this.carrinho.carregarCarrinho();
        this.configurarTiposEntrega();
    }

    // Configura os tipos de entrega no modal de carrinho
    configurarTiposEntrega() {
        const tipoEntregaInputs = document.querySelectorAll('input[name="tipo-entrega"]');
        const enderecoEntrega = document.querySelector('.endereco-entrega');
        
        if (!tipoEntregaInputs.length || !enderecoEntrega) return;
        
        tipoEntregaInputs.forEach(radio => {
            radio.addEventListener('change', (e) => {
                console.log(`🛵 Tipo de entrega alterado: ${e.target.value}`);
                enderecoEntrega.style.display = e.target.value === 'entrega' ? 'block' : 'none';
            });
        });
    }

    configurarProdutos() {
        document.querySelectorAll('.produto-card').forEach(card => {
            card.addEventListener('click', () => {
                const produto = {
                    id: card.dataset.id,
                    nome: card.dataset.nome,
                    descricao: card.dataset.descricao,
                    preco: Number(card.dataset.preco),
                    categoria: card.dataset.categoria,
                    imagem: card.dataset.imagem,
                    opcionais: JSON.parse(card.dataset.opcionais || '[]')
                };
                console.log("Produto selecionado:", produto);
                this.abrirModal(produto);
            });
        });
    }

    configurarModal() {
        const modal = document.getElementById('modalProduto');
        const closeBtn = modal.querySelector('.modal-close');
        const addBtn = modal.querySelector('.adicionar-carrinho-btn');
        const diminuirBtn = modal.querySelector('.diminuir');
        const aumentarBtn = modal.querySelector('.aumentar');

        closeBtn.addEventListener('click', () => this.fecharModal());
        addBtn.addEventListener('click', () => this.adicionarAoCarrinho());
        diminuirBtn.addEventListener('click', () => this.alterarQuantidade(-1));
        aumentarBtn.addEventListener('click', () => this.alterarQuantidade(1));
    }

    configurarCarrinho() {
        // Configurar botão do carrinho flutuante
        const carrinhoBtn = document.querySelector('.carrinho-nav-btn');
        if (carrinhoBtn) {
            carrinhoBtn.addEventListener('click', () => this.abrirModalCarrinho());
        }

        // Configurar modal do carrinho
        const modalCarrinho = document.getElementById('modalCarrinho');
        if (modalCarrinho) {
            const closeBtn = modalCarrinho.querySelector('.modal-close');
            const finalizarBtn = modalCarrinho.querySelector('.finalizar-pedido-btn');
            const continuarBtn = modalCarrinho.querySelector('.continuar-comprando-btn');

            closeBtn.addEventListener('click', () => this.fecharModalCarrinho());
            if (finalizarBtn) {
                finalizarBtn.addEventListener('click', () => this.finalizarPedido());
            }
            
            if (continuarBtn) {
                continuarBtn.addEventListener('click', () => this.fecharModalCarrinho());
            }
            
            // Fechar modal ao clicar fora
            window.addEventListener('click', (e) => {
                if (e.target === modalCarrinho) {
                    this.fecharModalCarrinho();
                }
            });
        }
    }

    abrirModal(produto) {
        this.produtoAtual = produto;
        this.quantidadeAtual = 1;
        this.opcionaisSelecionados = [];
        
        const modal = document.getElementById('modalProduto');
        if (!modal) {
            console.error("🔴 Erro: Modal não encontrado no DOM");
            return;
        }
        
        modal.querySelector('.modal-title').textContent = produto.nome;
        modal.querySelector('.quantidade-input').value = '1';
        
        // Adicionar a descrição do produto
        const descricaoText = modal.querySelector('.produto-descricao-texto');
        if (descricaoText && produto.descricao) {
            descricaoText.textContent = produto.descricao;
            modal.querySelector('.modal-descricao').style.display = 'block';
        } else {
            modal.querySelector('.modal-descricao').style.display = 'none';
        }
    
        // Atualizar a imagem do produto
        const imagemProduto = modal.querySelector('.modal-produto-img');
        imagemProduto.src = `/uploads/${produto.imagem || 'default.jpg'}`;
        imagemProduto.alt = produto.nome;
        
        // Renderizar opcionais
        const opcionaisLista = modal.querySelector('.opcionais-lista');
        if (produto.opcionais && produto.opcionais.length > 0) {
            opcionaisLista.innerHTML = produto.opcionais.map(opcionais => {
                const preco = Number(opcionais.preco_adicional) || 0;
                return `
                    <div class="opcional-item">
                        <div class="opcional-info">
                            <input type="checkbox" 
                                   class="opcional-checkbox" 
                                   data-nome="${opcionais.nome}"
                                   data-preco="${preco}">
                            <label>${opcionais.nome}</label>
                        </div>
                        <span class="opcional-preco">+R$ ${preco.toFixed(2)}</span>
                    </div>
                `;
            }).join('');
            
            // Adicionar eventos aos checkboxes
            opcionaisLista.querySelectorAll('.opcional-checkbox').forEach(checkbox => {
                checkbox.addEventListener('change', () => this.atualizarOpcionaisSelecionados());
            });
            
            modal.querySelector('.opcionais-container').style.display = 'block';
        } else {
            opcionaisLista.innerHTML = '<p>Este produto não tem opcionais disponíveis.</p>';
            modal.querySelector('.opcionais-container').style.display = 'none';
        }
        
        // Atualizar preço total
        this.atualizarPrecoTotal();
        
        // Exibir o modal - usando AMBOS os métodos para garantir compatibilidade
        modal.style.display = 'block';
        modal.classList.add('ativo');
        
        console.log("🟢 Modal exibido:", modal.style.display, "Classe ativo:", modal.classList.contains('ativo'));
        
        // Adicionar funcionalidade para fechar o modal clicando fora
        window.addEventListener('click', (e) => {
            if (e.target === modal) {
                this.fecharModal();
            }
        });
    }

    fecharModal() {
        const modal = document.getElementById('modalProduto');
        modal.style.display = 'none';
        modal.classList.remove('ativo');
    }

    alterarQuantidade(delta) {
        const novaQuantidade = this.quantidadeAtual + delta;
        if (novaQuantidade >= 1 && novaQuantidade <= 10) {
            this.quantidadeAtual = novaQuantidade;
            document.querySelector('.quantidade-input').value = novaQuantidade;
            this.atualizarPrecoTotal();
        }
    }

    atualizarOpcionaisSelecionados() {
        const checkboxes = document.querySelectorAll('.opcional-checkbox:checked');
        this.opcionaisSelecionados = Array.from(checkboxes).map(checkbox => ({
            nome: checkbox.dataset.nome,
            preco: Number(checkbox.dataset.preco)
        }));
        this.atualizarPrecoTotal();
    }

    atualizarPrecoTotal() {
        if (!this.produtoAtual) return;

        const total = this.carrinho.calcularPrecoItem(
            this.produtoAtual,
            this.quantidadeAtual,
            this.opcionaisSelecionados
        );

        document.querySelector('.total-preco').textContent = `R$ ${total.toFixed(2)}`;
        document.querySelector('.adicionar-carrinho-btn').textContent = `Adicionar • R$ ${total.toFixed(2)}`;
    }

    adicionarAoCarrinho() {
        if (!this.produtoAtual) return;

        this.carrinho.adicionarItem(
            this.produtoAtual,
            this.quantidadeAtual,
            this.opcionaisSelecionados
        );

        this.fecharModal();
    }

    abrirModalCarrinho() {
        const modal = document.getElementById('modalCarrinho');
        const carrinhoFlutuante = document.querySelector('.carrinho-nav-btn');
        if (modal) {
            this.carrinho.atualizarModalCarrinho();
            modal.style.display = 'block';
            if (carrinhoFlutuante) {
                carrinhoFlutuante.style.display = 'none';
            }
        }
    }

    fecharModalCarrinho() {
        const modal = document.getElementById('modalCarrinho');
        const carrinhoFlutuante = document.querySelector('.carrinho-nav-btn');
        if (modal) {
            modal.style.display = 'none';
            if (carrinhoFlutuante) {
                carrinhoFlutuante.style.display = 'flex';
            }
        }
    }

    // Função para validar os dados do carrinho antes de enviar
    validarCarrinho() {
        if (!this.carrinho.items || this.carrinho.items.length === 0) {
            throw new Error('Seu carrinho está vazio!');
        }

        if (!Array.isArray(this.carrinho.items) || !this.carrinho.items.every(item => 
            item.produto.id && item.produto.preco && item.quantidade)) {
            throw new Error('Dados do carrinho inválidos.');
        }
    }

    async finalizarPedido() {
        try {
            // Validar se há itens no carrinho
            if (this.carrinho.items.length === 0) {
                alert('Adicione itens ao carrinho antes de finalizar o pedido.');
                return;
            }
    
            // Obter dados do formulário
            const tipoEntrega = document.querySelector('input[name="tipo-entrega"]:checked')?.value;
            if (!tipoEntrega) {
                alert('Selecione um tipo de entrega');
                return;
            }
            
            // Verificar endereço se for entrega
            const enderecoEntrega = tipoEntrega === 'entrega' ? 
                document.querySelector('.endereco-entrega textarea')?.value?.trim() : '';
            
            if (tipoEntrega === 'entrega' && (!enderecoEntrega || enderecoEntrega.length < 5)) {
                alert('Por favor, informe um endereço válido para entrega');
                document.querySelector('.endereco-entrega textarea').focus();
                return;
            }
            
            // Obter e validar o número de telefone
            const telefone = document.getElementById('telefone-cliente')?.value?.trim();
            
            if (!telefone) {
                alert('Por favor, informe um número de telefone válido para continuar.');
                document.getElementById('telefone-cliente').focus();
                return;
            }
            
            if (telefone.length < 10) {
                alert('Por favor, informe um número de telefone válido com DDD.');
                document.getElementById('telefone-cliente').focus();
                return;
            }
            
            // Calcular o total baseado nos itens do carrinho
            const total = parseFloat(document.querySelector('.carrinho-total-modal').textContent.replace('Total: R$ ', ''));
        
            // Exibir log de dados antes de enviar
            console.log("🛒 Dados do pedido:", {
                carrinho: this.carrinho,
                tipoEntrega,
                enderecoEntrega,
                telefone,
                total
            });
            
            // Enviar para o servidor
            const response = await fetch('/finalizar_pedido', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    carrinho: {
                        items: this.carrinho.items.map(item => ({
                            produto: {
                                id: item.produto.id,
                                nome: item.produto.nome,
                                preco: item.produto.preco,
                                imagem: item.produto.imagem
                            },
                            quantidade: item.quantidade,
                            opcionaisSelecionados: item.opcionaisSelecionados,
                            total: this.carrinho.calcularPrecoItem(item.produto, item.quantidade, item.opcionaisSelecionados)
                        })),
                        total: this.carrinho.total
                    },
                    tipoEntrega: tipoEntrega,
                    enderecoEntrega: enderecoEntrega,
                    telefone: telefone,
                    total: total
                })
            });
        
            if (!response.ok) {
                throw new Error('Erro ao finalizar pedido');
            }
        
            const result = await response.json();
            
            if (result.success) {
                // Limpar o carrinho após pedido bem-sucedido
                localStorage.removeItem('carrinho');
                
                // Redirecionar para a página de confirmação usando apenas o pedidoId
                window.location.href = `/pedido_confirmado?pedidoId=${result.pedido.pedidoId}`;
            } else {
                throw new Error(result.error || 'Erro ao processar pedido');
            }
        } catch (error) {
            console.error('❌ Erro ao finalizar pedido:', error);
            alert('Erro ao finalizar pedido. Por favor, tente novamente.');
        }
    }
}    

// Atualizar seletores para o novo layout do carrinho na navegação inferior
const carrinhoBtn = document.querySelector('.carrinho-nav-btn');
const carrinhoBadge = document.querySelector('.carrinho-badge');
const carrinhoTotal = document.querySelector('.carrinho-nav-btn .carrinho-total');

// Quando o usuário clica no botão do carrinho na navegação
carrinhoBtn.addEventListener('click', function(e) {
    e.preventDefault();
    const ui = new CardapioUI();
    ui.abrirModalCarrinho();
});

// Função para atualizar a exibição do carrinho na navegação
function atualizarCarrinhoNav() {
    const totalItens = carrinho.reduce((total, item) => total + item.quantidade, 0);
    const valorTotal = carrinho.reduce((total, item) => total + (item.preco * item.quantidade), 0);
    
    carrinhoBadge.textContent = totalItens;
    carrinhoTotal.textContent = `R$ ${valorTotal.toFixed(2).replace('.', ',')}`;
    
    // Exibir ou ocultar o botão com base no estado do carrinho
    if (totalItens > 0) {
        carrinhoBtn.classList.add('ativo');
    } else {
        carrinhoBtn.classList.remove('ativo');
    }
}

// Controle de exibição das categorias e barra de pesquisa no scroll
document.addEventListener('DOMContentLoaded', function() {
    const categoriasNav = document.querySelector('.categorias-nav');
    const searchBar = document.querySelector('.search-bar');
    let lastScrollTop = 0;
    
    if (categoriasNav && searchBar) {
        window.addEventListener('scroll', function() {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const headerHeight = document.querySelector('.header').offsetHeight || 0;
            const threshold = headerHeight + 10; // Margem pequena
            
            // Se o usuário desceu além do threshold, oculta a navegação de categorias e a barra de pesquisa
            if (scrollTop > threshold) {
                categoriasNav.classList.add('hidden');
                searchBar.classList.add('hidden');
            } else {
                categoriasNav.classList.remove('hidden');
                searchBar.classList.remove('hidden');
            }
            
            lastScrollTop = scrollTop;
        });
    }
});

// Controle de exibição da barra de navegação inferior (nav-bottom)
document.addEventListener('DOMContentLoaded', function() {
    const navBottom = document.querySelector('.nav-bottom');
    let scrollTimeout;
    
    if (navBottom) {
        // Ocultar a barra de navegação quando começar a rolar
        window.addEventListener('scroll', function() {
            if (!navBottom.classList.contains('hidden')) {
                navBottom.classList.add('hidden');
            }
            
            // Limpar qualquer timeout existente
            clearTimeout(scrollTimeout);
            
            // Configurar um novo timeout para mostrar a navegação quando parar de rolar
            scrollTimeout = setTimeout(function() {
                navBottom.classList.remove('hidden');
            }, 500); // Aguardar 500ms após parar de rolar
        });
    }
});

// Controle de exibição do cabeçalho (header)
document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('.header');
    let lastScrollTop = 0;
    let headerScrollTimeout;
    
    if (header) {
        window.addEventListener('scroll', function() {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            
            // Se estiver rolando para baixo e não estiver no topo da página
            if (scrollTop > lastScrollTop && scrollTop > 50) {
                header.classList.add('hidden');
            } 
            
            // Limpar qualquer timeout existente
            clearTimeout(headerScrollTimeout);
            
            // Configurar um novo timeout para mostrar o cabeçalho quando parar de rolar
            headerScrollTimeout = setTimeout(function() {
                header.classList.remove('hidden');
            }, 500);
            
            lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Para compatibilidade com navegadores móveis
        });
    }
});

// Funcionalidade de processamento de pedido e integração com WhatsApp
async function handleOrderConfirmation(orderData) {
    try {
        const response = await fetch('/process-order', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(orderData)
        });
        
        const result = await response.json();
        
        if (result.success) {
            // Open WhatsApp in a new window
            window.open(result.whatsappLink, '_blank');
        } else {
            console.error('Error processing order:', result.error);
        }
    } catch (error) {
        console.error('Error:', error);
    }
}

// Inicializar a UI quando o documento estiver carregado
document.addEventListener('DOMContentLoaded', () => {
    console.log("🔄 Página carregada: Iniciando script do cardápio");
    const ui = new CardapioUI();
    
    // Verificar se o parâmetro requirePhone está presente na URL
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('requirePhone') === 'true') {
        // Abre o modal do carrinho e mostra uma mensagem sobre a necessidade do telefone
        ui.abrirModalCarrinho();
        alert('Por favor, informe seu número de telefone para continuar com o pedido.');
        const telefoneInput = document.getElementById('telefone-cliente');
        if (telefoneInput) {
            telefoneInput.focus();
        }
    }
    
    // Garantir que os event listeners dos produtos sejam configurados
    console.log("🔄 Configurando event listeners para cards de produtos");
    const produtoCards = document.querySelectorAll('.produto-card');
    console.log(`🔍 Encontrados ${produtoCards.length} cards de produtos`);
    
    produtoCards.forEach(card => {
        card.addEventListener('click', () => {
            console.log("🔍 Card clicado:", card.dataset.nome);
            const produto = {
                id: card.dataset.id,
                nome: card.dataset.nome,
                descricao: card.dataset.descricao,
                preco: Number(card.dataset.preco),
                categoria: card.dataset.categoria,
                imagem: card.dataset.imagem,
                opcionais: JSON.parse(card.dataset.opcionais || '[]')
            };
            console.log("🔍 Abrindo modal para:", produto.nome);
            ui.abrirModal(produto);
            console.log("🔍 Modal deveria estar visível agora");
        });
    });
    
    // Adicionar funcionalidade de pesquisa
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        const produtoCards = document.querySelectorAll('.produto-card');
        
        searchInput.addEventListener('input', function() {
            const query = this.value.trim().toLowerCase();
            
            produtoCards.forEach(card => {
                const nomeProduto = card.getAttribute('data-nome').toLowerCase();
                
                // Se o nome do produto incluir a query, exibe o card; caso contrário, oculta-o.
                if (nomeProduto.includes(query)) {
                    card.style.display = '';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    }
    
    // Adicionar funcionalidade de filtro por categoria
    const categoryButtons = document.querySelectorAll('.categoria-btn');
    if (categoryButtons.length) {
        const productCards = document.querySelectorAll('.produto-card');
        
        categoryButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Remove the active class from all buttons
                categoryButtons.forEach(btn => btn.classList.remove('ativo'));
                // Add the active class to the clicked button
                button.classList.add('ativo');
                
                // Get the category selected from the button
                const selectedCategory = button.getAttribute('data-categoria');
                
                productCards.forEach(card => {
                    const cardCategory = card.getAttribute('data-categoria');
                    // If the selected category is "todos", show all cards; otherwise, only show cards that match the category
                    if (selectedCategory === 'todos' || cardCategory === selectedCategory) {
                        card.style.display = '';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });
    }
});
