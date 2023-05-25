function calcularIdade() {
    const hoje = new Date();
    const nasc = new Date(document.getElementById("BirthDate").value);
    const ano = hoje.getFullYear() - nasc.getFullYear();
    const mes = hoje.getMonth() - nasc.getMonth();
    if (mes < 0 || (m === 0 && hoje.getDate() < nasc.getDate())) {
        age--;
    }
}