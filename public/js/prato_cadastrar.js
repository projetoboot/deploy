document.addEventListener('DOMContentLoaded', function() {
    // Elementos DOM
    const precoFormatado = document.getElementById('preco_formatado');
    const precoValor = document.getElementById('preco_valor');
    const listaIngredientes = document.getElementById('lista_ingredientes');
    const btnAdicionarIngrediente = document.getElementById('adicionar_ingrediente');
    const listaComplementos = document.getElementById('lista_complementos');
    const btnAdicionarComplemento = document.getElementById('adicionar_complemento');
    const tempoPreparo = document.getElementById('tempo_preparo');
    const inputImagem = document.querySelector('input[name="imagem"]');
    const form = document.querySelector('form');

    // Validação do formulário antes do envio
    form.addEventListener('submit', function(e) {
        let isValid = true;

        // Validar imagem
        if (!inputImagem.files || !inputImagem.files[0]) {
            inputImagem.classList.add('is-invalid');
            isValid = false;
        } else {
            inputImagem.classList.remove('is-invalid');
        }

        if (!isValid) {
            e.preventDefault();
        }
    });

    // Limpar validação quando selecionar uma imagem
    if (inputImagem) {
        inputImagem.addEventListener('change', function() {
            if (this.files && this.files[0]) {
                this.classList.remove('is-invalid');
            }
        });
    }

    if (precoFormatado && precoValor) {
        // Formatar enquanto digita
        precoFormatado.addEventListener('input', function() {
            // Remove tudo que não é número
            let valor = this.value.replace(/\D/g, '');
            
            // Converte para decimal (divide por 100 para considerar os centavos)
            valor = (parseInt(valor) || 0) / 100;
            
            // Formata para real brasileiro
            this.value = valor.toLocaleString('pt-BR', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            });
            
            // Atualiza o campo hidden com o valor para o backend
            precoValor.value = valor.toString().replace('.', ',');
        });

        // Garantir formatação correta quando o campo perde o foco
        precoFormatado.addEventListener('blur', function() {
            if (this.value) {
                let valor = this.value.replace(/\D/g, '');
                valor = (parseInt(valor) || 0) / 100;
                
                this.value = valor.toLocaleString('pt-BR', {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2
                });
                
                precoValor.value = valor.toString().replace('.', ',');
            } else {
                // Se o campo estiver vazio, define como 0,00
                this.value = '0,00';
                precoValor.value = '0,00';
            }
        });
    }

    // Gerenciamento de Ingredientes
    if (listaIngredientes && btnAdicionarIngrediente) {
        function criarLinhaIngrediente() {
            const div = document.createElement('div');
            div.className = 'input-group mb-2';
            div.innerHTML = `
                <input type="text" class="form-control" name="ingredientes[]" placeholder="Nome do ingrediente" required>
                <div class="input-group-text">
                    <input type="checkbox" class="form-check-input mt-0" name="ingredientes_removiveis[]" value="1">
                    <span class="ms-2">Removível</span>
                </div>
                <button type="button" class="btn btn-outline-danger remover-ingrediente">
                    <i class="fas fa-trash"></i>
                </button>
            `;
            return div;
        }

        // Adicionar novo ingrediente
        btnAdicionarIngrediente.addEventListener('click', function() {
            listaIngredientes.appendChild(criarLinhaIngrediente());
        });

        // Remover ingrediente
        listaIngredientes.addEventListener('click', function(e) {
            if (e.target.closest('.remover-ingrediente')) {
                e.target.closest('.input-group').remove();
            }
        });
    }

    // Gerenciamento de Complementos
    if (listaComplementos && btnAdicionarComplemento) {
        function criarLinhaComplemento() {
            const div = document.createElement('div');
            div.className = 'complemento-item d-flex align-items-center mb-2 p-2 border rounded';
            div.innerHTML = `
                <div class="flex-grow-1">
                    <div class="input-group mb-2">
                        <span class="input-group-text">Nome</span>
                        <input type="text" class="form-control" name="complementos_nomes[]" placeholder="Nome do complemento" required>
                    </div>
                    <div class="input-group mb-2">
                        <span class="input-group-text">R$</span>
                        <input type="text" class="form-control preco-complemento" name="complementos_precos[]" placeholder="0,00" required>
                    </div>
                    <div class="input-group">
                        <span class="input-group-text">Máx. Escolhas</span>
                        <input type="number" class="form-control max-escolhas" name="complementos_max_escolhas[]" min="1" value="1" required>
                    </div>
                </div>
                <button type="button" class="btn btn-outline-danger ms-3 remover-complemento">
                    <i class="fas fa-trash"></i>
                </button>
            `;

            // Adicionar máscara de preço ao campo de preço do complemento
            const precoInput = div.querySelector('.preco-complemento');
            precoInput.addEventListener('input', function() {
                let valor = this.value.replace(/\D/g, '');
                valor = (parseInt(valor) || 0) / 100;
                this.value = valor.toLocaleString('pt-BR', {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2
                });
            });

            precoInput.addEventListener('blur', function() {
                if (this.value) {
                    let valor = this.value.replace(/\D/g, '');
                    valor = (parseInt(valor) || 0) / 100;
                    this.value = valor.toLocaleString('pt-BR', {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2
                    });
                } else {
                    this.value = '0,00';
                }
            });

            // Validar campo de máximo de escolhas
            const maxEscolhasInput = div.querySelector('.max-escolhas');
            maxEscolhasInput.addEventListener('input', function() {
                const valor = parseInt(this.value) || 0;
                if (valor < 1) {
                    this.value = 1;
                }
            });

            maxEscolhasInput.addEventListener('blur', function() {
                const valor = parseInt(this.value) || 0;
                if (valor < 1 || !this.value) {
                    this.value = 1;
                }
            });

            return div;
        }

        // Adicionar novo complemento
        btnAdicionarComplemento.addEventListener('click', function() {
            listaComplementos.appendChild(criarLinhaComplemento());
        });

        // Remover complemento
        listaComplementos.addEventListener('click', function(e) {
            if (e.target.closest('.remover-complemento')) {
                e.target.closest('.complemento-item').remove();
            }
        });
    }

    // Validação do tempo de preparo
    if (tempoPreparo) {
        tempoPreparo.addEventListener('input', function(e) {
            // Remove qualquer caractere que não seja número
            this.value = this.value.replace(/\D/g, '');
            
            // Garante que o valor seja pelo menos 1
            const valor = parseInt(this.value) || 0;
            if (valor < 1) {
                this.value = '';
            }
        });

        tempoPreparo.addEventListener('blur', function() {
            // Se estiver vazio ou menor que 1 quando perder o foco, define como 1
            const valor = parseInt(this.value) || 0;
            if (valor < 1 || !this.value) {
                this.value = '1';
            }
        });
    }
});