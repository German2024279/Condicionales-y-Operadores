function actualizarBarra(valor) {
  let barra = document.getElementById("barra");
  let ancho = Math.max(10, valor * 10); // escala simple
  barra.style.width = ancho + "px";
  barra.textContent = valor;
}

