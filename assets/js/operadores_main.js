// Small helper for operadores page to avoid missing-function errors
function actualizarBarra(x) {
  try {
    const fill = document.getElementById('barra-fill');
    if (!fill) return;
    // Map x to 0-100% for the visual bar. If x is numeric use clamp, otherwise try parse.
    let val = Number(x);
    if (Number.isNaN(val)) {
      // attempt to extract number from string
      const parsed = parseFloat(String(x).replace(/[^0-9.-]/g, ''));
      val = Number.isNaN(parsed) ? 0 : parsed;
    }
    // clamp and convert to percent (assume sensible range 0..100)
    if (val < 0) val = 0;
    if (val > 100) val = 100;
    fill.style.width = val + '%';
  } catch (e) {
    // fail silently to avoid breaking demos
    console.debug('actualizarBarra error', e);
  }
}
