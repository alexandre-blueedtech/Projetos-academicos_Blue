const prompt = require('prompt-sync')();

let eleicao = {can1: 'Lolsobaro', can2: 'Nula', can3: 'Bolo', votoNulo: 'Nulo', votoBranco: 'Branco',

autorizaVoto: function(anoNasci){
       
    console.log();
        
    if (anoNasci < 18) {
      return console.log(
        "Voto negado, você não pode votar pois não possui a maioridade."
      );
   
    } else if (anoNasci >= 18 && anoNasci < 60) {
      console.log("Voto obrigatório, sujeito a multa.");
      console.log();
      let voto = +prompt('Escreva o digito de seu voto: ');
      console.log();
      
      if (voto == 1) {
        console.log(`Você votou em ${this.can1}`);
        return cand1.push(voto);

      } else if (voto == 2) {
        console.log(`Você votou em ${this.can2}`);
        return cand2.push(voto);

      } else if (voto == 3) {
        console.log(`Você votou em ${this.can3}`);
        return cand3.push(voto);

      } else if (voto == 4) {
        console.log(`Você votou em ${this.votoNulo}`);
        return nulo.push(voto);

      } else if (voto == 5) {
        console.log(`Você votou em ${this.votoBranco}`);
        return branco.push(voto);

      }
    
    } else if (anoNasci >= 60) {
      console.log("Voto opcional, deseja votar? ");
      let confir = +prompt(`1 para "SIM" e 2 para "NÃO". `);
      
      if(confir == 1){
        
        console.log();
        voto = +prompt('Escreva o digito de seu voto: ');
        console.log();
        if (voto == 1) {
          console.log(`Você votou em ${this.can1}`);
          return cand1.push(voto);
  
        } else if (voto == 2) {
          console.log(`Você votou em ${this.can2}`);
          return cand2.push(voto);
  
        } else if (voto == 3) {
          console.log(`Você votou em ${this.can3}`);
          return cand3.push(voto);
  
        } else if (voto == 4) {
          console.log(`Você votou em ${this.votoNulo}`);
          return nulo.push(voto);
  
        } else if (voto == 5) {
          console.log(`Você votou em ${this.votoBranco}`);
          return branco.push(voto);
  
        }
      }else{
        console.log('Operação cancelada.');
      }
    }

},
exibirResultados: function(){
console.log(`Resultado das eleições 2023: `);
console.log();
console.log(`Votos cadidato 1 - ${this.can1}: ${cand1.length}
Votos cadidato 2 - ${this.can2}: ${cand2.length}
Votos cadidato 3 - ${this.can3}: ${cand3.length}
Votos nulo: ${nulo.length}
Votos branco: ${branco.length}`);

if(cand1.length > cand2.length && cand1.length > cand3.length && cand1.length > nulo.length && cand1.length > branco.length){
  console.log();
  console.log(`O candidato ${this.can1} foi o vencedor desta edição das eleições!`);

}else if(cand2.length > cand1.length && cand2.length > cand3.length && cand2.length > nulo.length && cand2.length > branco.length){
  console.log();
  console.log(`O candidato ${this.can2} foi o vencedor desta edição das eleições!`);

}else if(cand3.length > cand1.length && cand3.length > cand2.length && cand3.length > nulo.length && cand3.length > branco.length){
  console.log();
  console.log(`O candidato ${this.can3} foi o vencedor desta edição das eleições!`);

}else if(nulo.length > cand1.length && nulo.length > cand2.length && nulo.length > cand3.length && nulo.length > branco.length){
  console.log();
  console.log(`Nenhum candidato venceu, os votos nulos tiveram a maior votação, por tanto, a eleição precisará ser refeita.`);

}else if(branco.length > cand1.length && branco.length > cand2.length && branco.length > cand3.length && branco.length > nulo.length){
  console.log();
  console.log(`Nenhum candidato venceu, os votos brancos tiveram a maior votação, por tanto, a eleição precisará ser refeita.`);

}else if(cand1.length == cand2.length && cand2.length == cand3.length && cand3.length == nulo.length && nulo.length == branco.length && branco.length == cand1.length){
  console.log();
  console.log('Votações empatadas, uma nova eleição deverá ser feita!');
}

}

}

let cand1 = [];
let cand2 = [];
let cand3 = [];
let nulo = [];
let branco = [];

let continuar = '';

do{
    console.log(`As eleições de 2023 começaram, veja suas opções e vote consciente.

Candidato 1: ${eleicao.can1}
Candidato 2: ${eleicao.can2}
Candidato 3: ${eleicao.can3}
Opção 4: Voto ${eleicao.votoNulo}
Opção 5: Voto ${eleicao.votoBranco}`);
      
    console.log();
    let nome = prompt("Nome do eleitor: ");
    let idade = +prompt("Idade do eleitor: ");
    eleicao.autorizaVoto(idade);
    console.log();
    continuar = prompt("Deseja votar novamente? ").toLowerCase();
    console.log();
}while(continuar == 'sim'){
    
}

eleicao.exibirResultados();