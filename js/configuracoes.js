const formConfiguracoes = document.querySelector('main form');

formConfiguracoes.addEventListener('submit', function (evento) {
    evento.preventDefault();

    const valorDiaria = Number(document.getElementById('valor-diaria').value);
    const vagas = document.getElementById('vagas').value;

    alert('Configurações salvas!\n' +
          'Valor da diária: R$ ' + valorDiaria.toFixed(2).replace('.', ',') + '\n' +
          'Vagas disponíveis: ' + vagas);
});
