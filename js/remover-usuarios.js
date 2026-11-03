const botaoRemover = document.getElementById('botao-remover');

botaoRemover.addEventListener('click', function () {
    const marcadas = document.querySelectorAll('tbody input[type="checkbox"]:checked');

    // Só vale a linha marcada que está visível na tabela
    const linhasParaRemover = [];
    marcadas.forEach(function (caixa) {
        const linha = caixa.closest('tr');
        if (linha.style.display !== 'none') {
            linhasParaRemover.push(linha);
        }
    });

    if (linhasParaRemover.length === 0) {
        alert('Selecione pelo menos um usuário para remover.');
        return;
    }

    if (!confirm('Remover ' + linhasParaRemover.length + ' usuário(s) selecionado(s)?')) {
        return;
    }

    linhasParaRemover.forEach(function (linha) {
        linha.remove();
    });

    document.querySelector('thead input[type="checkbox"]').checked = false;
});
