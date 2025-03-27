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
                categoria: produto.categoria
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
                    categoria: item.produto.categoria
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
                        categoria: item.produto.categoria
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
            listaCarrinho.innerHTML = this.items.map((item, index) => `
                <div class="carrinho-item">
                    <div class="carrinho-item-info">
                        <h4>${item.produto.nome}</h4>
                        <p>Quantidade: ${item.quantidade}</p>
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
        }

        // Atualizar total
        totalModal.textContent = `Total: R$ ${this.total.toFixed(2)}`;
    }
}

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
        const carrinhoBtn = document.querySelector('.carrinho-flutuante');
        if (carrinhoBtn) {
            carrinhoBtn.addEventListener('click', () => this.abrirModalCarrinho());
        }

        // Configurar modal do carrinho
        const modalCarrinho = document.getElementById('modalCarrinho');
        if (modalCarrinho) {
            const closeBtn = modalCarrinho.querySelector('.modal-close');
            const finalizarBtn = modalCarrinho.querySelector('.finalizar-pedido-btn');

            closeBtn.addEventListener('click', () => this.fecharModalCarrinho());
            ////finalizarBtn.addEventListener('click', () => this.finalizarPedido());
        }
    }

    configurarCarrinhoModal() {
        const modal = document.getElementById('modalCarrinho');
        const btnFechar = modal.querySelector('.modal-close');
        const btnContinuar = modal.querySelector('.continuar-comprando-btn');
        
        btnFechar.addEventListener('click', () => {
            modal.style.display = 'none';
        });

        btnContinuar.addEventListener('click', () => {
            modal.style.display = 'none';
        });

        // Fechar modal ao clicar fora
        window.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });
    }

    abrirModal(produto) {
        this.produtoAtual = produto;
        this.quantidadeAtual = 1;
        this.opcionaisSelecionados = [];
        
        const modal = document.getElementById('modalProduto');
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
            opcionaisLista.parentElement.style.display = 'block';
        } else {
            opcionaisLista.innerHTML = '<p>Não há complementos disponíveis para este item.</p>';
            opcionaisLista.parentElement.style.display = 'none';
        }
    
        // Adicionar listeners para os checkboxes

        // Adicionar listeners para os checkboxes
        opcionaisLista.querySelectorAll('.opcional-checkbox').forEach(checkbox => {
            checkbox.addEventListener('change', () => this.atualizarOpcionaisSelecionados());
        });
    
        this.atualizarPrecoTotal();
        modal.style.display = 'block';
    }

    fecharModal() {
        const modal = document.getElementById('modalProduto');
        modal.style.display = 'none';
        this.produtoAtual = null;
        this.opcionaisSelecionados = [];
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
        const carrinhoFlutuante = document.querySelector('.carrinho-flutuante');
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
        const carrinhoFlutuante = document.querySelector('.carrinho-flutuante');
        if (modal) {
            modal.style.display = 'none';
            if (carrinhoFlutuante) {
                carrinhoFlutuante.style.display = 'flex';
            }
        }
    }

    async finalizarPedido_not() {
        if (this.carrinho.items.length === 0) {
            alert('Adicione itens ao carrinho antes de finalizar o pedido.');
            return;
        }
    
        const tipoEntrega = document.querySelector('input[name="tipo-entrega"]:checked').value;
        const enderecoEntrega = tipoEntrega === 'entrega' ? 
            document.querySelector('.endereco-entrega textarea').value : '';
        const total = parseFloat(document.querySelector('.carrinho-total-modal').textContent.replace('Total: R$ ', ''));
        
        // Obter o número de telefone do campo
        const telefone = document.getElementById('telefone-cliente').value.trim();
        console.log("eu sou telefone em carrinho js/cardadoidigital.js linha 433:", telefone);
        // Validar número de telefone
        if (!telefone) {
            alert('Por favor, informe um número de telefone válido para continuar.');
            document.getElementById('telefone-cliente').focus();
            return;
        }
        
        // Validação básica de formato (pode ser melhorada conforme necessidade)
        if (telefone.length < 10) {
            alert('Por favor, informe um número de telefone válido com DDD.');
            document.getElementById('telefone-cliente').focus();
            return;
        }
    
        // 🛠️ Debug: Exibir os dados antes de enviar
        console.log("🛒 Dados do pedido linha 449 cardapio_digital.js:", {
            carrinho: this.carrinho,
            tipoEntrega,
            enderecoEntrega,
            telefone,
            total
        });
    
        try {
            const response = await fetch('/finalizar_pedido', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    carrinho: this.carrinho,
                    tipoEntrega: tipoEntrega,
                    enderecoEntrega: enderecoEntrega,
                    telefone: telefone,
                    total: total
                })
            });
    
            if (!response.ok) {
                throw new Error('Erro ao finalizar pedido processado por cardapio_digital.js linha 473');
            }
    
            const result = await response.json();
            console.log("✅ Pedido finalizado com sucesso:", result);
            console.log("✅ Pedido finalizado com sucesso:", result.pedido.pedidoId);
            if (result.success) {
                localStorage.removeItem('carrinho');
                window.location.href = `/pedido_confirmado?pedidoId=${result.pedido.pedidoId}`;
            }
        } catch (error) {
            console.error('❌ Erro ao finalizar pedido:', error);
            alert('Erro ao finalizar pedido. Por favor, tente novamente.');
        }
    }
}    
// Inicializar a UI quando o documento estiver carregado
document.addEventListener('DOMContentLoaded', () => {
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
});
document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById('searchInput');
    const produtoCards = document.querySelectorAll('.produto-card');
  
    searchInput.addEventListener('input', function () {
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
  });
  


  /////////////////lececiona os iten do menu para pesquisa 
  document.addEventListener('DOMContentLoaded', () => {
    const categoryButtons = document.querySelectorAll('.categoria-btn');
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
  });



  ///////fim