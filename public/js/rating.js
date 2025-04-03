document.addEventListener('DOMContentLoaded', function() {
    // Sistema de avaliação por estrelas
    document.querySelectorAll('.stars i').forEach(star => {
        star.addEventListener('click', function() {
            const rating = this.dataset.rating;
            const produtoCard = this.closest('.produto-card');
            const produtoId = produtoCard.dataset.id;
            
            // Atualiza visualmente as estrelas
            const stars = produtoCard.querySelectorAll('.stars i');
            stars.forEach(s => {
                s.classList.remove('active');
                if (s.dataset.rating <= rating) {
                    s.classList.add('active');
                }
            });
            
            // Simula o envio da avaliação
            // TODO: Implementar integração com backend
            const ratingAverage = produtoCard.querySelector('.rating-average');
            const ratingCount = produtoCard.querySelector('.rating-count');
            
            // Atualiza a média (simulação)
            const currentCount = parseInt(ratingCount.textContent.match(/\d+/)[0] || 0);
            const newCount = currentCount + 1;
            const currentAverage = parseFloat(ratingAverage.textContent.match(/[\d.]+/)[0] || 0);
            const newAverage = ((currentAverage * currentCount) + parseInt(rating)) / newCount;
            
            ratingAverage.textContent = `(${newAverage.toFixed(1)})`;
            ratingCount.textContent = `(${newCount} avaliações)`;
        });
        
        // Efeito hover
        star.addEventListener('mouseover', function() {
            const stars = this.parentElement.children;
            const rating = this.dataset.rating;
            
            for (let i = 0; i < stars.length; i++) {
                if (i < rating) {
                    stars[i].style.color = '#ffd700';
                } else {
                    stars[i].style.color = '#ddd';
                }
            }
        });
        
        star.addEventListener('mouseout', function() {
            const stars = this.parentElement.children;
            Array.from(stars).forEach(s => {
                if (!s.classList.contains('active')) {
                    s.style.color = '#ddd';
                } else {
                    s.style.color = '#ffd700';
                }
            });
        });
    });
}));