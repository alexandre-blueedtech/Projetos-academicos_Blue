const prompt = require('prompt-sync')();

var medo = 50;
var saude = 50;
var raiva = 50;
var coragem = 50;
console.log(`Status de Ralph: Medo ${medo} - Saude ${saude} - Raiva ${raiva} - Coragem ${coragem}`);
console.log();
console.log(`15 de Janeiro de 2022.
10:13 da manhã, São Paulo, Brasil.
Dia decisivo.
`)
console.log();
console.log(`-Ralph, estou indo na vendinha mas volto logo viu, fique com seu tio e obedeça ele. - Mãe, eu quero ir junto já sou grande posso andar na rua também... - Sem discussões agora, preciso ir logo beijo até depois.
Ralph volta para casa, cabisbaixo mas tudo bem, ele tem muito o que fazer em casa, uma criança de 8 anos brinca muito principalmente com os games. Entrando em casa Ralph topa com seu tio, Geraldo, homem de 52 anos, estatura média.
Como uma criança com imaginação aflorada, começou a brincader de ninja, referencia de um anime que assistia com seu primo mais velho. Foi correndo para seu quarta com os braços para trás, atrás de uma roupa digna de um ninja, enquanto se trocava seu tio apareceu...
- Eai moleque, ta fazendo o que?
- Vou brincar de ninja tio, vamos? 
    O tio, com maldade no olhar se aproveitou da oportunidade para se aproximar do menino, enquanto ele trocava a roupa Geraldo "entrou" no personagem e ficou de cueca assim como Ralph.
- Venha vou te ajudar a escolher uma roupa para nós dois, já estamos iguais como ninjas!! 
Ralph desconfiado foi se afastando do tio, mas ele o seguia e mantinha proximidade. Até que seu tio começa a observar seu corpo e se aproximar ainda mais...
`)
console.log();
console.log(`10:22 da manhã, São Paulo, Brasil.

Ralph aparece de cueca, chorando com as mãos sangrando procurando por sua mãe... 
- Mãe, mãe, mamãe... cade você!!
As pessoas conheciam a criança e sua familia, uma mulher chegou e com muita bondade acolheu a criança, o levando até sua mãe. Chegando lá Ralph contou chorando horrores o que aconteceu.
-Mãe meu tio tentou tirar minha cueca, ele tava sem roupa e tentou tirar minha cueca também, fiquei com muito medo, não queria bricar daquilo com ele. Ele me agarrou pelo braço e não queria me soltar...
A mãe completamente horrorisada, tentou acalmar a criança e saber o que aconteceu de fato e perguntou novamente.
- Filho por favor fala pra mamãe o que aconteceu, por favor! 
Ralph então, desolado e tremulo respondeu... eu tentei correr mas ele sempre me alcançava, cheguei na mesa e tinha o copo e faca que usei no meu café da manhã...`)
console.log();
console.log(`Na hora, em sua cabeça, o mundo ficou em camera lenta e em seguida começou uma contagem... `);
for(let i = 1; i <= 3; i++) {
    console.log(`${i}`);    
}
console.log();
console.log(`Preciso agir agora!!`);
console.log();
console.log(`Opção 1: Peguei a faca, furei a mão dele e consegui fugir...
Opção 2: Peguei o copo de vidro e joguei na cabeça dele, e ele caiu. `);
console.log();

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

var stt = {medo:50, saude:50, raiva:50, coragem:50, insanidade: 1000,

    fase2: function(){
    console.log(`Opção 1: atirador de elite.
Opção 2: piloto de caça`);
    console.log();
    let escolha = +prompt(`Digite sua escolha: `);
    console.log();
    
    if(escolha == 1){
        this.medo = this.medo + 20;
        this.saude = this.saude + 20;
        this.raiva = this.raiva + 20;
        this.coragem = this.coragem + 20;
        console.log(`Atualização de Status: medo: ${this.medo}, saude: ${this.saude}, raiva: ${this.raiva}, coragem: ${this.coragem}`);
        console.log();
        console.log(`Sabia que você escolheria essa opção, sua mira e dicernimento tático são perfeitos para posição!! Parabens vamos aperfeiçoar isso para quando precisarem, responderá a altura da batalha.`)
        console.log();
        console.log(`Ralph então começa sua nova jornada no exercito, Marques o acompanha de perto e o ensina como se fosse um filho. Ele que já foi um atirador de elite, seria o melhor tutor possível...
Os treinamentos são intensos, a ideia é de 2 anos de treinamento especial, em diversos terrenos e situações possíveis, mas isso não seria impedimento pois sua bravura já mostrou onde ele poderia chegar e durante esses dois anos, ele desempenhou o melhor resultado dentre os soldados, sua pontaria perfeita, seu tempo de respiração, sua noção geográfica, seu controle mental fizeram com que ele se tornasse uma maquina de combate, talvez mais nocivo que 50 homens.`);
        console.log();
        console.log(`23 de Maio de 2036.

Ralph, depois de seu longo e arduo treinamento, consegue atingir sua ambição, agora como atirador de elite do exercito brasileiro, boina preta. Ele participou de algumas missões especiais em diversos paises chegando atuar até mesmo no oriente médio, local de grandes conflitos globais até então, lá conheceu sargentos, generais, marechais, oficiais de alto escalão do qual aprendera muito e também ganhou muito prestígio, entre ele o Marechal Vladmir, da Russia.
E isso, de uma forma ou de outra mudaria a história de sua vida e até mesmo da humanidade.

Com os conflitos de interesses entre as grandes nações, especificamente Russia e China, uma guerra estava perto de estourar e no dia 23 de Maio de 2036, começava senão a maior guerra que a humanidade já viu, o caos se espalhou pelo mundo onde todas as nações se envolveram, ao todo foram 300 paises que participaram dessa guerra. O Brasil como aliado da Russia, enviou tropas para auxiliar no combate, e dentre eles Ralph. Vladmir mandou uma carta pedindo especialmente ele para uma missão ultra secreta, nivel 6!
Ralph se tornou um militar fora da curva, digno de filmes de Holywood, e por isso se tornou tão vital nessa batalha...`);
stt.sniper();

    }else if(escolha == 2){
        this.medo = this.medo + 30;
        this.saude = this.saude + 30;
        this.raiva = this.raiva + 30;
        this.coragem = this.coragem + 50;
        console.log(`Uma escolha de coragem, você realmente conseguirá exercer tudo o que for passado e nos ajudar mais dos céus!!`);
        console.log();
        console.log(`Atualização de Status: medo: ${this.medo}, saude: ${this.saude}, raiva: ${this.raiva}, coragem: ${this.coragem}`);
        console.log();
        console.log(`Sabia que você escolheria essa opção, sua ousadia, malicia e dicernimento tático são perfeitos para a posição!! Parabens vamos aperfeiçoar isso para quando precisarem, responderá a altura da batalha.`)
        console.log();
        console.log(`Ralph então começa sua nova jornada, agora na aeronautica. O Major Sousa recebe nosso heroi pessoalmente, o mesmo foi o melhor piloto de caça que o Brasil já teve, sucesso em mais de 100 missões em países diversos pelo mundo, Sousa seria o melhor tutor possível, pois a capacidade de Ralph já era reconhecida nacionalmente entre os militares...
Os treinamentos eram intensos, a ideia é se especializar na posição em 2 anos de treinamento especial, em diversos países e situações possíveis, mas isso não seria impedimento pois sua bravura e inteligencia já tinha dado indícios de onde ele poderia chegar e durante esses dois anos, ele desempenhou o melhor resultado dentre os soldados, sua percepção de tempo, espaço, eram diferenciadas. Ele dominou a máquina como se já tivesse feito isso por muitos anos... pontaria perfeita, sua agilidade de raciocínio, sua noção geográfica, seu controle mental fizeram com que ele se tornasse uma maquina de combate, agora, mais nocivo que 1000 homens.`);
        console.log();
        console.log(`23 de Maio de 2036.

Ralph, depois de seu longo e arduo treinamento, consegue atingir sua ambição, agora como novo piloto de caça do exercito brasileiro, conhecido como "Morte". Ele participou de algumas missões especiais em diversos paises chegando atuar até mesmo no oriente médio, local de grandes conflitos globais até então, lá conheceu sargentos, generais, marechais, oficiais de alto escalão do qual aprendera muito e também ganhou muito prestígio, entre eles o Marechal Vladmir, da Russia. Numa missão de resgate, Ralph sozinho com seu F-35 conseguiu destruir um grupo terrorista e sua base de suprimentos no Afeganistão, salvando uma unidade de elite do governo russo comandados por Vladmir, o GTAG.
E isso, de uma forma ou de outra mudaria a história de sua vida e até mesmo da humanidade.

Com os conflitos de interesses entre as grandes nações, especificamente Russia e China, uma guerra estava perto de estourar e no dia 23 de Maio de 2036, começava senão a maior guerra que a humanidade já viu, o caos se espalhou pelo mundo onde todas as nações se envolveram, ao todo foram 300 paises que participaram dessa guerra. O Brasil como aliado da Russia, enviou tropas para auxiliar no combate, e dentre eles Ralph. Vladmir mandou uma carta pedindo especialmente ele para uma missão ultra secreta, nivel 6!
Ralph se tornou um militar fora da curva, digno de filmes de Holywood, e por isso se tornou tão vital nessa batalha...`);

stt.piloto();

}
<<<<<<< HEAD
 
=======
>>>>>>> 0001123b730c554a69d80383619549d72fda9086
},

sniper: function(){
    console.log();
    console.log(`23 de Maio de 2037

Passado exatamente um ano depois do anuncio da guerra do caos, nações brigavam entre si gerando mais mortes do que todas as outras guerras travadas, o numero de vitimas era absurdo pois os governos mandavam todo tipo de pessoa defender seu país, desde mulheres e até mesmo adolecentes a partir de 16 anos.
Nosso heroi agora se encontrava numa floresta fechada chinesa, cabeça e unico sobrevivente do esquadrão especial GTAG (Grupo Tático de Aniquilação Global), do qual foram responsáveis por matar o atual ditador chines, Xin Zing Zag. Sua tentativa de dominação global através de armas químicas fizeram com que um lado do planeta terra se virasse contra ele e assim começado a pior guerra de toda nossa história!

Parado no clima gélido da floresta, Ralph seguia escondido pois havia muitas rondas por aquele terreno. Informações coletadas ao decorrer da missão, fez Ralph e seus companheiros acharem o covil do odioso ditador chines, mas para que a missão fosse um sucesso, nosso heroi precisava de apenas uma baixa, e a mais importante! Xin Zing Zag obrigou nações se juntarem a eles na base do medo, o mesmo explodiu a Austrália como forma de demonstração de poder e ameaçou suas provincias e outros países a se juntarem há sua causa... Ralph imóvel, mal respirava pois por lá, andava um batalhão de mais ou menos 20 homens, todos soldados de baixo escalão, até então tudo bem pois era apenas varredura do perímetro, o castelo de Xin, estava protegido com a elite.
Está guerra, com a alta tecnologia, principalmente armamentista, se passava muito rápida e a China estava vencendo o mundo. Muitos países tiveram protestos, paciatas para o fim da guerra, fora o caos que reinava em todos os cantos do planeta, o exercito russo, eram o governo opositor, recebeu informações de que os próprios chineses não queriam mais guerrear pois não fazia mais sentido acabar com toda a raça humana, mas sem derrubar o ditador, seria impossível um cessar-fogo e com isso, Ralph se torna a esperança mundial!`);
    console.log();
    relogio.hora = 6;
    relogio();
    console.log();

    console.log(`O primeiro batalhão passou por Ralph, mas o dia estava apenas começando, no momento em que nosso heroi se prepara para avançar terreno, é avistado por um esquadrão novo que fazia a ronda, o esquadrão se aproxíma dele, gritando e vencendo o terreno com muita agilidade. 
Infelizmente ele não tinha o que fazer, naquela altura do campeonato seria capturado e em seguida seria morto, e uma das coisas que não poderia acontecer é informações da missão serem reveladas para Xin Zing Zag.
Ralph num momento onde suas emoções afloraram, pensou na missão, e tido como vencido, pensou em tirar sua própria vida...`);

    let opc = ["Fugir", "Explodir com uma granada"];
    for (i of opc) {
      console.log();
      console.log("---");
      console.log(i);
      console.log("---");
    }

    console.log();
    ("Opção 1, fugir e tentar sobreviver? Ou opção 2, se explodir e evitar dar informações preciosas para o maior vilão que a terra já viu? ");
    console.log();
    let deci = +prompt("Digite sua escolha: ");
    console.log();
    if (deci == 1) {
      console.log(`Ralph então começa a fuga, utiliza seus equipamentos táticos e consegue se esconder entre as arvores, finalmente consegue uma brecha e assim que ele avista rochas para seu refugio, nosso heroi pisa numa mina e explode, assim tendo seu fim trágico. 
A missão não foi cumprida pois a ultima esperança acaba de morrer... pouco tempo depois, Xin Zing Zag fica sabendo sobre o inimigo, fazendo sua jogada final e acabando com a guerra, simplesmente soltando a maior bomba nuclear já vista pela humanidade, dando fim a guerra e também a raça humana.

Fim de jogo!`);
    } else if (deci == 2) {
    this.coragem = this.coragem + 30;
    this.medo = this.medo + 10;
    this.saude = this.saude + 10;
    this.raiva = this.raiva + 20;

    console.log(`Ralph, dado como vencido, pega sua ultima granada, puxa o gatilho e segura a frente de sua cabeça, encarando os soldados chineses chegando a todo vapor! Ele fecha seus olhos e todos os sons daquele ambiente param, apenas sua respiração e o vapor de sua inspiração se destacam em meio a situação, Ralph entra numa espécie de transe, e começa a ver toda sua jornada, desde aquele dia em que seu tio tenta abusa-lo, lembra de sua mãe, sua familia, sua amada Morgana, tudo passou como num filme e ali ele entendeu que o seu fim chegará. Ele solta o gatilho e espera sua passagem para algo desconhecido!
- ESPERA, ESPERA NÃO FAÇA ISSO, NÃO SOLTE O GATILHO!!!
Ralph achou que era delírio, ver o grupo de soldados inimigos pedindo para ele não se matar, ainda mais falando em portugues, realmente era uma ilusão, mas antes do seu fim ele abre os olhos para vislumbrar aquele mundo uma ultima vez.
Seus olhos se arregalam, e ele não acredita no que vê... todos os soldados ajoelhados com as armas no chão, num gesto que naquele momento seria inpensável, então ele percebe que os gritos realmente eram verdade e o grupo queria contato com ele sem nenhum tipo de agressividade...

- Você é o boina preta, Ralph não é mesmo? Sou Obela Xiao, somos opositores do governo do Xin, estávamos a sua procura... Fomos enviados por Vladmir, sabemos de sua missão e viemos ajuda-lo!

Sem acreditar no que ouvia, sua cabeça passava milhões de pensamentos por segundo, como isso era possivel? Qual a possibilidade? Realmente parecia uma situação de puro roteiro e que isso acabou por salvar a vida dele.
- Como posso acreditar em vocês? Mostrem-me uma prova de sua lealdade!

No mesmo momento, todos mostraram uma tatuagem familiar, era o simbolo de uma caveira com runas viking, simbolo que todos os membros da GTAG adquiriam quando aprovados para a organização.
- Venha, vamos para nosso covil e vamos explicar melhor as coisas.
Num tiro no escuro, Ralph ainda desconfiado vai com o grupo e depois de 20 minutos de uma dificil caminhada, chegam numa gruta com equipamentos, rádios, roupas e suprimentos...`);

console.log();
console.log(`Atualização de Status: medo: ${this.medo}, saude: ${this.saude}, raiva: ${this.raiva}, coragem: ${this.coragem}`);

console.log();
console.log(`23 de Maio de 2037`);
console.log();

relogio.hora = 15
relogio();
console.log();
console.log(`Obela Xiao e Ralph conversaram por horas e finalmente nosso heroi entendeu o que acontecia, Vladmir mandou um novo grupo para resgate, queriam salvar os mebros originais pois a missão já não era mais viável, se tornará suicida, tanto que de um grupo de 10, restaram apenas 1.

Ralph então entra num diálogo com Obela, dizendo que já tinha mapeado todo o terreno e que conseguiu avistar Xin Zing Zag num dos banheiro castelo, já estava na região fazia 2 dias e conseguiu ver um padrão do tirano. Achou uma posição favorável para um tiro certeiro, e estava determinado a acabar com essa guerra, nem que valesse sua vida, o ato da granada o fez ganhar um folego a mais, ganhar raiva e principalmente coragem e estava decidido... Mas Obela e o grupo tentam convencer Ralph de voltar com eles pois provavelmente os inimigos já sabiam de sua presença e ali seria morte na certa!

- Ralph, nossa missão foi bem clara, você já fez demais pelo mundo, temos que recuar agora senão tudo isso não irá valer a pena, não podemos perder você! Estamos partindo pelo amanhecer, podemos contar com você?`);

console.log(`Em sua cabeça, começa uma contagem, sua filosofia era tomar decisões importantes em até 3 segundos, ele sabia que poderia terminar aquela missão impossível e que só dependeria dele para o sucesso do mundo e também precisaria de muita coragem!`);

for(let i = 1; i <= 3; i++) {
    console.log(`${i}`);
}
console.log();
console.log(`Agora!!`);
console.log();

console.log('O que fazer? 1 - Voltar com o esquadrão e abandonar a missão original ou 2 - Continuar a missão suicida e tentar acabar com a guerra com suas próprias mãos?');
console.log();
let deci2 = +prompt('Digite sua opção, 1 ou 2: ');
console.log();
if(deci2 == 1){
    console.log(`- Obela, voltarei com vocês, vamos nos reagrupar e seguri as ordens do Marechal, vamos resolvir isso de outra forma!!
- Entendido!

Assim que Ralph e seu novo grupo chegam no barco responsável por sua extração, um elicoptero chines avista a tripulação, em seguida são cercados por um grupo, conseguem se defender e sair com o barco, mas assim que passam pela costa, a embarcação simplesmente explode e não resta nenhum sobrevivente, o abate foi feito por um submarino que fazia a segurança local da ilha chinesa... 

E aqui acaba a jornada de nosso heroi, uma história trágica, inacabada.

Fim de jogo!`);

}else if(deci2 == 2){
    if(this.coragem == 100){
    console.log();
    console.log(`Você escolheu terminar a missão, Coragem necessária: 100.`);
    }

    console.log();
    console.log(`- Obela, aqui cheguei e aqui terminarei o que foi trabalhado, não posso jamais deixar a missão, pois mancharia a memoria de meus companheiros, e também a minha honra! Voltem imediatamente e informem ao Marechal que a guerra será encerrada hoje, pelas minhas mãos!! 

Obela Xiao e os demais membros virão a convicção e "sangue nos olhos" de Ralph e por um momento, a esperança de todos voltaram a tona e mais uma vez depositaram tudo que tinham em nosso heroi, pois hoje seria o dia decisivo para o fim do caos!
Em posição de sentido, o grupo todo reverencia Ralph e se despede dele, partindo em direção a extração pelo mar.`);
console.log();
console.log(`24 de Maio de 2037.

3h da manhã, China.

Ralph corre subindo a colina, precisava vencer todo o terreno em poucos minutos pois Xin Zing Zag fumava no banheiro leste sempre às 03:05, carregando com sigo apenas uma pistola, uma faca e seu rifle de longo alcance, a distancia da colina para o castelo tinha exatamente 20,35 km. Era uma distancia muito longa e ele tinha apenas uma chance, uma unica bala poderia parar uma guerra inteira!
Nosso heroi chega até o alto da colina, deita rapidamente e coloca seu rifle na posição.

03:04...

A noite estava clara, linda com a luz da lua iluminando tudo ao seu redor, animais estavam peranbulando pela floresta, o clima estava leve, o ar estava fresco, não fazia frio, ceu estrelado! Mais uma vez, a noite parecia um cenário de um filme de romance, e Ralph parado com sua respiração profunda, não tira os olhos de sua mira, e num instante, a luz do banheiro se ascende. 
Seu coração começa a bater muito forte, a adrenalina e ansiedade que ele sentia fazia com que sua mira tremesse, sua vista começará embaçar e o desespero bateu, pois não poderia passar daquela noite, não mais!!
Ele tenta controlar seu corpo e mente, como um homem tão longe poderia faze-lo tremer assim, muita coisa dependia daquele momento, Xin sai na janela para fumar seu cigarro, enquanto desfruta do vicio e aprecia a noite, não imagina o risco que corria...

Ralph então controla sua respiração, focando e virando todo sua raiva e coragem para aquele homem, o unico jeito de controlar seu corpo e por sua respiração e em 1 segundo ele para de respirar, para aumentar sua precisão, seu coração começa a bater mais de vagar, mas ele precisava de que estivesse quase parado, um minuto se passa e Xin estava terminando seu cigarro, Ralph já chegando em seu limite, sente o coração cada vez mais leve, e na ultima tragada de Xin, seu coração para por completo.

De repente, os passaros, as folhas das arvores, tudo estava ficando mais e mais lentos, até que tudo em sua volta simplesmente parou!`);
console.log();
for(let i = 1; i <= 3; i++) {
    console.log(`${i}`);
}
console.log();
console.log(`É AGORAAAAAAA!!!`);
console.log();
console.log(`Poooooooohhw, um barulho ensurdecedor em meio ao silencio noturno, devido as condições fisicas e a pressão pisicológica do momento decisivo, Ralph atira e em seguida sua vista escurece, e nosso heroi apaga.`);
console.log();
console.log(`Ralph acorda num hospital, sem entender onde estava, tenta levantar mas imediatamente é impedido por enfermeiras, mas algo estava errado, eram orientais, chinesas? Pensou, então um oficial do exercito chines para em sua frente, quando ele acha que chegaria seu fim, o general se ajoelha em frente sua cama, com os olhos cheios de lágrimas, ele pega sua mão e simplesmente agradece!!

O general, muito emocionado fala que ele acertou o tiro, foi um abate perfeito no meio da sua testa. Ele contou tudo que aconteceu depois, quando acharam ele apagado e a queda da ditadura, e fala que toda a oposiçaõ de Xin Zing Zag tomou o poder e decretou o fim da participação na guerra mais cruel e sangrenta que já existiu...
Nosso heroi foi recebido como heroi mundial por todas as nações do mundo, o homem que acabou com a pior guerra da história, e todas suas escolhas desde criança, moldaram esse ser que simplesmente foi recompensado salvando toda a humanidade!

Fim de jogo.`);
}

}

},

piloto: function(){
    console.log();
    console.log(`23 de Maio de 2037

Passado exatamente um ano depois do anuncio da guerra do caos, nações brigavam entre si gerando mais mortes do que todas as outras guerras travadas, o numero de vitimas era absurdo pois os governos mandavam todo tipo de pessoa defender seu país, desde mulheres e até mesmo adolecentes a partir de 16 anos.
Nosso heroi agora se encontrava sobrevoando a Mongólia, atualmente palco de um entrave gigantesco entre Russia e seus aliados contra a China. Ralph agora cabeça e unico sobrevivente do esquadrão aereo especial GTAG (Grupo Tático de Aniquilação Global), do qual foram responsáveis por deter o maior poder bélico chines, que estava acabando com as tropas russas. O atual ditador chines, Xin Zing Zag, tentava sua dominação global através de armas químicas, fazendo com que um lado do planeta terra se virasse contra ele e assim começado a pior guerra de toda nossa história!

Ralph seguia lutando com tudo que podia, naquele momento a china fazia uma nova investida nos ceus, pois nosso heroi estava desiquilibrando a batalha, seu caça equipado e melhorado com a alta tecnologia russa, fazia com que ele passasse despercebido deixando um rastro de inimigos abatidos. Informações coletadas ao decorrer da missão, fez Ralph e seus companheiros acharem o covil do odioso ditador chines, mas para que a missão fosse um sucesso, nosso heroi precisava de apenas uma baixa, e a mais importante! Xin Zing Zag obrigou nações se juntarem a eles na base do medo, o mesmo explodiu a Austrália como forma de demonstrar seu poder e ameaçou suas provincias e outros países a se juntarem há sua causa... Ralph recebe um comunicado no rádio, informando que a tropa chinesa começava a se definhar, graças há "morte" voando acima de suas cabeças.
Novas tropas aereas surgem, dando uma virada drástica naquele momento, Ralph sozinho não poderia acabar com todos, então num rápido instante comunica a presença inimiga e é avisado que receberá apoio, que ele poderia retornar para a base em Moscow e voltar carregado e pronto para ajudar. 
Está guerra, com a alta tecnologia, principalmente armamentista, se passava muito rápida e infelizmente a China estava vencendo o mundo. Muitos países tiveram protestos, paciatas para o fim da guerra, fora o caos que reinava em todos os cantos do planeta, o exercito russo, eram o governo opositor, recebeu informações de que os próprios chineses não queriam mais guerrear pois não fazia mais sentido acabar com toda a raça humana, mas sem derrubar o ditador, seria impossível um cessar-fogo.`);
    console.log();
    relogio.hora = 12;
    relogio();
    console.log();
    console.log(`- Ralph, volte imediatamente, ordens do Marechal!
Ralph não queria voltar pois precisava dar apoio para as tropas terrestres, os caças inimigos chegaram e eram muito letais, Ralph sabia que sua presença já faziam pensar duas vezes em como agir, então queria continuar na area de combate até os reforços chegarem...

- Tenente Ralph, voltar imediatamente!!`);

console.log(`Um dos caças chineses alçou voo para o alto, Ralph não entende a manobra e vai atrás do inimigo, estava decidido que não deixaria os caças devolverem a vantagem para a China, então nosso heroi segue o inimigo pelas nuvens e assim que passam delas e somem de vista, outros dois inimigos aparecem e "encurralam" Ralph. Assim que nosso heroi decide mergulhar para sair do ataque conjunto, escuta seu radio ligar e uma voz desconhecida fala com ele.

- ESPERE PILOTO, NÃO VAMOS ATACAR PRECISO TE PASSAR UMA INFORMAÇÃO MUITO IMPORTANTE!! 
Naquela altura do campeonato, já não se tinha mais o discernimento da verdade e mentira então Ralph responde.
- Prossiga.
- Não éramos para estar aqui agora, fugimos do nosso porta-aviões pois soubemos que algo desastroso está por vir, um avião especial está agora mesmo sobrevoando o ártico, carregando a ogiva apocalipse, a bomba nuclear que se solta matará a humanidade inteira!! Nosso lider está louco e não se importa com a vida de ninguem, me escute Morte, não deixe que isso aconteça, nos ajude a derrubar esse avião senão ninguém sobreviverá, em nenhum dos lados!
- Como você está falando comigo? Base, estão escutando isso?
- Cortamos sua comunicação, você está sozinho conosco agora, precisamos de sua ajuda pois sabemos de seu valor!! Por favor, venha nos ajudar!! `);
console.log();
console.log(`Em sua cabeça, começa uma contagem, sua filosofia era tomar decisões importantes em até 3 segundos, ele sabia que naquele momento poderia não sair mais vivo dali, mas não deixaria jamais de cumprir seu papel como soldado.`);

for(let i = 1; i <= 3; i++) {
    console.log(`${i}`);
}
console.log();
console.log(`ESTÁ DECIDIDO!`);
console.log();
console.log(`Leia e escolha com sabedoria uma das opções... 

Opção 1: Obedecer as ordens recebidas e voltar para a base.
Opção 2: Ficar e acreditar no que o inimigo te propôs, por um bem maior.`);
console.log();
let deci3 = +prompt(`Digite sua opção: `);

if(deci3 == 1){
    console.log();
    console.log(`- Entendo, vocês são sujos a esse ponto, jamais isso seria possível, fugir da base aerea deles e ainda passando esse nível de informação! Vocês jamais passarão, vou acabar com essa guerra e com todos os ratos que desejam aniquilação!! `);
    console.log();
    console.log(`Numa manobra inesperada, Ralph consegue derrubar um dos caças e jogar seu avião em cima do segundo. Ejetando-se, Ralph fica vulnerável para o ultimo caça inimigo, caindo em alta velocidade, Ralph num momento de ódio e insanidade mira o caça e atira com sua pistola mas nada acontece, e então é alvejado por uma rajada que o rasga inteiro... O piloto que o abateu, em choque e sabendo da realidade que não poderia mais ser mudada, simplesmente da um tiro em sua cabeça e deixa sua aeronave cair sobre aquele campo de guerra sangrento...
    
- Marechal, perdemos contato com Ralph, apareceram 3 caças e ele foi abatido, mas conseguiu abater os inimigos que o levaram... inacreditável! `);
console.log();
console.log(`Poucas horas depois, uma luz tomou toda a atmosfera daquele lugar, tudo ficou silencioso e gradativamente um estrondo incalculável foi chegando e com ele radiação, calor, e morte... o Apocalipse tinha acabado de atingir a Russia e todo aquele lado do planeta terra se acabou, tsunames jamais vistos na história, terremotos, literalmente a terra foi partida ao meio e com isso tudo que nós conhecemos, acabou.

Fim do jogo!`);
}else if(deci3 == 2){
    console.log();
    console.log(`- VOCÊ ESTÁ LOUCO?? COMO VOU ACREDITAR EM VOCÊS? OLHA ISSO QUE VOCÊ ME FALA!!! 
- Eu não consigo te provar, o que posso fazer é dar minha vida pela causa, depois disso você decide o que fará...
E numa manobra belíssimamente ousada, o caça chines voa em direção ao chão, e num piscar de olhos explode parte de seu exercito, matando muitos chineses no campo de batalha.
Ralph fica sem reação, e isso fez com que seu sangue fervesse, sua mente entrou em colapso e por um segundo tudo parou e nada fazia sentido...

- Morte, Morte!! Responda precisamos fazer isso agora!!! Aquele som abafado do rádio veio a tona e Ralph olha para os dois chineses que voavam ao seu lado, totalmente emocionado ele diz.
- Está certo, voarei com vocês! O que precisamos fazer? 

Nesse momento houve uma pequena comemoração e uma chama de esperança havia se acendido. Vamos ir agora para o oceano ártico, o avião está sobrevoando por lá agora mesmo, se conseguirmos abater eles no mar, a bomba não irá explodir pois sua detonação precisa ser ativada segundos antes de lançarem ela... então nosso heroi começa a seguir os dois pilotos e somem do radar...

- Ralph para base, Ralph para base. Estou seguindo numa missão e não retornarei, recebi informações confiáveis de que um avião portando a pior ogiva nuclear está vindo em direção a Russia, eu e mais dois pilotos chineses iremos abater a nave, câmbio desligo.
Nesse momento eles discutem a tatica e Ralph recebe informações sobre o alvo:

- Este avião está equipado com um sistema de radar altamente avançado, não conseguiremos chegar nele nem pelas costas, pois é um sistema 360º graus. O seu ponto fraco será virmos de cima, precisaremos atacar da Termosfera, onde nenhum radar pode nos alcançar. Nossas naves podem não funcionar lá de cima e podemos simplesmente cair para a morte.
O plano será de distração e abate, eu e meu companheiro iremos confrontá-lo frente a frente, e você terá o papel de derrubar aqueles desgraçados!`);
console.log();
console.log('----------------------------- || -----------------------------');
if(deci3 == 2){
    console.log();
    console.log();
    this.medo = this.medo + 30;
    this.saude = this.saude + 30;
    this.raiva = this.raiva + 30;
    this.coragem = this.coragem + 100;
    console.log();
    console.log(`Atualização de Status: medo: ${this.medo}, saude: ${this.saude}, raiva: ${this.raiva}, coragem: ${this.coragem}

Você passou dos níveis de atributos humanos, com isso foi desbloqueado um novo atributo, INSANIDADE! Com ela você poderá prosseguir com a missão...
Nível de INSANIDADE requerido: 1000.`);
console.log();
console.log('----------------------------- || -----------------------------');
console.log();
console.log(`Atualização de Status: medo: ${this.medo}, saude: ${this.saude}, raiva: ${this.raiva}, coragem: ${this.coragem}, INSANIDADE: ${this.insanidade}`);
console.log();
console.log('----------------------------- || -----------------------------');
console.log();
console.log(`- ENTENDIDO!
Ralph nunca sentiu tanto fervor, adrenalina e tudo que o movesse como estava acontecendo, ele estava fora de si e isso o ajudaria a cumprir seu papel, naquele momento nada poderia para-lo e assim seguirão para a tentativa de salvar a humanidade.`);

console.log();
console.log(`RALPH, AGORA SUBA E DESÇA COMO UMA PUNIÇÃO DIVINA PARA ESSES FILHOS DA P#$% !!

Ralph obedece e começar a subir, já no meio do oceano ártico, os chineses avistam a aeronave, preta como o vácuo do espaço, tão amendontrador quanto um leão faminto.

- Supremo líder, avistamos dois caças aliados vindo em nossa direção, devem ser os desertores! 
- Passe por cima desses vermes como se deve fazer!!

Num instante, rajadas começam a voar de ambos os lados, os caças e a aeronave do Xin Zing Zag entram num embate digno de cinema, os caças faziam de tudo para permanecerem vivos enquanto nosso heroi chegava no ponto certo e ele já estava quase lá!

Ralph voando para os ceus, vendo cada vez mais aquele ceu azul se escurecer, sua aeronave começava parar de responder, as luzes piscavam, falta de energia, a força das turbinas foram se perdendo e seu coração cada vez mais acelerado. Mas eles estava bem, estava até mesmo feliz pois aqui poderia ser um passo gigantesco para a vitória! E no momento em que Ralph chega na Termosfera, tudo se apaga, tudo parece congelar e sua queda livre começa!!!
O barulho do caça se desfazendo era amedrontador, será que ele conseguiria chegar inteiro para o abate? 
A velocidade de sua queda era tão rápida quanto seu próprio veículo supersônico, e ele se aproximava cada vez mais daquele mar azul, com um sorriso medonho em seu rosto. Ele então tenta ligar os comandos, pois não conseguia ver o alvo, mas infelizmente tudo falha e aquela porcentagem de falha se tornará cada vez mais real...

Entrando na Troposfera, ele avista "insetos" batalhando fervorosamente nos ceus! Porém, sua aeronave não ligava, e mesmo assim ele não fraquejou um segundo pois percebeu que conseguiria controlar a rota da queda até que os dois chineses foram abatidos ao mesmo tempo, dois mísseis teleguiados atingiram seus caças, explodindo-os no ar, trazendo uma luz muito forte! 
Ali Ralph entendeu que ele não poderia deixar aqueles sacrifícios serem em vão, e mesmo sem conseguir acessar suas armas, ele simplesmente direcionou seu caça em direção ao alvo! 

Neste momento, tudo foi ficando lento, o barulho do vento e do avião foi diminuindo, seu alvo parecia cada vez mais estar parado, a luz do sol iluminava seu rosto, tudo estava muito lindo, Ralph entrou num transe em que tudo o que ele enxergava era o avião do qual precisava derrubar, até que num instante, ele atinge a aeronave bem no meio, causando uma explosão silenciosa, não houve barulho, não houve testemunhas, apenas a destruição de todo o mal!! `);

console.log(`24 de Maio de 2037

Hoje se inicia um novo ciclo na espécie humana, nunca houve tanta destruição e também tanta união no mundo. Aqui do estúdio da CCB de Londres, recebemos em primeira mão e viemos anunciar finalmente o fim da guerra do caos, ontem no oceano o avião onde estava todo o grupo de governantes chineses, incluindo Xin Zing Zag, foi abatido por um caça brasileiro chamado Ralph, o piloto teve ajuda de 3 outros chineses que se rebelaram contra o governo e passaram informações surpreendentes dos quais os fizeram esses heróis mundiais salvarem todos nós, os chineses eram Ping Xin Ponk, Yang Xun Xu e Axiota Xin Zao.
Segundo o exercito russo, Ralph teve ordens para retornar até a base afim de reabastecer e voltar para o local do conflito com reforços, mas o mesmo informou a base que não iria voltar pois ele junto com os companheiros chineses iriam abater esta aeronave específica pois carregava com sigo a pior bomba já feita pela humanidade, a Ogiva Apocalipse. Num ato heroico Ralph deixou de lado tudo que amava e lutava, e assim eles conseguiram abater o avião mais letal de toda a história! Hoje pela manhã, recebemos a confirmação dos remanescentes chineses agora a frente do país, declarando o fim da guerra, que não irão prosseguir com os ataques.

Já foi agendada uma reunião na ONU para decidirem o futuro da humanidade, infelizmente aprendemos do pior jeito possível, na dor, mas que esses milhões de vidas perdidas nos ensinem o que realmente importa e que possamos alcançar a paz e renovação de nossas mentes!

Aqui é Morgana Ferreira, direto de Londres.

Obrigado!

Emocionada, Morgana lamenta a morte de seu primeiro amor e também feliz por ter conhecido e vivido com um heroi de verdade!! 
Nosso heroi foi recebido como heroi mundial por todas as nações do mundo, o homem que acabou com a pior guerra da história, e todas suas escolhas desde criança, moldaram esse ser que simplesmente foi recompensado salvando toda a humanidade!

Fim de jogo!`);
}
}
},

}

function acao1 (decisao){

if (decisao == 1) {
    console.log(
        "Ralph consegue ferir seu tio e sair sem muitos danos corporais e mentais."
      );
      console.log();
      console.log(`Atualização de status Medo ${medo - 20}`);
      console.log(`Atualização de status Saude: ${saude - 30}`);
      console.log(`Atualização de status Raiva: ${raiva - 20}`);
      console.log(`Atualização de status Coragem: ${coragem - 15}`);
      
      medo = medo - 20;
      saude = saude - 30;
      raiva = raiva - 20;
      coragem = coragem - 15;
  

        intervalo1();
} else {
    console.log();    
    console.log(
          "Ralph consegue furgir, mas infelizmente o trauma foi muito grande e suas consequencias serão fisicas e principalmente mentais."
        );
        console.log();
        console.log(`Atualização de status Medo: ${medo - 40}`);
        console.log(`Atualização de status Saude: ${saude - 40}`);
        console.log(`Atualização de status Raiva: ${raiva - 30}`);
        console.log(`Atualização de status Coragem: ${coragem - 30}`);
        medo = medo - 40;
        saude = saude - 30;
        raiva = raiva - 30;
        coragem = coragem - 30;

        let hora = 8;
        let minuto = 0;
        let tempo = 0;
    
    console.log(`20 de Março de 2031.
    
6:00 da manhã, São Paulo, Brasil.
        
O alarme toca, Ralph levanta e se arruma para ir a escola. Chegando no portão, avista Morgana, sua amiga do qual foi apaixonado desde a 5º série, hoje no ultimo ano de escola, estão prestes a seguir caminhos diferentes. Vida nova, trabalho, estudo e a ultima chance de Ralph mostrar seu sentimento por ela seria neste dia, onde terá uma festa de despedida de todos os alunos...
Todos entram pelo portão e assim, o dia academico se inicia. Durante a aula papo vai, papo vem, e surge a ideia na cabeça de Ralph "Po, ultima chance que eu vou ter é combinar de ir com ela para a festa, eu preciso chamar ela, senão vai ser tarde. No intervalo eu falo com ela, primeiro passo é chamar ela para almoçar comigo."`)
    console.log();
    
        while(hora <= 9){
            tempo = Math.floor(Math.random() * 60);
            minuto += tempo;
                if (minuto >= 60){
                minuto = minuto - 60
                hora++
                }
    
    }
    console.log(`São ${hora}:${minuto}`);
    console.log('Vou falar com ela!!');
    console.log();
    console.log(`Chamar Morgana para almoçar? 
Opção1 1: sim 
Opção2 2: não`)
    
    cond1 = +prompt('Insira sua opção: ');
    if(coragem < 25){
        console.log();
        console.log('Coragem insuficiente! Para chamar Morgana para almoçar, você precisará de 25 de CORAGEM!!');
        console.log();
        console.log(`- Eu não tive coragem o suficiente... acho que não vou chama-lá para ir comigo, se ela me chamar eu vou mas eu não consigo ir atrás dela.
        Soa a sirene da escola, todos saem do prédio e Ralph numa ultima tentativa de falar com Morgana, a procura, mas não a encontra, grita por ela mas nada, tinha muitas gente na rua, ultimo dia de aula todos estavam se despedindo de seus amigos. Ralph não desistiu até avistar Morgana mais a frente do outro lado da rua, muitos carros passavam na avenida, dificultando a vista, então decidiu ir correndo atrás dela.
        Mas no momento em que o carro que tampava sua visão sai, Ralph vê Morgana abraçada com um menino, nisso seu coração se gela, seu corpo congela e numa fração de segundos, uma moto saindo de trás de um ônibus, o atropela! Ralph, já não teve mais chances de conseguir o que queria e sua vida se acabava melancolicamente naquele momento.`);
        console.log();
        console.log('Fim de jogo!');
    }

}

}    

function intervalo1 (){ 
    console.log();
    console.log(`20 de Dezembro de 2031.
    
6:00 da manhã, São Paulo, Brasil.
        
O alarme toca, Ralph levanta e se arruma para ir a escola. Chegando no portão, avista Morgana, sua amiga do qual foi apaixonado desde a 5º série, hoje no ultimo ano de escola, estão prestes a seguir caminhos diferentes. Vida nova, trabalho, estudo e a ultima chance de Ralph mostrar seu sentimento por ela seria neste dia, onde terá uma festa de despedida de todos os alunos...
Todos entram pelo portão e assim, o dia academico se inicia. Durante a aula papo vai, papo vem, e surge a ideia na cabeça de Ralph "Po, ultima chance que eu vou ter é combinar de ir com ela para a festa, eu preciso chamar ela, senão vai ser tarde. No intervalo eu falo com ela, primeiro passo é chamar ela para almoçar comigo."`)
    
    console.log();
    relogio();
    console.log();
    
    console.log();
    console.log(
      `Como quando criança, o mundo fica em camera lenta e em seguida começa um contagem.`
    );
    for (let i = 1; i <= 3; i++) {
      console.log(`${i}`);
    }
    console.log();
    console.log(`Preciso agir agora!!`);
    console.log();
    
    console.log('Vou falar com ela!!');
    console.log();
    console.log(`Chamar Morgana para almoçar? 
Opção1 1: sim 
Opção2 2: não`)
    console.log();
    cond1 = +prompt('Insira sua opção: ');
    console.log();
        if(cond1 == 1){
        console.log();
        console.log(`- Morgana, to afim de comer uma coisa da cantina hoje, vamos comigo?
- Claro, quero comprar aquela coxinha maravilhosa, to aguada faz tempo.`);
        console.log();
        console.log('Bate o sinal do intervalo, ambos chegam na cantina e Ralph fala: ');
        console.log(`- Morgana, eu queria saber se você vai para a festa hoje mais tarde, vai ter a despedida de todo mundo né, vai ser legal...
- Vou sim, só não combinei com ninguem ainda, mas quero ir!`);
        console.log();
        console.log(`Convidar Morgana?
Opção 1: sim
Opção 2: não`);
        console.log();
        let convite = prompt('Digite sua opção: ');
        console.log();
        if(convite == 1){
        console.log(`- Ah, vamos comigo vai ser divertido com certeza, melhor companhia que eu não há hahaha.
- Claro, vamos sim vai ser ótimo! Afinal, o que seria de você sem mim?? `);
    
        console.log();
        console.log(`Chega a noite, Ralph na sua melhor aparencia possível, encontra Morgana, linda como nunca havia visto antes. Aquela noite seria inesquecivel para ambos, apaixonados e finalmente teriam uma chance real, e dali para frente, só a vida falaria o desfecho da história.
A noite foi maravilhosa, conversaram, riram, se divertiram e finalmente tiveram o beijo apaixonado. Ralph com sua coragem renovada, leva sua amada para um lugar reservado e naquela noite mágica, ambos conheceram um lado da vida novo, mas maravilhoso!!`);    
        console.log();
    
    let engravidar = Math.floor(Math.random() * 10);
        if(engravidar == 5){
        console.log(`Depois de alguams semanas, Morgana começa a se sentir estranha, ela fala com Ralph e de primeira foram verificar se tinham gerado um bebe e realmente, estava feito! Um nenem viria para a vida de ambos, e o baque foi enorme mas com o passar do tempo os dois aceitaram e decidiram ficar juntos para sempre, para ter a melhor vida possível...`);
        console.log();
        console.log(`Passados 30 anos, Ralph e Morgana conversam e veem a vida que tiverem juntos, a melhor escolha que Ralph poderia ter tido foi chamar o amor da vida dele para ir numa festa, do qual fez com que ambos vivessem uma vida mágica, com um filho incrivel puxando o melhor dos dois, Mael.
Abençoado como o nome, um homem bom e bem sucedido. E assim foi a vida de Ralph, nada de tão excepcional, mas teve uma vida perfeita, digna de um romance!`);
        console.log();    
        console.log(`Fim de jogo! `);

    }

    console.log(`26 de Fevereiro de 2034

5:20 da manhã, São Paulo, Brasil.
    
Ralph acorda com a trombeta do oficial Marques, primeiro sargento do qual seria responsável pela orientação nas especializações do exercito. Ralph acabou entrando no exercito com seus 20 anos, depois de ter uma briga feia com Morgana, sua amada, nosso heroi acabou se separando dela, tiveram problemas em relação a filhos, ela queria mas Ralph não, ele sentia que não poderia ficar preso há nada pois seria de grande importancia em alguma coisa, e essa intuição dele serviu de incentivo para entrar no exercito brasileiro. Com o mundo cada vez mais perigoso e com rumores de guerras assolando todas civilizações, ele achou util servir seu país e lutar por algo concreto.
Desde pequeno Ralph se mostrava corajoso e para frente, uma pessoa que desafiaria o mundo não importa o que acontecesse, e ele estava certo, conseguiu se desenvolver e ser destaque. Conversou com sua familia e seguiu carreira militar, agora passado mais 3 anos depois de sua entrada, Ralph com 23 anos, no auge da forma física e mental, atingiu o posto de subtenente, onde teve o privilégio de escolher sua especialidade com a tutela do então Primeiro Tenente, Marques.

8:36 da manhã.

- Sentido sargento! 
- Sentido, tenente! 
    
- Depois de todo treinamento e resultados mostrados, temos a honra de te apresentar algumas vertentes que se encaixa com o que você demostrou aqui durante sua carreira, hoje você escolherá se continuará no exercito como um atirador de elite ou então, passará para aeronautica e será um piloto de caça. Te desejo os parabens novamente pela promoção.
- Muito obrigado tenente, posso pensar uns minutos para definir minha escolha?
- Sim, mas não demore mais que 10 minutos

8:${36 + 10} da manhã.

- E então? Qual sua resposta?`);
console.log();

console.log(`Mais uma vez, o mundo fica em camera lenta e em seguida começa sua contagem, agora com outros olhos, Ralph torna isso sua filosofia de vida, não levar mais que 3 segundo para decidir algo importante.`);
for(let i = 1; i <= 3; i++) {
    console.log(`${i}`);    
}
console.log();
console.log(`Preciso decidir isso agora.`);
console.log();
stt.fase2();

    
}else{
    console.log(`- Eu não tive coragem o suficiente... acho que não vou chama-lá para ir comigo, se ela me chamar eu vou mas eu não consigo ir atrás dela.
Soa a sirene da escola, todos saem do prédio e Ralph numa ultima tentativa de falar com Morgana, a procura, mas não a encontra, grita por ela mas nada, tinha muitas gente na rua, ultimo dia de aula todos estavam se despedindo de seus amigos. Ralph não desistiu até avistar Morgana mais a frente do outro lado da rua, muitos carros passavam na avenida, dificultando a vista, então decidiu ir correndo atrás dela.
Mas no momento em que o carro que tampava sua visão sai, Ralph vê Morgana abraçada com um menino, nisso seu coração se gela, seu corpo congela e numa fração de segundos, uma moto saindo de trás de um ônibus, o atropela! Ralph, já não teve mais chances de conseguir o que queria e sua vida se acabava melancolicamente naquele momento.`);
    console.log();
    console.log('Fim de jogo!');
}
}else{
    console.log(`- Eu não tive coragem o suficiente... acho que não vou chama-lá para ir comigo, se ela me chamar eu vou mas eu não consigo ir atrás dela.
Soa a sirene da escola, todos saem do prédio e Ralph numa ultima tentativa de falar com Morgana, a procura, mas não a encontra, grita por ela mas nada, tinha muitas gente na rua, ultimo dia de aula todos estavam se despedindo de seus amigos. Ralph não desistiu até avistar Morgana mais a frente do outro lado da rua, muitos carros passavam na avenida, dificultando a vista, então decidiu ir correndo atrás dela.
Mas no momento em que o carro que tampava sua visão sai, Ralph vê Morgana abraçada com um menino, nisso seu coração se gela, seu corpo congela e numa fração de segundos, uma moto saindo de trás de um ônibus, o atropela! Ralph, já não teve mais chances de conseguir o que queria e sua vida se acabava melancolicamente naquele momento.`);
    console.log();
    console.log('Fim de jogo!');
}
}

function relogio(){
        let hora = 8;
        let minuto = 0;
        let tempo = 0;
        
        while(hora <= 10){
            tempo = Math.floor(Math.random() * 60);
            minuto += tempo;
                if (minuto >= 60){
                minuto = minuto - 60
                hora++
                }
    
    }
    console.log(`${hora}:${minuto} da manhã.`);
    
}

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

let acao = +prompt(`Escolha sua opção: `);
acao1(acao);

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

let repet = 'SIM';
while(repet == 'SIM'){
    medo = 50;
    saude = 50;
    raiva = 50;
    coragem = 50;
    console.log();
    repet = prompt(`Jogar novamente?  `).toUpperCase();
    console.log();
    
    if(repet != 'SIM'){
        break;
    }

    console.log(`Opção 1: Peguei a faca, furei a mão dele e consegui fugir...
Opção 2: Peguei o copo de vidro e joguei na cabeça dele, e ele caiu. `);
    acao = +prompt(`Escolha sua opção: `);
    acao1(acao);
}

console.log();
