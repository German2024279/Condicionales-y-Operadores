// Ejemplo de uso de document.write() convertido en función interactiva.
// No ejecutamos document.write() al cargar el script porque puede sobrescribir
// la página si se llama después de que el documento haya cargado.
// En su lugar mostramos el mismo resultado dentro de un contenedor de la página.

function mostrarDocumentWriteExample() {
	const container = document.getElementById('documentWriteResult');
	const nombreUsuario = 'Visitante';
	const salida = [];
	salida.push('<p>Este es el <b>primer párrafo</b> añadido con <code>document.write()</code>.</p>');
	salida.push('<h3>¡Bienvenido, ' + nombreUsuario + '!</h3>');
	salida.push('<p>La fecha de hoy es: ' + new Date().toLocaleDateString() + '</p>');

	if (container) {
		container.innerHTML = salida.join('\n');
		container.style.display = 'block';
	} else {
		// abrir una nueva ventana y escribir en su documento
		try {
			const w = window.open('', '_blank');
			if (w && w.document) {
				w.document.open();
				w.document.write(salida.join('\n'));
				w.document.close();
			} else {
				alert('Resultado:\n' + salida.join('\n'));
			}
		} catch (e) {
			alert('Resultado:\n' + salida.join('\n'));
		}
	}
}

// Hacer accesible globalmente para el HTML
window.mostrarDocumentWriteExample = mostrarDocumentWriteExample;
