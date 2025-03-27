async function atualizarQuantidade(itemId, acao) {
    try {
        const response = await fetch('/atualizar_quantidade', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ itemId, acao })
        });

        const data = await response.json();
        if (data.success) {
            atualizarCarrinhoUI(data.carrinho, data.total);
        }
    } catch (error) {
        console.error('Erro ao atualizar quantidade:', error);
    }
}

function atualizarCarrinhoUI(carrinho, total) {
    const carrinhoContainer = document.querySelector('.carrinho-items');
    carrinhoContainer.innerHTML = '';

    carrinho.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.className = 'carrinho-item';
        itemElement.innerHTML = `
            <span>${item.nome}</span>
            <div class="quantidade-controles">
                <button onclick="atualizarQuantidade('${item.id}', 'diminuir')">-</button>
                <span>${item.quantidade}</span>
                <button onclick="atualizarQuantidade('${item.id}', 'aumentar')">+</button>
            </div>
            <span>R$ ${(item.preco * item.quantidade).toFixed(2)}</span>
        `;
        carrinhoContainer.appendChild(itemElement);
    });

    document.querySelector('.carrinho-total').textContent = `R$ ${total.toFixed(2)}`;
}