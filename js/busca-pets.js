const formBusca = document.querySelector('main form');
const linhas = document.querySelectorAll('tbody tr');

formBusca.addEventListener('submit', function (evento) {
    evento.preventDefault();

    const id = document.getElementById('busca-id').value.trim();
    const raca = document.getElementById('busca-raca').value.trim().toLowerCase();
    const nome = document.getElementById('busca-nome').value.trim().toLowerCase();
    const selectTamanho = document.getElementById('busca-tamanho');
    const tamanho = selectTamanho.value === '' ? '' : selectTamanho.options[selectTamanho.selectedIndex].text;

    linhas.forEach(function (linha) {
        const celulas = linha.querySelectorAll('td');
        const idLinha = celulas[1].textContent.trim();
        const nomeLinha = celulas[2].textContent.trim().toLowerCase();
        const racaLinha = celulas[4].textContent.trim().toLowerCase();
        const tamanhoLinha = celulas[5].textContent.trim();

        let mostrar = true;

        if (id !== '' && idLinha !== id) { mostrar = false; }
        if (raca !== '' && !racaLinha.includes(raca)) { mostrar = false; }
        if (nome !== '' && !nomeLinha.includes(nome)) { mostrar = false; }
        if (tamanho !== '' && tamanhoLinha !== tamanho) { mostrar = false; }

        linha.style.display = mostrar ? '' : 'none';
    });
});

// O botão Limpar apaga os campos; aqui mostramos todas as linhas de novo
formBusca.addEventListener('reset', function () {
    linhas.forEach(function (linha) {
        linha.style.display = '';
    });
});
