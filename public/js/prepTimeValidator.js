class PrepTimeValidator {
    constructor() {
        this.input = document.getElementById('tempo_preparo');
        this.init();
    }

    init() {
        this.input.addEventListener('input', (e) => this.handleInput(e));
        this.input.addEventListener('blur', (e) => this.handleBlur(e));
    }

    handleInput(e) {
        const value = e.target.value;
        
        if (value === '') {
            this.setInvalid('O tempo de preparo é obrigatório');
        } else if (parseInt(value) < 1) {
            this.setInvalid('O tempo de preparo deve ser maior que 0');
        } else {
            this.setValid();
        }
    }

    handleBlur(e) {
        if (!e.target.value) {
            this.setInvalid('O tempo de preparo é obrigatório');
        }
    }

    setInvalid(message) {
        this.input.classList.add('is-invalid');
        this.input.classList.remove('is-valid');
        
        let feedback = this.input.nextElementSibling;
        if (!feedback || !feedback.classList.contains('invalid-feedback')) {
            feedback = document.createElement('div');
            feedback.className = 'invalid-feedback';
            this.input.parentNode.insertBefore(feedback, this.input.nextSibling);
        }
        feedback.textContent = message;
        this.input.setCustomValidity(message);
    }

    setValid() {
        this.input.classList.remove('is-invalid');
        this.input.classList.add('is-valid');
        this.input.setCustomValidity('');
        
        const feedback = this.input.nextElementSibling;
        if (feedback && feedback.classList.contains('invalid-feedback')) {
            feedback.remove();
        }
    }
}

// Inicializar o validador quando o documento estiver pronto
document.addEventListener('DOMContentLoaded', () => {
    new PrepTimeValidator();
});