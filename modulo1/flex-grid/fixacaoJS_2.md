``function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {``
``let vezes = 0``

 `` for (let number of arrayDeNumeros){``
  ``  if (number === numeroEscolhido){``
  ``    vezes++ ``
  ``  }``
  ``}``

  ``if(vezes === 0){``
`` return "Número não encontrado"``
 `` } else {``
  ``  return `O número ${numeroEscolhido} aparece ${vezes}x``
  ``}``
``}``