//parte de interpretação.
/*

let a = 10
let b = 10

console.log(b)

b = 5
console.log(a, b)

1.será imprimido no console o valor da variavel b sendo 10, e depois uma 
atualização do valor da mesma variavel para o valor 5.

*/


/*

let a = 10
let b = 20
c = a
b = c
a = b

console.log(a, b, c)

2. O console ira imprimir os valores 10 10 10.

c = 10
b = 10
a = 10
*/

/*
let p = prompt("Quantas horas você trabalha por dia?")
let t = prompt("Quanto você recebe por dia?")
alert(`Voce recebe ${t/p} por hora`)

let cargaHoraiaEspediente = prompt("Quantas horas você trabalha por dia?")
let diaria = prompt("Quanto você recebe por dia?")
alert(`Voce recebe ${t/p} por hora`)

*/ 

// códgo parte 2 do exercicio.
// exerc.1
/*
const nome 
let idade

console.log(typeof nome)
console.log(typeof idade)
 refleção : não imprimil nenhum valor, talves pelo fato de 
não atribuirmos um valor a elas para usalas de parametro para 
definir o tipo da mesma. 


const nome = prompt("Qual é o seu nome?")
let idade = prompt('Qual é a sua idade?')
console.log(typeof nome)
console.log(typeof idade)
// o resultado impresso foi string que é dada como resposta padrão.
console.log('Meu nome é', nome, 'e tenho', idade, 'anos.')
*/

// exerc.2

/*
let cor = prompt('Sua calça é azul?')
let maiorIdade = prompt('É maior de idade?')
let habilitado = prompt('Possue cnh?')
console.log('Sua calça é azul?' , cor)
console.log('É maior de idade?' , maiorIdade)
console.log('Possue cnh?' , habilitado) 
*/

// exerc.3

let a = 10
let b = 25
let c = b

b = a

console.log("O novo valor de a é", c) // O novo valor de a é 25
console.log("O novo valor de b é", b) // O novo valor de b é 10