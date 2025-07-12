// Función para modificar el contador de estrellas
function modificarContador(idContador, valorCambio, resetear = false) {
    const contadorElement = document.getElementById(idContador);
    if (!contadorElement) {
        console.error(`Elemento con ID ${idContador} no encontrado.`);
        return;
    }

    let valorActual = parseInt(contadorElement.textContent);

    if (resetear) {
        valorActual = 0;
    } else {
        valorActual += valorCambio;
    }

    // Asegurarse de que el contador no sea negativo
    if (valorActual < 0) {
        valorActual = 0;
    }

    contadorElement.textContent = valorActual;
}

// Puedes añadir más lógica JS aquí si es necesario
// Por ejemplo, si los contadores deben guardar su estado o si hay otras interacciones.