const prompt = require('prompt-sync')();

// var status = {medo:50, saude:50, raiva:50, coragem:50,};
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
console.log(`Opção 1: Peguei a faca, furei a mão dele e consegui fugir...
Opção 2: Peguei o copo de vidro e joguei na cabeça dele, e ele caiu. `);


// COMO FAZER UMA REPETIÇÃO EM UM ELSE MAS QUE VOLTE O JOGO TODO
  
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

        // intervalo1();
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

        intervalo2();
}
}    

let acao = +prompt(`Escolha sua opção: `);
acao1(acao);

console.log();

// }
/*
function intervalo1 (){ 
    let hora = 8;
    let minuto = 0;
    let tempo = 0;

console.log(`20 de Março de 2031.

6:00 da manhã, São Paulo, Brasil.
    
O alarme toca, Ralph levanta e se arruma para ir a escola. Chegando no portão, avista Morgana, sua amiga do qual foi apaixonado desde a 5º série, hoje no ultimo ano de escola, estão prestes a seguir caminhos diferentes. Vida nova, trabalho, estudo e a ultima chance de Ralph mostrar seu sentimento por ela seria neste dia, onde terá uma festa de despedida de todos os alunos...
Todos entram pelo portão e assim, o dia academico se inicia. Durante a aula papo vai, papo vem, e surge a ideia na cabeça de Ralph "Po, ultima chance que eu vou ter é combinar de ir com ela para a festa, eu preciso chamar ela, senão vai ser tarde. No intervalo eu falo com ela, primeiro passo é chamar ela para almoçar comigo."`)
console.log();

    while(hora <= 12){
        tempo = Math.floor(Math.random() * 60);
        minuto += tempo;
            if (minuto >= 60){
            minuto = minuto - 60
            hora++
            }

console.log(`São ${hora}:${minuto}`);
}

console.log('Vou falar com ela!!');
console.log();
console.log(`Chamar Morgana para almoçar? 
Opção1 1: sim 
Opção2 2: não`)

cond1 = +prompt('Insira sua opção: ');
if(coragem == 20){
    console.log('Coragem insuficiente! Para chamar Morgana para conversar você precisará de 25 de CORAGEM!!')
}

// PRECISO FAZER ESSE CODIGO SER A PARTE QUE FAZ VOCê VOLTAR A JOGAR!!!
repet = prompt('Deseja recomeçar? ').toLowerCase();
if(repet != 'sim'){
    console.log('Fim de jogo!');
}

}
*/

function intervalo2 (){ 
    let hora = 8;
    let minuto = 0; 
    let tempo = 0;

console.log(`20 de Março de 2031.

6:00 da manhã, São Paulo, Brasil.
    
O alarme toca, Ralph levanta e se arruma para ir a escola. Chegando no portão, avista Morgana, sua amiga do qual foi apaixonado desde a 5º série, hoje no ultimo ano de escola, estão prestes a seguir caminhos diferentes. Vida nova, trabalho, estudo e a ultima chance de Ralph mostrar seu sentimento por ela seria neste dia, onde terá uma festa de despedida de todos os alunos...
Todos entram pelo portão e assim, o dia academico se inicia. Durante a aula papo vai, papo vem, e surge a ideia na cabeça de Ralph "Po, ultima chance que eu vou ter é combinar de ir com ela para a festa, eu preciso chamar ela, senão vai ser tarde. No intervalo eu falo com ela, primeiro passo é chamar ela para almoçar comigo."`)
console.log();

    while (hora <= 9) {
      tempo = Math.floor(Math.random() * 60);
      minuto += tempo;
      if (minuto >= 60) {
        minuto = minuto - 60;
        hora++;
      }

    }
    console.log(`Já são ${hora}:${minuto}`);

console.log('Vou falar com ela!!');
console.log();
console.log(`Chamar Morgana para almoçar? 
Opção1 1: sim 
Opção2 2: não`)

cond1 = +prompt('Insira sua opção: ');
if(coragem == 20){
    console.log();
    console.log('Coragem insuficiente! Para chamar Morgana para almoçar, você precisará de 25 de CORAGEM!!');
    console.log();
    console.log(`- Eu não tive coragem o suficiente... acho que não vou chama-lá para ir comigo, se ela me chamar eu vou mas eu não consigo ir atrás dela.
    Soa a sirene da escola, todos saem do prédio e Ralph numa ultima tentativa de falar com Morgana, a procura, mas não a encontra, grita por ela mas nada, tinha muitas gente na rua, ultimo dia de aula todos estavam se despedindo de seus amigos. Ralph não desistiu até avistar Morgana mais a frente do outro lado da rua, muitos carros passavam na avenida, dificultando a vista, então decidiu ir correndo atrás dela.
    Mas no momento em que o carro que tampava sua visão sai, Ralph vê Morgana abraçada com um menino, nisso seu coração se gela, seu corpo congela e numa fração de segundos, uma moto saindo de trás de um ônibus, o atropela! Ralph, já não teve mais chances de conseguir o que queria e sua vida se acabava melancolicamente naquele momento.`);
    console.log();
    console.log('Fim de jogo!');
}


// PRECISO FAZER ESSE CODIGO SER A PARTE QUE FAZ VOCê VOLTAR A JOGAR!!!

}


// }


// console.log(`- Morgana, to afim de comer uma coisa da cantina hoje, vamos comigo?
// - Claro, quero comprar aquela coxinha maravilhosa, to aguada faz tempo.`);
    // Ralph conhece Morgana na escola e pode namorar ela, SE namorar, vai precisar de coragem 45, saude 40 e medo 30  inicia um relacionamento, colocar a possibilidade de terem um filho, se acontecer de terem um filho ele vai escolher se vai ou não pra guerra, SE escolher que vai, a historia continua normalmente, SE não, ele consegue viver e ver sua filha crescendo, terá uma vida boa e acaba a historia.
    // SE não namorar, ele treinará artes marciais e isso ajudará ele a entrar no exercito com mais facilidade

// se vc n atingir um nivel de status vc n pega a morgana e morre num acidente tragico