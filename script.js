let btnAjuda = document.querySelector(".inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold bg-red-600 text-white hover:bg-red-700 min-h-[52px] text-lg shadow-md");
let btnFechar = document.querySelector (.modal-fecha)
let modal = document.querySelector (.modal-fundo)

let btnFechar = document.querySelector(".botao-fechar");
let modal = document.querySelector(".modal-fundo");


function abreModal() {
    modal.style.display = "block";
}

function fechaModal() {
    modal.style.display = "none";
}

// TAMANHO DE FONTES
let tamanhoFonteAtual = 16;
const valorAdicionado = 2;
const valorSubtraido = 2;
let btnTamanhoNormal = document.getElementById("btnTamanhoNormal");
let btnAumentaFonte = document.getElementById("btnAumentaTexto");
let btnDiminuiFonte = document.getElementById("btndiminuiTexto");

btnAumentaFonte.addEventListener("click", tamanoNormal);
btnDiminuiFonte.addEventListener("click", aumentaFonte);
btnAumentaFonte.addEventListener("click", diminuiFonte);

function aumentaFonte() {
    tamanhoFonteAtual = tamanhoFonteAtual + valorAdicionado;
    document.documentElement.style.fontSize = `${tamanhoFonteAtual}px`;
}

function diminuiFonte() {
    tamanhoFonteAtual = tamanhoFonteAtual - valorSubtraido;
    document.documentElement.style.fontSize = `${tamanhoFonteAtual}px`;
}