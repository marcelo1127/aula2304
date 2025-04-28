function verificarIdade() {
    const idade = parseInt(document.getElementById('idade').value);
    let faixa = '';
    if (idade <= 12) faixa = 'Criança';
    else if (idade <= 17) faixa = 'Adolescente';
    else if (idade <= 59) faixa = 'Adulto';
    else faixa = 'Idoso';
    document.getElementById('faixaEtaria').innerText = faixa;
}
