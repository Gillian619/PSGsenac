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
        document.getElementById("mensagem").innerText = "matricula valida"
    }
    else {
        document.getElementById("mensagem").innerText = "Voce não corrensponde aos critérios para o curso"
    }
}