document.addEventListener('DOMContentLoaded', () => {
    const stars = document.querySelectorAll('.stars i');
    const ratingAverage = document.querySelectorAll('.rating-average');
    const ratingCount = document.querySelectorAll('.rating-count');

    // Função para atualizar a exibição das estrelas
    function updateStarsDisplay(container, rating) {
        const stars = container.querySelectorAll('i');
        stars.forEach((star, index) => {
            if (index < rating) {
                star.classList.add('active');
            } else {
                star.classList.remove('active');
            }
        });
    }

    // Função para enviar avaliação
    async function submitRating(produtoId, rating) {
        try {
            const response = await fetch('/api/avaliar', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ produto_id: produtoId, rating }),
            });

            if (!response.ok) {
                throw new Error('Erro ao enviar avaliação');
            }

            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Erro:', error);
            alert('Erro ao enviar avaliação. Tente novamente.');
        }
    }

    // Adicionar eventos de hover e click nas estrelas
    document.querySelectorAll('.produto-card').forEach(card => {
        const starsContainer = card.querySelector('.stars');
        const stars = starsContainer.querySelectorAll('i');
        const produtoId = card.dataset.id;

        // Hover effect
        stars.forEach(star => {
            star.addEventListener('mouseover', () => {
                const rating = star.dataset.rating;
                updateStarsDisplay(starsContainer, rating);
            });
        });

        starsContainer.addEventListener('mouseleave', () => {
            const currentRating = parseFloat(card.querySelector('.rating-average').textContent.replace('(', '').replace(')', ''));
            updateStarsDisplay(starsContainer, currentRating);
        });

        // Click event
        stars.forEach(star => {
            star.addEventListener('click', async () => {
                const rating = parseInt(star.dataset.rating);
                const result = await submitRating(produtoId, rating);
                
                if (result) {
                    card.querySelector('.rating-average').textContent = `(${result.media.toFixed(1)})`;
                    card.querySelector('.rating-count').textContent = `(${result.total} avaliações)`;
                    updateStarsDisplay(starsContainer, result.media);
                }
            });
        });
    });
});