class UsernameValidator {
    constructor() {
        this.input = document.getElementById('username');
        this.feedback = document.getElementById('usernameFeedback');
        this.suggestions = document.getElementById('usernameSuggestions');
        this.loader = document.getElementById('usernameLoader');
        this.checkTimeout = null;
        this.init();
    }

    init() {
        this.input.addEventListener('input', (e) => this.handleInput(e));
    }

    handleInput(e) {
        // Sanitize input: remove spaces and special characters
        let value = e.target.value.toLowerCase();
        value = value.replace(/\s+/g, '_');
        value = value.replace(/[^a-z0-9_-]/g, '');
        e.target.value = value;

        if (value.length >= 3) {
            this.loader.classList.remove('d-none');
            clearTimeout(this.checkTimeout);
            this.checkTimeout = setTimeout(() => this.checkAvailability(value), 500);
        } else {
            this.feedback.innerHTML = '';
            this.suggestions.innerHTML = '';
            this.loader.classList.add('d-none');
        }
    }

    async checkAvailability(username) {
        try {
            const response = await fetch(`/dashboard/check-username?username=${username}`);
            const data = await response.json();
            this.loader.classList.add('d-none');

            if (data.available) {
                this.feedback.innerHTML = '<span class="text-success">✓ Nome de usuário disponível</span>';
                this.suggestions.innerHTML = '';
                this.input.setCustomValidity('');
            } else {
                this.feedback.innerHTML = '<span class="text-danger">✗ Nome de usuário já existe</span>';
                this.showSuggestions(username);
                this.input.setCustomValidity('Username already taken');
            }
        } catch (error) {
            this.loader.classList.add('d-none');
            this.feedback.innerHTML = '<span class="text-danger">Erro ao verificar disponibilidade</span>';
        }
    }

    generateSuggestions(baseUsername) {
        const date = new Date();
        return [
            `${baseUsername}_${date.getFullYear()}`,
            `${baseUsername}_oficial`,
            `${baseUsername}${Math.floor(Math.random() * 1000)}`,
            `oficial_${baseUsername}`,
            `${baseUsername}_${date.getFullYear()}${date.getMonth() + 1}`
        ];
    }

    showSuggestions(username) {
        const suggestions = this.generateSuggestions(username);
        this.suggestions.innerHTML = `
            <div class="alert alert-info">
                <small>Sugestões disponíveis:</small><br>
                ${suggestions.map(sug => `
                    <button type="button" class="btn btn-sm btn-link p-0 me-2" onclick="document.getElementById('username').value='${sug}'">
                        ${sug}
                    </button>
                `).join('')}
            </div>
        `;
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new UsernameValidator();
});

class PhoneValidator {
    constructor() {
        this.input = document.getElementById('telefone');
        this.feedback = document.getElementById('telefoneFeedback');
        this.loader = document.getElementById('telefoneLoader');
        this.checkTimeout = null;
        this.init();
    }

    init() {
        this.input.addEventListener('input', (e) => this.handleInput(e));
    }

    formatPhone(phone) {
        // Remove non-digits
        phone = phone.replace(/\D/g, '');
        
        // Limit to 11 digits (Brazilian format)
        if (phone.length > 11) phone = phone.slice(0, 11);
        
        // Format: (XX) XXXXX-XXXX or (XX) XXXX-XXXX
        if (phone.length > 2) phone = `(${phone.slice(0, 2)}) ${phone.slice(2)}`;
        if (phone.length > 9) phone = `${phone.slice(0, 10)}-${phone.slice(10)}`;
        
        return phone;
    }

    async checkAvailability(phone) {
        try {
            const response = await fetch(`/dashboard/check-phone?phone=${phone}`);
            const data = await response.json();
            this.loader.classList.add('d-none');

            if (data.available) {
                this.feedback.innerHTML = '<span class="text-success">✓ Telefone disponível</span>';
                this.input.setCustomValidity('');
            } else {
                this.feedback.innerHTML = '<span class="text-danger">✗ Telefone já cadastrado</span>';
                this.input.setCustomValidity('Phone already registered');
            }
        } catch (error) {
            this.loader.classList.add('d-none');
            this.feedback.innerHTML = '<span class="text-danger">Erro ao verificar disponibilidade</span>';
        }
    }

    handleInput(e) {
        let value = e.target.value;
        value = this.formatPhone(value);
        e.target.value = value;

        const numeroLimpo = value.replace(/\D/g, '');
        if (numeroLimpo.length >= 10) {
            this.loader.classList.remove('d-none');
            clearTimeout(this.checkTimeout);
            this.checkTimeout = setTimeout(() => this.checkAvailability(numeroLimpo), 500);
        } else {
            this.feedback.innerHTML = '';
            this.loader.classList.add('d-none');
        }
    }
}

class PasswordValidator {
    constructor() {
        this.password = document.getElementById('password');
        this.confirm = document.getElementById('confirm_password');
        this.toggleBtn = document.getElementById('togglePassword');
        this.toggleConfirmBtn = document.getElementById('toggleConfirmPassword');
        this.matchFeedback = document.getElementById('passwordMatch');
        this.strengthFeedback = document.createElement('div');
        this.strengthFeedback.className = 'form-text mt-1';
        this.password.parentNode.parentNode.insertBefore(this.strengthFeedback, this.password.parentNode.nextSibling);
        this.init();
    }

    init() {
        this.setupToggleVisibility();
        this.setupValidation();
        this.password.addEventListener('input', () => this.checkStrength());
    }

    checkStrength() {
        const password = this.password.value;
        let strength = 0;
        let feedback = [];

        // Length check
        if (password.length < 8) {
            feedback.push('Mínimo de 8 caracteres');
        } else {
            strength += 1;
        }

        // Uppercase check
        if (!/[A-Z]/.test(password)) {
            feedback.push('Adicione letra maiúscula');
        } else {
            strength += 1;
        }

        // Lowercase check
        if (!/[a-z]/.test(password)) {
            feedback.push('Adicione letra minúscula');
        } else {
            strength += 1;
        }

        // Number check
        if (!/[0-9]/.test(password)) {
            feedback.push('Adicione número');
        } else {
            strength += 1;
        }

        // Special character check
        if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
            feedback.push('Adicione caractere especial');
        } else {
            strength += 1;
        }

        // Update visual feedback
        let strengthText = '';
        let strengthClass = '';
        
        if (strength === 0) {
            strengthText = 'Muito fraca';
            strengthClass = 'text-danger';
        } else if (strength <= 2) {
            strengthText = 'Fraca';
            strengthClass = 'text-danger';
        } else if (strength <= 3) {
            strengthText = 'Média';
            strengthClass = 'text-warning';
        } else if (strength <= 4) {
            strengthText = 'Forte';
            strengthClass = 'text-success';
        } else {
            strengthText = 'Muito forte';
            strengthClass = 'text-success';
        }

        this.strengthFeedback.innerHTML = `
            <div class="${strengthClass}">
                Força da senha: ${strengthText}
                ${feedback.length > 0 ? '<br><small>' + feedback.join(' • ') + '</small>' : ''}
            </div>
        `;

        // Set form validation
        if (strength < 3) {
            this.password.setCustomValidity('Senha muito fraca');
        } else {
            this.password.setCustomValidity('');
        }
    }

    setupToggleVisibility() {
        this.toggleBtn.addEventListener('click', () => this.toggleVisibility(this.password, this.toggleBtn));
        this.toggleConfirmBtn.addEventListener('click', () => this.toggleVisibility(this.confirm, this.toggleConfirmBtn));
    }

    toggleVisibility(input, button) {
        const type = input.getAttribute('type') === 'password' ? 'text' : 'password';
        input.setAttribute('type', type);
        button.querySelector('i').classList.toggle('fa-eye');
        button.querySelector('i').classList.toggle('fa-eye-slash');
    }

    setupValidation() {
        const checkMatch = () => {
            if (this.confirm.value === '') {
                this.matchFeedback.innerHTML = '';
                this.confirm.setCustomValidity('');
            } else if (this.password.value === this.confirm.value) {
                this.matchFeedback.innerHTML = '<span class="text-success">✓ As senhas coincidem</span>';
                this.confirm.setCustomValidity('');
            } else {
                this.matchFeedback.innerHTML = '<span class="text-danger">✗ As senhas não coincidem</span>';
                this.confirm.setCustomValidity('Passwords do not match');
            }
        };

        this.password.addEventListener('input', checkMatch);
        this.confirm.addEventListener('input', checkMatch);
    }
}

// Initialize validators
document.addEventListener('DOMContentLoaded', () => {
    new UsernameValidator();
    new PhoneValidator();
    new PasswordValidator();
});