// script14.js
function validarCPF() {
    const cpf = document.getElementById('cpf').value.replace(/\D/g, '');
    if (cpf.length !== 11 || /^()\1+$/.test(cpf)) {
      document.getElementById('resultadoCPF').innerText = 'CPF inválido';
      return;
    }
  
    const validarDigito = (base, peso) => {
      let soma = 0;
      for (let i = 0; i < base.length; i++) soma += parseInt(base[i]) * peso--;
      let resto = soma % 11;
      return resto < 2 ? 0 : 11 - resto;
    };
  
    const d1 = validarDigito(cpf.substring(0, 9), 10);
    const d2 = validarDigito(cpf.substring(0, 9) + d1, 11);
  
    if (cpf.endsWith(`${d1}${d2}`)) {
      document.getElementById('resultadoCPF').innerText = 'CPF válido';
    } else {
      document.getElementById('resultadoCPF').innerText = 'CPF inválido';
    }
  }
  