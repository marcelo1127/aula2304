// script13.js
function mostrarPrimos() {
    const inicio = parseInt(document.getElementById('inicio').value);
    const fim = parseInt(document.getElementById('fim').value);
    const primos = [];
    for (let i = inicio; i <= fim; i++) {
      if (ehPrimo(i)) primos.push(i);
    }
    document.getElementById('primos').innerText = primos.join(', ');
  }
  
  function ehPrimo(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  }
  