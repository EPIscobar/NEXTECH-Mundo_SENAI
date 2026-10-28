
"use strict";

const $ = (id) => document.getElementById(id);

const telas = ["home", "quiz", "result"];
const TEMPO_POR_PERGUNTA = 20;
const TOTAL_PERGUNTAS = 10;

let perguntasJogo = [];
let indice = 0;
let pontos = 0;
let acertos = 0;
let tempoRestante = TEMPO_POR_PERGUNTA;
let intervalo = null;
let respondeu = false;
let nomeJogador = "Jogador";
let temaAtual = "";
let dificuldadeAtual = "facil";

/*
  Banco inicial de perguntas.
  Cada pergunta segue o formato:
  [pergunta, [alternativas], índice da resposta correta, explicação]
*/

const banco = {
  "Conhecimentos gerais": [
    ["Quantos dias tem uma semana?", ["5", "7", "10", "12"], 1, "Uma semana tem sete dias."],
    ["Qual é a cor formada pela mistura de azul e amarelo?", ["Verde", "Rosa", "Preto", "Laranja"], 0, "Azul e amarelo formam verde."],
    ["Quantas patas tem uma aranha?", ["6", "8", "10", "4"], 1, "As aranhas possuem oito patas."],
    ["Quantos meses tem um ano?", ["10", "11", "12", "13"], 2, "Um ano tem doze meses."],
    ["Em qual planeta vivemos?", ["Marte", "Terra", "Júpiter", "Vênus"], 1, "Nosso planeta é a Terra."],
    ["Qual é o contrário de quente?", ["Alto", "Frio", "Rápido", "Claro"], 1, "Frio é o contrário de quente."],
    ["Qual instrumento usamos para ver as horas?", ["Relógio", "Garfo", "Pente", "Bola"], 0, "O relógio indica as horas."],
    ["Qual destes alimentos é uma fruta?", ["Cenoura", "Maçã", "Alface", "Batata"], 1, "A maçã é uma fruta."],
    ["Quantos lados tem um triângulo?", ["2", "3", "4", "5"], 1, "Um triângulo tem três lados."],
    ["Qual é o maior número: 9, 15, 12 ou 7?", ["9", "15", "12", "7"], 1, "15 é o maior desses números."]
  ],

  "Animais": [
    ["Qual animal faz 'miau'?", ["Cachorro", "Gato", "Vaca", "Pato"], 1, "O miado é característico dos gatos."],
    ["Qual animal tem uma tromba comprida?", ["Elefante", "Leão", "Macaco", "Zebra"], 0, "O elefante possui uma tromba."],
    ["Qual destes mamíferos vive no mar?", ["Golfinho", "Galinha", "Cavalo", "Gato"], 0, "O golfinho é um mamífero aquático."],
    ["Qual inseto produz mel?", ["Formiga", "Abelha", "Mosca", "Joaninha"], 1, "As abelhas produzem mel."],
    ["Qual animal tem listras pretas e brancas?", ["Zebra", "Girafa", "Urso", "Ovelha"], 0, "As listras são características das zebras."],
    ["Qual animal carrega o filhote em uma bolsa?", ["Canguru", "Pinguim", "Lobo", "Porco"], 0, "O canguru é um marsupial."],
    ["Qual é o maior animal do planeta?", ["Elefante africano", "Baleia-azul", "Girafa", "Tubarão-branco"], 1, "A baleia-azul é o maior animal conhecido."],
    ["Qual destes animais é um anfíbio?", ["Sapo", "Gato", "Águia", "Cavalo"], 0, "Os sapos são anfíbios."],
    ["Qual animal é conhecido por mudar de cor?", ["Camaleão", "Coelho", "Panda", "Cavalo"], 0, "Camaleões podem alterar sua coloração."],
    ["Como se chama o estudo dos animais?", ["Botânica", "Zoologia", "Geologia", "Astronomia"], 1, "A zoologia estuda os animais."]
  ],

  "Anime": [
    ["Qual Pokémon é amarelo e famoso por seus ataques elétricos?", ["Charmander", "Pikachu", "Squirtle", "Bulbasaur"], 1, "Pikachu é conhecido por seus poderes elétricos."],
    ["Quem é o protagonista de Dragon Ball?", ["Goku", "Luffy", "Naruto", "Tanjiro"], 0, "Goku é o protagonista de Dragon Ball."],
    ["O que Naruto deseja se tornar?", ["Rei dos Piratas", "Hokage", "Cientista", "Chef"], 1, "Naruto sonha em se tornar Hokage."],
    ["Quem sonha em encontrar o One Piece?", ["Zoro", "Sanji", "Monkey D. Luffy", "Chopper"], 2, "Luffy busca o tesouro One Piece."],
    ["Qual destes animes apresenta caçadores de demônios?", ["Demon Slayer", "Pokémon", "Haikyuu!!", "Dr. Stone"], 0, "Demon Slayer acompanha caçadores de demônios."],
    ["Qual é o nome do caderno usado em Death Note?", ["Life Book", "Death Note", "Dark File", "Soul Paper"], 1, "O caderno central da história é o Death Note."],
    ["Em Pokémon, qual tipo é super efetivo contra Água?", ["Elétrico", "Normal", "Fantasma", "Pedra"], 0, "Ataques elétricos são fortes contra Pokémon de Água."],
    ["Qual personagem usa três espadas em One Piece?", ["Zoro", "Usopp", "Nami", "Franky"], 0, "Roronoa Zoro utiliza o estilo de três espadas."],
    ["Qual é o nome do protagonista de My Hero Academia?", ["Izuku Midoriya", "Eren Yeager", "Light Yagami", "Saitama"], 0, "Izuku Midoriya é o protagonista da série."],
    ["Qual anime acompanha partidas de vôlei?", ["Haikyuu!!", "One Piece", "Bleach", "Spy x Family"], 0, "Haikyuu!! é centrado no vôlei."]
  ],

  "Lugares do mundo": [
    ["Em qual país fica a Torre Eiffel?", ["Itália", "França", "Brasil", "Japão"], 1, "A Torre Eiffel fica em Paris, na França."],
    ["Qual cidade brasileira abriga o Cristo Redentor?", ["Rio de Janeiro", "Lisboa", "Tóquio", "Londres"], 0, "O monumento fica no Rio de Janeiro."],
    ["Em qual país ficam as pirâmides de Gizé?", ["Egito", "Canadá", "Chile", "Portugal"], 0, "As pirâmides de Gizé ficam no Egito."],
    ["Qual país tem formato frequentemente comparado a uma bota?", ["Itália", "México", "Japão", "Índia"], 0, "O formato da Itália lembra uma bota."],
    ["Em qual cidade fica o Big Ben?", ["Londres", "Paris", "Roma", "Madri"], 0, "O Big Ben fica em Londres."],
    ["Qual é o maior oceano do planeta?", ["Pacífico", "Atlântico", "Índico", "Ártico"], 0, "O Oceano Pacífico é o maior."],
    ["Qual é a capital do Japão?", ["Seul", "Pequim", "Tóquio", "Bangkok"], 2, "A capital japonesa é Tóquio."],
    ["Em qual continente fica o Egito?", ["Europa", "África", "Oceania", "América do Sul"], 1, "O Egito fica principalmente na África."],
    ["Qual é a capital do Brasil?", ["Brasília", "São Paulo", "Salvador", "Manaus"], 0, "Brasília é a capital brasileira."],
    ["Em qual país fica a Estátua da Liberdade?", ["Estados Unidos", "Argentina", "Espanha", "Índia"], 0, "O monumento fica em Nova York, nos Estados Unidos."]
  ],

  "Filmes e séries": [
    ["Em Frozen, quem tem poderes de gelo?", ["Elsa", "Moana", "Minnie", "Dory"], 0, "Elsa possui poderes relacionados ao gelo."],
    ["Qual é o nome do cowboy de Toy Story?", ["Woody", "Buzz", "Nemo", "Shrek"], 0, "Woody é o cowboy de Toy Story."],
    ["Qual é a identidade secreta do Homem-Aranha?", ["Peter Parker", "Bruce Wayne", "Clark Kent", "Tony Stark"], 0, "Peter Parker é uma das versões mais conhecidas do herói."],
    ["Que animal é Nemo?", ["Peixe-palhaço", "Tubarão", "Tartaruga", "Polvo"], 0, "Nemo é um peixe-palhaço."],
    ["Qual personagem verde vive em um pântano?", ["Shrek", "Woody", "Olaf", "Simba"], 0, "Shrek é um ogro que vive em um pântano."],
    ["Qual é o nome do leão protagonista de O Rei Leão?", ["Simba", "Dumbo", "Bambi", "Po"], 0, "Simba é o protagonista de O Rei Leão."],
    ["Qual herói usa um escudo com uma estrela?", ["Capitão América", "Homem de Ferro", "Hulk", "Thor"], 0, "O escudo é um dos símbolos do Capitão América."],
    ["Qual personagem de desenho adora lasanha?", ["Garfield", "Mickey", "Pato Donald", "Pernalonga"], 0, "Garfield é famoso por gostar de lasanha."],
    ["Como são chamados os ajudantes amarelos de Meu Malvado Favorito?", ["Minions", "Smurfs", "Gremlins", "Pokémons"], 0, "Os ajudantes amarelos são os Minions."],
    ["Qual princesa tem cabelo mágico muito comprido?", ["Rapunzel", "Cinderela", "Tiana", "Mulan"], 0, "Rapunzel é conhecida por seus cabelos compridos."]
  ],

  "Tecnologia": [
    ["Qual aparelho usamos para fazer ligações e mandar mensagens?", ["Celular", "Geladeira", "Micro-ondas", "Ventilador"], 0, "O celular permite comunicação e muitas outras funções."],
    ["Qual dispositivo usamos para movimentar o cursor do computador?", ["Mouse", "Colher", "Régua", "Escova"], 0, "O mouse controla o cursor."],
    ["Qual aparelho é usado para tirar fotos?", ["Câmera", "Liquidificador", "Impressora", "Ferro de passar"], 0, "Câmeras registram imagens."],
    ["Para que serve uma senha?", ["Proteger uma conta", "Pintar a tela", "Aumentar o volume", "Carregar a bateria"], 0, "Senhas ajudam a proteger o acesso às contas."],
    ["Qual destes é um navegador de internet?", ["Chrome", "Calculadora", "Bloco de notas", "Câmera"], 0, "Chrome é um navegador de internet."],
    ["Qual peça usamos para digitar no computador?", ["Teclado", "Monitor", "Caixa de som", "Impressora"], 0, "O teclado permite inserir texto e comandos."],
    ["O que permite conectar aparelhos à internet sem fio?", ["Wi-Fi", "Lanterna", "Bússola", "Cronômetro"], 0, "Wi-Fi permite conexões de rede sem fio."],
    ["O que é inteligência artificial?", ["Tecnologia capaz de realizar tarefas que exigem capacidades inteligentes", "Um tipo de bateria", "Um cabo de vídeo", "Um sistema de pintura manual"], 0, "A IA permite que sistemas executem tarefas como reconhecer padrões."],
    ["O que é computação em nuvem?", ["Uso de recursos computacionais pela internet", "Guardar arquivos somente em papel", "Desligar todos os servidores", "Um tipo de teclado"], 0, "A nuvem oferece armazenamento e processamento por meio da internet."],
    ["Qual prática ajuda a evitar golpes digitais?", ["Verificar links e remetentes", "Compartilhar senhas", "Usar a mesma senha em tudo", "Abrir anexos desconhecidos"], 0, "Verificar links e remetentes ajuda a identificar tentativas de golpe."]
  ],

  "Esportes": [
    ["Quantos gols vale um gol comum no futebol?", ["1", "2", "3", "5"], 0, "Um gol comum conta como um gol."],
    ["Em qual esporte usamos uma bola e uma cesta?", ["Basquete", "Natação", "Tênis", "Ginástica"], 0, "O objetivo do basquete inclui acertar a bola na cesta."],
    ["Em qual esporte os atletas nadam em uma piscina?", ["Natação", "Ciclismo", "Judô", "Vôlei"], 0, "A natação é praticada na água."],
    ["Qual esporte usa uma rede e as mãos para passar a bola?", ["Vôlei", "Golfe", "Xadrez", "Surfe"], 0, "No vôlei, os jogadores passam a bola por cima da rede."],
    ["Qual esporte é praticado com bicicleta?", ["Ciclismo", "Boxe", "Natação", "Handebol"], 0, "O ciclismo envolve provas com bicicletas."],
    ["Qual equipamento é usado no tênis para rebater a bola?", ["Raquete", "Colher", "Régua", "Bastão de selfie"], 0, "Os jogadores utilizam raquetes."],
    ["Qual esporte acontece sobre as ondas do mar?", ["Surfe", "Xadrez", "Ginástica", "Corrida de pista"], 0, "O surfe é praticado sobre ondas."],
    ["Qual equipamento ajuda a proteger a cabeça ao andar de bicicleta?", ["Capacete", "Chinelo", "Cachecol", "Pulseira"], 0, "O capacete ajuda a proteger a cabeça."],
    ["Quantos jogadores de cada equipe ficam em campo no futebol tradicional?", ["7", "9", "11", "13"], 2, "Cada equipe começa com onze jogadores."],
    ["Em qual esporte se utiliza um kimono e técnicas de projeção?", ["Judô", "Natação", "Tênis", "Ciclismo"], 0, "O judô utiliza técnicas de projeção e imobilização."]
  ],

  "História": [
    ["Em que data se comemora a Independência do Brasil?", ["7 de setembro", "25 de dezembro", "1º de maio", "12 de outubro"], 0, "A Independência do Brasil é comemorada em 7 de setembro."],
    ["Quem foi o primeiro imperador do Brasil?", ["Dom Pedro I", "Dom Pedro II", "Tiradentes", "Santos Dumont"], 0, "Dom Pedro I foi o primeiro imperador brasileiro."],
    ["Qual povo antigo construiu as pirâmides de Gizé?", ["Egípcios", "Vikings", "Romanos", "Astecas"], 0, "As pirâmides de Gizé foram construídas no Egito antigo."],
    ["Em que ano ocorreu a Independência do Brasil?", ["1822", "1500", "1888", "2000"], 0, "A Independência foi proclamada em 1822."],
    ["Em que ano foi assinada a Lei Áurea?", ["1822", "1888", "1930", "1964"], 1, "A Lei Áurea foi assinada em 1888."],
    ["Qual civilização antiga ficou conhecida pela democracia em Atenas?", ["Grega", "Asteca", "Inca", "Mongol"], 0, "A democracia ateniense surgiu na Grécia antiga."],
    ["Qual foi o principal meio de transporte nas grandes navegações?", ["Navios", "Aviões", "Trens-bala", "Automóveis"], 0, "As viagens oceânicas eram feitas por navios."],
    ["Quem ficou conhecido por desenvolver o avião no Brasil?", ["Santos Dumont", "Pelé", "Monteiro Lobato", "Cândido Portinari"], 0, "Santos Dumont foi um pioneiro da aviação."],
    ["Qual monumento antigo fica em Roma?", ["Coliseu", "Torre Eiffel", "Cristo Redentor", "Big Ben"], 0, "O Coliseu é um monumento romano."],
    ["Qual acontecimento começou em 1914 e terminou em 1918?", ["Primeira Guerra Mundial", "Segunda Guerra Mundial", "Revolução Francesa", "Guerra Fria"], 0, "A Primeira Guerra Mundial ocorreu de 1914 a 1918."]
  ],

  "Geografia": [
    ["Qual é o maior continente em área?", ["Ásia", "Europa", "Oceania", "Antártida"], 0, "A Ásia é o maior continente em área."],
    ["Qual linha imaginária divide a Terra em hemisférios Norte e Sul?", ["Equador", "Meridiano de Greenwich", "Trópico de Câncer", "Círculo Polar Ártico"], 0, "A Linha do Equador separa os hemisférios Norte e Sul."],
    ["Qual é o maior oceano?", ["Pacífico", "Atlântico", "Índico", "Ártico"], 0, "O Pacífico é o maior oceano."],
    ["Qual é a capital da Argentina?", ["Buenos Aires", "Lima", "Santiago", "Montevidéu"], 0, "Buenos Aires é a capital argentina."],
    ["Qual bioma ocupa grande parte do norte do Brasil?", ["Amazônia", "Pampa", "Caatinga", "Pantanal"], 0, "A Amazônia ocupa uma grande área do norte brasileiro."],
    ["O que representa a escala de um mapa?", ["Relação entre distância no mapa e distância real", "Temperatura do local", "Quantidade de habitantes", "Velocidade do vento"], 0, "A escala relaciona medidas do mapa com medidas reais."],
    ["Qual é o maior país do mundo em área territorial?", ["Rússia", "Canadá", "China", "Brasil"], 0, "A Rússia é o maior país em área."],
    ["Qual é a capital de Portugal?", ["Lisboa", "Porto", "Madrid", "Roma"], 0, "Lisboa é a capital portuguesa."],
    ["Qual fenômeno está relacionado ao movimento das placas tectônicas?", ["Terremotos", "Eclipses", "Auroras", "Marés diárias"], 0, "O movimento das placas pode provocar terremotos."],
    ["Qual é o ponto cardeal oposto ao norte?", ["Sul", "Leste", "Oeste", "Nordeste"], 0, "Sul é o oposto de norte."]
  ],

  "Natureza": [
    ["Qual gás as plantas absorvem durante a fotossíntese?", ["Dióxido de carbono", "Hélio", "Hidrogênio", "Neônio"], 0, "As plantas utilizam dióxido de carbono na fotossíntese."],
    ["Qual é a principal fonte de energia da Terra?", ["Sol", "Lua", "Marte", "Vulcões"], 0, "O Sol fornece a maior parte da energia que sustenta a vida na Terra."],
    ["Como se chama a transformação da água líquida em vapor?", ["Evaporação", "Congelamento", "Condensação", "Solidificação"], 0, "A evaporação transforma água líquida em vapor."],
    ["Qual destes materiais costuma ser reciclável?", ["Papel", "Restos de comida misturados com óleo", "Fumaça", "Água suja sem tratamento"], 0, "Papel limpo pode ser encaminhado à reciclagem."],
    ["Qual é uma função importante das árvores?", ["Absorver CO₂ e oferecer habitat", "Produzir plástico", "Eliminar toda a chuva", "Impedir a fotossíntese"], 0, "Árvores armazenam carbono e fornecem abrigo para muitas espécies."],
    ["Qual camada protege a Terra de grande parte da radiação ultravioleta?", ["Camada de ozônio", "Núcleo interno", "Crosta terrestre", "Manto"], 0, "A camada de ozônio absorve boa parte da radiação UV."],
    ["Qual é o estado da água em forma de gelo?", ["Sólido", "Líquido", "Gasoso", "Plasma"], 0, "O gelo é água no estado sólido."],
    ["O que é biodiversidade?", ["Variedade de seres vivos", "Quantidade de prédios", "Velocidade dos rios", "Temperatura média"], 0, "Biodiversidade é a variedade de vida em uma região ou no planeta."],
    ["Qual atitude ajuda a economizar água?", ["Fechar a torneira ao escovar os dentes", "Deixar a torneira aberta", "Lavar calçadas diariamente com mangueira", "Ignorar vazamentos"], 0, "Fechar a torneira evita desperdício de água."],
    ["Como se chama a passagem de vapor de água para líquido?", ["Condensação", "Evaporação", "Fusão", "Sublimação"], 0, "Na condensação, o vapor forma água líquida."]
  ],

  "Jogos": [
    ["Em Minecraft, qual material é necessário para criar ferramentas de madeira?", ["Madeira", "Areia", "Lã", "Gelo"], 0, "A madeira pode ser transformada em tábuas para fabricar ferramentas."],
    ["Qual é o objetivo principal do xadrez?", ["Dar xeque-mate", "Capturar todas as peças", "Chegar à última fileira", "Ficar sem peões"], 0, "O objetivo é colocar o rei adversário em xeque-mate."],
    ["Qual empresa desenvolveu Mario e Zelda?", ["Nintendo", "Microsoft", "Adobe", "Nokia"], 0, "As franquias Mario e Zelda são da Nintendo."],
    ["Em jogos, o que geralmente significa NPC?", ["Personagem não controlado pelo jogador", "Novo pacote de cores", "Nível principal completo", "Controle de rede"], 0, "NPC é um personagem controlado pelo próprio jogo."],
    ["Qual gênero de jogo costuma envolver saltos e obstáculos?", ["Plataforma", "Simulador de planilhas", "Editor de texto", "Calculadora"], 0, "Jogos de plataforma costumam envolver saltos e obstáculos."],
    ["Qual destes é um jogo de construção em blocos?", ["Minecraft", "FIFA", "Tetris", "Pac-Man"], 0, "Minecraft permite construir estruturas usando blocos."],
    ["Em jogos, o que costuma indicar uma barra de vida?", ["Saúde do personagem", "Volume da música", "Velocidade da internet", "Tamanho da tela"], 0, "A barra de vida representa a saúde ou resistência do personagem."],
    ["Qual jogo é conhecido por empilhar peças que caem?", ["Tetris", "The Sims", "Rocket League", "Animal Crossing"], 0, "Em Tetris, o jogador organiza peças que caem."],
    ["O que significa jogar em modo multijogador?", ["Jogar com ou contra outras pessoas", "Jogar sem regras", "Desligar o controle", "Jogar sem tela"], 0, "O modo multijogador permite a participação de várias pessoas."],
    ["Qual prática é importante para jogar online com segurança?", ["Não compartilhar dados pessoais", "Publicar senhas", "Aceitar todos os pedidos", "Baixar arquivos desconhecidos"], 0, "Evitar compartilhar dados pessoais ajuda a proteger a privacidade."]
  ],

  "Corpo humano": [
    ["Qual órgão bombeia o sangue?", ["Coração", "Pulmão", "Estômago", "Rim"], 0, "O coração bombeia o sangue pelo corpo."],
    ["Qual órgão é responsável por grande parte das trocas gasosas?", ["Pulmões", "Fígado", "Bexiga", "Pâncreas"], 0, "Nos pulmões, ocorre a troca de oxigênio e dióxido de carbono."],
    ["Qual sistema realiza a digestão dos alimentos?", ["Sistema digestório", "Sistema nervoso", "Sistema esquelético", "Sistema tegumentar"], 0, "O sistema digestório processa os alimentos e absorve nutrientes."],
    ["Qual órgão controla muitas funções do corpo e processa informações?", ["Cérebro", "Estômago", "Baço", "Bexiga"], 0, "O cérebro coordena muitas funções do organismo."],
    ["Qual é a função principal dos glóbulos vermelhos?", ["Transportar oxigênio", "Produzir bile", "Digestionar gordura", "Formar urina"], 0, "Os glóbulos vermelhos transportam oxigênio usando hemoglobina."],
    ["Onde ocorre a maior parte da absorção dos nutrientes?", ["Intestino delgado", "Esôfago", "Boca", "Traqueia"], 0, "O intestino delgado absorve a maior parte dos nutrientes."],
    ["Qual estrutura protege o cérebro?", ["Crânio", "Fêmur", "Costela", "Pelve"], 0, "O crânio protege o cérebro."],
    ["Qual órgão filtra o sangue e ajuda a produzir urina?", ["Rim", "Coração", "Pulmão", "Estômago"], 0, "Os rins filtram o sangue e participam da formação da urina."],
    ["Qual sistema permite perceber estímulos e coordenar respostas?", ["Sistema nervoso", "Sistema digestório", "Sistema muscular apenas", "Sistema urinário"], 0, "O sistema nervoso recebe informações e coordena respostas."],
    ["Qual nutriente é uma importante fonte de energia para o corpo?", ["Carboidratos", "Vitaminas apenas", "Água", "Sais minerais apenas"], 0, "Carboidratos são uma fonte importante de energia."]
  ],

  "Microsoft Teams": [
    ["Para que serve o Microsoft Teams?", ["Comunicação e colaboração", "Editar somente imagens", "Substituir o sistema operacional", "Limpar o teclado"], 0, "O Teams reúne conversas, reuniões e colaboração."],
    ["Qual recurso permite conversar por vídeo no Teams?", ["Reunião", "Lixeira", "Calculadora", "Papel de parede"], 0, "As reuniões permitem chamadas de áudio e vídeo."],
    ["Onde normalmente aparecem mensagens enviadas em um canal?", ["Na conversa do canal", "Na área de trabalho do Windows", "No BIOS", "No gerenciador de impressão"], 0, "As mensagens do canal aparecem na conversa correspondente."],
    ["Qual cuidado é importante ao compartilhar um arquivo?", ["Conferir as permissões de acesso", "Compartilhar com qualquer pessoa sem verificar", "Enviar senhas no arquivo", "Ignorar a privacidade"], 0, "É importante verificar quem pode abrir ou editar o arquivo."],
    ["O que pode ser usado para organizar uma reunião?", ["Calendário", "Calculadora", "Paint", "Bloco de notas apenas"], 0, "O calendário ajuda a agendar reuniões."],
    ["O que significa silenciar o microfone?", ["Desativar temporariamente a transmissão de áudio", "Desligar a internet", "Apagar a reunião", "Sair da conta"], 0, "O microfone deixa de transmitir o áudio do participante."],
    ["Para que servem as equipes no Teams?", ["Agrupar pessoas e canais por assunto", "Aumentar a memória RAM", "Formatar o computador", "Editar o sistema operacional"], 0, "Equipes ajudam a organizar a colaboração por grupos."],
    ["Qual atitude demonstra respeito em uma reunião online?", ["Esperar sua vez de falar", "Interromper todos", "Compartilhar a tela sem necessidade", "Deixar o microfone aberto com ruídos"], 0, "Respeitar os turnos de fala melhora a reunião."],
    ["O que é possível compartilhar durante uma reunião?", ["Tela ou janela", "Somente senhas", "Somente o teclado físico", "A bateria do computador"], 0, "O compartilhamento permite mostrar uma tela ou janela."],
    ["Qual prática protege uma conta do Teams?", ["Usar senha forte e autenticação multifator quando disponível", "Compartilhar a senha", "Usar senhas óbvias", "Deixar a conta aberta em computadores públicos"], 0, "Senhas fortes e autenticação adicional aumentam a segurança."]
  ]
};

const imagens = {
  "Conhecimentos gerais": "https://images.unsplash.com/photo-1453738773917-9c3eff1db985?auto=format&fit=crop&w=1000&q=80",
  "Animais": "https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&w=1000&q=80",
  "Anime": "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=1000&q=80",
  "Lugares do mundo": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=1000&q=80",
  "Filmes e séries": "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1000&q=80",
  "Tecnologia": "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1000&q=80",
  "Esportes": "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=1000&q=80",
  "História": "https://images.unsplash.com/photo-1461360370896-922624d12aa1?auto=format&fit=crop&w=1000&q=80",
  "Geografia": "https://images.unsplash.com/photo-1524666041070-9fc2b2f4e9e4?auto=format&fit=crop&w=1000&q=80",
  "Natureza": "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1000&q=80",
  "Jogos": "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1000&q=80",
  "Corpo humano": "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1000&q=80",
  "Microsoft Teams": "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1000&q=80"
};

const nomesDificuldade = {
  facil: "Fácil",
  medio: "Médio",
  dificil: "Difícil"
};

const ajudaDificuldade = {
  facil: "Perguntas básicas para começar e ganhar confiança.",
  medio: "Perguntas que exigem mais atenção e conhecimento.",
  dificil: "Desafios para testar seus conhecimentos."
};

function mostrarTela(id) {
  telas.forEach((tela) => {
    const elemento = $(tela);
    if (elemento) elemento.classList.toggle("hidden", tela !== id);
  });
}

function embaralhar(lista) {
  const copia = [...lista];

  for (let i = copia.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copia[i], copia[j]] = [copia[j], copia[i]];
  }

  return copia;
}

function prepararBanco() {
  const perguntasBase = banco[temaAtual] || banco["Conhecimentos gerais"];

  /*
    A dificuldade altera o nível de pontuação e o tempo.
    Este banco inicial contém 10 perguntas por tema; ele pode ser
    ampliado adicionando mais perguntas ao objeto "banco".
  */

  perguntasJogo = embaralhar(perguntasBase).slice(0, TOTAL_PERGUNTAS);

  if (perguntasJogo.length < TOTAL_PERGUNTAS) {
    perguntasJogo = embaralhar(perguntasBase);
  }
}

function atualizarImagem() {
  const imagem = imagens[temaAtual] || imagens["Conhecimentos gerais"];

  const img = $("questionImage");
  if (img) {
    img.src = imagem;
    img.alt = "Imagem relacionada ao tema " + temaAtual;
    img.onerror = () => {
      img.style.display = "none";
    };
    img.onload = () => {
      img.style.display = "";
    };
  }

  if ($("imageCaption")) {
    $("imageCaption").textContent = "Tema: " + temaAtual;
  }
}

function iniciarJogo() {
  temaAtual = $("theme")?.value || "Conhecimentos gerais";
  dificuldadeAtual = $("difficulty")?.value || "facil";
  nomeJogador = ($("player")?.value || "").trim() || "Jogador";

  if (!banco[temaAtual]) {
    alert("Este tema ainda não possui perguntas cadastradas.");
    return;
  }

  prepararBanco();

  indice = 0;
  pontos = 0;
  acertos = 0;

  if ($("score")) $("score").textContent = pontos;
  if ($("themeBadge")) $("themeBadge").textContent = temaAtual;

  mostrarTela("quiz");
  mostrarPergunta();
}

function mostrarPergunta() {
  clearInterval(intervalo);
  respondeu = false;
  tempoRestante = TEMPO_POR_PERGUNTA;

  const atual = perguntasJogo[indice];

  if (!atual) {
    finalizarJogo();
    return;
  }

  if ($("counter")) {
    $("counter").textContent = `Pergunta ${indice + 1} de ${perguntasJogo.length}`;
  }

  if ($("question")) $("question").textContent = atual[0];
  if ($("score")) $("score").textContent = pontos;
  if ($("timer")) $("timer").textContent = tempoRestante;

  if ($("progress")) {
    $("progress").style.width =
      `${(indice / perguntasJogo.length) * 100}%`;
  }

  if ($("feedback")) {
    $("feedback").textContent = "";
    $("feedback").className = "feedback";
  }

  if ($("nextBtn")) $("nextBtn").disabled = true;

  atualizarImagem();

  const area = $("answers");
  if (!area) return;

  area.innerHTML = "";

  atual[1].forEach((alternativa, i) => {
    const botao = document.createElement("button");
    botao.type = "button";
    botao.className = "answer";
    botao.textContent = alternativa;

    botao.addEventListener("click", () => escolherResposta(i, botao));
    area.appendChild(botao);
  });

  iniciarCronometro();
}

function iniciarCronometro() {
  clearInterval(intervalo);
  tempoRestante = TEMPO_POR_PERGUNTA;

  if ($("timer")) $("timer").textContent = tempoRestante;

  intervalo = setInterval(() => {
    tempoRestante--;

    if ($("timer")) $("timer").textContent = tempoRestante;

    if (tempoRestante <= 0) {
      clearInterval(intervalo);
      tempoEsgotado();
    }
  }, 1000);
}

function escolherResposta(indiceResposta, botaoSelecionado) {
  if (respondeu) return;

  respondeu = true;
  clearInterval(intervalo);

  const atual = perguntasJogo[indice];
  const correta = atual[2];
  const botoes = $("answers")?.querySelectorAll("button") || [];

  botoes.forEach((botao) => {
    botao.disabled = true;
  });

  if (indiceResposta === correta) {
    acertos++;

    const bonusTempo = Math.max(0, tempoRestante) * 10;
    const multiplicador =
      dificuldadeAtual === "dificil" ? 2 :
      dificuldadeAtual === "medio" ? 1.5 : 1;

    pontos += Math.round((100 + bonusTempo) * multiplicador);

    botaoSelecionado.classList.add("correct");

    if ($("feedback")) {
      $("feedback").textContent = "Correto! " + atual[3];
      $("feedback").className = "feedback correct";
    }
  } else {
    botaoSelecionado.classList.add("incorrect");

    if (botoes[correta]) {
      botoes[correta].classList.add("correct");
    }

    if ($("feedback")) {
      $("feedback").textContent =
        "Não foi dessa vez. " + atual[3];
      $("feedback").className = "feedback incorrect";
    }
  }

  if ($("score")) $("score").textContent = pontos;
  if ($("nextBtn")) $("nextBtn").disabled = false;

  if ($("nextBtn")) {
    $("nextBtn").textContent =
      indice === perguntasJogo.length - 1 ? "Ver resultado" : "Próxima pergunta";
  }
}

function tempoEsgotado() {
  if (respondeu) return;

  respondeu = true;

  const atual = perguntasJogo[indice];
  const botoes = $("answers")?.querySelectorAll("button") || [];

  botoes.forEach((botao) => {
    botao.disabled = true;
  });

  if (botoes[atual[2]]) {
    botoes[atual[2]].classList.add("correct");
  }

  if ($("feedback")) {
    $("feedback").textContent =
      "O tempo acabou! " + atual[3];
    $("feedback").className = "feedback incorrect";
  }

  if ($("nextBtn")) {
    $("nextBtn").disabled = false;
    $("nextBtn").textContent =
      indice === perguntasJogo.length - 1 ? "Ver resultado" : "Próxima pergunta";
  }
}

function proximaPergunta() {
  if (!respondeu) return;

  indice++;

  if (indice >= perguntasJogo.length) {
    finalizarJogo();
  } else {
    mostrarPergunta();
  }
}

function finalizarJogo() {
  clearInterval(intervalo);

  mostrarTela("result");

  const porcentagem = Math.round((acertos / perguntasJogo.length) * 100);

  if ($("resultTitle")) {
    $("resultTitle").textContent =
      porcentagem >= 80 ? "Mandou muito bem!" :
      porcentagem >= 50 ? "Bom trabalho!" :
      "Continue praticando!";
  }

  if ($("finalScore")) $("finalScore").textContent = pontos;
  if ($("correct")) $("correct").textContent = `${acertos}/${perguntasJogo.length}`;
  if ($("accuracy")) $("accuracy").textContent = `${porcentagem}%`;
  if ($("resultTheme")) {
    $("resultTheme").textContent =
      `${temaAtual} • ${nomesDificuldade[dificuldadeAtual] || "Fácil"}`;
  }

  salvarRanking({
    nome: nomeJogador,
    tema: temaAtual,
    dificuldade: dificuldadeAtual,
    pontos,
    acertos,
    porcentagem,
    data: new Date().toLocaleDateString("pt-BR")
  });
}

function salvarRanking(resultado) {
  let ranking = [];

  try {
    ranking = JSON.parse(localStorage.getItem("nextechRanking") || "[]");
  } catch {
    ranking = [];
  }

  ranking.push(resultado);
  ranking.sort((a, b) => b.pontos - a.pontos);
  ranking = ranking.slice(0, 10);

  localStorage.setItem("nextechRanking", JSON.stringify(ranking));
  renderizarRanking();
}

function renderizarRanking() {
  const area = $("ranking");
  if (!area) return;

  let ranking = [];

  try {
    ranking = JSON.parse(localStorage.getItem("nextechRanking") || "[]");
  } catch {
    ranking = [];
  }

  if (ranking.length === 0) {
    area.innerHTML = "<p>Ainda não há resultados. Seja o primeiro a jogar!</p>";
    return;
  }

  area.innerHTML = "";

  ranking.forEach((item, i) => {
    const linha = document.createElement("div");
    linha.className = "ranking-item";

    const posicao = document.createElement("strong");
    posicao.textContent = `${i + 1}. ${item.nome}`;

    const detalhes = document.createElement("span");
    detalhes.textContent =
      `${item.tema} • ${item.pontos} pontos • ${item.porcentagem}%`;

    linha.append(posicao, detalhes);
    area.appendChild(linha);
  });
}

function voltarInicio() {
  clearInterval(intervalo);
  mostrarTela("home");
  renderizarRanking();
}

function atualizarAjudaDificuldade() {
  const dificuldade = $("difficulty")?.value || "facil";

  if ($("difficultyHelp")) {
    $("difficultyHelp").textContent =
      ajudaDificuldade[dificuldade] || ajudaDificuldade.facil;
  }
}

function atualizarPreviaTema() {
  const tema = $("theme")?.value || "Conhecimentos gerais";
  const imagem = imagens[tema] || imagens["Conhecimentos gerais"];

  if ($("previewImage")) {
    $("previewImage").src = imagem;
    $("previewImage").alt = "Prévia do tema " + tema;
  }

  if ($("previewTitle")) $("previewTitle").textContent = tema;

  if ($("previewDescription")) {
    $("previewDescription").textContent =
      `Teste seus conhecimentos sobre ${tema.toLowerCase()}.`;
  }
}

function configurarModoVisual() {
  const botao = $("themeBtn");
  if (!botao) return;

  botao.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");

    const claro = document.body.classList.contains("light-mode");
    botao.textContent = claro ? "🌙 Modo escuro" : "☀️ Modo claro";
  });
}

function configurarSom() {
  const botao = $("soundBtn");
  if (!botao) return;

  let somAtivo = true;

  botao.addEventListener("click", () => {
    somAtivo = !somAtivo;
    botao.textContent = somAtivo ? "♫ Som ligado" : "♫ Som desligado";
  });
}

function configurarTermos() {
  const botao = $("termsToggle");
  const painel = $("termsPanel");

  if (!botao || !painel) return;

  botao.addEventListener("click", () => {
    const aberto = !painel.classList.contains("hidden");

    painel.classList.toggle("hidden", aberto);
    botao.setAttribute("aria-expanded", String(!aberto));
    botao.textContent = aberto
      ? "＋ Ler termo de participação e autorização"
      : "− Ocultar termo de participação e autorização";
  });
}

function configurarEventos() {
  $("startBtn")?.addEventListener("click", iniciarJogo);
  $("nextBtn")?.addEventListener("click", proximaPergunta);
  $("quitBtn")?.addEventListener("click", voltarInicio);
  $("againBtn")?.addEventListener("click", iniciarJogo);
  $("homeBtn")?.addEventListener("click", voltarInicio);

  $("theme")?.addEventListener("change", atualizarPreviaTema);
  $("difficulty")?.addEventListener("change", atualizarAjudaDificuldade);

  $("clearRank")?.addEventListener("click", () => {
    const confirmar = confirm("Tem certeza de que deseja apagar o ranking?");

    if (confirmar) {
      localStorage.removeItem("nextechRanking");
      renderizarRanking();
    }
  });

  configurarModoVisual();
  configurarSom();
  configurarTermos();
}

document.addEventListener("DOMContentLoaded", () => {
  configurarEventos();
  atualizarPreviaTema();
  atualizarAjudaDificuldade();
  renderizarRanking();
});
