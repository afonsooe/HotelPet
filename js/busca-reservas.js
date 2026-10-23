const formBusca = document.querySelector('main form');
const linhas = document.querySelectorAll('tbody tr');

// Converte 01/07/2026 em 2026-07-01 (mesmo formato do campo de data)
function dataParaIso(texto) {
    const partes = texto.split('/');
    return partes[2] + '-' + partes[1] + '-' + partes[0];
}

// Converte "R$ 1.400,50" em 1400.5
function valorEmNumero(texto) {
    return parseFloat(texto.replace('R$', '').replace('.', '').replace(',', '.'));
}

formBusca.addEventListener('submit', function (evento) {
    evento.preventDefault();

    const id = document.getElementById('busca-id').value.trim();
    const chegada = document.getElementById('busca-chegada').value;
    const partida = document.getElementById('busca-partida').value;
    const proprietario = document.getElementById('busca-proprietario').value.trim().toLowerCase();
    const totalMin = document.getElementById('busca-total-min').value;
    const totalMax = document.getElementById('busca-total-max').value;
    const selectStatus = document.getElementById('busca-status');
    const status = selectStatus.value === '' ? '' : selectStatus.options[selectStatus.selectedIndex].text;
    const pet = document.getElementById('busca-pet').value.trim().toLowerCase();

    linhas.forEach(function (linha) {
        const celulas = linha.querySelectorAll('td');
        const idLinha = celulas[1].textContent.trim();
        const petLinha = celulas[2].textContent.trim().toLowerCase();
        const chegadaLinha = dataParaIso(celulas[3].textContent.trim());
        const partidaLinha = dataParaIso(celulas[4].textContent.trim());
        const statusLinha = celulas[5].textContent.trim();
        const totalLinha = valorEmNumero(celulas[6].textContent);
        const proprietarioLinha = linha.dataset.proprietario.toLowerCase();

        let mostrar = true;

        if (id !== '' && idLinha !== id) { mostrar = false; }
        if (chegada !== '' && chegadaLinha < chegada) { mostrar = false; }
        if (partida !== '' && partidaLinha > partida) { mostrar = false; }
        if (proprietario !== '' && !proprietarioLinha.includes(proprietario)) { mostrar = false; }
        if (totalMin !== '' && totalLinha < Number(totalMin)) { mostrar = false; }
        if (totalMax !== '' && totalLinha > Number(totalMax)) { mostrar = false; }
        if (status !== '' && statusLinha !== status) { mostrar = false; }
        if (pet !== '' && !petLinha.includes(pet)) { mostrar = false; }

        linha.style.display = mostrar ? '' : 'none';
    });
});

// O botão Limpar apaga os campos; aqui mostramos todas as linhas de novo
formBusca.addEventListener('reset', function () {
    linhas.forEach(function (linha) {
        linha.style.display = '';
    });
});
