
//------------------Exercícios de interpretação de código:----------------------


//1 .Leia o código abaixo:

// const respostaDoUsuario = prompt("Digite o número que você quer testar")
// const numero = Number(respostaDoUsuario)

// if (numero % 2 === 0) {
//   console.log("Passou no teste.")
// } else {
//   console.log("Não passou no teste.")
// }

// a) Explique o que o código faz. Qual o teste que ele realiza? 
//    resp.: o código avalia se o número inserido é ímpa ou par, atravez de um 
//    cálculo que apura se resto da divisão do número inserido por 2 é igual a 
//    0 ou não.


// b) Para que tipos de números ele imprime no console "Passou no teste"? 
//    resp.: números do tipo par.

// c) Para que tipos de números a mensagem é "Não passou no teste"? 
//    resp.: números do tipo ímpares.

/////////////////////////////////////////////

//2. "O código abaixo foi feito por uma pessoa desenvolvedora, 
//contratada para automatizar algumas tarefas de um supermercado"

// let fruta = prompt("Escolha uma fruta")
// let preco
// switch (fruta) {
//   case "Laranja":
//     preco = 3.5
//     break;
//   case "Maçã":
//     preco = 2.25
//     break;
//   case "Uva":
//     preco = 0.30
//     break;
//   case "Pêra":
//     preco = 5.5
//     break; // BREAK PARA O ITEM c.
//   default:
//     preco = 5
//     break;
// }
// console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

//a) Para que serve o código acima?
//   resp.: servi para consulta de preço da fruta digitada pelo usuário

//b) Qual será a mensagem impressa no console, se o valor de fruta for "Maçã"?
//   resp.:  O preço da fruta  Maçã  é  R$  2.25.

//c) Considere que um usuário queira comprar uma Pêra, qual seria a mensagem 
//impressa no console se retirássemos o break que está logo acima do default (o 
//break indicado pelo comentário "BREAK PARA O ITEM c.")?
//   resp.:  O preço da fruta  Maçã  é  R$  5 "passa direto para o proximo case/defaul "

//////////////////////////////////////////////////////////

// 3. Leia o código abaixo:

// const numero = Number(prompt("Digite o primeiro número."))
//
// if(numero > 0) {
//   console.log("Esse número passou no teste")
// 	let mensagem = "Essa mensagem é secreta!!!"
// }
//
// console.log(mensagem)

//a) O que a primeira linha está fazendo?
//   resp.: solicitando um número e salvando como valor numerico na variavel numero.

//b) Considere um usuário digitou o número 10. Qual será a mensagem do terminal?
// E se fosse o número -10?
//    resp.:
//           10 ==> "Esse número passou no teste"
//                   mensagen não esta definida.
//
//           -10 ==> indefinida

//c) Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.
//   resp.: sim! 

// if(numero > 0) {
//     console.log("Esse número passou no teste")
//       let mensagem = "Essa mensagem é secreta!!!"  <== //esta variavel não está sendo 
//   }                                                    //reconhecida por estar dentro do if.

/////////////////////////////////////////////////////////////


//----------------Exercícios de escrita de código----------------------------

//1. Faça um programa que pergunta ao usuário qual a idade dele e imprima no console
// se ele/ela pode dirigir (apenas maiores de idade)


const idadeUsuario = + prompt('digite dua idade :')


switch(idadeUsuario> +18){
    case true:
        console.log("Você pode dirigir. ")
        break
    
        default:
            console.log("Você não pode dirigir.") 
            break
}
/////////////////////////////////////////////////////////////

//2. Agora faça um programa que verifica que turno do dia um aluno estuda. Peça
// para digitar M (matutino) ou V (Vespertino) ou N (Noturno). Imprima no console 
// a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!". Utilize o bloco if/else.

const turno = prompt('digite seu turno usando M (matutino) ou V (Vespertino) ou N (Noturno)').toUpperCase()

if ( turno === 'M'){
    console.log("Bom Dia!") 

   } else if (turno === 'V'){

        console.log("Boa Tarde!")
        } else if (turno === 'N'){

            console.log("Boa Noite!")
            } else {

                console.log('Turno não definido !')
                }
                
////////////////////////////////////////////////////////////////////////

//3. Repita o exercício anterior, mas utilizando a estrutura de switch case agora.

const turno1 = prompt('digite seu turno usando M (matutino) ou V (Vespertino) ou N (Noturno)').toUpperCase()

switch (turno1){
    case 'M':
        console.log("Bom Dia!") 
        break

        case 'V':
            console.log("Boa Tarde!")
            break

            case 'N':
                console.log("Boa Noite!")
                break

                default:
                    console.log('Turno não definido !')
                    break

}

///////////////////////////////////////////////////////////////////////

//4. Considere a situação: você vai ao cinema com um amigo ou amiga, porém ele/ela só
//assistirá a um filme com você se ele for do gênero fantasia e se o ingresso está abaixo 
//de 15 reais. Faça um código que pergunta ao usuário qual o gênero de filme que vão
//assistir e outra pergunta sobre o preço do ingresso, então verifique se seu amigo ou
//amiga vai topar assistir o filme. Caso positivo, imprima no console a mensagem: "Bom 
//filme!", caso contrário, imprima "Escolha outro filme :("


const filmeDePreferencia = 'fantasia'

const genero = prompt( 'digite o genero do filme :').toLowerCase()
const preco = +prompt('digite o preço do ingresso :')


if (genero === filmeDePreferencia && preco <= +15){
    console.log('Bom filme!')

    }else {
        console.log("Escolha outro filme :(")

         }

//--------------------------------------------DESAFIO---------------------------------------
//1° .

const filmePreferencia ='fantasia'

const genero1 = prompt( 'digite o genero do filme :').toLowerCase()
const preco1 = +prompt('digite o preço do ingresso :')
const lanche = prompt('digite seu/sua lanche : ')

if (genero1 === filmePreferencia && preco1 <= +15){
    console.log(`Bom filme!`)
    console.log(`Aproveite seu ${lanche} `)

    }else {
        console.log("Escolha outro filme :(")

         }
////////////////////////////////////////////////////////////////////////////

