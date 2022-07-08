const caixaDeTexto = document.querySelector("texto");
const botaoAdicionar = document.querySelector("botao");

function validarInput() {
    // Se o input estiver vazio, será considerado inválido e ficará em vermelho.
    if (caixaDeTexto.value.trim().length > 0) {
        return true;
    } else {
        return false;
    }
}

function adicionarTarefas() {
    const inputEValido = validarInput();

    // Se o input for válido executo o if abaixo:
    if (!inputEValido) {
        caixaDeTexto.classList.add("error");
    }

    // Se houver alguma mudança no input, verifica novamente se o input é válido.
    // Se for válido, retira o erro:
    function mudancaDoInput() {
        const inputEValido = validarInput();

        if (inputEValido) {
            return caixaDeTexto.classList.remove("error");
        }
    }

    // Se o input for válido execute o código abaixo:

    // Criando o elemento div abaixo:
    const containerTarefas = document.createElement('div')
    // Dando uma classe para a div criada acima:
    containerTarefas.classList.add('item-tarefa')

    // Criando abaixo o parágrafo que irá dentro da div:
    const textoItemTarefa = document.createElement('p')





    textoItemTarefa.innerText = inputElement.value;
}








botaoAdicionar.addEventListener("click", () => adicionarTarefas());

caixaDeTexto.addEventListener("change",  () => mudancaDoInput());