
const DURACAO = 90;
const PONTOS_POR_ACERTO = 10;
const PENALIDADE = 5;

// Cada objeto representa um produto da fábrica.
const produtos = [
    { nome: "Caixa", icone: "📦", defeituoso: false },
    { nome: "Engrenagem", icone: "⚙️", defeituoso: false },
    { nome: "Peça metálica", icone: "🔩", defeituoso: false },
    { nome: "Frasco", icone: "🧴", defeituoso: false },
    { nome: "Caixa danificada", icone: "📦", defeituoso: true },
    { nome: "Engrenagem quebrada", icone: "⚙️", defeituoso: true },
    { nome: "Peça deformada", icone: "🔩", defeituoso: true },
    { nome: "Frasco defeituoso", icone: "🧴", defeituoso: true }
];

// Seleciona os elementos do HTML.
const inicio = document.getElementById("inicio");
const jogo = document.getElementById("jogo");
const resultado = document.getElementById("resultado");

const produtoTela = document.getElementById("produto");
const mensagem = document.getElementById("mensagem");
const feedback = document.getElementById("feedback");

let tempo = DURACAO;
let pontos = 0;
let inspecionados = 0;
let acertos = 0;
let erros = 0;
let produtoAtual = null;
let intervalo = null;
let turnoAtivo = false;

// Escolhe um produto aleatório do array.
function sortearProduto() {
    const indice = Math.floor(Math.random() * produtos.length);
    return produtos[indice];
}

// Inicia ou reinicia o jogo.
function iniciarJogo() {
    clearInterval(intervalo);

    tempo = DURACAO;
    pontos = 0;
    inspecionados = 0;
    acertos = 0;
    erros = 0;
    turnoAtivo = true;

    inicio.classList.add("escondido");
    resultado.classList.add("escondido");
    jogo.classList.remove("escondido");

    atualizarIndicadores();
    mostrarProduto();

    intervalo = setInterval(function () {
        tempo--;
        document.getElementById("tempo").textContent = tempo;

        if (tempo <= 0) {
            finalizarJogo();
        }
    }, 1000);
}

// Exibe o próximo produto na tela.
function mostrarProduto() {
    if (!turnoAtivo) return;

    produtoAtual = sortearProduto();

    produtoTela.textContent = produtoAtual.icone;
    produtoTela.classList.toggle(
        "defeituoso",
        produtoAtual.defeituoso
    );

    mensagem.textContent = "Inspecione: " + produtoAtual.nome;
    feedback.textContent = "Aprove o produto bom ou rejeite o defeituoso.";
    document.getElementById("lote").textContent =
        "Lote número: " + (inspecionados + 1);
}

// Registra a decisão tomada pelo visitante.
function decidir(aprovar) {
    if (!turnoAtivo || produtoAtual === null) return;

    inspecionados++;

    // Se aprovar um produto bom ou rejeitar um defeituoso, acertou.
    const acertou = aprovar !== produtoAtual.defeituoso;

    if (acertou) {
        acertos++;
        pontos += PONTOS_POR_ACERTO;
        feedback.textContent = "✅ Decisão correta! +10 pontos";
        feedback.style.color = "#49d69b";
    } else {
        erros++;
        pontos = Math.max(0, pontos - PENALIDADE);
        feedback.textContent = "❌ Decisão errada! -5 pontos";
        feedback.style.color = "#ff6678";
    }

    atualizarIndicadores();
    mostrarProduto();
}

// Atualiza os números mostrados na interface.
function atualizarIndicadores() {
    document.getElementById("tempo").textContent = tempo;
    document.getElementById("pontos").textContent = pontos;

    const qualidade = inspecionados === 0
        ? 100
        : Math.round((acertos / inspecionados) * 100);

    document.getElementById("qualidade").textContent =
        qualidade + "%";

    document.getElementById("inspecionados").textContent =
        inspecionados;

    document.getElementById("acertos").textContent = acertos;
    document.getElementById("erros").textContent = erros;
}

// Encerra a partida e calcula a classificação.
function finalizarJogo() {
    turnoAtivo = false;
    clearInterval(intervalo);

    jogo.classList.add("escondido");
    resultado.classList.remove("escondido");

    const precisao = inspecionados === 0
        ? 0
        : Math.round((acertos / inspecionados) * 100);

    let classificacao = "Aprendiz da Indústria";

    if (precisao >= 60) {
        classificacao = "Operador de Qualidade";
    }

    if (precisao >= 85 && inspecionados >= 5) {
        classificacao = "Mestre da Indústria!";
    }

    document.getElementById("classificacao").textContent =
        classificacao;

    document.getElementById("pontuacaoFinal").textContent = pontos;

    document.getElementById("resumo").textContent =
        `Você inspecionou ${inspecionados} produtos, acertou ${acertos} vezes e teve ${precisao}% de precisão.`;
}

// Conecta os botões às funções.
document.getElementById("iniciar")
    .addEventListener("click", iniciarJogo);

document.getElementById("aprovar")
    .addEventListener("click", function () {
        decidir(true);
    });

document.getElementById("rejeitar")
    .addEventListener("click", function () {
        decidir(false);
    });

document.getElementById("jogarNovamente")
    .addEventListener("click", iniciarJogo);

// Atalhos de teclado: A aprova e R rejeita.
document.addEventListener("keydown", function (evento) {
    if (!turnoAtivo) return;

    if (evento.key.toLowerCase() === "a") {
        decidir(true);
    }

    if (evento.key.toLowerCase() === "r") {
        decidir(false);
    }
});
