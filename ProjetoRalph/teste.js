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
console.log(`Em sua cabeça, o mundo fica em camera lenta e em seguida começa um contagem.`);
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

var stt = {medo:50, saude:50, raiva:50, coragem:50,

    fase2: function(){
    console.log(`Opção 1: atirador de elite.
Opção 2: piloto de caça`);
    console.log();
    let escolha = +prompt(`Digite sua escolha:`);
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
        console.log(`Uma escolha de coragem, você realmente conseguirá exercer tudo o que for passado e nos ajudar mais dos céus!!`);
        stt.piloto();
    }
    // AQUI É A FASE DO PILOTO, DESENVOLVER A HISTORIA DENTRO DA FUNÇÃO PILOTO E PROSSEGUIR COM A HISTÓRIA
},

sniper: function(){
    console.log();
    console.log(`23 de Maio de 2037

Passado exatamente um ano depois do anuncio da guerra do caos, nações brigavam entre si gerando mais mortes do que todas as outras guerras travadas, o numero de vitimas era absurdo pois os governos mandavam todo tipo de pessoa defender seu país, desde mulheres e até mesmo adolecentes a partir de 16 anos.
Nosso heroi agora se encontrava numa floresta fechada chinesa, cabeça e unico sobrevivente do esquadrão especial GTAG (Grupo Tático de Aniquilação Global), do qual foram responsáveis por matar o atual ditador chines, Xin Zing Zag. Sua tentativa de dominação global através de armas químicas fizeram com que um lado do planeta terra se virasse contra ele e assim começado a pior guerra de toda nossa história!

Parado no clima gélido da floresta, Ralph seguia escondido pois havia muitas rondas por aquele terreno. Informações coletadas ao decorrer da missão, fez Ralph e seus companheiros acharem o covil do odioso ditador chines, mas para que a missão fosse um sucesso, nosso heroi precisava de apenas uma baixa, e a mais importante! Xin Zing Zag obrigou nações se juntarem a eles na base do medo, o mesmo explodiu a Austrália como forma de poder e ameaçou suas provincias e outros países a se juntarem há sua causa... Ralph imóvel, mal respirava pois por lá, andava um batalhão de mais ou menos 20 homens, todos soldados de baixo escalão, até então tudo bem pois era apenas varredura do perímetro, o castelo de Xin, estava protegido com a elite.
Está guerra, com a alta tecnologia, principalmente armamentista, se passava muito rápido e a China estava vencendo o mundo. Muitos países tiveram protestos, paciatas para o fim da guerra, fora o caos que reinava em todos os cantos do planeta, o exercito russo, eram o governo opositor, recebeu informações de que os próprios chineses não queriam mais guerrear pois não fazia mais sentido acabar com toda a raça humana, mas sem derrubar o ditador, seria impossível um cessar-fogo e com isso, Ralph se torna a esperança mundial!`);
    console.log();
    relogio.hora = 6;
    relogio();
    console.log();

    console.log(`O primeiro batalhão passou por Ralph, mas o dia estava apenas começando, no momento em que nosso heroi se prepara para avançar terreno, é avistado por um esquadrão novo que fazia a ronda, o esquadrão se aproxíma dele, gritando e vencendo o terreno com muita agilidade. 
Infelizmente ele não tinha o que fazer, naquela altura do campeonato seria capturado e em seguida seria morto, e uma das coisas que não poderia acontecer é informações da missão serem reveladas para Xin Zing Zag.
Ralph num momento onde suas emoções afloraram, pensou na missão, e tido como vencido, pensou em tirar sua própria vida...`);

    // console.log(`1 - Tentar fugir e enfrentar o batalhão numa posição favorável, afinal, a floresta tinha muitos desníveis, com pedras e até riachos.
    // 2 - Se matar com uma granada, tirando qualquer chance de vantagem tática fornecida através de informações`);

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
Nosso heroi foi recebido como heroi mundial por todas as nações do mundo, o homem que acabou com a pior guerra da história, e todas suas escolhas desde criança, moldaram esse homem que simplesmente foi recompensado salvando toda a humanidade!

Fim de jogo.`);
}

// FAZER A PARTE DO QUAL ELE MATA A PORRA DO XIN ZING ZAG KKKKKKKKKK 
}

},

piloto: function(){

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