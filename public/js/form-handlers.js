// Handle operating hours
document.addEventListener('DOMContentLoaded', () => {
    const checkboxes = document.querySelectorAll('[data-dia]');
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', (e) => {
            const dia = e.target.dataset.dia;
            const horariosDiv = document.querySelector(`#${dia} .horarios`);
            if (e.target.checked) {
                horariosDiv.classList.remove('d-none');
            } else {
                horariosDiv.classList.add('d-none');
            }
        });
    });

    // Handle delivery options
    const entregaCheckbox = document.getElementById('entrega');
    const entregaConfig = document.querySelector('.entrega-config');
    entregaCheckbox.addEventListener('change', (e) => {
        entregaConfig.style.display = e.target.checked ? 'block' : 'none';
    });

    // Form validation
    const form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
        if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
        }
        form.classList.add('was-validated');
    });
});