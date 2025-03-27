document.addEventListener('DOMContentLoaded', function() {
    // Manipula a exibição dos campos de horário
    document.querySelectorAll('.form-check-input[data-dia]').forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            const diaId = this.getAttribute('data-dia');
            const horariosDiv = document.querySelector(`#${diaId} .horarios`);
            if (horariosDiv) {
                if (this.checked) {
                    horariosDiv.classList.remove('d-none');
                } else {
                    horariosDiv.classList.add('d-none');
                    // Limpa os campos de horário quando o dia é desmarcado
                    horariosDiv.querySelectorAll('input[type="time"]').forEach(input => {
                        input.value = '';
                    });
                }
            }
        });
    });

    // Prepara os dados do formulário antes do envio
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();

            const horariosFuncionamento = {};
            const diasSelecionados = [];

            document.querySelectorAll('.form-check-input[data-dia]:checked').forEach(checkbox => {
                const dia = checkbox.value;
                const diaId = checkbox.getAttribute('data-dia');
                const aberturaInput = document.querySelector(`#${diaId} input[name="horario_abertura_${diaId}"]`);
                const fechamentoInput = document.querySelector(`#${diaId} input[name="horario_fechamento_${diaId}"]`);

                if (aberturaInput && fechamentoInput) {
                    const abertura = aberturaInput.value;
                    const fechamento = fechamentoInput.value;

                    if (abertura && fechamento) {
                        horariosFuncionamento[dia] = {
                            abertura: abertura,
                            fechamento: fechamento
                        };
                        diasSelecionados.push(dia);
                    }
                }
            });

            // Remove o campo oculto anterior, se existir
            const existingInput = document.querySelector('input[name="horarios_funcionamento"]');
            if (existingInput) {
                existingInput.remove();
            }

            // Adiciona campos ocultos com os dados formatados
            const horariosFuncionamentoInput = document.createElement('input');
            horariosFuncionamentoInput.type = 'hidden';
            horariosFuncionamentoInput.name = 'horarios_funcionamento';
            horariosFuncionamentoInput.value = JSON.stringify(horariosFuncionamento);
            this.appendChild(horariosFuncionamentoInput);

            // Remove a seção duplicada de dias de funcionamento
            document.querySelectorAll('input[name="dias_funcionamento[]"]').forEach(input => {
                if (!input.hasAttribute('data-dia')) {
                    input.remove();
                }
            });

            this.submit();
        });
    }
});
