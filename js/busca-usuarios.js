const formBusca = document.querySelector('main form');
const linhas = document.querySelectorAll('tbody tr');

// Converte 01/07/2026 em 2026-07-01 (mesmo formato do campo de data)
function dataParaIso(texto) {
    const partes = texto.split('/');
    return partes[2] + '-' + partes[1] + '-' + partes[0];
}

formBusca.addEventListener('submit', function (evento) {
    evento.preventDefault();

    const id = document.getElementById('busca-id').value.trim();
    const criadoInicio = document.getElementById('busca-criado-inicio').value;
    const criadoFim = document.getElementById('busca-criado-fim').value;
    const email = document.getElementById('busca-email').value.trim().toLowerCase();
    const nome = document.getElementById('busca-nome').value.trim().toLowerCase();
    const selectStatus = document.getElementById('busca-status');
    const status = selectStatus.value === '' ? '' : selectStatus.options[selectStatus.selectedIndex].text;
    const selectFuncao = document.getElementById('busca-funcao');
    const funcao = selectFuncao.value === '' ? '' : selectFuncao.options[selectFuncao.selectedIndex].text;

    linhas.forEach(function (linha) {
        const celulas = linha.querySelectorAll('td');
        const idLinha = linha.dataset.id;
        const emailLinha = celulas[2].textContent.trim().toLowerCase();
        const nomeLinha = celulas[3].textContent.trim().toLowerCase();
        const funcaoLinha = celulas[4].textContent.trim();
        const statusLinha = celulas[5].textContent.trim();
        const criadoLinha = dataParaIso(celulas[6].textContent.trim());

        let mostrar = true;

        if (id !== '' && idLinha !== id) { mostrar = false; }
        if (criadoInicio !== '' && criadoLinha < criadoInicio) { mostrar = false; }
        if (criadoFim !== '' && criadoLinha > criadoFim) { mostrar = false; }
        if (email !== '' && !emailLinha.includes(email)) { mostrar = false; }
        if (nome !== '' && !nomeLinha.includes(nome)) { mostrar = false; }
        if (status !== '' && statusLinha !== status) { mostrar = false; }
        if (funcao !== '' && funcaoLinha !== funcao) { mostrar = false; }

        linha.style.display = mostrar ? '' : 'none';
    });
});

// O botão Limpar apaga os campos; aqui mostramos todas as linhas de novo
formBusca.addEventListener('reset', function () {
    linhas.forEach(function (linha) {
        linha.style.display = '';
    });
});
