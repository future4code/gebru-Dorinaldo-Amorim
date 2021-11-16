// exercicio de interpretção 
// 1:

/*
const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a. ", resultado)

resultado = bool1 && bool2 && bool3 
console.log("b. ", resultado) 

resultado = !resultado && (bool1 || bool2) 
console.log("c. ", resultado)

console.log("d. ", typeof resultado

resp:
a. true 
b.false
c.false
d.boolean

*/

// 2:

/*
let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

const soma = primeiroNumero + segundoNumero

console.log(soma)
será impresso a concatenação dos numeros digitados por entrarem como 
strings.

*/

// 3:

/*
para solucionar este inparsse devemos declarar a variavel que o valor
ditado no promt se trata de um numero.
ex:
let primeiroNumero = number(prompt("Digite um numero!"))
let segundoNumero = nember(prompt("Digite outro numero!"))

desta forma os valores serão somados e impressos.


//exercicio de código:

// 1:
let idadeUsuario = Number(prompt("digite sua idade :"))
let idadeMelhorAmizade = Number(prompt("digite a idade de sua melhor amizade"))
let diferenca = idadeUsuario - idadeMelhorAmizade
console.log("Sua idade é maior do que de sua melhor amizade?" ,idadeUsuario  >= idadeMelhorAmizade)

//2
 
let numeropar = Number(prompt("digite um numero par"))

console.log("diferença de idade " ,diferenca)

/*
por padrão todo numero par dividido por 2 reulta em um valor 0, já se 
adionarmos um valor impar teremos um resultado diferente de 0.


// 3:
 let idadeA = Number(prompt("Quantos anos você tem :"))
 console.log("Sua idade represnta" , idadeA * 12, "meses" )
 console.log("Sua idade representa +-" , idadeA * 12 *365, "em dias :")
 console.log("Sua idade em horas reprsenta +-" , idadeA * 12 * 365 * 24, "horas")


 // 4:

 let n1 = Number(prompt("entre com um número"))
 let n2 = Number(prompt("entre com um segundo número")) 
 

 console.log("O primeiro numero é maior que segundo? " , n1 > n2)
 console.log("O primeiro numero é igual ao segundo? " , n1 === n2)
 console.log("O primeiro numero é divisível pelo segundo? " , n1 % n2 === 0)
 console.log("O segundo numero é divisível pelo primeiro? " , n2 % n1 === 0)



 //desafio
 part 1.
  let Fahrenheit = 77
  console.log("convertendo 77F° para Kelvin " ,( Fahrenheit - 32)*(5/9) + 273.15)
  let celcius = 80
  
console.log("Convertendo 80C° para F° " , celcius *(9/5) + 32)
let celcius2 = 30
console.log("Convertendo 30C° para F° " , celcius2 *(9/5) + 32)
console.log("Convertendo 80C° para F° " , (celcius2 - 32)*(5/9) + 273.15)


//part 2.

const quilowat = 280
const desconto = quilowat * 0.15
console.log("Valor de consumo de energia : R$" , (quilowat * 0.5))
console.log( "Valor com desconto : R$" , (quilowat * 0.5) - desconto)
*/

// part 3.

//a 
const lb= 20
console.log("20lb para kg = " , lb * 0.453592 , "kg")

const oz= 10.5
console.log("10.5oz para kg = " , oz * 0.0283495 , "kg")

const mi = 100
console.log("100mi para metros =" , mi *0.0283495 , "m")

const ft = 50
console.log("50ft para metros =" , ft *0.3048 , "m")

const gal = 103.56
console.log("103,56gal para litros =" , gal *3.78541 , "L")

const xic = 450
console.log("450xic para litros = " ,xic *0.24 ,"L")

let xicara = Number(prompt("entre com a quantidade de xicaras"))
console.log("450xic para litros = " ,xicara *0.24 ,"L")