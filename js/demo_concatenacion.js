function demoConcatenacion() {
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;

    // Validación simple
    if (nombre.trim() === "" || apellido.trim() === "") {
        document.getElementById("resultados").innerHTML =
        "<p style='color:red'>Por favor introduce nombre y apellido.</p>";
        return;
    }

    let saludoCompleto = "Hola " + nombre + " " + apellido;

    let salida = "<h2>Concatenación</h2>";
    salida += "<p>Saludo completo: " + saludoCompleto + "</p>";

    document.getElementById("resultados").innerHTML = salida;
}
