/* ============================================================
   EQUILIBRIUM — configuración común de todas las páginas.

   Este es el ÚNICO lugar donde vive la dirección del backend.
   Si algún día cambia, se cambia aquí y todas las páginas la toman.
   ============================================================ */
(function (w) {
  var EQ = w.EQ || {};

  // Dirección del backend (Apps Script Web App)
  EQ.API_URL = "https://script.google.com/macros/s/AKfycbxJv0SGNzokgigYiYr3oIe1AIglMnjwbC7iy-diwVbUXCjhRtKes-OrOYdS3yvp1Oqr/exec";

  // Dirección pública del sitio (termina en /)
  EQ.BASE_URL = "https://equilibriumlead.github.io/equilibrium/";

  w.EQ = EQ;
})(window);
