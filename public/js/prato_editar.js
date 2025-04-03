document.addEventListener('DOMContentLoaded', function() {
    const listaComplementos = document.getElementById('lista_complementos');
    const listaIngredientes = document.getElementById('lista_ingredientes');

    if (listaIngredientes) {
        // Delegar o evento de clique para os botões de remover ingrediente
        listaIngredientes.addEventListener('click', async function(e) {
            const botaoRemover = e.target.closest('.remover-ingrediente');
            if (!botaoRemover) return;

            // Encontrar o elemento pai que contém os dados do ingrediente
            const ingredienteDiv = botaoRemover.closest('.input-group');
            const pratoId = window.location.pathname.split('/').pop();
            const nomeIngrediente = ingredienteDiv.querySelector('input[name="ingredientes[]"]').value;

            if (confirm(`Deseja realmente remover o ingrediente "${nomeIngrediente}"?`)) {
                try {
                    const response = await fetch('/dashboard/ingredientes/remover', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            prato_id: pratoId,
                            nome: nomeIngrediente
                        })
                    });

                    const data = await response.json();

                    if (data.success) {
                        // Remove o elemento do DOM apenas se a remoção no banco foi bem sucedida
                        ingredienteDiv.remove();
                    } else {
                        alert('Erro ao remover ingrediente: ' + data.message);
                    }
                } catch (error) {
                    console.error('Erro ao remover ingrediente:', error);
                    alert('Erro ao remover ingrediente. Por favor, tente novamente.');
                }
            }
        });
    }

    // Remoção de complementos
    if (listaComplementos) {
        listaComplementos.addEventListener('click', async function(e) {
            const botaoRemover = e.target.closest('.remover-complemento');
            if (!botaoRemover) return;

            const complementoDiv = botaoRemover.closest('.complemento-item');
            const pratoId = window.location.pathname.split('/').pop();
            const nomeComplemento = complementoDiv.querySelector('input[name="complementos[]"]').value;

            if (confirm(`Deseja realmente remover o complemento "${nomeComplemento}"?`)) {
                try {
                    const response = await fetch('/dashboard/complementos/remover', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            prato_id: pratoId,
                            nome: nomeComplemento
                        })
                    });

                    const data = await response.json();

                    if (data.success) {
                        complementoDiv.remove();
                    } else {
                        alert('Erro ao remover complemento: ' + data.message);
                    }
                } catch (error) {
                    console.error('Erro ao remover complemento:', error);
                    alert('Erro ao remover complemento. Por favor, tente novamente.');
                }
            }
        });
    }
});
