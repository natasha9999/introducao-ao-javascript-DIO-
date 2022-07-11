

function igualdade(numero1, numero2) {
    if (numero1 === numero2) {
        console.log("Os números " + numero1 + " e " + numero2 + " são iguais.");
    } else {
        console.log("Os números " + numero1 + " e " + numero2 + " não são iguais.");
    }
}

function soma(numero1, numero2) {
    var soma = numero1 + numero2;

    if (soma > 10) {
        console.log("A soma dos números " + numero1 + " e " + numero2 + " é " + soma + ". Sendo maior que 10.");
    } else {
        console.log("A soma dos números " + numero1 + " e " + numero2 + " é " + soma + ". Sendo menor que 20.");
    }
}

igualdade(1, 5);

soma(1, 5);