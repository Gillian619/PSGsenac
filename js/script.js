function matricula() {
    //calculo de idade
    const hoje = new Date();
    const nasc = new Date(document.getElementById("BirthDate").value);
    let ano = hoje.getFullYear() - nasc.getFullYear();
    const mes = hoje.getMonth() - nasc.getMonth();
    if (mes < 0 || (mes === 0 && hoje.getDate() < nasc.getDate())) {
        ano--;
    }
    //calculo de renda percapta
    let rend = parseFloat(document.getElementById("renda").value)
    let mor = parseFloat(document.getElementById("moradores").value)
    let ratio = parseFloat(rend / mor)
    //parametro para matricula considerando ambas
    if (ano >= 16 && ratio <= 1980) {
        document.getElementById("mensagem").innerText = "matricula valida. Ligue para o número (XX)XXXXX-XXXX para realizar a sua matrícula"
    }
    else {
        document.getElementById("mensagem").innerText = "Voce não corrensponde aos critérios para o curso"
    }
}
function notamedia() {
    let n1 = parseFloat(document.getElementById("n1").value)
    let n2 = parseFloat(document.getElementById("n2").value)
    let n3 = parseFloat(document.getElementById("n3").value)
    let nm = ((n1 + n2 + n3) / 3).toFixed(2);
}
function presenca() {
    let pr1 = parseFloat(document.querySelector('input[name="flexRadiopresd1"]:checked').value);
    let pr2 = parseFloat(document.querySelector('input[name="flexRadiopresd2"]:checked').value);
    let pr3 = parseFloat(document.querySelector('input[name="flexRadiopresd3"]:checked').value);
    let pr4 = parseFloat(document.querySelector('input[name="flexRadiopresd4"]:checked').value);
    let pr5 = parseFloat(document.querySelector('input[name="flexRadiopresd5"]:checked').value);
    let pr6 = parseFloat(document.querySelector('input[name="flexRadiopresd6"]:checked').value);
    let pr7 = parseFloat(document.querySelector('input[name="flexRadiopresd7"]:checked').value);
    let pr8 = parseFloat(document.querySelector('input[name="flexRadiopresd8"]:checked').value);
    let pr9 = parseFloat(document.querySelector('input[name="flexRadiopresd9"]:checked').value);
    let pr10 = parseFloat(document.querySelector('input[name="flexRadiopresd10"]:checked').value);
    let pr11 = parseFloat(document.querySelector('input[name="flexRadiopresd11"]:checked').value);
    let pr12 = parseFloat(document.querySelector('input[name="flexRadiopresd12"]:checked').value);
    let pre = (pr1 + pr2 + pr3 + pr4 + pr5 + pr6 + pr7 + pr8 + pr9 + pr10 + pr11 + pr12)
    let prm = ((pre / 12) * 100)
}
function aproved() {
    let note = (notamedia)
    let pres = (presenca)
    if (note >= 6 && pres >= 75) {
        document.getElementById("results").innerHTML = "Aprovado"
    }
    else if (note > 5 < 6 && pres > 8) {
        document.getElementById("results").innerHTML = "Recuperação"
    }
    else {
        document.getElementById("results").innerHTML = "reprovado"
    }
}