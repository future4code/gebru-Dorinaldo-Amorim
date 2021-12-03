/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
console.log("*** ♣️ ♥️ ♦️ ♠️ Boas vindas ao jogo de Blackjack! ♣️ ♥️ ♦️ ♠️ ***")

if (confirm("Quer iniciar uma nova rodada?")) {
   

//======================================usuário==================================
   const carta = comprarCarta(); 
// Sorteia uma carta. Por exemplo, o rei de ouros

//console.log(carta.texto) 
// imprime o texto da carta. Nesse caso: "K♦️"

//console.log(carta.valor) 
// imprime o valor da carta (um número). Nesse caso: 10)



const carta2 = comprarCarta(); 
// Sorteia uma carta. Por exemplo, o rei de ouros

//console.log(carta2.texto) 
// imprime o texto da carta. Nesse caso: "K♦️"

//console.log(carta2.valor) 
// imprime o valor da carta (um número). Nesse caso: 10)


//=================================computador==============================

const carta3 = comprarCarta(); 
// Sorteia uma carta. Por exemplo, o rei de ouros

//console.log(carta3.texto) 
// imprime o texto da carta. Nesse caso: "K♦️"

//console.log(carta3.valor) 
// imprime o valor da carta (um número). Nesse caso: 10)



const carta4 = comprarCarta(); 
// Sorteia uma carta. Por exemplo, o rei de ouros

//console.log(carta4.texto) 
// imprime o texto da carta. Nesse caso: "K♦️"

//console.log(carta4.valor) 
// imprime o valor da carta (um número). Nesse caso: 10)

//=========================================================================

let somaUsuario = carta.valor + carta2.valor
let somaComputador = carta3.valor + carta4.valor

console.log('*** ♣️ ♥️ ♦️ ♠️ ***')

 if (somaUsuario === somaComputador ){
   console.log(`Usuário - cartas: ${carta.texto} ${carta2.texto}  - pontuação ${somaUsuario}`)
   console.log(`Computador - cartas: ${carta3.texto} ${carta4.texto}  - pontuação ${somaComputador}`)
   console.log("(( Empate! ))") 
 
   }else if ( somaUsuario > somaComputador) {
       console.log(`Usuário - cartas: ${carta.texto} ${carta2.texto}   - pontuação ${somaUsuario}`)
       console.log(`Computador - cartas: ${carta3.texto} ${carta4.texto}  - pontuação ${somaComputador}`)
       console.log("(( O usuário ganhou! ))") 

        } else  {
             console.log(`Usuário - cartas: ${carta.texto} ${carta2.texto}  - pontuação ${somaUsuario}`)
             console.log(`Computador - cartas: ${carta3.texto} ${carta4.texto}  - pontuação ${somaComputador}`)
             console.log("(( O computador ganhou! ))") 
      
       }



} 
    else    {
       console.log("O jogo acabou")

    }

    console.log('*** ♣️ ♥️ ♦️ ♠️ ***')

//================================GAME OVER=======================================