let isModalInitialized = false;

// Observador para mudanças no localStorage
window.addEventListener('storage', function(e) {
    if (e.key === 'carrinho') {
        atualizarBadgeCarrinho();
    }
});

// Função para atualizar o badge e o total do carrinho
function atualizarBadgeCarrinho() {
    const carrinhoBadge = document.querySelector('.carrinho-badge');
    const carrinhoInfo = document.querySelector('.carrinho-info');
    const carrinhoTotal = document.querySelector('.carrinho-total');
    if (!carrinhoBadge) {
        console.error('Elemento carrinho-badge não encontrado');
        return;
    }

    try {
        const carrinho = JSON.parse(localStorage.getItem('carrinho')) || { items: [] };
        const totalItens = carrinho.items.reduce((total, item) => total + (Number(item.quantidade) || 0), 0);
        const valorTotal = carrinho.items.reduce((total, item) => total + ((Number(item.produto.preco) || 0) * (Number(item.quantidade) || 0)), 0);
        
        carrinhoBadge.textContent = totalItens;
        carrinhoBadge.style.display = totalItens > 0 ? 'block' : 'none';

        if (carrinhoInfo && carrinhoTotal) {
            if (totalItens > 0) {
                carrinhoInfo.style.display = 'block';
                carrinhoTotal.textContent = `R$ ${valorTotal.toFixed(2).replace('.', ',')}`;
        } else {
            carrinhoInfo.style.display = 'none';
        }
    }
    } catch (error) {
        console.error('Erro ao atualizar badge do carrinho:', error);
        carrinhoBadge.textContent = '0';
        carrinhoBadge.style.display = 'none';
        if (carrinhoInfo) {
            carrinhoInfo.style.display = 'none';
        }
    }
}

// Atualiza o badge do carrinho ao carregar a página
document.addEventListener('DOMContentLoaded', function() {
    atualizarBadgeCarrinho();
});

document.addEventListener('DOMContentLoaded', function () {
    if (isModalInitialized) {
        console.log('🔄 Modal já foi inicializado, ignorando...');
        return;
    }
    isModalInitialized = true;
    console.log("🔄 Página carregada: Iniciando script do carrinho");

    // Atualiza o badge do carrinho ao carregar a página
    atualizarBadgeCarrinho();

    const tipoEntregaInputs = document.querySelectorAll('input[name="tipo-entrega"]');
    const enderecoEntrega = document.querySelector('.endereco-entrega');
    const finalizarPedidoBtn = document.querySelector('.finalizar-pedido-btn');
    const tell = document.getElementById('telefone-cliente').value.trim();
    console.log(tell);
    const telefoneInput = document.querySelector('input[name="telefone-cliente"]');
const telefone = telefoneInput ? telefoneInput.value : ''; // Retorna uma string vazia se o input não for encontrado
console.log(telefone);
    ///finalizarPedidoBtn.addEventListener('click', () => this.finalizarPedido());
    if (!tipoEntregaInputs.length || !enderecoEntrega || !finalizarPedidoBtn) {
        console.error("❌ ERRO: Elementos do DOM não encontrados!");
        return;
    }

    // Mostrar/ocultar campo de endereço quando selecionar delivery
    tipoEntregaInputs.forEach(radio => {
        radio.addEventListener('change', (e) => {
            console.log(`🛵 Tipo de entrega alterado: ${e.target.value}`);
            enderecoEntrega.style.display = e.target.value === 'entrega' ? 'block' : 'none';
        });
    });

    // Função para validar os dados do carrinho
    function validarCarrinho(carrinho) {
        if (!carrinho || !carrinho.items || carrinho.items.length === 0) {
            throw new Error('Seu carrinho está vazio!');
        }

        if (!Array.isArray(carrinho.items) || !carrinho.items.every(item => item.produto.id && item.produto.preco && item.quantidade)) {
            throw new Error('Dados do carrinho inválidos.');
        }
    }

    // Função para formatar os dados do pedido
    function formatarDadosPedido(tipoEntrega, endereco, carrinho) {
        return {
            tipo_entrega: tipoEntrega,
            endereco: endereco || null,
            carrinho: carrinho.items.map(item => ({
                produto: {
                    id: item.produto.id,
                    preco: item.produto.preco
                },
                quantidade: item.quantidade,
                opcionais: item.opcionais || []
            }))
        };
    }

    // Função para enviar o pedido ao servidor
    // Updated enviarPedido function
    async function enviarPedido(carrinho, tipoEntrega, enderecoEntrega, telefone) {
        try {
            console.log("📦 Dados sendo enviados em enviarPedido carrinho_modal linha 54:", {
                carrinho: carrinho,
                tipoEntrega: tipoEntrega,
                enderecoEntrega: enderecoEntrega,
                total: carrinho.total,
                telefone: tell
            });

            const response = await fetch('/finalizar_pedido', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    carrinho: {
                        items: carrinho.items.map(item => ({
                            produto: {
                                id: item.produto.id,
                                preco: item.produto.preco,
                                nome: item.produto.nome
                            },
                            quantidade: item.quantidade,
                            opcionaisSelecionados: item.opcionaisSelecionados || []
                        })),
                        total: carrinho.total
                    },
                    tipoEntrega: tipoEntrega,
                    enderecoEntrega: enderecoEntrega
                })
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || 'Erro ao finalizar pedido');
            }

            const data = await response.json();
            atualizarBadgeCarrinho(); // Atualiza o badge após finalizar o pedido
            return data;
        } catch (error) {
            console.error('Erro ao enviar pedido:', error);
            throw error;
        }
    }

    // Remove the duplicate event listener and keep only this one
    let isProcessing = false;
    finalizarPedidoBtn.addEventListener('click', async function () {
        if (isProcessing) {
            console.log('🚫 Pedido já está sendo processado...');
            return;
        }

        try {
            isProcessing = true;
            finalizarPedidoBtn.disabled = true;
            console.log("🛒 Botão 'Finalizar Pedido' clicado   em carrinho_modal.js linha 101.");

            const carrinho = JSON.parse(localStorage.getItem('carrinho'));
            if (!carrinho || !carrinho.items || carrinho.items.length === 0) {
                throw new Error('Seu carrinho está vazio!');
            }

            const tipoEntrega = document.querySelector('input[name="tipo-entrega"]:checked')?.value;
            if (!tipoEntrega) {
                throw new Error('Selecione um tipo de entrega');
            }

            const endereco = tipoEntrega === 'entrega' 
                ? document.querySelector('.endereco-entrega textarea')?.value?.trim() 
                : null;

            if (tipoEntrega === 'entrega' && (!endereco || endereco.length < 5)) {
                throw new Error('Por favor, informe um endereço válido para entrega');
            }

            const resultado = await enviarPedido(carrinho, tipoEntrega, endereco ,telefone);
            
            // Inside the click event listener for finalizarPedidoBtn
            if (resultado.success) {
                // Format the data for the confirmation page
                const dadosPedido = {
                    carrinho: carrinho,
                    tipoEntrega: tipoEntrega,
                    telefone: telefone,
                    enderecoEntrega: endereco,
                    pedidoId: resultado.pedido.pedidoId
                };
                
                // Encode the data properly
                const dadosPedidoStr = encodeURIComponent(JSON.stringify(dadosPedido));
                console.log("Dados do pedido formatados:", dadosPedidoStr);
                // Redirect with the encoded data
                window.location.href = `/pedido_confirmado?dadosPedido=${dadosPedidoStr}`;
                
                // Add event listener for the "Continuar Comprando" button
                document.querySelector('.voltar-pedido-btn').addEventListener('click', function() {
                    // Close the cart modal
                    const modalCarrinho = document.getElementById('modalCarrinho');
                    modalCarrinho.style.display = 'none';
                    
                    // Remove modal-open class from body if it exists
                    document.body.classList.remove('modal-open');
                });
            } else {
                throw new Error(resultado.error || 'Erro ao processar pedido');
            }
        } catch (error) {
            console.error('❌ ERRO ao finalizar pedido:', error);
            alert(error.message || 'Erro ao finalizar pedido. Tente novamente.');
        } finally {
            isProcessing = false;
            finalizarPedidoBtn.disabled = false;
        }
    });
});

// Inside your order confirmation logic
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