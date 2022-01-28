const prompt = require('prompt-sync')();

const jokenpo = ['PEDRA', 'PAPEL', 'TESOURA'];
// let qtsRodadas = +prompt('Quantas rodadas deseja jogar? ');

let p1Venceu = [];
let pcVenceu = [];
let repet = 'sim';

while(repet == 'sim'){
    let jogadaP1 = prompt('Faça sua jogada, escolha entre "Pedra", "Papel" e "Tesoura": ').toUpperCase();
    while (jogadaP1 != 'PEDRA' && jogadaP1 != 'PAPEL' && jogadaP1 != 'TESOURA') {
        console.log('Jogada inválida, tente novamente.')
        jogadaP1 = prompt('Faça sua jogada, escolha entre "Pedra", "Papel" e "Tesoura": ').toUpperCase();
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
            
        } else if (jogadaP1 == 'PAPEL' && jogadaPc == 2) {
            console.log(`O PC venceu!`);

        } else if (jogadaP1 == 'TESOURA' && jogadaPc == 0) {
            console.log(`O PC venceu!`);
        
        } else if (jogadaP1 == 'PEDRA' && jogadaPc == 2) {
            console.log(`Você venceu!`);

        } else if (jogadaP1 == 'PAPEL' && jogadaPc == 0) {
            console.log(`Você venceu!`);

        } else if (jogadaP1 == 'TESOURA' && jogadaPc == 1) {
            console.log(`Você venceu!`);

        } else{
            console.log('Empate, tentem novamente!');
        }   
         
    console.log();
    
    repet = prompt('Deseja jogar novamente? ').toLowerCase();  
    console.log();
    
}







   
    
// while(jogadaP1 != 'PEDRA' && jogadaP1 != 'PAPEL' && jogadaP1 != 'TESOURA'){
//     console.log('Jogada inválida, tente novamente.')
//     jogadaP1 = prompt('Faça sua jogada, escolha entre "Pedra", "Papel" e "Tesoura": ').toUpperCase();
// }
// jogadas.push(jogadaP1);

// let pedra = jokenpo[0];
// let papel = jokenpo[1];
// let teso = jokenpo[2];

// if(jogadaPc == 0){
//     console.log(`Escolha PC: ${pedra}`);

// }else if(jogadaPc == 1){
// console.log(`Escolha PC: ${papel}`);

// }else{
// console.log(`Escolha PC: ${teso}`);
// }

// console.log(`Sua escolha: ${jogadas}`);


// if(jogadas == 'PEDRA' && jogadaPc == 1){
//     console.log(`O PC venceu!`);

// }else if (jogadas == 'PAPEL' && jogadaPc == 2){
//     console.log(`O PC venceu!`);

// }else if (jogadas == 'TESOURA' && jogadaPc == 0){
//     console.log(`O PC venceu!`);

// }else if (jogadas == 'PEDRA' && jogadaPc == 2){
//     console.log(`Você venceu!`);

// }else if (jogadas == 'PAPEL' && jogadaPc == 0){
//     console.log(`Você venceu!`);

// }else if (jogadas == 'TESOURA' && jogadaPc == 1){
//     console.log(`Você venceu!`);

// }else{
//     console.log('Empate, tentem novamente!')
// }

// usar o .push, .pop, .splice para conseguir tirar os itens de dentro de um Array, use esses metodos para tirar algo especifico de um array e colocar em um outro que vc fará, uma variavel
// for of sera quem vai tirar o item especifico de um array, exemplo: Se eu quiser tirar só as decisoes sim de um array, usei for of