const prompt = require('prompt-sync')();

console.log(`Um oficial recem formado na academia militar está prestes a conseguir um feito do qual colocaria sua carreira em outro nível. 
Vlad o novo detetive do centro de Inteligência Russa 'ITSA' caiu em cima de um caso desdenhado por seus companheiros de agencia, por ser 'simples' mas que no final, mudaria toda a cadeia da corporação.
Houve um assassinato de um informante da ITSA que começou a dar informações valiosas sobre os cabeças de todo o governo e inteligencias militares, seu nome era Iuri Askov. A vitima fazia parte de uma mafia local, que estavam trabalhando secretamente como mercenarios para o governo.
Estranho que um caso desse peso esteja sendo jogado no fundo do arquivo, mas Vlad, por ser novo foi subestimado, mal sabiam que desde seus 6 anos, já se mostrava um genio, prodigio, do qual nenhum detalhe se passava despercebido.
E a unica ponta solta deste crime quase perfeito foi um adolecente, que frequentou sempre o lugar do crime, um restaurante chamado ROZCOZOVO, frequentado pela elite.
Depois de estudar muito o caso, tirou o jovem como um dos suspeitos. 
Até que em uma noite, muito discreto, Vlad consegue isolar o jovem e o começa questionar...`)

console.log();

console.log('Olá, sou o Detetive Vlad e gostaria de fazer algumas perguntas, não temos muito tempo e preciso que seja breve, suas respostas devem ser Sim ou Não apenas, ok?! Certo, você esteve no ROZCOZOVO no dia 21/02 às 20:00?');
let perg1 = prompt(`Diga, Sim ou Não? `).toLowerCase();
console.log();

let perg2 = prompt(`Você conhece este homem? Seu nome é Iuri Askov. `).toLowerCase();
console.log();

let perg3 = prompt(`Certo, você se encontrou com ele em algum momento no dia 21/02? `).toLowerCase();
console.log();

console.log('Obrigado pelas respostas, suas informações me ajudaram a entender mais sobre o caso. É arriscado fazer qualquer coisa aqui, ainda mais num lugar como esse, um restaurante da elite frequentado até por membros da máfia, você sempre frequenta esse tipo de ambiente? ');
let perg4 = prompt(`Diga, Sim ou Não? `).toLowerCase();
console.log();

console.log('Entendo...  mais uma vez obrigado pelas informações! Para finalizarmos, vi você saindo de um sedã preto com rodas de faixa branca, o carro é seu? ');
let perg5 = prompt(``).toLowerCase();
let x = 0;
console.log();

if(perg1 == 'sim'){
    x = x + 1
}else{
    
}
if(perg2 == 'sim'){
    x = x + 1
}else{

}
if(perg3 == 'sim'){
    x = x + 1
}else{

}
if(perg4 == 'sim'){
    x = x + 1
}else{

}
if(perg5 == 'sim'){
    x = x + 1
}else{

}
console.log(`Foram ditos "Sim" ${x} vezes.`);
console.log();

if(x == 0){
    console.log(`Suspeito errado, não há ligações com o crime. Reveja todas as pistas!!`)
} else if( x <= 2){
    console.log(`Poucas ligações com o caso, suspeito descartado!`)
} else if(x == 3){
    console.log(`Há uma base para a suspeita deste indivíduo, mas nada que o incrimine realmente. Descarte-o e continue investigando.`)
} else if(x == 4){
    console.log(`Ótimo, temos o culpado! Embora ainda haja alguma ponta solta.`)
} else if(x == 5){
    console.log(`Perfeito!! Tudo se encaixa e não há como ele escapar, valeu a pena todo o trabalho feito. Realmente não existem crimes perfeitos, pois a falha de todos eles, sou eu!`)
}

