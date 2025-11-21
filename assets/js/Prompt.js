// Ejemplo de uso de prompt() convertido en función reusable.
// Llamar a `mostrarPromptExample()` desde HTML (onclick) para abrir el prompt y mostrar el resultado en la página.
function mostrarPromptExample() {
    const nombreUsuario = prompt("Por favor, introduce tu nombre:");
    const salidaEl = document.getElementById('promptResult');

    if (nombreUsuario !== null && nombreUsuario !== "") {
        const mensaje = `¡Hola, ${nombreUsuario}! Bienvenido/a.`;
        // si existe el elemento de salida, muéstralo allí, si no, usa alert como fallback
        if (salidaEl) {
            salidaEl.textContent = mensaje;
            salidaEl.style.display = 'block';
        } else {
            alert(mensaje);
        }
    } else {
        const mensaje = "No has introducido tu nombre.";
        if (salidaEl) {
            salidaEl.textContent = mensaje;
            salidaEl.style.display = 'block';
        } else {
            alert(mensaje);
        }
    }
}

// Hacer accesible globalmente
window.mostrarPromptExample = mostrarPromptExample;

