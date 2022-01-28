const prompt = require('prompt-sync')();

const jokenpo = ['PEDRA', 'PAPEL', 'TESOURA'];
let p1Venceu = 0;
let pcVenceu = 0;
let repet = 'sim';
console.log(`Olá, me chamo Keven! Sou um Dev, quero lhe apresentar um desafio inimaginável. Quero ver se você é capaz de vencer nada mais nada menos que o "PC DA NASA"!!
Desenvolvi esse jogo junto há um time de cientistas especializados em probabilidades. A ideia do jogo é ver se um humano pode vencer o PC num jogo de Jokenpô! 
As regras são simples, existem 3 elementos para a disputa, sendo eles 'Pedra', 'Papel' e 'Tesoura', sendo assim, vamos ver as condições de vitoria, quem ganha de quem...


PEDRA ganha de TESOURA(Pedra quebra Tesoura), e perde para PAPEL(Papel embrulha Pedra).
PAPEL ganha de PEDRA(Papel embrulha Pedra), e perde para TESOURA(Tesoura corta Papel).
TESOURA ganha de PAPEL(Tesoura corta Papel), e perde para PEDRA(Pedra quebra Tesoura).

Acha que consegue vencer o poderoso PC DA NASA e suas altas probabilidades de vitória? Vamos conferir, boa sorte!
`)

let nome = prompt('Diga jogador, qual seu nome? ').toUpperCase();
 

while(repet == 'sim'){
    let rodadas = +prompt(`É um prazer ${nome}, quantas rodadas deseja jogar? `);
    console.log('Ótimo, vamos lá!');

    for(let i = 0; i < rodadas; i++){
        let jogadaP1 = prompt(`${nome}, faça sua jogada. Escolha entre "Pedra", "Papel" e "Tesoura": `).toUpperCase();
        
        while (jogadaP1 != 'PEDRA' && jogadaP1 != 'PAPEL' && jogadaP1 != 'TESOURA') {
            console.log('Jogada inválida, tente novamente.')
            jogadaP1 = prompt(`${nome}, faça sua jogada. Escolha entre "Pedra", "Papel" e "Tesoura": `).toUpperCase();
        }

        let pedra = jokenpo[0];
        let papel = jokenpo[1];
        let teso = jokenpo[2];
        let jogadaPc = Math.floor(Math.random() * jokenpo.length);

        if (jogadaPc == 0) {
            console.log(`Escolha PC: ${pedra}`);

        } else if (jogadaPc == 1) {
            console.log(`Escolha PC: ${papel}`);

        } else {
            console.log(`Escolha PC: ${teso}`);
        }

        console.log(`Sua escolha: ${jogadaP1}`);
        console.log();

        if (jogadaP1 == 'PEDRA' && jogadaPc == 1) {
            console.log(`O PC venceu!`);
            pcVenceu++
        } else if (jogadaP1 == 'PAPEL' && jogadaPc == 2) {
            console.log(`O PC venceu!`);
            pcVenceu++;

        } else if (jogadaP1 == 'TESOURA' && jogadaPc == 0) {
            console.log(`O PC venceu!`);
            pcVenceu++;

        } else if (jogadaP1 == 'PEDRA' && jogadaPc == 2) {
            console.log(`Você venceu!`);
            p1Venceu++

        } else if (jogadaP1 == 'PAPEL' && jogadaPc == 0) {
            console.log(`Você venceu!`);
            p1Venceu++

        } else if (jogadaP1 == 'TESOURA' && jogadaPc == 1) {
            console.log(`Você venceu!`);
            p1Venceu++

        } else {
            console.log('Empate, tentem novamente!');
        }

        console.log();

        console.log(`PLACAR: ${nome} ${p1Venceu} x ${pcVenceu} PC`);
        console.log();
        

    }
    
    if(p1Venceu > pcVenceu){
        console.log(`Jogo encerrado! Você provou seu valor e que está acima até mesmo das probabilidades, o grande campeão: ${nome}, parabéns!! `)
    }else if(pcVenceu > p1Venceu){
        console.log(`Jogo encerrado! Realmente é dificil vencer um oponente como este, mas não desanime, isso acontece com 99% das pessoas... O grande campeão foi: PC DA NASA!! `)
    }else{
        console.log(`Jogo encerrado, não houve um campeão. >:|`);
    }
    console.log();
    repet = prompt('Deseja jogar novamente? ').toLowerCase();
    
    pcVenceu = 0;
    p1Venceu = 0;

    
}







