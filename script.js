var jogador1 = 0;
var jogador2 = 0;
var placar;

//if (jogador1 != -1)
// != quer dizer negação, && quer dizer 'e'
jogador1 != -1 && jogador2 != -1 ? console.log("Os jogadores são válidos") :
    console.log('Jogadores Inválidos')

if (jogador1 > 0 && jogador2 == 0) {
    console.log("Jogador 1 marcou ponto")
    placar = jogador1 > jogador2;
} else if (jogador2 > 0 && jogador1 == 0) {
    console.log("Jogador 2 marcou ponto");
    placar = jogador2 > jogador1;
} else {
    console.log('Ninguém marcou ponto');
}

//Cuidado no final da declaração de um case, se coloca ':' , não virgula
switch (placar) {
    case placar = jogador1 > jogador2:
        console.log('Jogador 1 ganhou!');
        break;
    case placar = jogador2 > jogador1:
        console.log('Jogador 2 ganhou!')
        break;
    default:

}

//let array = ['valor1','valor2','valor3','valor4','valor5'];
//let object = [propriedade1:'valor1',propriedade2:'valor2',propriedade3:'valor3']

//repete até que a condição seja falsa
//Usando for
//for(let indice= 0, indice< array.length; indice++){
//      console.log(indice);    
//}



//repetição a partir de uma propriedade
//Usando for/in

//com array
//for(let i in array){
//   console.log(i);
//}

//com object
//for(i in object){
//    console.log(i);
//}

//for/of----- imprimi o indice dando um valor em cada item
//for(i of array){
//console.log(i);
//}

//while
//var a = 0
//whlie (a < 10);
//a++;
//console.log(a);