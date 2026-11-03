const selectStatus = document.getElementById('status');
const blocoNotaFiscal = document.getElementById('bloco-nota-fiscal');
const formReserva = document.getElementById('form-salvar');

// A nota fiscal só aparece quando o status da reserva é Finalizado
function atualizarBlocoNotaFiscal() {
    if (selectStatus.value === 'finalizado') {
        blocoNotaFiscal.style.display = '';
    } else {
        blocoNotaFiscal.style.display = 'none';
    }
}

selectStatus.addEventListener('change', atualizarBlocoNotaFiscal);

// O botão Limpar volta o status ao valor original; esperamos ele terminar para conferir
formReserva.addEventListener('reset', function () {
    setTimeout(atualizarBlocoNotaFiscal, 0);
});

atualizarBlocoNotaFiscal();
