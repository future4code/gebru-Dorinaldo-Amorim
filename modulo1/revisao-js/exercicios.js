// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {

   return array.length

   
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {

    return array.reverse()
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {

    return array.sort((a,b) => a-b)
 
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {

         const numerosPares = array.filter(

                            function funcaoArray (numero) {
                               return numero % 2 === 0
                              }
    
        )
return numerosPares

}


// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    

            newarray = []

        for (let num of array)          
           if (num % 2 === 0) {
             newarray.push(num * num) 
        
     }
return newarray
 
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
  
  
    let maior = 0

    for (let num of array)          
       if (num > maior) {
           maior = num    
    
    }
return maior

}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {

  
    if (num1 >= num2) {

        let maiorNumero1 = num1
        let maiorDivisivelPorMenor1 = num1 % num2 === 0
        let diferenca1 =num1 - num2

        const objeto = {
            maiorNumero : maiorNumero1,
            maiorDivisivelPorMenor: maiorDivisivelPorMenor1,
            diferenca: diferenca1
        } 
        return objeto
   
    }  else if (num1 < num2)  {
        let maiorNumero1 = num2
        let maiorDivisivelPorMenor1 = num2 % num1 === 0
        let diferenca1 =num2 - num1

        const objeto = {
            maiorNumero : maiorNumero1,
            maiorDivisivelPorMenor: maiorDivisivelPorMenor1,
            diferenca: diferenca1
        } 
        return objeto

    } 
    return objeto

}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {

    
    Pares = []

    if ( n % 2 === 0 ) {
         Pares.push(n) 
    
 }
return Pares
   
} 

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    if (ladoA === ladoB && ladoB === ladoC){
        return "Equilátero"
    } else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC){
        return "Isósceles"
    } else {
        return "Escaleno"
    }
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}