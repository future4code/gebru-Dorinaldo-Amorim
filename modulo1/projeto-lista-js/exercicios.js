// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
  let altura=prompt()
  let largura= prompt()
  console.log(altura * largura) 
}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
let anoAtual = prompt()
let anoDeNascimento = prompt()
console.log(anoAtual- anoDeNascimento)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
return peso / (altura * altura)
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
let nome = prompt()
let idade = prompt()
let email = prompt()
console.log("Meu nome é " + nome +", tenho " + idade +" anos, e o meu email é " + email +".")
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
let cor1 = prompt()
let cor2 = prompt()
let cor3 = prompt()
array = [cor1, cor2, cor3]
console.log(array)

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
return string.toUpperCase()

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
return custo / valorIngresso
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
return string1.length === string2.length
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
return array [0]
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
return array[array.length - 1]
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui

  
  function mudandoPosicao(array, from, to) {
    array.splice(to, 0, array.splice(from, 1)[0]);
    return array;
};

array = mudandoPosicao(array, array.length - 1, 0);

array.push(array.splice(1,1)[0]);

return array 
 
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui

 
  return string1.toUpperCase() === string2.toUpperCase()
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
let anoAtual = prompt()
let anoDeNascimento = prompt()
let anoDeEmissaoDeRg = prompt() 
const idade01 = anoAtual - anoDeNascimento
const RG = anoAtual - anoDeEmissaoDeRg

if (idade01 <= 20) {
  console.log(RG >= 5)

} else if ( idade01 <=50) {

  console.log(RG >= 10)

} else { 
  console.log(RG >= 15)
}


}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
 let a = ano % 4
 let b = ano % 100
 let c = ano % 400

 if (a !== 0){
   return false
 }else if (b ===0 && c !== 0){
   return false
 }
 else {
  return true
 }

 
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
let maiorIdade = prompt("tem mais de 18?:")
let ensinoMedio = prompt("tem ensino médio completo?: ")
let disponibilidade = prompt("tem disponibilidade de horários?: ")
const aprovacao = "sim"

if (maiorIdade.toLowerCase() !== aprovacao){
  console.log(false) 
}
   else if (ensinoMedio.toLowerCase() !== aprovacao) {
    console.log(false) 
   } 
         else {
          console.log(disponibilidade.toLowerCase() === aprovacao)
         }

}