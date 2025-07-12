document.addEventListener('DOMContentLoaded', function() {
    // Función para incrementar y mostrar el contador
    function incrementarContador(idContador) {
        const elementoContador = document.getElementById(idContador);
        let valorActual = parseInt(elementoContador.textContent);
        valorActual++;
        elementoContador.textContent = valorActual;
    }

    // Obtener todas las instancias de modales
    const modals = document.querySelectorAll('.modal');

    // Iterar sobre cada modal para añadir el evento 'shown.bs.modal'
    modals.forEach(modal => {
        modal.addEventListener('shown.bs.modal', function () {
            // Determinar qué contador incrementar basado en el ID del modal
            const modalId = modal.id;
            if (modalId === 'modalCard1') {
                incrementarContador('contador1');
            } else if (modalId === 'modalCard2') {
                incrementarContador('contador2');
            } else if (modalId === 'modalCard3') {
                incrementarContador('contador3');
            }
            // Puedes añadir más casos si tienes más modales/cards
        });
    });
});