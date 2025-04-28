// script15.js
function converterHoras() {
    const horas = parseFloat(document.getElementById('horas').value);
    const minutos = horas * 60;
    const segundos = horas * 3600;
    document.getElementById('resultadoHoras').innerText = `${minutos} minutos / ${segundos} segundos`;
  }
  