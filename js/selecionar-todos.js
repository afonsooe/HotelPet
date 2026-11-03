const caixaTodos = document.querySelector('thead input[type="checkbox"]');
const caixasLinhas = document.querySelectorAll('tbody input[type="checkbox"]');

// Uma linha escondida pela pesquisa não conta como visível
function linhaVisivel(caixa) {
    return caixa.closest('tr').style.display !== 'none';
}

// Marcar ou desmarcar a caixa do cabeçalho muda as caixas das linhas visíveis
caixaTodos.addEventListener('change', function () {
    caixasLinhas.forEach(function (caixa) {
        if (linhaVisivel(caixa)) {
            caixa.checked = caixaTodos.checked;
        }
    });
});

// Se alguma linha visível for desmarcada, a caixa do cabeçalho também desmarca
caixasLinhas.forEach(function (caixa) {
    caixa.addEventListener('change', function () {
        let todasMarcadas = true;
        caixasLinhas.forEach(function (outra) {
            if (linhaVisivel(outra) && !outra.checked) {
                todasMarcadas = false;
            }
        });
        caixaTodos.checked = todasMarcadas;
    });
});
