var areaNumeroAtual = document.getElementById('numeroAtual');
var numeroAtual = 0;

function aumenta() {
    numeroAtual = numeroAtual + 1;
    areaNumeroAtual.innerHTML = numeroAtual;

    if (numeroAtual >= 0) {
        document.getElementById("numeroAtual").style.color = "#ffffff";
    } 
}

function diminui() {
    numeroAtual = numeroAtual - 1;
    areaNumeroAtual.innerHTML = numeroAtual;

    if (numeroAtual < 0) {
        document.getElementById("numeroAtual").style.color = "#ff0000";
    } 
}

function desabilitaBotao() {
    if (numeroAtual <= -10 || numeroAtual > 14) {
        document.getElementsByName("subtrair").disabled = true;
    }
}
