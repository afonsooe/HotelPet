const botaoMudarStatus = document.getElementById('botao-mudar-status');

botaoMudarStatus.addEventListener('click', function () {
    const marcadas = document.querySelectorAll('tbody input[type="checkbox"]:checked');
    let alterados = 0;

    marcadas.forEach(function (caixa) {
        const linha = caixa.closest('tr');

        // Linha escondida pela pesquisa não é alterada
        if (linha.style.display === 'none') {
            return;
        }

        const celulaStatus = linha.querySelectorAll('td')[5];
        if (celulaStatus.textContent.trim() === 'Ativo') {
            celulaStatus.textContent = 'Inativo';
        } else {
            celulaStatus.textContent = 'Ativo';
        }
        alterados++;
    });

    if (alterados === 0) {
        alert('Selecione pelo menos um usuário para mudar o status.');
    }
});
