
//Exercícios de interpretação de código
//1. leia o código abaixo

// function minhaFuncao(variavel) {
// 	return variavel * 5
// }

// console.log(minhaFuncao(2))
// console.log(minhaFuncao(10))

// a) será impresso os valores 10 e na linha seguinte 20.
/* b) com a retirada dos console.log os valores continuariam sendo processados na 
função, mas não será impresso no console.


2. leia o código abaixo.

let textoDoUsuario = prompt("Insira um texto");

const outraFuncao = function(texto) {
	return texto.toLowerCase().includes("cenoura")
}

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta)

a) a intenção é tornar todo o texto captrado no prompt e converter todos os 
caracteris para minúsculo e na sequência informar a existencia ou não da palavra 
cenoura.

b. Determine qual será a saída no console para cada uma das 3
 entradas do usuário

     i.   Eu gosto de cenoura
     ii.  CENOURA é bom pra vista
     iii. Cenouras crescem na terra
     
     Resp.: no console será impresso apenas a afirmação da existencia ou não da palavra
     "cenoura".


*/
//Exercícios de escrita de código:

let nome = prompt('digite seu nome :')
let idade = Number(prompt('digite sua idade :'))
let cidade = prompt('digite a cidade onde mora :')
let estudante = prompt("você É estudante (responda com sou/não sou :")
     
// 
// 
//
 
function meuDados () {

console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e ${estudante} estudante `)

}
meuDados()

let nome1 = prompt('digite seu nome :')
let idade1 = Number(prompt('digite sua idade :'))
let cidade1 = prompt('digite a cidade onde mora :')
let profissao = prompt("Qual é a sua profissão : ")
     
// 
// 
//
 
function meuDados2 () {

console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao} `)

}
meuDados2()

 //
 //
 //

//2°questão
let n1 =Number(prompt('digite um número :'))
let n2 =Number(prompt('digite um segundo número :'))

 function soma(numero1, numero2){
     return numero1 +numero2
 }

 function subitracao(numero1, numero2){
    return numero1 -numero2
}

function multiplicacao(numero1, numero2){
    return numero1 *numero2
}

function divisao(numero1, numero2){
    return numero1 /numero2
}

console.log('números inseridos :' ,n1 , ' e ', n2)
console.log('resultado da soma :',soma(n1,n2))
console.log('resultado da diferança :' ,subitracao(n1,n2))
console.log('resultado da multiplicação :' ,multiplicacao(n1,n2))
console.log('resultado da divisão' ,divisao(n1,n2))
