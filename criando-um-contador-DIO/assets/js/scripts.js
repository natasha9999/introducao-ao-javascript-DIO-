var areaNumeroAtual = document.getElementById("numeroAtual");

var numeroAtual = 0;


function aumenta() {
    numeroAtual += 1;
    areaNumeroAtual.innerHTML = numeroAtual;
}

function diminui() {
    numeroAtual -= 1;
    areaNumeroAtual.innerHTML = numeroAtual;
}

function mudaCor() {
    if (numeroAtual < 0) {
        document.getElementById("numeroAtual").style.color = "#ff0000";
    } else if (numeroAtual >= 0) {
        document.getElementById("numeroAtual").style.color = "#ffffff";
    }
}

function desabilitaBotao() {
    if (numeroAtual <= -15) {
        document.getElementById("btnMenos").disabled = true;
    } else if (numeroAtual >= 20) {
        document.getElementById("btnMais").disabled = true;
    }
}


