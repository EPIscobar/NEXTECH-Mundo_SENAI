'use strict';

const $ = id => document.getElementById(id);

const themes = {
  'Conhecimentos gerais': [
    ['Quantos dias tem uma semana?', ['5','7','10','12'],1],
    ['Qual é a cor formada ao misturar azul e amarelo?', ['Verde','Rosa','Preto','Laranja'],0],
    ['Quantas patas tem uma aranha?', ['6','8','10','4'],1],
    ['Qual destes usamos para escrever no papel?', ['Colher','Lápis','Sapato','Prato'],1],
    ['Qual animal é conhecido como o melhor amigo do homem?', ['Gato','Cavalo','Cachorro','Coelho'],2],
    ['Quantos meses tem um ano?', ['10','11','12','13'],2],
    ['O que usamos para ver as horas?', ['Relógio','Garfo','Pente','Bola'],0],
    ['Qual destes é uma fruta?', ['Cenoura','Maçã','Alface','Batata'],1],
    ['Qual é o contrário de quente?', ['Alto','Frio','Rápido','Claro'],1],
    ['Em qual planeta nós vivemos?', ['Marte','Terra','Júpiter','Vênus'],1]
  ],
  'Animais': [
    ['Qual animal faz “miau”?', ['Cachorro','Gato','Sapo','Pato'],1],
    ['Qual animal tem uma tromba comprida?', ['Elefante','Leão','Macaco','Zebra'],0],
    ['Qual destes animais vive na água?', ['Golfinho','Galinha','Cavalo','Gato'],0],
    ['Qual animal dá leite e faz “mu”?', ['Vaca','Pato','Sapo','Abelha'],0],
    ['Qual animal é conhecido por ser muito lento e carregar um casco?', ['Tigre','Tartaruga','Coelho','Cavalo'],1],
    ['Qual destes animais pode voar?', ['Peixe','Leão','Papagaio','Cobra'],2],
    ['Qual animal tem listras pretas e brancas?', ['Zebra','Girafa','Urso','Ovelha'],0],
    ['Qual animal pula e tem uma bolsa para o filhote?', ['Canguru','Pinguim','Lobo','Porco'],0],
    ['Qual inseto produz mel?', ['Formiga','Abelha','Mosca','Joaninha'],1],
    ['Qual animal é chamado de rei da selva?', ['Leão','Rato','Panda','Raposa'],0]
  ],
  'Anime': [
    ['Em Pokémon, qual é o nome do famoso Pokémon amarelo?', ['Charmander','Pikachu','Squirtle','Bulbasaur'],1],
    ['Qual destes personagens é conhecido por usar uma roupa laranja e lutar muito?', ['Goku','Doraemon','Totoro','Sailor Moon'],0],
    ['Naruto é conhecido por querer se tornar o quê?', ['Rei dos Piratas','Hokage','Professor','Chef'],1],
    ['Em Pokémon, qual destes é um Pokémon de água?', ['Squirtle','Pikachu','Vulpix','Pidgey'],0],
    ['Qual personagem de anime é um gato robótico azul?', ['Doraemon','Naruto','Luffy','Tanjiro'],0],
    ['Em One Piece, quem sonha em ser o Rei dos Piratas?', ['Luffy','Zoro','Sanji','Chopper'],0],
    ['Qual destes animes tem Pokémon?', ['Eve','Peppa Pig','Indigo','Frozen'],0],
    ['Qual é o nome do irmão de Tanjiro em Demon Slayer?', ['Nezuko','Sakura','Buma','Nami'],0],
    ['Qual destes personagens costuma usar uma esfera de quatro estrelas em Dragon Ball?', ['Goku','Luffy','Zeno','Doraemon'],0],
    ['Em Sailor Moon, a heroína se transforma para lutar contra o mal. Ela é uma:', ['Guerreira mágica','Astronauta','Striper','Chef'],0]
  ],
  'Lugares do mundo': [
    ['Em qual país fica a Torre Eiffel?', ['Itália','França','Brasil','Japão'],1],
    ['Qual é a cidade famosa pelo Morro do Alemão?', ['Rio de Janeiro','Lisboa','Tóquio','Londres'],0],
    ['Em qual país ficam as pirâmides de Gizé?', ['Egito','Canadá','Chile','Portugal'],0],
    ['Qual país tem o formato parecido com uma bota?', ['Itália','México','Japão','Índia'],0],
    ['Em qual cidade fica o Big Ben?', ['Londres','Paris','Roma','Madri'],0],
    ['Qual é o maior oceano do planeta?', ['Pacífico','Atlântico','Índico','Ártico'],0],
    ['Em qual país fica a cidade de Tóquio?', ['Japão','China','Coreia do Sul','Austrália'],0],
    ['Qual destes lugares é muito frio e tem muitos pinguins?', ['Antártida','Deserto do Saara','Amazônia','Caribe'],0],
    ['Qual é a capital do Brasil?', ['Brasília','São Paulo','Salvador','Manaus'],0],
    ['Em qual país podemos visitar a Estátua da Liberdade?', ['Estados Unidos','Argentina','Espanha','Índia'],0]
  ],
  'Filmes e séries': [
    ['Em Frozen, qual personagem tem poderes de gelo?', ['Elsa','Moana','Minnie','Dory'],0],
    ['Qual é o nome do cowboy de Toy Story?', ['Woody','Buzz','Nemo','Shrek'],0],
    ['Qual super-herói é conhecido como Homem-Aranha?', ['Peter Parker','Bruce Wayne','Clark Kent','Tony Stark'],0],
    ['Em Procurando Nemo, que tipo de animal é Nemo?', ['Peixe-palhaço','Tubarão','Tartaruga','Polvo'],0],
    ['Qual personagem verde vive em um pântano?', ['Shrek','Woody','Olaf','Simba'],0],
    ['Em O Rei Leão, qual é o nome do leão principal?', ['Simba','Dumbo','Bambi','Po'],0],
    ['Qual herói usa um escudo com uma estrela?', ['Capitão América','Homem de Ferro','Hulk','Thor'],0],
    ['Qual personagem de desenho adora lasanha?', ['Garfield','Mickey','Pato Donald','Pernalonga'],0],
    ['Em Meu Malvado Favorito, como são chamados os ajudantes amarelos?', ['Minions','Smurfs','Pokémons','Gremlins'],0],
    ['Qual princesa da Disney tem cabelo muito comprido e mágico?', ['Rapunzel','Cinderela','Tiana','Mulan'],0]
  ],
  'Tecnologia': [
    ['Qual aparelho usamos para fazer ligações e mandar mensagens?', ['Celular','Geladeira','Micro-ondas','Ventilador'],0],
    ['Qual destes usamos para clicar na tela do computador?', ['Mouse','Colher','Régua','Escova'],0],
    ['Qual aparelho usamos para tirar fotos?', ['Câmera','Liquidificador','Impressora','Ferro de passar'],0],
    ['O que usamos para ouvir música sem incomodar todo mundo?', ['Fones de ouvido','Teclado','Mousepad','Carregador'],0],
    ['Qual destes é um videogame?', ['Nintendo Switch','Caderno','Relógio de parede','Liquidificador'],0],
    ['Para que serve uma senha?', ['Proteger uma conta','Pintar a tela','Aumentar o volume','Carregar a bateria'],0],
    ['Qual destes é um navegador de internet?', ['Chrome','Calculadora','Bloco de notas','Câmera'],0],
    ['Qual peça usamos para digitar no computador?', ['Teclado','Monitor','Caixa de som','Impressora'],0],
    ['O que conecta muitos aparelhos à internet sem fio?', ['Wi-Fi','Lanterna','Bússola','Cronômetro'],0],
    ['O que devemos fazer antes de clicar em um link estranho?', ['Pedir ajuda a um adulto','Clicar rapidamente','Enviar a senha','Ignorar todos os avisos'],0]
  ],
  'Esportes': [
    ['Quantos gols valem um gol comum no futebol?', ['1','2','3','5'],0],
    ['Em qual esporte usamos uma bola e uma cesta?', ['Basquete','Natação','Tênis','Ginástica'],0],
    ['Em qual esporte nadamos numa piscina?', ['Natação','Ciclismo','Judô','Vôlei'],0],
    ['Qual esporte é jogado com uma bola por cima de uma rede usando as mãos?', ['Vôlei','Golfe','Xadrez','Surfe'],0],
    ['Qual destes é um esporte praticado com bicicleta?', ['Ciclismo','Boxe','Natação','Handebol'],0],
    ['Em qual esporte os jogadores tentam fazer gols com os pés?', ['Futebol','Basquete','Tênis','Beisebol'],0],
    ['Qual destes é um esporte olímpico?', ['Ginástica','Esconde-esconde','Amarelinha','Pega-pega'],0],
    ['O que um jogador de tênis usa para bater na bola?', ['Raquete','Bastão de selfie','Colher','Régua'],0],
    ['Qual esporte acontece sobre ondas do mar?', ['Surfe','Patinação no gelo','Xadrez','Corrida de pista'],0],
    ['Qual equipamento protege a cabeça ao andar de bicicleta?', ['Capacete','Chinelo','Boné de papel','Cachecol'],0]
  ],
  'História': [
    ['Em que país vivemos?', ['Brasil','Japão','Canadá','Egito'],0],
    ['Qual data comemoramos como Independência do Brasil?', ['7 de setembro','25 de dezembro','1º de maio','12 de outubro'],0],
    ['Quem foi o primeiro imperador do Brasil?', ['Dom Pedro I','Dom Pedro II','Tiradentes','Santos Dumont'],0],
    ['Qual povo antigo construiu as pirâmides do Egito?', ['Egípcios','Vikings','Romanos','Astecas'],0],
    ['Como se chamavam os grandes navios usados em muitas viagens antigas?', ['Caravelas','Submarinos nucleares','Aviões','Trens-bala'],0],
    ['Qual invenção permite falar com pessoas que estão longe?', ['Telefone','Bicicleta','Tesoura','Panela'],0],
    ['Quem ficou conhecido por ajudar a desenvolver o avião no Brasil?', ['Santos Dumont','Pelé','Monteiro Lobato','Cândido Portinari'],0],
    ['Qual destes é um monumento muito antigo de Roma?', ['Coliseu','Torre Eiffel','Cristo Redentor','Big Ben'],0],
    ['Qual era um meio de transporte comum antes dos carros?', ['Cavalo e carroça','Avião a jato','Patinete elétrico','Metrô automático'],0],
    ['Em qual ano o Brasil declarou sua independência?', ['1822','1500','1888','2000'],0]
  ],
  'Geografia': [
    ['Qual é o nome do planeta em que vivemos?', ['Terra','Marte','Saturno','Netuno'],0],
    ['Qual é a capital do Brasil?', ['Brasília','Curitiba','Rio de Janeiro','Recife'],0],
    ['Em qual continente fica o Brasil?', ['América do Sul','Europa','África','Ásia'],0],
    ['Qual destes é um rio muito conhecido do Brasil?', ['Rio Amazonas','Rio Nilo Azul do Sul','Rio de Paris','Rio de Tóquio'],0],
    ['Onde o Sol aparece pela manhã?', ['No leste','No oeste','No fundo do mar','No norte sempre'],0],
    ['Qual destes é um tipo de paisagem natural?', ['Floresta','Shopping','Estádio','Estacionamento'],0],
    ['Qual é o maior oceano da Terra?', ['Pacífico','Atlântico','Índico','Ártico'],0],
    ['Qual destes países fica na América do Sul?', ['Argentina','Japão','França','Egito'],0],
    ['O que usamos para encontrar direções num mapa?', ['Rosa dos ventos','Termômetro','Calculadora','Ampulheta'],0],
    ['Qual destes lugares costuma ter muita areia e pouca chuva?', ['Deserto','Floresta tropical','Lago','Pântano'],0]
  ],
  'Natureza': [
    ['O que as plantas precisam para crescer?', ['Água e luz','Refrigerante','Plástico','Brinquedos'],0],
    ['Qual estação costuma ser a mais quente?', ['Verão','Inverno','Outono','Primavera sempre'],0],
    ['O que cai das nuvens quando chove?', ['Água','Areia','Folhas de papel','Pedras preciosas'],0],
    ['Qual destes é uma fonte de luz natural?', ['Sol','Lanterna desligada','Livro','Sapato'],0],
    ['Qual parte da planta geralmente fica debaixo da terra?', ['Raiz','Flor','Fruto','Folha'],0],
    ['O que devemos fazer com o lixo reciclável?', ['Separar para reciclagem','Jogar no rio','Queimar','Misturar com restos de comida'],0],
    ['Qual destes animais ajuda na polinização?', ['Abelha','Tubarão','Gato','Cavalo'],0],
    ['O que é necessário para o ciclo da água?', ['Evaporação e condensação','Somente vento','Somente areia','Apenas fogo'],0],
    ['Qual gás as plantas absorvem durante a fotossíntese?', ['Gás carbônico','Oxigênio','Hélio','Hidrogênio'],0],
    ['Qual ambiente é conhecido por ter muitas árvores?', ['Floresta','Deserto','Geleira','Oceano aberto'],0]
  ],
  'Jogos': [
    ['Em Minecraft, qual ferramenta é usada para minerar pedra?', ['Picareta','Enxada','Tesoura','Vara de pesca'],0],
    ['Qual empresa criou o jogo Mario?', ['Nintendo','Sony','Microsoft','Sega'],0],
    ['Em jogos, o que significa ganhar uma fase?', ['Concluir um desafio','Perder pontos','Desligar o jogo','Apagar o personagem'],0],
    ['Qual destes jogos é conhecido por construir blocos?', ['Minecraft','FIFA','Tetris','The Sims'],0],
    ['No xadrez, qual peça se movimenta em formato de L?', ['Cavalo','Torre','Bispo','Peão'],0],
    ['Qual jogo é conhecido por montar peças que caem?', ['Tetris','Minecraft','Fortnite','Pokémon'],0],
    ['Em Mario Kart, o que os personagens dirigem?', ['Karts','Aviões','Navios','Trens'],0],
    ['Qual destes é um jogo de futebol?', ['EA Sports FC','Minecraft','The Sims','Animal Crossing'],0],
    ['Qual personagem costuma ser o protagonista de Sonic?', ['Sonic','Mario','Kirby','Link'],0],
    ['Qual acessório é usado para controlar muitos videogames?', ['Controle','Microfone de mesa','Impressora','Régua'],0]
  ],
  'Corpo humano': [
    ['Qual órgão usamos para pensar?', ['Cérebro','Estômago','Pulmão','Rim'],0],
    ['Qual parte do corpo usamos para ouvir?', ['Orelhas','Olhos','Dedos','Pés'],0],
    ['Quantas mãos uma pessoa normalmente tem?', ['2','1','3','4'],0],
    ['Qual órgão bombeia o sangue pelo corpo?', ['Coração','Estômago','Cérebro','Pulmão'],0],
    ['Com qual parte do corpo sentimos cheiros?', ['Nariz','Joelho','Cotovelos','Calcanhar'],0],
    ['O que usamos para mastigar a comida?', ['Dentes','Cabelos','Unhas','Orelhas'],0],
    ['Qual destes ajuda a respirar?', ['Pulmões','Unhas','Dentes','Cabelos'],0],
    ['Qual parte do corpo usamos para caminhar?', ['Pernas','Orelhas','Língua','Ombros apenas'],0],
    ['Qual hábito ajuda a manter os dentes limpos?', ['Escovar os dentes','Nunca beber água','Comer só doces','Não dormir'],0],
    ['Qual órgão filtra o sangue e produz urina?', ['Rins','Pulmões','Estômago','Coração'],0]
  ]
};

const extraQuestions = {
  'Conhecimentos gerais': [
    ['Qual é o resultado de 144 dividido por 12?', ['10','11','12','14'],2],
    ['Qual instrumento indica os pontos cardeais?', ['Bússola','Barômetro','Termômetro','Cronômetro'],0],
    ['Qual é o plural de “cidadão”?', ['Cidadões','Cidadãos','Cidadães','Cidadãoses'],1],
    ['Quantos lados tem um hexágono?', ['5','6','7','8'],1],
    ['Qual destes é um estado físico da matéria?', ['Energia','Sólido','Velocidade','Distância'],1],
    ['Uma receita pede o dobro de 3 ovos. Quantos ovos serão usados?', ['3','5','6','9'],2]
  ],
  'Animais': [
    ['Qual destes animais é um réptil?', ['Salamandra','Tartaruga','Golfinho','Morcego'],1],
    ['Como se chama o grupo de lobos?', ['Alcateia','Cardume','Enxame','Manada de peixes'],0],
    ['Qual animal é conhecido por mudar de cor para se camuflar?', ['Camaleão','Coala','Pinguim','Lontra'],0],
    ['Qual destes animais é polinizador?', ['Abelha','Tubarão','Cobra','Coruja'],0],
    ['Qual é o maior animal conhecido atualmente?', ['Elefante-africano','Baleia-azul','Tubarão-branco','Girafa'],1],
    ['Como os peixes geralmente respiram na água?', ['Pelos pulmões','Pelas brânquias','Pela pele seca','Pelas nadadeiras'],1]
  ],
  'Anime': [
    ['Em Naruto, qual é o nome da raposa selada dentro de Naruto?', ['Shukaku','Kurama','Gyūki','Matatabi'],1],
    ['Em Pokémon, qual tipo é forte contra Pokémon de água?', ['Elétrico','Pedra','Terra','Veneno'],0],
    ['Em One Piece, qual é o poder associado à fruta de borracha de Luffy na história clássica?', ['Esticar o corpo','Controlar gelo','Ficar invisível','Virar pedra'],0],
    ['Em Haikyuu!!, qual esporte é o foco da história?', ['Basquete','Vôlei','Futebol','Beisebol'],1],
    ['Qual é o nome do protagonista de My Hero Academia?', ['Izuku Midoriya','Eren Yeager','Light Yagami','Sōsuke Aizen'],0],
    ['Em Demon Slayer, qual é a profissão dos personagens que combatem demônios?', ['Caçadores de demônios','Alquimistas','Piratas','Detetives espaciais'],0]
  ],
  'Lugares do mundo': [
    ['Qual rio atravessa a cidade de Londres?', ['Tâmisa','Sena','Danúbio','Tejo'],0],
    ['Qual país tem a cidade de Barcelona?', ['Espanha','Itália','Grécia','Croácia'],0],
    ['Em qual continente fica a Nova Zelândia?', ['Europa','Oceania','África','América do Sul'],1],
    ['Qual deserto é um dos maiores desertos quentes do mundo?', ['Saara','Atacama','Gobi','Antártico'],0],
    ['Qual cidade é conhecida como a “Cidade Eterna”?', ['Roma','Berlim','Lisboa','Viena'],0],
    ['Qual país é famoso pelos canais de Amsterdã?', ['Países Baixos','Suíça','Áustria','Polônia'],0]
  ],
  'Filmes e séries': [
    ['Em Harry Potter, qual esporte é jogado em vassouras voadoras?', ['Quadribol','Handebol mágico','Bruxobol','Vassourada'],0],
    ['Qual é o nome do reino de Elsa e Anna em Frozen?', ['Arendelle','Nárnia','Gotham','Atlântida'],0],
    ['Em Stranger Things, qual é o nome da garota conhecida como Eleven?', ['Jane','Maxine','Robin','Nancy'],0],
    ['Qual herói da Marvel é conhecido como Pantera Negra?', ['T’Challa','Peter Quill','Scott Lang','Clint Barton'],0],
    ['Em Jurassic Park, quais animais são recriados por meio da ciência?', ['Dinossauros','Mamutes lanosos vivos na natureza','Dragões','Dodos robóticos'],0],
    ['Qual filme acompanha uma família de super-heróis chamada Os Incríveis?', ['Os Incríveis','Carros','Ratatouille','Up'],0]
  ],
  'Tecnologia': [
    ['O que é autenticação em dois fatores?', ['Uma camada extra de verificação de identidade','Usar a mesma senha duas vezes','Compartilhar a senha com duas pessoas','Desligar o antivírus'],0],
    ['Qual extensão costuma identificar um arquivo PDF?', ['.docx','.pdf','.mp3','.png'],1],
    ['Para que serve um backup?', ['Criar uma cópia de segurança dos dados','Aumentar o brilho da tela','Apagar arquivos duplicados automaticamente','Melhorar o sinal de Wi-Fi sempre'],0],
    ['O que significa dizer que um programa é de código aberto?', ['Seu código-fonte pode ser consultado conforme a licença','Ele só funciona sem internet','É obrigatoriamente gratuito para sempre','Não pode ser modificado'],0],
    ['Qual componente executa instruções e cálculos principais do computador?', ['CPU','Gabinete','Mouse','Monitor'],0],
    ['O que é phishing?', ['Tentativa de enganar alguém para obter dados','Uma técnica de compactação de vídeo','Um tipo de cabo de rede','Um método de limpar a tela'],0]
  ],
  'Esportes': [
    ['No tênis, como se chama uma pontuação de zero?', ['Love','Par','Ace','Set'],0],
    ['Qual país é associado à origem histórica do judô moderno?', ['Japão','Brasil','Canadá','Suécia'],0],
    ['Em uma corrida de revezamento, o que os atletas passam entre si?', ['Bastão','Raquete','Disco','Capacete'],0],
    ['Qual modalidade combina natação, ciclismo e corrida?', ['Triatlo','Pentatlo moderno','Decatlo','Biatlo de inverno'],0],
    ['Qual cartão é mostrado para expulsar um jogador no futebol?', ['Vermelho','Azul','Branco','Roxo'],0],
    ['No vôlei, qual fundamento inicia a disputa de cada ponto?', ['Saque','Bloqueio','Levantamento','Manchete'],0]
  ],
  'História': [
    ['Qual acontecimento é tradicionalmente usado para marcar o início da Idade Média na Europa Ocidental?', ['Queda do Império Romano do Ocidente','Revolução Francesa','Chegada à Lua','Independência do Brasil'],0],
    ['Qual povo antigo desenvolveu a democracia em Atenas?', ['Gregos','Persas','Fenícios','Mongóis'],0],
    ['A Revolução Industrial começou primeiro em qual país?', ['Inglaterra','Brasil','Japão','México'],0],
    ['Qual movimento brasileiro lutou contra a escravidão e pela liberdade de pessoas escravizadas?', ['Movimento abolicionista','Cruzadas','Mercantilismo','Absolutismo'],0],
    ['Qual civilização utilizava escrita hieroglífica em monumentos e papiros?', ['Egípcia','Inca','Viking','Mongol'],0],
    ['Qual foi um dos objetivos das Grandes Navegações europeias?', ['Buscar rotas comerciais e ampliar contatos','Criar ferrovias a vapor','Explorar o espaço','Construir computadores'],0]
  ],
  'Geografia': [
    ['Qual é a região brasileira onde fica o estado do Paraná?', ['Sul','Norte','Nordeste','Centro-Oeste'],0],
    ['Como se chama a representação reduzida da superfície terrestre?', ['Mapa','Termograma','Cronologia','Infográfico de som'],0],
    ['Qual fator influencia diretamente as estações do ano junto ao movimento de translação?', ['Inclinação do eixo terrestre','Distância fixa entre Terra e Lua','Rotação de Júpiter','Correntes de rádio'],0],
    ['Qual bioma ocupa grande parte da região Norte do Brasil?', ['Amazônia','Pampa','Caatinga','Cerrado exclusivamente'],0],
    ['O que representa a escala de um mapa?', ['A relação entre distância no mapa e distância real','A temperatura média do local','A quantidade de habitantes por rua','A altitude das nuvens'],0],
    ['Qual fenômeno corresponde ao crescimento da população urbana?', ['Urbanização','Erosão marinha','Vulcanismo','Glaciação'],0]
  ],
  'Natureza': [
    ['Qual atitude ajuda a reduzir o desperdício de água em casa?', ['Consertar vazamentos','Deixar a torneira aberta ao escovar os dentes','Lavar calçadas diariamente com mangueira','Tomar banhos mais longos'],0],
    ['Qual parte da planta absorve água e sais minerais do solo?', ['Raiz','Flor','Fruto','Pétala'],0],
    ['Como se chama a variedade de seres vivos de uma região?', ['Biodiversidade','Salinidade','Densidade urbana','Pressão atmosférica'],0],
    ['Qual fenômeno natural é causado pelo movimento das placas tectônicas?', ['Terremoto','Eclipse lunar','Aurora boreal','Arco-íris'],0],
    ['O que ocorre com muitos resíduos orgânicos em uma compostagem adequada?', ['Transformam-se em composto rico em nutrientes','Viraram metal','Deixam de ocupar qualquer espaço instantaneamente','Transformam-se em vidro'],0],
    ['Qual camada protege a Terra de grande parte da radiação ultravioleta?', ['Camada de ozônio','Núcleo interno','Crosta continental','Manto inferior'],0]
  ],
  'Jogos': [
    ['Em Minecraft, qual ferramenta é mais adequada para minerar pedra?', ['Picareta','Enxada','Tesoura','Vara de pesca'],0],
    ['Em jogos, o que normalmente significa “NPC”?', ['Personagem não controlado diretamente pelo jogador','Novo pacote de cores','Nível principal concluído','Conexão de internet privada'],0],
    ['Em xadrez, qual peça pode se mover em linha reta por várias casas na horizontal ou vertical?', ['Torre','Cavalo','Peão','Rei apenas na diagonal'],0],
    ['O que é um checkpoint em um jogo?', ['Ponto de progresso que permite continuar de uma etapa','Um tipo de controle físico','Uma moeda usada em todos os jogos','Um modo que sempre apaga o progresso'],0],
    ['Qual gênero costuma enfatizar exploração, coleta de recursos e sobrevivência?', ['Sobrevivência','Corrida arcade exclusivamente','Quebra-cabeça de palavras apenas','Simulação de voo apenas'],0],
    ['Em jogos competitivos, o que significa “cooldown” de uma habilidade?', ['Tempo de espera até poder usá-la novamente','Aumento permanente de dano','Desconexão da partida','Mudança de idioma'],0]
  ],
  'Corpo humano': [
    ['Qual estrutura celular produz a maior parte do ATP nas células eucarióticas?', ['Ribossomo','Mitocôndria','Lisossomo','Complexo de Golgi'],1],
    ['Qual parte do encéfalo participa muito do equilíbrio e da coordenação motora?', ['Cerebelo','Hipotálamo','Bulbo olfatório','Hipófise'],0],
    ['Qual molécula armazena a maior parte da informação genética dos seres vivos?', ['ATP','DNA','Colágeno','Hemoglobina'],1]
  ]
};

const mediumQuestions = {
  'Conhecimentos gerais': [
    ['Qual é a capital da Austrália?', ['Sydney','Canberra','Melbourne','Perth'],1],
    ['Qual é o resultado de 15 × 8?', ['100','110','120','130'],2],
    ['Qual é o maior planeta do Sistema Solar?', ['Terra','Saturno','Júpiter','Netuno'],2],
    ['Qual é o idioma mais falado no Brasil?', ['Espanhol','Português','Inglês','Francês'],1]
  ],
  'Animais': [
    ['Qual mamífero é capaz de voar?', ['Morcego','Pinguim','Avestruz','Galinha'],0],
    ['Como se chama o processo pelo qual a lagarta se transforma em borboleta?', ['Fotossíntese','Metamorfose','Hibernação','Mimetismo'],1],
    ['Qual destes animais é um marsupial?', ['Coala','Leão','Cavalo','Golfinho'],0],
    ['Qual animal possui três corações?', ['Polvo','Tubarão','Cavalo','Panda'],0]
  ],
  'Anime': [
    ['Em Naruto, qual é o nome do time liderado por Kakashi?', ['Time 7','Time 10','Time 8','Time Guy'],0],
    ['Em One Piece, qual é o nome do espadachim da tripulação de Luffy?', ['Zoro','Sanji','Usopp','Franky'],0],
    ['Em Attack on Titan, como são chamados os gigantes que ameaçam a humanidade?', ['Titãs','Hollows','Homúnculos','Demônios'],0],
    ['Em Death Note, qual é o nome do shinigami ligado ao caderno de Light?', ['Ryuk','Jiraiya','Kakashi','L'],0]
  ],
  'Lugares do mundo': [
    ['Qual é a capital do Canadá?', ['Toronto','Ottawa','Vancouver','Montreal'],1],
    ['Qual país abriga a cidade de Machu Picchu?', ['Peru','Chile','Bolívia','Equador'],0],
    ['Em qual continente está o deserto do Saara?', ['Ásia','África','Europa','Oceania'],1],
    ['Qual é a capital de Portugal?', ['Porto','Lisboa','Coimbra','Faro'],1]
  ],
  'Filmes e séries': [
    ['Em Star Wars, qual é o nome da energia que conecta os Jedi?', ['A Força','O Núcleo','A Chama','O Éter'],0],
    ['Qual é o nome do reino de Wakanda em que vive o Pantera Negra?', ['Wakanda','Genosha','Asgard','Latveria'],0],
    ['Em The Mandalorian, qual personagem é conhecido como Grogu?', ['Baby Yoda','R2-D2','Chewbacca','Darth Maul'],0],
    ['Qual é o nome da escola de magia de Harry Potter?', ['Hogwarts','Nárnia','Ilvermorny','Beauxbatons'],0]
  ],
  'Tecnologia': [
    ['O que significa CPU?', ['Unidade Central de Processamento','Controle Principal de Usuário','Código de Programa Universal','Unidade de Placa Única'],0],
    ['Qual linguagem é usada para estruturar páginas web?', ['HTML','CSS','SQL','Python'],0],
    ['O que é armazenamento em nuvem?', ['Guardar dados em servidores acessíveis pela internet','Guardar arquivos somente em pen drives','Salvar dados apenas na memória RAM','Imprimir arquivos pela internet'],0],
    ['Qual destes é um sistema operacional?', ['Linux','Google','HTML','Wi-Fi'],0]
  ],
  'Esportes': [
    ['Quantos jogadores de cada equipe ficam em campo no futebol?', ['9','10','11','12'],2],
    ['Em qual país surgiram as regras modernas do futebol?', ['Inglaterra','Brasil','França','Itália'],0],
    ['Quantos pontos vale uma cesta comum dentro da linha de três no basquete?', ['1','2','3','4'],1],
    ['Qual torneio de tênis é disputado na grama em Londres?', ['Wimbledon','Roland Garros','US Open','Australian Open'],0]
  ],
  'História': [
    ['Em que ano ocorreu a Proclamação da República no Brasil?', ['1822','1888','1889','1930'],2],
    ['Qual foi o principal objetivo da Lei Áurea?', ['Abolir legalmente a escravidão','Criar a República','Declarar a Independência','Criar a Constituição de 1988'],0],
    ['Qual civilização construiu Machu Picchu?', ['Inca','Romana','Egípcia','Grega'],0],
    ['Quem foi o líder da Revolução Russa de Outubro de 1917?', ['Vladimir Lenin','Napoleão Bonaparte','Júlio César','Winston Churchill'],0]
  ],
  'Geografia': [
    ['Qual é o maior país do mundo em extensão territorial?', ['Canadá','China','Rússia','Estados Unidos'],2],
    ['Qual linha imaginária divide a Terra em hemisférios Norte e Sul?', ['Trópico de Câncer','Linha do Equador','Meridiano de Greenwich','Trópico de Capricórnio'],1],
    ['Qual é o bioma predominante no estado do Paraná?', ['Mata Atlântica','Caatinga','Pantanal','Pampa'],0],
    ['Qual é a capital do Japão?', ['Seul','Pequim','Tóquio','Bangkok'],2]
  ],
  'Natureza': [
    ['Qual é o processo pelo qual as plantas produzem seu alimento?', ['Fotossíntese','Respiração pulmonar','Fermentação alcoólica','Digestão'],0],
    ['Qual gás é mais abundante na atmosfera terrestre?', ['Oxigênio','Nitrogênio','Gás carbônico','Hidrogênio'],1],
    ['Como se chama a passagem da água do estado líquido para o gasoso?', ['Condensação','Solidificação','Evaporação','Fusão'],2],
    ['Qual destes é um recurso natural renovável?', ['Energia solar','Petróleo','Carvão mineral','Gás natural'],0]
  ],
  'Jogos': [
    ['Qual é o nome do herói principal da série The Legend of Zelda?', ['Link','Zelda','Ganondorf','Mario'],0],
    ['Em Pokémon, qual tipo é imune a ataques do tipo Fantasma?', ['Normal','Água','Fogo','Planta'],0],
    ['Qual empresa desenvolveu Minecraft?', ['Mojang','Nintendo','Valve','Ubisoft'],0],
    ['Em Among Us, qual é o objetivo do impostor?', ['Sabotar e eliminar tripulantes','Consertar todas as tarefas','Pilotar a nave sozinho','Encontrar tesouros'],0]
  ],
  'Corpo humano': [
    ['Qual órgão é responsável por filtrar o sangue e produzir urina?', ['Rins','Pulmões','Estômago','Coração'],0],
    ['Qual é o maior órgão do corpo humano?', ['Pele','Fígado','Cérebro','Pulmão'],0],
    ['Qual componente do sangue transporta oxigênio?', ['Hemácias','Plaquetas','Leucócitos','Plasma apenas'],0],
    ['Qual sistema coordena respostas e movimentos do corpo?', ['Sistema nervoso','Sistema digestório','Sistema urinário','Sistema tegumentar'],0]
  ]
};

const hardQuestionsByTheme = {
  'Conhecimentos gerais': [
    ['Qual é o valor aproximado da raiz quadrada de 2?', ['1,14','1,41','1,73','2,14'],1],
    ['Qual cientista formulou as leis clássicas do movimento?', ['Isaac Newton','Albert Einstein','Galileu Galilei','Nikola Tesla'],0],
    ['Qual elemento químico tem símbolo Fe?', ['Ferro','Flúor','Fósforo','Frâncio'],0]
  ],
  'Animais': [
    ['Qual grupo de animais possui penas?', ['Mamíferos','Aves','Répteis','Anfíbios'],1],
    ['Qual é o nome científico do ser humano moderno?', ['Homo sapiens','Homo erectus','Pan troglodytes','Australopithecus'],0],
    ['Qual destes animais é um cetáceo?', ['Golfinho','Tubarão','Pinguim','Lontra'],0]
  ],
  'Anime': [
    ['Em Fullmetal Alchemist, qual princípio rege a alquimia?', ['Troca equivalente','Energia infinita','Reencarnação','Telecinese'],0],
    ['Em Neon Genesis Evangelion, qual é o nome da organização que opera os EVAs?', ['NERV','SHIELD','Akatsuki','Survey Corps'],0],
    ['Em Hunter x Hunter, como se chama a energia vital usada pelos personagens?', ['Nen','Chakra','Ki','Reiatsu'],0]
  ],
  'Lugares do mundo': [
    ['Qual estreito separa a Ásia da América do Norte?', ['Estreito de Bering','Canal da Mancha','Estreito de Gibraltar','Estreito de Ormuz'],0],
    ['Qual país possui a região histórica da Capadócia?', ['Turquia','Grécia','Egito','Marrocos'],0],
    ['Qual é a capital da Islândia?', ['Reykjavík','Oslo','Helsinque','Copenhague'],0]
  ],
  'Filmes e séries': [
    ['Qual diretor dirigiu a trilogia O Senhor dos Anéis?', ['Peter Jackson','Steven Spielberg','James Cameron','Christopher Nolan'],0],
    ['Em Matrix, qual é o nome do personagem principal?', ['Neo','Morpheus','Trinity','Smith'],0],
    ['Qual é o nome do planeta natal do Superman?', ['Krypton','Vulcano','Tatooine','Pandora'],0]
  ],
  'Tecnologia': [
    ['Qual protocolo é usado para transferir páginas web de forma segura?', ['HTTPS','FTP','SMTP','Telnet'],0],
    ['Qual é a função principal da memória RAM?', ['Armazenar dados temporários em uso','Guardar arquivos permanentemente','Processar gráficos sozinha','Fornecer energia ao computador'],0],
    ['O que significa a sigla URL?', ['Uniform Resource Locator','Universal Reading Link','User Route Language','Unified Remote Login'],0]
  ],
  'Esportes': [
    ['Quantos sets um jogador precisa vencer para ganhar uma partida masculina de simples em Grand Slam?', ['2','3','4','5'],1],
    ['Qual país venceu a primeira Copa do Mundo de futebol, em 1930?', ['Uruguai','Brasil','Itália','Argentina'],0],
    ['No atletismo, qual prova combina corrida, saltos e arremessos?', ['Decatlo','Maratona','Revezamento 4x100','Marcha atlética'],0]
  ],
  'História': [
    ['Qual tratado encerrou oficialmente a Primeira Guerra Mundial com a Alemanha?', ['Tratado de Versalhes','Tratado de Tordesilhas','Tratado de Paris de 1763','Tratado de Utrecht'],0],
    ['Qual revolta colonial brasileira ocorreu em Minas Gerais no século XVIII?', ['Inconfidência Mineira','Revolta da Vacina','Cabanagem','Balaiada'],0],
    ['Em que ano foi promulgada a atual Constituição brasileira?', ['1988','1964','1945','1994'],0]
  ],
  'Geografia': [
    ['Qual é o ponto mais alto do continente africano?', ['Monte Kilimanjaro','Monte Everest','Monte Elbrus','Aconcágua'],0],
    ['Qual corrente marítima fria influencia o litoral oeste da América do Sul?', ['Corrente de Humboldt','Corrente do Golfo','Corrente do Brasil','Corrente de Kuroshio'],0],
    ['Qual país é atravessado pela Linha do Equador e possui Quito como capital?', ['Equador','Peru','Colômbia','Bolívia'],0]
  ],
  'Natureza': [
    ['Qual organela realiza a fotossíntese nas células vegetais?', ['Cloroplasto','Mitocôndria','Ribossomo','Lisossomo'],0],
    ['Qual é o nome do processo em que a água passa do vapor diretamente para o gelo?', ['Ressublimação','Fusão','Evaporação','Condensação'],0],
    ['Qual é a principal função dos decompositores em um ecossistema?', ['Reciclar nutrientes','Produzir luz solar','Impedir a fotossíntese','Criar água'],0]
  ],
  'Jogos': [
    ['Em Dark Souls, qual é o nome do recurso usado para subir de nível?', ['Almas','Rúpias','Mora','Gil'],0],
    ['Qual estúdio desenvolveu The Witcher 3?', ['CD Projekt Red','FromSoftware','Naughty Dog','Rockstar Games'],0],
    ['Em Portal, qual é o nome da inteligência artificial que acompanha o jogador?', ['GLaDOS','Cortana','EDI','SHODAN'],0]
  ],
  'Corpo humano': [
    ['Qual estrutura celular produz a maior parte do ATP nas células eucarióticas?', ['Ribossomo','Mitocôndria','Lisossomo','Complexo de Golgi'],1],
    ['Qual parte do encéfalo participa muito do equilíbrio e da coordenação motora?', ['Cerebelo','Hipotálamo','Bulbo olfatório','Hipófise'],0],
    ['Qual molécula armazena a maior parte da informação genética dos seres vivos?', ['ATP','DNA','Colágeno','Hemoglobina'],1]
  ]
};

const difficultyNames = {
  facil: 'FÁCIL',
  medio: 'MÉDIO',
  dificil: 'DIFÍCIL'
};

const difficultyHelpText = {
  facil: 'Perguntas básicas para começar e ganhar confiança.',
  medio: 'Perguntas com um pouco mais de raciocínio e conhecimento.',
  dificil: 'Perguntas mais difíceis e variadas, para testar seu conhecimento e raciocínio.'
};

const categoryImages = {
  'Conhecimentos gerais': {
    src: 'https://images.unsplash.com/photo-1453738773917-9c3eff1db985?auto=format&fit=crop&w=1200&q=80',
    alt: 'Caderno e materiais de estudo'
  },
  'Animais': {
    src: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=1200&q=80',
    alt: 'Gato olhando para a câmera'
  },
  'Anime': {
    src: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=1200&q=80',
    alt: 'Ilustração e itens relacionados a anime'
  },
  'Lugares do mundo': {
    src: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=1200&q=80',
    alt: 'Vista de Paris e seus edifícios'
  },
  'Filmes e séries': {
    src: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1200&q=80',
    alt: 'Sala de cinema'
  },
  'Tecnologia': {
    src: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
    alt: 'Placa e componentes eletrônicos'
  },
  'Esportes': {
    src: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=1200&q=80',
    alt: 'Pessoas correndo em uma pista esportiva'
  },
  'História': {
    src: 'https://images.unsplash.com/photo-1461360370896-922624d12aa1?auto=format&fit=crop&w=1200&q=80',
    alt: 'Livro antigo e materiais históricos'
  },
  'Geografia': {
    src: 'https://images.unsplash.com/photo-1524666041070-9b876761f9a3?auto=format&fit=crop&w=1200&q=80',
    alt: 'Mapa do mundo'
  },
  'Natureza': {
    src: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=80',
    alt: 'Montanhas e paisagem natural'
  },
  'Jogos': {
    src: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80',
    alt: 'Ambiente de jogos eletrônicos'
  },
  'Corpo humano': {
    src: 'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&w=1200&q=80',
    alt: 'Modelo anatômico educativo'
  }
};

const RANK_KEY = 'nextech-quiz-ranking-v1';
const SOUND_KEY = 'nextech-quiz-sound-v1';
const THEME_KEY = 'nextech-quiz-color-theme-v1';
const LIMIT = 20;

let player = '';
let theme = 'Tecnologia';
let difficulty = 'facil';
let round = [];
let index = 0;
let score = 0;
let hits = 0;
let seconds = LIMIT;
let tick = null;
let locked = false;
let soundOn = safeGet(SOUND_KEY) !== 'off';
let audio = null;
let colorTheme = safeGet(THEME_KEY) === 'light' ? 'light' : 'dark';

function safeGet(key) {
  try {
    return localStorage.getItem(key);
  } catch (_) {
    return null;
  }
}

function safeSet(key, value) {
  try {
    localStorage.setItem(key, value);
  } catch (_) {}
}

function safeRemove(key) {
  try {
    localStorage.removeItem(key);
  } catch (_) {}
}

function showScreen(id) {
  ['home', 'quiz', 'result'].forEach(screen => {
    $(screen).classList.toggle('hidden', screen !== id);
  });

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function applyColorTheme() {
  document.body.dataset.theme = colorTheme;

  $('themeBtn').textContent =
    colorTheme === 'dark' ? '☀️ Modo claro' : '🌙 Modo escuro';

  $('themeBtn').setAttribute(
    'aria-label',
    colorTheme === 'dark' ? 'Ativar modo claro' : 'Ativar modo escuro'
  );
}

function shuffle(items) {
  const copy = [...items];

  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }

  return copy;
}

function beep(type) {
  if (!soundOn) return;

  try {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) return;

    audio = audio || new AudioContextClass();

    if (audio.state === 'suspended') {
      audio.resume();
    }

    const tones = {
      ok: [660, 880],
      bad: [220, 160],
      start: [440, 660, 880],
      end: [523, 659, 784]
    };

    const sequence = tones[type] || [440];

    sequence.forEach((frequency, position) => {
      const oscillator = audio.createOscillator();
      const gain = audio.createGain();
      const startAt = audio.currentTime + position * 0.13;

      oscillator.type = 'sine';
      oscillator.frequency.value = frequency;

      gain.gain.setValueAtTime(0.0001, startAt);
      gain.gain.exponentialRampToValueAtTime(0.07, startAt + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, startAt + 0.2);

      oscillator.connect(gain);
      gain.connect(audio.destination);

      oscillator.start(startAt);
      oscillator.stop(startAt + 0.21);
    });
  } catch (error) {
    console.warn('Não foi possível reproduzir o som:', error);
  }
}

function getRanking() {
  try {
    const value = JSON.parse(localStorage.getItem(RANK_KEY) || '[]');
    return Array.isArray(value) ? value : [];
  } catch (_) {
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
    name.textContent =
      `${position + 1}. ${entry.name} · ${entry.theme}` +
      (entry.difficulty ? ` (${entry.difficulty})` : '');

    const points = document.createElement('b');
    points.textContent = `${entry.score} pts`;

    row.append(name, points);
    $('ranking').appendChild(row);
  });
}

function startGame() {
  player = $('player').value.trim() || 'Jogador';
  theme = $('theme').value;
  difficulty = $('difficulty').value;

  if (!Object.prototype.hasOwnProperty.call(themes, theme)) {
    alert('Esse tema não está disponível. Escolha outro tema.');
    return;
  }

  if (!Object.prototype.hasOwnProperty.call(difficultyNames, difficulty)) {
    difficulty = 'facil';
  }

  if (!$('terms').checked) {
    alert('Leia e aceite o aviso de participação antes de começar.');
    return;
  }

  const easyPool = (themes[theme] || []).map(question => [...question]);

  const mediumPool = [
    ...(extraQuestions[theme] || []),
    ...(mediumQuestions[theme] || [])
  ].map(question => [...question]);

  const hardPool = [
    ...(hardQuestionsByTheme[theme] || []),
    ...(mediumQuestions[theme] || []),
    ...(extraQuestions[theme] || [])
  ].map(question => [...question]);

  let selectedPool;

  if (difficulty === 'facil') {
    selectedPool = shuffle(easyPool);
  } else if (difficulty === 'medio') {
    selectedPool = shuffle(mediumPool);
  } else {
    selectedPool = shuffle(hardPool);
  }

  if (selectedPool.length < 10) {
    const used = new Set(selectedPool.map(question => question[0]));
    const supplements = [...easyPool, ...mediumPool, ...hardPool]
      .filter(question => !used.has(question[0]));

    selectedPool = [
      ...selectedPool,
      ...shuffle(supplements).slice(0, 10 - selectedPool.length)
    ];
  }

  if (selectedPool.length < 10) {
    alert('Não há perguntas suficientes para iniciar esta rodada.');
    return;
  }

  const multiplier =
    difficulty === 'facil' ? 1 :
    difficulty === 'medio' ? 1.25 : 1.6;

  round = selectedPool.slice(0, 10).map(question => {
    const choices = shuffle(
      question[1].map((answer, answerIndex) => ({
        answer,
        correct: answerIndex === question[2]
      }))
    );

    return [
      question[0],
      choices.map(choice => choice.answer),
      choices.findIndex(choice => choice.correct),
      multiplier
    ];
  });

  index = 0;
  score = 0;
  hits = 0;
  locked = false;

  showScreen('quiz');

  $('themeBadge').textContent =
    `${theme.toUpperCase()} · ${difficultyNames[difficulty]}`;

  beep('start');
  showQuestion();
}

function showQuestion() {
  clearInterval(tick);

  locked = false;

  seconds =
    difficulty === 'dificil' ? 30 :
    difficulty === 'medio' ? 25 : LIMIT;

  const question = round[index];

  $('counter').textContent = `${index + 1}/10`;
  $('score').textContent = score;
  $('timer').textContent = `${seconds}s`;
  $('timer').style.color = 'var(--text)';

  $('progress').style.width =
    `${index / round.length * 100}%`;

  $('question').textContent = question[0];

  const visual =
    categoryImages[theme] ||
    categoryImages['Conhecimentos gerais'];

  $('questionImage').onerror = () => {
    $('questionImage').removeAttribute('src');
    $('questionImage').alt =
      `Imagem ilustrativa indisponível para ${theme}`;
  };

  $('questionImage').src = visual.src;
  $('questionImage').alt = visual.alt;

  $('imageCaption').textContent =
    `${theme} · ${difficultyNames[difficulty].toLowerCase()} · imagem ilustrativa`;

  $('feedback').textContent = '';
  $('feedback').className = '';
  $('nextBtn').classList.add('hidden');
  $('answers').innerHTML = '';

  const letters = ['A', 'B', 'C', 'D'];

  question[1].forEach((answer, answerIndex) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'answer';

    const letter = document.createElement('span');
    letter.className = 'letter';
    letter.textContent = letters[answerIndex];

    const label = document.createElement('span');
    label.textContent = answer;

    button.append(letter, label);

    button.addEventListener('click', () => {
      chooseAnswer(answerIndex);
    });

    $('answers').appendChild(button);
  });

  tick = setInterval(() => {
    seconds--;

    $('timer').textContent = `${seconds}s`;

    if (seconds <= 5) {
      $('timer').style.color = 'var(--red)';
    } else {
      $('timer').style.color = 'var(--text)';
    }

    if (seconds <= 0) {
      clearInterval(tick);

      if (!locked) {
        chooseAnswer(-1);
      }
    }
  }, 1000);
}

function chooseAnswer(choice) {
  if (locked) return;

  locked = true;
  clearInterval(tick);

  const question = round[index];
  const correct = question[2];

  const buttons = [
    ...$('answers').querySelectorAll('button')
  ];

  buttons.forEach((button, answerIndex) => {
    button.disabled = true;

    if (answerIndex === correct) {
      button.classList.add('correct');
    }

    if (answerIndex === choice && choice !== correct) {
      button.classList.add('wrong');
    }
  });

  if (choice === correct) {
    hits++;

    const gained = Math.round(
      (500 + seconds * 25) * question[3]
    );

    score += gained;

    $('feedback').textContent =
      `Correto! +${gained} pontos.`;

    $('feedback').className = 'good';
    beep('ok');
  } else {
    $('feedback').textContent =
      choice === -1
        ? `Tempo esgotado! A resposta era: ${question[1][correct]}.`
        : `Não foi dessa vez. A resposta correta era: ${question[1][correct]}.`;

    $('feedback').className = 'bad';
    beep('bad');
  }

  $('score').textContent = score;

  $('progress').style.width =
    `${(index + 1) / round.length * 100}%`;

  $('nextBtn').textContent =
    index === round.length - 1
      ? 'Ver resultado →'
      : 'Próxima pergunta →';

  $('nextBtn').classList.remove('hidden');
}

function nextQuestion() {
  if (!locked) return;

  index++;

  if (index >= round.length) {
    finishGame();
  } else {
    showQuestion();
  }
}

function finishGame() {
  clearInterval(tick);
  beep('end');

  const accuracy = Math.round(hits / round.length * 100);

  $('resultTitle').textContent =
    hits === 10 ? 'Perfeito! 🎉' :
    hits >= 7 ? 'Mandou muito bem!' :
    hits >= 4 ? 'Bom trabalho!' :
    'Continue treinando!';

  $('finalScore').textContent = `${score} pontos`;
  $('correct').textContent = `${hits}/10`;
  $('accuracy').textContent = `${accuracy}%`;
  $('resultTheme').textContent =
    `${difficultyNames[difficulty]} · ${theme}`;

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
}

function bindButton(id, handler) {
  const element = $(id);

  if (!element) {
    console.error(`Botão #${id} não encontrado.`);
    return;
  }

  element.addEventListener('click', handler);
}

function initializeQuiz() {
  const difficultySelect = $('difficulty');

  difficultySelect.addEventListener('change', () => {
    $('difficultyHelp').textContent =
      difficultyHelpText[difficultySelect.value] ||
      difficultyHelpText.facil;
  });

  // ABRIR E FECHAR TERMO
  bindButton('termsToggle', () => {
    const panel = $('termsPanel');
    const opening = panel.classList.contains('hidden');

    panel.classList.toggle('hidden', !opening);

    $('termsToggle').setAttribute(
      'aria-expanded',
      String(opening)
    );

    $('termsToggle').textContent = opening
      ? '− Ocultar termo de participação e autorização'
      : '＋ Ler termo de participação e autorização';
  });

  // COMEÇAR E AVANÇAR
  bindButton('startBtn', startGame);
  bindButton('nextBtn', nextQuestion);

  // VOLTAR AO INÍCIO DURANTE A PARTIDA
  bindButton('quitBtn', () => {
    if (confirm('Deseja sair da partida? O progresso atual será perdido.')) {
      clearInterval(tick);
      showScreen('home');
    }
  });

  // JOGAR NOVAMENTE
  bindButton('againBtn', startGame);

  // VOLTAR AO MENU DEPOIS DO RESULTADO
  bindButton('homeBtn', () => {
    clearInterval(tick);
    showScreen('home');
    renderRanking();
  });

  // LIMPAR RANKING
  bindButton('clearRank', () => {
    if (confirm('Deseja apagar o ranking salvo neste navegador?')) {
      safeRemove(RANK_KEY);
      renderRanking();
    }
  });

  // MODO CLARO E ESCURO
  bindButton('themeBtn', () => {
    colorTheme =
      colorTheme === 'dark' ? 'light' : 'dark';

    safeSet(THEME_KEY, colorTheme);
    applyColorTheme();
  });

  // LIGAR E DESLIGAR SOM
  bindButton('soundBtn', () => {
    soundOn = !soundOn;

    safeSet(SOUND_KEY, soundOn ? 'on' : 'off');

    $('soundBtn').textContent =
      soundOn ? '♫ Som ligado' : '♫ Som desligado';

    $('soundBtn').setAttribute(
      'aria-pressed',
      String(soundOn)
    );

    if (soundOn) {
      beep('ok');
    }
  });

  $('soundBtn').textContent =
    soundOn ? '♫ Som ligado' : '♫ Som desligado';

  $('soundBtn').setAttribute(
    'aria-pressed',
    String(soundOn)
  );

  applyColorTheme();
  renderRanking();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeQuiz, {
    once: true
  });
} else {
  initializeQuiz();
}

