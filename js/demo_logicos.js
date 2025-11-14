function demoLogicos() {
  // Leer valores de los checkboxes
    let tieneClave = document.getElementById("tieneClave").checked;
    let esAdmin = document.getElementById("esAdmin").checked;

    let salida = "<h2>Resultados de Operadores Lógicos</h2>";
    salida += "<p>tieneClave = " + tieneClave + ", esAdmin = " + esAdmin + "</p>";

    // AND (&&)
    salida += "<p>tieneClave && esAdmin → " + (tieneClave && esAdmin) + "</p>";

    // OR (||)
    salida += "<p>tieneClave || esAdmin → " + (tieneClave || esAdmin) + "</p>";

    // NOT (!)
    salida += "<p>!tieneClave → " + (!tieneClave) + "</p>";

  // Tabla de verdad
    salida += "<h3>Tabla de verdad</h3>";
    salida += "<table border='1' cellpadding='5'><tr><th>A</th><th>B</th><th>A && B</th><th>A || B</th><th>!A</th></tr>";
    let valores = [true, false];
    for (let A of valores) {
        for (let B of valores) {
        salida += "<tr><td>" + A + "</td><td>" + B + "</td><td>" + (A && B) + "</td><td>" + (A || B) + "</td><td>" + (!A) + "</td></tr>";
        }
    }
    salida += "</table>";

    document.getElementById("resultados").innerHTML = salida;
}
