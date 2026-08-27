// ==========================================
// ACESSIBILIDADE
// TAMANHO DA FONTE
// ==========================================

const btnTamanhoNormal =
    document.getElementById("btnTamanhoNormal");

const btnAumentaTexto =
    document.getElementById("btnAumentaTexto");

const btnAumentaMais =
    document.getElementById("btnAumentaMais");


// Tamanhos das letras

const tamanhoNormal = 16;

const tamanhoGrande = 22;

const tamanhoMuitoGrande = 26;


// Função para mudar tamanho

function alterarTamanhoFonte(tamanho) {

    document.documentElement.style.fontSize =
        `${tamanho}px`;
}


// A - NORMAL

if (btnTamanhoNormal) {

    btnTamanhoNormal.addEventListener("click", function () {

        alterarTamanhoFonte(tamanhoNormal);

    });
}


// A+ - GRANDE

if (btnAumentaTexto) {

    btnAumentaTexto.addEventListener("click", function () {

        alterarTamanhoFonte(tamanhoGrande);

    });
}


// A++ - MUITO GRANDE

if (btnAumentaMais) {

    btnAumentaMais.addEventListener("click", function () {

        alterarTamanhoFonte(tamanhoMuitoGrande);

    });
}


// ==========================================
// LEITOR DE VOZ
// ==========================================


// Verifica se o navegador possui suporte

const possuiVoz =
    "speechSynthesis" in window;


// Botões

const btnLerSite =
    document.getElementById("btnLerSite");

const btnPausarVoz =
    document.getElementById("btnPausarVoz");

const btnContinuarVoz =
    document.getElementById("btnContinuarVoz");

const btnPararVoz =
    document.getElementById("btnPararVoz");


// Variável para armazenar a fala atual

let falaAtual = null;


// ==========================================
// TEXTO QUE SERÁ LIDO
// ==========================================

function criarTextoParaLeitura() {

    return `
    
    Bem-vindo ao Guia de Segurança Digital Segura.

    Este site foi feito para ajudar você a navegar na internet
    com tranquilidade e segurança.

    No topo da página você encontra as opções de acessibilidade.

    O botão A normal deixa o texto em tamanho normal.

    O botão A mais aumenta o tamanho das letras.

    O botão A dois mais deixa as letras ainda maiores.

    O botão Alto Contraste melhora a visualização da página
    usando cores com maior contraste.

    O botão Ajuda abre uma tela com orientações
    para quem caiu em um golpe.

    Agora vamos conhecer algumas dicas importantes.

    Primeira dica:
    tome cuidado com golpes no WhatsApp.

    Um criminoso pode usar a foto de um filho ou neto
    e mandar mensagem dizendo que mudou de número.

    Se alguém pedir dinheiro pelo WhatsApp,
    não faça o Pix imediatamente.

    Ligue para a pessoa usando o número antigo
    e confirme se o pedido é verdadeiro.

    Também é importante ativar a confirmação em duas etapas
    no WhatsApp.

    Segunda dica:
    tenha cuidado com o Pix e os aplicativos de banco.

    Antes de confirmar um Pix,
    confira o nome da pessoa que vai receber
    e confira o valor.

    Nunca faça um Pix de teste porque alguém pediu.

    Nenhum funcionário do banco deve pedir sua senha.

    Terceira dica:
    proteja suas senhas.

    Evite senhas fáceis como sua data de nascimento,
    123456 ou o nome do seu cachorro.

    Uma frase que você consegue lembrar
    pode ser uma boa opção.

    Quarta dica:
    tenha cuidado ao fazer compras pela internet.

    Desconfie de preços muito baixos.

    Antes de colocar os dados do cartão,
    confira o endereço do site.

    Você também pode utilizar um cartão virtual
    para compras pela internet.

    Agora você pode testar seus hábitos
    usando o checklist de segurança.

    Marque as opções que você já realiza
    para descobrir como está sua proteção.

    Se você caiu em um golpe,
    abra a opção Ajuda.

    Avise seu banco imediatamente.

    Faça um boletim de ocorrência.

    E avise seus familiares para evitar que outras pessoas
    sejam enganadas.

    Obrigado por utilizar o Guia de Segurança Digital Segura.

    `;

}


// ==========================================
// ESCOLHER VOZ EM PORTUGUÊS
// ==========================================

function encontrarVozPortugues() {

    const vozes =
        window.speechSynthesis.getVoices();


    // Procura primeiro uma voz brasileira

    let voz =
        vozes.find(function (voz) {

            return voz.lang === "pt-BR";

        });


    // Caso não encontre, procura qualquer voz em português

    if (!voz) {

        voz =
            vozes.find(function (voz) {

                return voz.lang.startsWith("pt");

            });

    }


    return voz;
}


// ==========================================
// LER O SITE
// ==========================================

function lerSite() {

    if (!possuiVoz) {

        alert(
            "Seu navegador não possui suporte para leitura de voz."
        );

        return;
    }


    // Para qualquer leitura anterior

    window.speechSynthesis.cancel();


    // Cria o texto

    const texto =
        criarTextoParaLeitura();


    // Cria a fala

    falaAtual =
        new SpeechSynthesisUtterance(texto);


    // Idioma

    falaAtual.lang = "pt-BR";


    // Velocidade mais lenta para facilitar idosos

    falaAtual.rate = 0.85;


    // Tom da voz

    falaAtual.pitch = 1;


    // Volume máximo

    falaAtual.volume = 1;


    // Escolhe voz brasileira

    const voz =
        encontrarVozPortugues();


    if (voz) {

        falaAtual.voice = voz;

    }


    // Inicia leitura

    window.speechSynthesis.speak(
        falaAtual
    );
}


// ==========================================
// PAUSAR
// ==========================================

function pausarVoz() {

    if (!possuiVoz) {

        return;
    }


    if (window.speechSynthesis.speaking) {

        window.speechSynthesis.pause();

    }
}


// ==========================================
// CONTINUAR
// ==========================================

function continuarVoz() {

    if (!possuiVoz) {

        return;
    }


    if (window.speechSynthesis.paused) {

        window.speechSynthesis.resume();

    }
}


// ==========================================
// PARAR
// ==========================================

function pararVoz() {

    if (!possuiVoz) {

        return;
    }


    window.speechSynthesis.cancel();

    falaAtual = null;
}


// ==========================================
// EVENTOS DOS BOTÕES DE VOZ
// ==========================================

if (btnLerSite) {

    btnLerSite.addEventListener(
        "click",
        lerSite
    );

}


if (btnPausarVoz) {

    btnPausarVoz.addEventListener(
        "click",
        pausarVoz
    );

}


if (btnContinuarVoz) {

    btnContinuarVoz.addEventListener(
        "click",
        continuarVoz
    );

}


if (btnPararVoz) {

    btnPararVoz.addEventListener(
        "click",
        pararVoz
    );

}


// ==========================================
// CARREGAR AS VOZES DO NAVEGADOR
// ==========================================

if (possuiVoz) {

    window.speechSynthesis.onvoiceschanged =
        function () {

            encontrarVozPortugues();

        };

}


// ==========================================
// GARANTIR TAMANHO NORMAL AO ABRIR
// ==========================================

document.documentElement.style.fontSize =
    `${tamanhoNormal}px`;