// script11.js
const numeroAleatorio = Math.floor(Math.random() * 10) + 1;
function adivinharNumero() {
  const palpite = parseInt(document.getElementById('palpite').value);
  const resultado = document.getElementById('resultadoAdivinha');
  if (palpite === numeroAleatorio) resultado.innerText = 'Acertou!';
  else if (palpite < numeroAleatorio) resultado.innerText = 'Tente um número maior';
  else resultado.innerText = 'Tente um número menor';
}
