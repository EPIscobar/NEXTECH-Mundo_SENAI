
const CHAVE_RANKING = "nextechRanking";
const TEMPO_LIMITE = 20;
const PONTOS_BASE = 500;
const BONUS_MAXIMO = 1000;

let indicePergunta = 0;
let pontuacao = 0;
let totalAcertos = 0;
let nomeAtual = "";
let inicioPergunta = 0;
let intervaloCronometro = null;
let respondida = false;

// Banco de perguntas
const perguntas = [
    {
        categoria: "Mundo SENAI",
        pergunta: "Qual é o principal objetivo do Mundo SENAI?",
        opcoes: [
            "Apresentar cursos, profissões e tecnologias",
            "Vender equipamentos industriais",
            "Realizar apenas competições esportivas",
            "Substituir todas as escolas"
        ],
        correta: 0,
        explicacao: "O Mundo SENAI aproxima os visitantes da educação profissional e da tecnologia."
    },
    {
        categoria: "Indústria 4.0",
        pergunta: "O que caracteriza a Indústria 4.0?",
        opcoes: [
            "Uso exclusivo de máquinas manuais",
            "Integração de tecnologias e dados nos processos industriais",
            "Eliminação de toda tecnologia",
            "Produção sem planejamento"
        ],
        correta: 1,
        explicacao: "A Indústria 4.0 integra automação, conectividade e sistemas inteligentes."
    },
    {
        categoria: "Internet das Coisas",
        pergunta: "O que significa Internet das Coisas (IoT)?",
        opcoes: [
            "Uma rede exclusiva para jogos",
            "Um tipo de impressora",
            "Objetos conectados que coletam e trocam dados",
            "Um sistema sem conexão"
        ],
        correta: 2,
        explicacao: "A IoT conecta dispositivos para coletar e compartilhar informações."
    },
    {
        categoria: "Impressão 3D",
        pergunta: "Como funciona, em geral, a impressão 3D?",
        opcoes: [
            "Retirando todo o material de um bloco",
            "Montando objetos apenas com parafusos",
            "Transformando papel em metal",
            "Criando objetos por camadas de material"
        ],
        correta: 3,
        explicacao: "A impressão 3D normalmente produz objetos camada por camada."
    },
    {
        categoria: "Robótica",
        pergunta: "Para que um robô industrial é frequentemente utilizado?",
        opcoes: [
            "Executar tarefas com precisão e repetibilidade",
            "Substituir toda a comunicação humana",
            "Funcionar sem controle",
            "Realizar apenas tarefas domésticas"
        ],
        correta: 0,
        explicacao: "Robôs industriais podem executar tarefas repetitivas com precisão."
    },
    {
        categoria: "Inteligência Artificial",
        pergunta: "O que a Inteligência Artificial pode fazer?",
        opcoes: [
            "Garantir que todos os dados estejam corretos",
            "Identificar padrões em dados e auxiliar decisões",
            "Eliminar toda supervisão humana",
            "Funcionar apenas sem computadores"
        ],
        correta: 1,
        explicacao: "A IA pode identificar padrões e auxiliar na tomada de decisões."
    },
    {
        categoria: "Profissões",
        pergunta: "Qual habilidade é importante para profissionais da indústria atual?",
        opcoes: [
            "Evitar aprender novas tecnologias",
            "Ignorar procedimentos de segurança",
            "Aprender continuamente e resolver problemas",
            "Evitar o trabalho em equipe"
        ],
        correta: 2,
        explicacao: "Aprendizagem contínua e resolução de problemas são habilidades importantes."
    },
    {
        categoria: "Cibersegurança",
        pergunta: "Qual atitude ajuda a proteger contas e sistemas?",
        opcoes: [
            "Compartilhar senhas com todos",
            "Usar a mesma senha simples em todos os sites",
            "Abrir qualquer link recebido",
            "Usar senhas fortes e verificar links suspeitos"
        ],
        correta: 3,
        explicacao: "Senhas fortes e atenção a links suspeitos ajudam a proteger contas."
    },
    {
        categoria: "Inovação",
        pergunta: "O que é inovação?",
        opcoes: [
            "Aplicar uma solução que gere melhoria ou valor",
            "Repetir sempre o mesmo processo",
            "Evitar mudanças em qualquer situação",
            "Usar tecnologia sem objetivo"
        ],
        correta: 0,
        explicacao: "Inovar é desenvolver ou aplicar soluções que gerem melhorias."
    },
    {
        categoria: "Automação",
        pergunta: "Qual é uma vantagem da automação industrial?",
        opcoes: [
            "Eliminar toda manutenção",
            "Ajudar a aumentar a produtividade e a consistência",
            "Garantir que nunca ocorram falhas",
            "Impedir a análise de dados"
        ],
        correta: 1,
        explicacao: "A automação pode aumentar a produtividade, mas ainda exige supervisão."
    }
];

// Iniciar o jogo
function iniciarJogo() {
    const campoNome = document.getElementById("nomeParticipante");

    if (!campoNome || campoNome.value.trim() === "") {
        alert("Digite seu nome antes de começar!");
        campoNome?.focus();
        return;
    }

    nomeAtual = campoNome.value.trim();

    indicePergunta = 0;
    pontuacao = 0;
    totalAcertos = 0;

    document.getElementById("pontuacao").textContent = "0";
    document.getElementById("telaInicial").classList.add("oculto");
    document.getElementById("telaResultado").classList.add("oculto");
    document.getElementById("telaQuiz").classList.remove("oculto");

    mostrarPergunta();
}

// Mostrar pergunta e alternativas
function mostrarPergunta() {
    pararCronometro();

    if (indicePergunta >= perguntas.length) {
        finalizarJogo();
        return;
    }

    respondida = false;

    const atual = perguntas[indicePergunta];
    const perguntaEl = document.getElementById("pergunta");
    const opcoesEl = document.getElementById("opcoes");
    const feedbackEl = document.getElementById("feedback");

    document.getElementById("categoriaPergunta").textContent =
        atual.categoria;

    document.getElementById("numeroPergunta").textContent =
        `Pergunta ${indicePergunta + 1} de ${perguntas.length}`;

    document.getElementById("progresso").style.width =
        `${(indicePergunta / perguntas.length) * 100}%`;

    perguntaEl.textContent = atual.pergunta;
    opcoesEl.innerHTML = "";

    feedbackEl.textContent = "";
    feedbackEl.className = "feedback oculto";

    atual.opcoes.forEach((opcao, indice) => {
        const botao = document.createElement("button");

        botao.type = "button";
        botao.textContent = opcao;
        botao.className = "opcao";

        botao.addEventListener("click", () => responder(indice));

        opcoesEl.appendChild(botao);
    });

    iniciarCronometro();
}

// Cronômetro de 20 segundos
function iniciarCronometro() {
    pararCronometro();

    let tempoRestante = TEMPO_LIMITE;
    inicioPergunta = Date.now();

    atualizarCronometro(tempoRestante);

    intervaloCronometro = setInterval(() => {
        tempoRestante--;
        atualizarCronometro(tempoRestante);

        if (tempoRestante <= 0) {
            pararCronometro();
            responder(null);
        }
    }, 1000);
}

function atualizarCronometro(tempo) {
    const cronometro = document.getElementById("cronometro");

    cronometro.textContent = tempo;
    cronometro.classList.toggle("tempo-baixo", tempo <= 5);
}

function pararCronometro() {
    if (intervaloCronometro !== null) {
        clearInterval(intervaloCronometro);
        intervaloCronometro = null;
    }
}

// Verificar resposta e calcular pontos
function responder(indiceEscolhido) {
    if (respondida) return;

    respondida = true;
    pararCronometro();

    const atual = perguntas[indicePergunta];
    const botoes = document.querySelectorAll("#opcoes .opcao");
    const feedback = document.getElementById("feedback");
    const acertou = indiceEscolhido === atual.correta;

    botoes.forEach(botao => {
        botao.disabled = true;
    });

    let mensagem = "";

    if (acertou) {
        totalAcertos++;

        const tempoGasto = (Date.now() - inicioPergunta) / 1000;

        const bonus = Math.max(
            0,
            Math.round(
                BONUS_MAXIMO *
                (1 - tempoGasto / TEMPO_LIMITE)
            )
        );

        const pontosGanhos = PONTOS_BASE + bonus;
        pontuacao += pontosGanhos;

        document.getElementById("pontuacao").textContent = pontuacao;

        botoes[atual.correta].classList.add("correta");

        mensagem = `✅ Correto! +${pontosGanhos} pontos, incluindo ${bonus} de bônus.`;
        feedback.className = "feedback feedback-correto";
    } else {
        if (botoes[atual.correta]) {
            botoes[atual.correta].classList.add("correta");
        }

        if (indiceEscolhido !== null && botoes[indiceEscolhido]) {
            botoes[indiceEscolhido].classList.add("incorreta");
        }

        mensagem = indiceEscolhido === null
            ? "⏰ Tempo esgotado!"
            : "❌ Resposta incorreta!";

        feedback.className = "feedback feedback-incorreto";
    }

    feedback.textContent = `${mensagem} ${atual.explicacao}`;

    setTimeout(() => {
        indicePergunta++;
        mostrarPergunta();
    }, 2200);
}

// Finalizar partida
function finalizarJogo() {
    pararCronometro();

    document.getElementById("progresso").style.width = "100%";
    document.getElementById("telaQuiz").classList.add("oculto");
    document.getElementById("telaResultado").classList.remove("oculto");

    const precisao = Math.round(
        (totalAcertos / perguntas.length) * 100
    );

    document.getElementById("resultadoPontuacao").textContent = pontuacao;
    document.getElementById("resultadoAcertos").textContent =
        `${totalAcertos}/${perguntas.length}`;
    document.getElementById("resultadoPrecisao").textContent =
        `${precisao}%`;

    let mensagem = "Continue aprendendo e tente novamente!";

    if (precisao === 100) {
        mensagem = "🏆 Perfeito! Você acertou todas as perguntas!";
    } else if (precisao >= 70) {
        mensagem = "🚀 Mandou muito bem!";
    } else if (precisao >= 40) {
        mensagem = "👍 Bom trabalho! Você está no caminho certo.";
    }

    document.getElementById("resultadoMensagem").textContent = mensagem;

    salvarRecorde(nomeAtual, pontuacao, totalAcertos, precisao);
    mostrarRanking();
}

// Ler ranking salvo
function lerRanking() {
    try {
        const dados = JSON.parse(
            localStorage.getItem(CHAVE_RANKING) || "[]"
        );

        return Array.isArray(dados) ? dados : [];
    } catch {
        return [];
    }
}

// Guardar o melhor resultado de cada participante
function salvarRecorde(nome, pontos, acertos, precisao) {
    const ranking = lerRanking();

    const posicao = ranking.findIndex(
        participante =>
            participante.nome.toLowerCase() === nome.toLowerCase()
    );

    const resultado = {
        nome,
        pontos,
        acertos,
        precisao
    };

    if (posicao === -1) {
        ranking.push(resultado);
    } else if (pontos > ranking[posicao].pontos) {
        ranking[posicao] = resultado;
    }

    ranking.sort((a, b) =>
        b.pontos - a.pontos || b.acertos - a.acertos
    );

    try {
        localStorage.setItem(CHAVE_RANKING, JSON.stringify(ranking));
    } catch (erro) {
        console.error("Erro ao salvar ranking:", erro);
        alert("Não foi possível salvar o ranking neste navegador.");
    }
}

// Exibir os dez melhores resultados
function mostrarRanking() {
    const lista = document.getElementById("rankingLista");

    if (!lista) return;

    lista.innerHTML = "";

    const ranking = lerRanking()
        .sort((a, b) => b.pontos - a.pontos || b.acertos - a.acertos)
        .slice(0, 10);

    if (ranking.length === 0) {
        const item = document.createElement("li");
        item.textContent = "Nenhum resultado registrado ainda.";
        lista.appendChild(item);
        return;
    }

    ranking.forEach((participante, indice) => {
        const item = document.createElement("li");
        const medalha = ["🥇", "🥈", "🥉"][indice] || `${indice + 1}º`;

        const nome = document.createElement("strong");
        nome.textContent = `${medalha} ${participante.nome}`;

        const detalhes = document.createElement("span");
        detalhes.textContent =
            ` — ${participante.pontos} pontos | ` +
            `${participante.acertos}/${perguntas.length} acertos`;

        item.append(nome, detalhes);
        lista.appendChild(item);
    });
}

// Botão para limpar o ranking
document.getElementById("btnLimparRanking").addEventListener("click", () => {
    if (confirm("Deseja apagar todo o ranking salvo neste navegador?")) {
        localStorage.removeItem(CHAVE_RANKING);
        mostrarRanking();
    }
});

// Botão para iniciar
document.getElementById("btnIniciar").addEventListener("click", iniciarJogo);

// Permitir iniciar com Enter no campo de nome
document.getElementById("nomeParticipante").addEventListener("keydown", evento => {
    if (evento.key === "Enter") {
        iniciarJogo();
    }
});

// Jogar novamente
document.getElementById("btnJogarNovamente").addEventListener("click", () => {
    pararCronometro();

    document.getElementById("telaResultado").classList.add("oculto");
    document.getElementById("telaInicial").classList.remove("oculto");

    mostrarRanking();
});

// Carregar ranking ao abrir a página
mostrarRanking();
