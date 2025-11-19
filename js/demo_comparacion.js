function demoComparacion() {
  let entrada1 = document.getElementById("valorComparacion1").value;
  let entrada2 = document.getElementById("valorComparacion2").value;

  let valor1 = interpretar(entrada1);
  let valor2 = interpretar(entrada2);

  let salida = "<h2>Comparación == vs ===</h2>";
  salida += `<p>Entrada 1: ${entrada1} → ${typeof valor1} (${valor1})</p>`;
  salida += `<p>Entrada 2: ${entrada2} → ${typeof valor2} (${valor2})</p>`;
  salida += `<p><strong>==</strong> → ${valor1 == valor2}</p>`;
  salida += `<p><strong>===</strong> → ${valor1 === valor2}</p>`;
  salida += `<p><strong>==</strong> compara solo el valor (puede convertir tipos), <strong>===</strong> compara valor y tipo (sin conversión).</p>`;

  document.getElementById("resultados").innerHTML = salida;
}

function interpretar(valor) {
  try {
    return eval(valor);
  } catch {
    return valor;
  }
}
