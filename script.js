'use strict';

const $ = id => document.getElementById(id);

const themes = {
  'Conhecimentos gerais': {
    image: 'https://images.unsplash.com/photo-1453738773917-9c3eff1db985?auto=format&fit=crop&w=1200&q=80',
    easy: [
      ['Quantos dias tem uma semana?', ['5','7','10','12'], 1],
      ['Qual cor surge ao misturar azul e amarelo?', ['Verde','Rosa','Preto','Laranja'], 0],
      ['Quantos meses tem um ano?', ['10','11','12','13'], 2]
    ],
    medium: [
      ['Quantos minutos há em duas horas?', ['60','90','120','180'], 2],
      ['Quantos lados tem um hexágono?', ['5','6','7','8'], 1],
      ['Qual instrumento mede a temperatura?', ['Balança','Termômetro','Régua','Bússola'], 1]
    ],
    hard: [
      ['Qual é o resultado de 15²?', ['125','200','225','250'], 2],
      ['Como se chama a passagem direta do sólido para o gasoso?', ['Condensação','Sublimação','Fusão','Solidificação'], 1],
      ['Qual é a unidade de resistência elétrica?', ['Volt','Ampere','Ohm','Watt'], 2]
    ]
  },

  'Animais': {
    image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=1200&q=80',
    easy: [
      ['Qual animal faz “miau”?', ['Cachorro','Gato','Vaca','Pato'], 1],
      ['Qual animal tem uma tromba comprida?', ['Elefante','Leão','Macaco','Zebra'], 0],
      ['Qual inseto produz mel?', ['Formiga','Abelha','Mosca','Joaninha'], 1]
    ],
    medium: [
      ['Como se chama o animal que come plantas e outros animais?', ['Herbívoro','Carnívoro','Onívoro','Insetívoro'], 2],
      ['Qual mamífero põe ovos?', ['Ornitorrinco','Cachorro','Golfinho','Cavalo'], 0],
      ['Como se chama a transformação de lagarta em borboleta?', ['Migração','Metamorfose','Hibernação','Polinização'], 1]
    ],
    hard: [
      ['Qual relação beneficia um organismo e prejudica o outro?', ['Mutualismo','Comensalismo','Parasitismo','Cooperação'], 2],
      ['Qual é o nome científico da espécie humana?', ['Homo erectus','Homo habilis','Homo sapiens','Australopithecus'], 2],
      ['Qual grupo de animais possui penas?', ['Mamíferos','Aves','Répteis','Anfíbios'], 1]
    ]
  },

  'Anime': {
    image: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=1200&q=80',
    easy: [
      ['Qual é o famoso Pokémon amarelo?', ['Charmander','Pikachu','Squirtle','Bulbasaur'], 1],
      ['Quem sonha em ser o Rei dos Piratas em One Piece?', ['Luffy','Zoro','Sanji','Chopper'], 0],
      ['Naruto quer se tornar o quê?', ['Rei dos Piratas','Hokage','Professor','Chef'], 1]
    ],
    medium: [
      ['Em Naruto, como se chama a energia usada nas técnicas ninja?', ['Chakra','Mana azul','Cosmo','Kiara'], 0],
      ['Qual é o navio dos Chapéus de Palha depois do Going Merry?', ['Thousand Sunny','Red Force','Polar Tang','Moby Dick'], 0],
      ['Qual anime acompanha jovens que combatem demônios?', ['Demon Slayer','Doraemon','Haikyuu!!','Pokémon Concierge'], 0]
    ],
    hard: [
      ['Qual princípio central rege a alquimia em Fullmetal Alchemist?', ['Troca equivalente','Viagem no tempo','Energia ilimitada','Telepatia'], 0],
      ['Qual clã de Naruto é associado ao Sharingan?', ['Hyūga','Uchiha','Nara','Akimichi'], 1],
      ['Como se chama a organização de Crocodile na saga de Alabasta?', ['Baroque Works','CP9','Germa 66','Marinha'], 0]
    ]
  },

  'Lugares do mundo': {
    image: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=1200&q=80',
    easy: [
      ['Em qual país fica a Torre Eiffel?', ['Itália','França','Brasil','Japão'], 1],
      ['Qual cidade brasileira tem o Cristo Redentor?', ['Rio de Janeiro','Lisboa','Tóquio','Londres'], 0],
      ['Qual é a capital do Brasil?', ['Brasília','São Paulo','Salvador','Manaus'], 0]
    ],
    medium: [
      ['Qual é a capital de Portugal?', ['Porto','Lisboa','Coimbra','Faro'], 1],
      ['Em qual continente fica o Egito?', ['África','Europa','América','Oceania'], 0],
      ['Qual país abriga Machu Picchu?', ['Peru','México','Chile','Canadá'], 0]
    ],
    hard: [
      ['Qual é a capital do Butão?', ['Katmandu','Thimphu','Daca','Vientiane'], 1],
      ['Qual estreito conecta o Mar Negro ao Mar de Mármara?', ['Gibraltar','Bósforo','Ormuz','Magalhães'], 1],
      ['Qual país é completamente cercado pela África do Sul?', ['Lesoto','Botsuana','Namíbia','Angola'], 0]
    ]
  },

  'Filmes e séries': {
    image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1200&q=80',
    easy: [
      ['Em Frozen, quem tem poderes de gelo?', ['Elsa','Moana','Minnie','Dory'], 0],
      ['Qual é o nome do cowboy de Toy Story?', ['Woody','Buzz','Nemo','Shrek'], 0],
      ['Em O Rei Leão, qual é o nome do leão principal?', ['Simba','Dumbo','Bambi','Po'], 0]
    ],
    medium: [
      ['Em Divertida Mente, qual emoção é azul?', ['Alegria','Tristeza','Raiva','Nojinho'], 1],
      ['Qual é o nome da escola de magia de Harry Potter?', ['Hogwarts','Nárnia','Metrópolis','Arendelle'], 0],
      ['Qual herói usa o martelo Mjölnir?', ['Thor','Hulk','Pantera Negra','Homem-Formiga'], 0]
    ],
    hard: [
      ['Quem dirigiu o filme A Origem?', ['Denis Villeneuve','Christopher Nolan','David Fincher','James Cameron'], 1],
      ['Em Star Wars, qual é o planeta natal de Chewbacca?', ['Tatooine','Kashyyyk','Naboo','Endor'], 1],
      ['Qual filme sul-coreano venceu o Oscar de Melhor Filme em 2020?', ['Oldboy','Parasita','Minari','A Criada'], 1]
    ]
  },

  'Tecnologia': {
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
    easy: [
      ['Qual aparelho usamos para fazer ligações?', ['Celular','Geladeira','Micro-ondas','Ventilador'], 0],
      ['Qual peça usamos para digitar?', ['Teclado','Monitor','Caixa de som','Impressora'], 0],
      ['O que conecta aparelhos à internet sem fio?', ['Wi-Fi','Lanterna','Bússola','Cronômetro'], 0]
    ],
    medium: [
      ['O que significa CPU?', ['Unidade Central de Processamento','Controle Principal de Usuário','Central de Programas Úteis','Código Pessoal Universal'], 0],
      ['Para que serve um backup?', ['Criar uma cópia de segurança','Aumentar o brilho','Apagar todos os arquivos','Melhorar o Wi-Fi sempre'], 0],
      ['O que é phishing?', ['Tentativa de enganar alguém para obter dados','Compactação de vídeo','Um cabo de rede','Limpeza da tela'], 0]
    ],
    hard: [
      ['Qual estrutura de dados segue o princípio LIFO?', ['Fila','Pilha','Árvore','Grafo'], 1],
      ['Em redes, o que significa DNS?', ['Data Network System','Domain Name System','Digital Node Service','Distributed Number Standard'], 1],
      ['Qual tecnologia estrutura páginas web, mas não é linguagem de programação?', ['JavaScript','Python','HTML','C++'], 2]
    ]
  },

  'Esportes': {
    image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=1200&q=80',
    easy: [
      ['Em qual esporte usamos uma bola e uma cesta?', ['Basquete','Natação','Tênis','Ginástica'], 0],
      ['Em qual esporte nadamos numa piscina?', ['Natação','Ciclismo','Judô','Vôlei'], 0],
      ['Qual equipamento protege a cabeça ao andar de bicicleta?', ['Capacete','Chinelo','Cachecol','Luvas'], 0]
    ],
    medium: [
      ['Qual modalidade combina natação, ciclismo e corrida?', ['Triatlo','Pentatlo','Decatlo','Biatlo'], 0],
      ['No vôlei, qual fundamento inicia cada ponto?', ['Saque','Bloqueio','Levantamento','Manchete'], 0],
      ['Em uma corrida de revezamento, o que os atletas passam?', ['Bastão','Raquete','Disco','Capacete'], 0]
    ],
    hard: [
      ['Qual é a distância oficial de uma maratona?', ['40 km','42,195 km','45 km','50 km'], 1],
      ['Qual país sediou a Copa do Mundo masculina de futebol de 2010?', ['Alemanha','África do Sul','Brasil','México'], 1],
      ['No vôlei de quadra, quantos toques uma equipe pode dar antes de devolver a bola, sem contar o bloqueio?', ['2','3','4','5'], 1]
    ]
  },

  'História': {
    image: 'https://images.unsplash.com/photo-1461360370896-922624d12aa1?auto=format&fit=crop&w=1200&q=80',
    easy: [
      ['Qual data marca a Independência do Brasil?', ['7 de setembro','25 de dezembro','1º de maio','12 de outubro'], 0],
      ['Quem foi o primeiro imperador do Brasil?', ['Dom Pedro I','Dom Pedro II','Tiradentes','Santos Dumont'], 0],
      ['Em que ano o Brasil declarou sua independência?', ['1822','1500','1888','2000'], 0]
    ],
    medium: [
      ['Qual invenção é associada a Johannes Gutenberg?', ['Imprensa de tipos móveis','Telefone','Lâmpada elétrica','Avião'], 0],
      ['Qual povo antigo construiu as pirâmides de Gizé?', ['Egípcios','Vikings','Romanos','Astecas'], 0],
      ['Qual movimento brasileiro lutou pela abolição da escravidão?', ['Abolicionismo','Cruzadas','Mercantilismo','Absolutismo'], 0]
    ],
    hard: [
      ['Qual tratado dividiu territórios ultramarinos entre Portugal e Espanha em 1494?', ['Versalhes','Tordesilhas','Utrecht','Paris'], 1],
      ['Qual revolução começou em 1789 na França?', ['Gloriosa','Francesa','Industrial','Russa'], 1],
      ['Em que ano ocorreu a Revolução Russa que levou os bolcheviques ao poder?', ['1905','1914','1917','1922'], 2]
    ]
  },

  'Geografia': {
    image: 'https://images.unsplash.com/photo-1524666041070-9b876761f9a3?auto=format&fit=crop&w=1200&q=80',
    easy: [
      ['Em qual continente fica o Brasil?', ['América do Sul','Europa','África','Ásia'], 0],
      ['Qual é a capital do Brasil?', ['Brasília','Curitiba','Rio de Janeiro','Recife'], 0],
      ['Qual é o maior oceano da Terra?', ['Pacífico','Atlântico','Índico','Ártico'], 0]
    ],
    medium: [
      ['Qual região brasileira abriga o estado do Paraná?', ['Sul','Norte','Nordeste','Centro-Oeste'], 0],
      ['Como se chama a representação reduzida da superfície terrestre?', ['Mapa','Termograma','Cronologia','Sonograma'], 0],
      ['Qual país fica na América do Sul?', ['Argentina','Japão','França','Egito'], 0]
    ],
    hard: [
      ['Qual corrente oceânica fria influencia o litoral do Peru e do Chile?', ['Corrente do Golfo','Corrente de Humboldt','Kuroshio','Corrente das Agulhas'], 1],
      ['Qual é o ponto mais alto da África?', ['Monte Quênia','Kilimanjaro','Monte Stanley','Monte Elgon'], 1],
      ['Qual país administra a Groenlândia como território autônomo?', ['Noruega','Dinamarca','Canadá','Islândia'], 1]
    ]
  },

  'Natureza': {
    image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=80',
    easy: [
      ['O que as plantas precisam para crescer?', ['Água e luz','Refrigerante','Plástico','Brinquedos'], 0],
      ['A água congelada vira o quê?', ['Gelo','Vapor quente','Areia','Óleo'], 0],
      ['Qual astro ilumina a Terra durante o dia?', ['Sol','Lua','Marte','Cometa'], 0]
    ],
    medium: [
      ['Qual parte da planta geralmente fica debaixo da terra?', ['Raiz','Flor','Fruto','Folha'], 0],
      ['Qual animal ajuda a polinizar flores?', ['Abelha','Tubarão','Pinguim','Golfinho'], 0],
      ['O que devemos fazer com lixo reciclável?', ['Separar para reciclagem','Jogar no rio','Deixar na rua','Queimar sempre'], 0]
    ],
    hard: [
      ['Qual processo transforma nitrogênio atmosférico em compostos utilizáveis pelos ecossistemas?', ['Fixação do nitrogênio','Transpiração','Fermentação','Combustão'], 0],
      ['Qual gás contribui para o efeito estufa natural e varia bastante na atmosfera?', ['Oxigênio','Vapor de água','Hélio','Hidrogênio'], 1],
      ['Como se chama o crescimento excessivo de algas causado por excesso de nutrientes na água?', ['Eutrofização','Desertificação','Inversão térmica','Salinização'], 0]
    ]
  },

  'Jogos': {
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80',
    easy: [
      ['Qual jogo permite construir casas com blocos?', ['Minecraft','FIFA','Uno','Paciência'], 0],
      ['Em Mario Kart, os personagens competem em quê?', ['Corridas de kart','Xadrez','Natação','Cozinha'], 0],
      ['Qual personagem da Nintendo usa boné vermelho e bigode?', ['Mario','Sonic','Pikachu','Kirby'], 0]
    ],
    medium: [
      ['O que geralmente significa “pause” em um jogo?', ['Pausar o jogo','Ganhar automaticamente','Apagar o aparelho','Mudar sempre o idioma'], 0],
      ['No xadrez, qual peça costuma ter uma cruz no topo?', ['Rei','Cavalo','Peão','Torre'], 0],
      ['Qual jogo usa peças com números e pontinhos?', ['Dominó','Jenga','Esconde-esconde','Pular corda'], 0]
    ],
    hard: [
      ['No xadrez, como se chama a situação sem xeque em que não há lance legal?', ['Roque','Afogamento','En passant','Gambito'], 1],
      ['Em jogos, o que significa “nerfar” um personagem?', ['Aumentar seu poder','Reduzir sua eficácia','Removê-lo','Liberar uma skin'], 1],
      ['Qual estúdio criou a série Dark Souls?', ['Valve','FromSoftware','Naughty Dog','CD Projekt Red'], 1]
    ]
  },

  'Corpo humano': {
    image: 'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&w=1200&q=80',
    easy: [
      ['Com qual parte do corpo enxergamos?', ['Olhos','Orelhas','Joelhos','Cotovelos'], 0],
      ['Qual órgão bombeia o sangue?', ['Coração','Estômago','Cérebro','Pulmão'], 0],
      ['Com qual parte do corpo sentimos cheiros?', ['Nariz','Joelho','Cotovelos','Calcanhar'], 0]
    ],
    medium: [
      ['Qual é a função principal dos pulmões?', ['Realizar trocas gasosas','Produzir bile','Filtrar urina','Armazenar cálcio'], 0],
      ['Qual sistema coordena respostas por meio de sinais nervosos?', ['Sistema nervoso','Sistema digestório','Sistema urinário','Sistema tegumentar'], 0],
      ['Qual nutriente é uma importante fonte de energia?', ['Carboidratos','Somente água','Sais minerais apenas','Oxigênio como alimento'], 0]
    ],
    hard: [
      ['Qual estrutura celular produz a maior parte do ATP nas células eucarióticas?', ['Ribossomo','Mitocôndria','Lisossomo','Complexo de Golgi'], 1],
      ['Qual parte do encéfalo participa do equilíbrio e da coordenação motora?', ['Cerebelo','Hipotálamo','Bulbo olfatório','Hipófise'], 0],
      ['Qual molécula armazena a maior parte da informação genética?', ['ATP','DNA','Colágeno','Hemoglobina'], 1]
    ]
  }
};

const difficultyNames = {
  facil: 'FÁCIL',
  medio: 'MÉDIO',
  dificil: 'DIFÍCIL'
};

const difficultyHelpText = {
  facil: 'Perguntas básicas para começar.',
  medio: 'Perguntas intermediárias para testar seus conhecimentos.',
  dificil: 'Perguntas avançadas para um desafio maior.'
};

const RANK_KEY = 'nextech-quiz-ranking-v2';
const THEME_KEY = 'nextech-quiz-theme-v2';
const SOUND_KEY = 'nextech-quiz-sound-v2';

let player = '';
let theme = 'Conhecimentos gerais';
let difficulty = 'facil';
let round = [];
let index = 0;
let score = 0;
let hits = 0;
let seconds = 25;
let tick = null;
let locked = false;
let soundOn = true;
let audio = null;

function safeGet(key) {
  try { return localStorage.getItem(key); }
  catch { return null; }
}

function safeSet(key, value) {
  try { localStorage.setItem(key, value); }
  catch {}
}

function safeRemove(key) {
  try { localStorage.removeItem(key); }
  catch {}
}

function shuffle(items) {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function showScreen(id) {
  ['home', 'quiz', 'result'].forEach(screen => {
    $(screen).classList.toggle('hidden', screen !== id);
  });
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function applyColorTheme() {
  const colorTheme = safeGet(THEME_KEY) === 'light' ? 'light' : 'dark';
  document.body.dataset.theme = colorTheme;
  $('themeBtn').textContent = colorTheme === 'dark' ? '☀️ Modo claro' : '🌙 Modo escuro';
}

function beep(frequency = 660) {
  if (!soundOn) return;

  try {
    audio = audio || new (window.AudioContext || window.webkitAudioContext)();
    if (audio.state === 'suspended') audio.resume();

    const oscillator = audio.createOscillator();
    const gain = audio.createGain();

    oscillator.frequency.value = frequency;
    gain.gain.setValueAtTime(0.001, audio.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.05, audio.currentTime + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.001, audio.currentTime + 0.15);

    oscillator.connect(gain);
    gain.connect(audio.destination);
    oscillator.start();
    oscillator.stop(audio.currentTime + 0.16);
  } catch {}
}

function getRanking() {
  try {
    const data = JSON.parse(safeGet(RANK_KEY) || '[]');
    return Array.isArray(data) ? data : [];
  } catch {
    return [];
  }
}

function renderRanking() {
  const ranking = getRanking()
    .sort((a, b) => b.score - a.score)
    .slice(0, 10);

  $('ranking').innerHTML = '';

  if (!ranking.length) {
    $('ranking').innerHTML =
      '<div class="empty">Ainda não há pontuações. Seja o primeiro!</div>';
    return;
  }

  ranking.forEach((entry, position) => {
    const row = document.createElement('div');
    row.className = 'rankrow';

    const name = document.createElement('span');
    name.textContent = `${position + 1}. ${entry.name} · ${entry.theme}`;

    const points = document.createElement('b');
    points.textContent = `${entry.score} pts`;

    row.append(name, points);
    $('ranking').appendChild(row);
  });
}

function updateThemePreview() {
  const selectedTheme = $('theme').value;
  const data = themes[selectedTheme];

  $('previewImage').src = data.image;
  $('previewImage').alt = `Imagem do tema ${selectedTheme}`;
  $('previewTitle').textContent = selectedTheme;
}

function startGame() {
  if (!$('terms').checked) {
    alert('Leia e aceite o termo de participação antes de começar.');
    return;
  }

  player = $('player').value.trim() || 'Jogador';
  theme = $('theme').value;
  difficulty = $('difficulty').value;

  const selectedTheme = themes[theme];
  const pool = selectedTheme[difficulty === 'facil' ? 'easy' :
    difficulty === 'medio' ? 'medium' : 'hard'];

  // Não mistura perguntas de outros níveis.
  round = shuffle(pool).slice(0, 10).map(question => {
    const answers = shuffle(
      question[1].map((answer, i) => ({
        answer,
        correct: i === question[2]
      }))
    );

    return [
      question[0],
      answers.map(item => item.answer),
      answers.findIndex(item => item.correct)
    ];
  });

  index = 0;
  score = 0;
  hits = 0;
  locked = false;

  $('themeBadge').textContent =
    `${theme.toUpperCase()} · ${difficultyNames[difficulty]}`;

  updateThemePreview();
  showScreen('quiz');
  beep(520);
  showQuestion();
}

function showQuestion() {
  clearInterval(tick);
  locked = false;

  seconds = difficulty === 'dificil' ? 15 :
    difficulty === 'medio' ? 20 : 25;

  const current = round[index];

  $('counter').textContent = `${index + 1}/${round.length}`;
  $('score').textContent = score;
  $('timer').textContent = `${seconds}s`;
  $('progress').style.width = `${index / round.length * 100}%`;
  $('question').textContent = current[0];

  $('questionImage').src = themes[theme].image;
  $('questionImage').alt = `Imagem do tema ${theme}`;
  $('imageCaption').textContent =
    `${theme} · ${difficultyNames[difficulty]} · imagem ilustrativa`;

  $('feedback').textContent = '';
  $('feedback').className = '';
  $('nextBtn').classList.add('hidden');
  $('answers').innerHTML = '';

  ['A', 'B', 'C', 'D'].forEach((letter, i) => {
    const button = document.createElement('button');
    button.className = 'answer';

    const label = document.createElement('span');
    label.className = 'letter';
    label.textContent = letter;

    const text = document.createElement('span');
    text.textContent = current[1][i];

    button.append(label, text);
    button.addEventListener('click', () => chooseAnswer(i));
    $('answers').appendChild(button);
  });

  tick = setInterval(() => {
    seconds--;
    $('timer').textContent = `${seconds}s`;

    if (seconds <= 5) $('timer').style.color = 'var(--red)';
    else $('timer').style.color = 'var(--text)';

    if (seconds <= 0) {
      clearInterval(tick);
      chooseAnswer(-1);
    }
  }, 1000);
}

function chooseAnswer(choice) {
  if (locked) return;

  locked = true;
  clearInterval(tick);

  const current = round[index];
  const correct = current[2];
  const buttons = [...$('answers').querySelectorAll('button')];

  buttons.forEach((button, i) => {
    button.disabled = true;
    if (i === correct) button.classList.add('correct');
    if (i === choice && choice !== correct) button.classList.add('wrong');
  });

  if (choice === correct) {
    hits++;

    const multiplier = difficulty === 'facil' ? 1 :
      difficulty === 'medio' ? 1.25 : 1.6;

    const gained = Math.round((300 + seconds * 20) * multiplier);
    score += gained;

    $('feedback').textContent = `Correto! +${gained} pontos.`;
    $('feedback').className = 'good';
    beep(800);
  } else {
    $('feedback').textContent = choice === -1
      ? `Tempo esgotado! Resposta correta: ${current[1][correct]}.`
      : `Resposta correta: ${current[1][correct]}.`;

    $('feedback').className = 'bad';
    beep(250);
  }

  $('score').textContent = score;
  $('progress').style.width = `${(index + 1) / round.length * 100}%`;

  $('nextBtn').textContent = index === round.length - 1
    ? 'Ver resultado →'
    : 'Próxima pergunta →';

  $('nextBtn').classList.remove('hidden');
}

function nextQuestion() {
  if (!locked) return;

  index++;

  if (index >= round.length) finishGame();
  else showQuestion();
}

function finishGame() {
  clearInterval(tick);

  const accuracy = Math.round(hits / round.length * 100);

  $('resultTitle').textContent = hits === round.length
    ? 'Perfeito! 🎉'
    : hits >= Math.ceil(round.length * 0.7)
      ? 'Mandou muito bem!'
      : hits >= Math.ceil(round.length * 0.4)
        ? 'Bom trabalho!'
        : 'Continue treinando!';

  $('finalScore').textContent = `${score} pontos`;
  $('correct').textContent = `${hits}/${round.length}`;
  $('accuracy').textContent = `${accuracy}%`;
  $('resultTheme').textContent = `${difficultyNames[difficulty]} · ${theme}`;

  const ranking = getRanking();

  ranking.push({
    name: player.slice(0, 20),
    theme,
    difficulty: difficultyNames[difficulty],
    score,
    hits,
    date: new Date().toISOString()
  });

  ranking.sort((a, b) => b.score - a.score);
  safeSet(RANK_KEY, JSON.stringify(ranking.slice(0, 50)));

  renderRanking();
  showScreen('result');
  beep(600);
}

$('theme').addEventListener('change', updateThemePreview);

$('difficulty').addEventListener('change', () => {
  $('difficultyHelp').textContent = difficultyHelpText[$('difficulty').value];
});

$('termsToggle').addEventListener('click', () => {
  const panel = $('termsPanel');
  const opening = panel.classList.contains('hidden');

  panel.classList.toggle('hidden', !opening);
  $('termsToggle').textContent = opening
    ? '− Ocultar termo de participação'
    : '＋ Ler termo de participação';
});

$('startBtn').addEventListener('click', startGame);
$('nextBtn').addEventListener('click', nextQuestion);

$('quitBtn').addEventListener('click', () => {
  if (confirm('Sair da partida? Seu progresso atual não será salvo.')) {
    clearInterval(tick);
    showScreen('home');
  }
});

$('againBtn').addEventListener('click', startGame);

$('homeBtn').addEventListener('click', () => {
  showScreen('home');
  renderRanking();
});

$('clearRank').addEventListener('click', () => {
  if (confirm('Deseja apagar o ranking salvo neste navegador?')) {
    safeRemove(RANK_KEY);
    renderRanking();
  }
});

$('themeBtn').addEventListener('click', () => {
  const current = safeGet(THEME_KEY) === 'light' ? 'light' : 'dark';
  safeSet(THEME_KEY, current === 'dark' ? 'light' : 'dark');
  applyColorTheme();
});

$('soundBtn').addEventListener('click', () => {
  soundOn = !soundOn;
  safeSet(SOUND_KEY, soundOn ? 'on' : 'off');
  $('soundBtn').textContent = soundOn ? '♫ Som ligado' : '♫ Som desligado';
  if (soundOn) beep(700);
});

soundOn = safeGet(SOUND_KEY) !== 'off';
$('soundBtn').textContent = soundOn ? '♫ Som ligado' : '♫ Som desligado';

applyColorTheme();
updateThemePreview();
renderRanking();