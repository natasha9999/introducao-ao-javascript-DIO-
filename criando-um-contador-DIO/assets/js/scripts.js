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


