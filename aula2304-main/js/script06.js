// script12.js
function calcularFatorial() {
    const n = parseInt(document.getElementById('numeroFatorial').value);
    let fatorial = 1;
    for (let i = 2; i <= n; i++) {
      fatorial *= i;
    }
    document.getElementById('resultadoFatorial').innerText = fatorial;
  }
