const linkDeletar = document.getElementById('link-deletar');

linkDeletar.addEventListener('click', function (evento) {
    evento.preventDefault();

    if (confirm('Deseja realmente deletar este pet?')) {
        window.location.href = 'pets.html';
    }
});
