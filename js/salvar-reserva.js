const formSalvar = document.getElementById('form-salvar');

formSalvar.addEventListener('submit', function (evento) {
    evento.preventDefault();
    window.location.href = 'reservas.html';
});
