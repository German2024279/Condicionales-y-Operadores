function demoComparacion() {
    let edad = "18";
    let salida = "<h2>Comparación == vs ===</h2>";
    salida += "<p>edad = '18' (string)</p>";
    salida += "<p>edad == 18 → " + (edad == 18) + "</p>";
    salida += "<p>edad === 18 → " + (edad === 18) + "</p>";
    salida += "<p><strong>==</strong> compara valor (true), <strong>===</strong> compara valor y tipo (false).</p>";

    document.getElementById("resultados").innerHTML = salida;
}
