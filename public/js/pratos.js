document.addEventListener('DOMContentLoaded', function() {
    const modalElement = document.getElementById('modalConfirmacao');
    const modal = new bootstrap.Modal(modalElement);
    let pratoIdParaExcluir = null;

    // Adiciona listener para quando o modal terminar de fechar
    modalElement.addEventListener('hidden.bs.modal', function () {
        const backdrop = document.querySelector('.modal-backdrop');
        if (backdrop) backdrop.remove();
        document.body.classList.remove('modal-open');
        document.body.style.overflow = '';
        document.body.style.paddingRight = '';
    });

    // Gerenciamento de botões de ação
    document.querySelectorAll('.btn-excluir').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            pratoIdParaExcluir = this.getAttribute('data-id');
            modal.show();
        });
    });

    // Confirmar exclusão
    document.getElementById('btnConfirmarExclusao').addEventListener('click', async function() {
        if (pratoIdParaExcluir) {
            try {
                const response = await fetch(`/dashboard/pratos/excluir/${pratoIdParaExcluir}`, {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                console.log("Resposta da exclusão:", response);
                if (response.ok) {
                    // Fecha o modal
                    modal.hide();
                    
                    // Mostra mensagem de sucesso
                    const alertDiv = document.createElement('div');
                    alertDiv.className = 'alerta alerta-sucesso';
                    alertDiv.innerHTML = '<i class="fas fa-check-circle"></i> Prato excluído com sucesso!';
                    document.querySelector('.card-header-principal').insertAdjacentElement('afterend', alertDiv);
                    
                    // Remove o alerta após 3 segundos
                    setTimeout(() => alertDiv.remove(), 3000);

                    // Remove elementos da página
                    setTimeout(() => {
                        // Remove o elemento da visualização desktop
                        const row = document.querySelector(`tr[data-id="${pratoIdParaExcluir}"]`);
                        if (row) row.remove();
                        
                        // Remove o elemento da visualização mobile
                        const card = document.querySelector(`.card-prato[data-id="${pratoIdParaExcluir}"]`);
                        if (card) card.remove();
                    }, 100);
                } else {
                    throw new Error('Erro ao excluir o prato');
                }
            } catch (error) {
                console.error('Erro:', error);
                alert('Erro ao excluir o prato. Tente novamente  pratos.js linha 52.');
            }
        }
    });
});