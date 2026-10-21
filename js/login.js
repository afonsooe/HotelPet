const formLogin = document.getElementById('form-login');

formLogin.addEventListener('submit', function (evento) {
    evento.preventDefault();

    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    if (email === '' || senha === '') {
        alert('Preencha o email e a senha.');
        return;
    }

    window.location.href = 'reservas.html';
});
