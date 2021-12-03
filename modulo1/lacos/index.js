
//lacos

//Exercícios de interpretação de código

/////////////////////////////////////////

//1. O que o código abaixo está fazendo? Qual o resultado impresso no console?

// let valor = 0
// for(let i = 0; i < 5; i++) {
//   valor += i
// }
// console.log(valor) 

//Resp.: neste laço For temos como condição que a repetição seja feita até 
//que a condiçã o menor que 5 seja atendida. E como ação a adição de mais um 
//número somado ao valor da variavel valor.

/////////////////////////////////////////

//2 .Leia o código abaixo:

// const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
// for (let numero of lista) {
//   if (numero > 18) {
// 		console.log(numero)
// 	}
// }

//a) O que vai ser impresso no console?
//Resp.: será imprsso todos os números maiores que 18.

//b) Se eu quisesse acessar o índice de cada elemento dessa lista, o 
//for...of... é suficiente? Se sim, o que poderia ser usado para fazer isso?
//Resp.: não, precisariamos usar o for...in... para termos acesso ao indice.

///////////////////////////////////////////

//3. Qual seria o resultado impresso no console, se o usuário digitasse o 
//número 4?

// const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
// let quantidadeAtual = 0
// while(quantidadeAtual < quantidadeTotal){
//   let linha = ""
//   for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
//     linha += "*"
//   }
//   console.log(linha)
//   quantidadeAtual++
// }

//Resp.: ao entrarmos com um valor na variavel quantidadeTotal teremos este valor como
//      determinante da qunatidade de linhas impressas, e o for cuida de adicionar os 
//      asterísticos em cada linha de forma a adicionar um a mais em cada próxima linha.

//=====================================================================================

//Exercícios de escrita de código

//1°)
let listaDeAnimais = []

let quantidadeDeAnimais= Number(prompt('Quantos bichinhos você tem? '))

if (quantidadeDeAnimais >= 1){ 
    let i = 0

    while (i < quantidadeDeAnimais ){

        let nomeDoAnimal=prompt('adicione o nome do seu animal')
        listaDeAnimais.push(nomeDoAnimal)             
        i++
    } 
        
    console.log("meu(s) bichinho(s): " ,listaDeAnimais)

              } else {
    console.log("Que pena! Você pode adotar um pet!")
 }

//////////////////////////////////////////////////////////////      

//2°)

arrayOriginal= [12,26,45,78,16,55,42 ]

function imprimirNumero(array) {
    console.log(array)
}

imprimirNumero(arrayOriginal)
//========================================================

newArray= []
const divisao= (array)=> {

     for (let numero of array ){
        
         newArray.push(numero / 10)

      

     }   console.log(newArray)

}
 
divisao(arrayOriginal)
//========================================================

array2 =[]

function numeroPar( array) {

    for ( let numero2 of array ){

        if (numero2 % 2 === 0){
            array2.push(numero2)
        }
    }
    console.log(array2)
} 

numeroPar(arrayOriginal)
//=========================================================

array3 = []
let i = 0

function imprimirIndex(array) {
    for (let numero3 of array){

        console.log(" O elemento do índex " + i++ + ' é :',numero3)
    }
       

}

imprimirIndex(arrayOriginal)

//==========================================================

let maior =0


function maiorEMenor(array){

      for (let num of array){

        if (num > maior){
            maior = num
        }
     } console.log( "Maior número da lista :" ,maior)



   

}

maiorEMenor(arrayOriginal)


//==========================================================


function maiorEMenor2(array){
    let menor 
    for (let num of array){
        
    
        if (num < maior){
            maior = num
        } menor = maior
     } console.log("Menor número da lista :", menor)


}

maiorEMenor2(arrayOriginal)

//-------------------------------fim do exercicio-------------------