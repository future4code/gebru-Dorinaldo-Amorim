
// //1.Exercícios de interpretação de código

// // let array
// // console.log('a. ', array)
// /**será impresso no console : a. (+) todos os itens do array "lista"
//  * 
//  */


// // array = null
// // console.log('b. ', array)
// /**será impresso no console : b.  
//  * 
//  */

// // array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
// // console.log('c. ', array.length)
// /**será impresso no console : c. 11
// *

//  let i = 0
//  console.log('d. ', array[i])
//  será impresso no console "array indefinido"


// // array[i+1] = 19
// //console.log('e. ', array)
//  será impresso no console "array indefinido" 
// *

//  const valor = array[i+6]
//  console.log('f. ', valor)
//  será impresso no console "array indefinido" 
 
//  */
//  //2.exerc:

// const frase = prompt("Digite uma frase")
// console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)

//reposta no console
// SUBI NUM ÔNIBUS EM MIRROCOS 27


// /*Exercícios de escrita de código
//1. Exercício

const nome = prompt('digite o nome de usuário :')
const email = prompt('digite e-mail de usário :')
console.log(`O e-mail ${email} foi cadastrado com sucesso. Seja bem-vinda(o), ${nome} !`)

//2.exercício

let listaDeComida = ['feijoada','galinhada','lasanha','pizza','anburgues']
console.log(listaDeComida)
console.log(listaDeComida[0])
console.log(listaDeComida[1])
console.log(listaDeComida[2])
console.log(listaDeComida[3])
console.log(listaDeComida[4])

let newComida = prompt('Escreva sua comida favorita :')
listaDeComida.push(newComida)

function mudandoPosicao(array, from, to) {
    array.splice(to, 0, array.splice(from, 1)[0]);

    console.log(listaDeComida)
};


listaDeComida = mudandoPosicao(listaDeComida, listaDeComida.length -1, 1)

// 3.exercicio

let listaDeTarefas = []
let a = prompt(`digite sua primeira tarefa do dia :`)
listaDeTarefas.push(`1° ${a}`)
let b = prompt(`digite sua seugunda tarefa do dia :`)
listaDeTarefas.push(`2° ${b}`)
let c = prompt(`digite sua terceira tarefa do dia :`)
listaDeTarefas.push(`3° ${c}`)

console.log(`Sua lista de tarefa : ${listaDeTarefas}; um total de ${listaDeTarefas.length} tarefas `)


let d = Number(prompt(`digite o número da tarefa realizada`))
listaDeTarefas.splice(d -1, 1)
console.log(`Tarefas restantes : ${listaDeTarefas}`)





///desafio
// 1°desafio

let frase = prompt(`digite uma frase :`)
let listaDePalavras = frase.split(" ",)
console.log(listaDePalavras)

// 2°desafio

let frutas = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]
console.log("Abacaxi está incluzo na lista de frutas? :" ,frutas.includes("Abacaxi") ,", na posição de número " ,frutas.indexOf("Abacaxi") + 1, " em um total de " ,frutas.length, " frutas.")



  





   
