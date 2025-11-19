# Operadores en JavaScript

Repositorio de ejemplos didácticos sobre operadores y estructuras de control en JavaScript. Contiene una página de ejemplo y varios scripts que muestran el comportamiento de operadores aritméticos, de comparación, lógicos, y los efectos de pre/post incremento y decremento.

**Estructura**
- `operadores.html`: Página principal que carga los demos y muestra resultados.
- `operadores.css`: Estilos para la página de ejemplo.
- `js/` : Carpeta con ejemplos y scripts.
	- `main.js` : Código principal y arranque de los demos.
	- `demo_acumulativoSuma.js` : Ejemplo de operador acumulativo suma (`+=`).
	- `demo_acumulativoResta.js` : Ejemplo de operador acumulativo resta (`-=`).
	- `demo_acumulativoProducto.js` : Ejemplo de operador acumulativo multiplicación (`*=`).
	- `demo_acumulativoDivision.js` : Ejemplo de operador acumulativo división (`/=`).
	- `demo_comparacion.js` : Ejemplos de operadores de comparación (`==`, `===`, `>`, `<`, etc.).
	- `demo_concatenacion.js` : Ejemplos de concatenación de strings.
	- `demo_logicos.js` : Ejemplos de operadores lógicos (`&&`, `||`, `!`).
	- `demo_preIncremento.js` : Ejemplo de pre-incremento (`++x`).
	- `demo_postIncremento.js` : Ejemplo de post-incremento (`x++`).
	- `demo_preDecremento.js` : Ejemplo de pre-decremento (`--x`).
	- `demo_postDecremento.js` : Ejemplo de post-decremento (`x--`).

**Cómo ejecutar**
- Opción rápida: abrir `operadores.html` en un navegador (doble clic o `file://`).
- Opción recomendada (servidor local): desde el directorio del proyecto ejecuta:

```bash
python3 -m http.server 8000
# Luego abre: http://localhost:8000/operadores.html
```

- También puedes usar la extensión *Live Server* de VS Code para servir y recargar automáticamente.

**Uso**
- Los demos muestran resultados en la consola del navegador (DevTools) y/o en la propia página cuando corresponde. Abre la consola para ver salidas y ejemplos paso a paso.

**Contribuciones**
- Este repositorio está pensado para uso educativo. Si quieres mejorar ejemplos o corregir errores, crea un fork y abre un pull request.

**Autor**
- Proyecto mantenido por `German2024279`.

**Licencia**
- No hay una licencia explícita en este repositorio. Pregunta si quieres que añada una (por ejemplo MIT) para uso y distribución.
