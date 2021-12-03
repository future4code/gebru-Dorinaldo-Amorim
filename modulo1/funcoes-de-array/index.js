//====================================================================================

//Exercícios de interpretação de código

//1°)

// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" }
//   ]
  
//   const novoArrayA = usuarios.map((item, index, array) => {
//      console.log(item, index, array)
//   })


  //a) O que vai ser impresso no console?

  //resp.: será impresso as informações de cada elemento do array, seguido pelo número 
  //equivalente ao index e por fim a expecificação do array.

 ////////////////////////////////////////////////////////////////////////////////////
 
 //2°)

//  const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" },
//   ]
  
//   const novoArrayB = usuarios.map((item, index, array) => {
//      return item.nome
//   })
  
//   console.log(novoArrayB)

  //resp.: será immpresso as informação contida nas chaves do tipo nome.


///////////////////////////////////////////////////////////////////////////////////////

//3°)

// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" },
//   ]
  
//   const novoArrayC = usuarios.filter((item, index, array) => {
//      return item.apelido !== "Chijo"
//   })
  
//   console.log(novoArrayC)

  //a) O que vai ser impresso no console?
  
  //resp.: será impresso as informações contidas nas chaves do tipo apelido
  //exeto as com valor igual a "Chijo".

//--------------------------------------------------------------------------------

//Exercícios de escrita de código

const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]
 
 //a)...............
  
 const nomePets = pets.map(( item) => {
     return item.nome

 }
 )
console.log(nomePets)

//b)..................

const nomePets2 = pets.filter(( item) => {
    return item.raca === "Salsicha"

}
)
console.log(nomePets2)

//c)...................

const nomePets3 = pets.filter(( item) => {
    return item.raca === "Poodle"

}
)
const nomePets4 = nomePets3.map(( item) => {
    return item.nome

}
)

for ( elemento of nomePets4) {
    console.log("Você ganhou um cupom de desconto de 10% para tosar o/a " , elemento)
}


//////////////////////////////////////////////////////////////////////////

//2°.........................

const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]

 //A)...........
 const nomeProduto = produtos.map(item => {
    return item.nome

}
)
console.log(nomeProduto)

//B)...................




const desconto = produtos.map(item => {
   const objeto = {
       nome: item.nome,
       preco: item.preco * 0.95
   }  
   return objeto
}
)
console.log('a' ,desconto)

//C)......................

const bebidas = produtos.filter( item => {
    return item.categoria === "Bebidas"
}

)
console.log(bebidas)

//D)........................


const ype = produtos.filter( item => {
    return item.nome.includes('Ypê')
}

)
console.log(ype)



const produtosYpe = ype.map(item => {
    return `Compre ${item.nome} por R$ ${item.preco}`
}
)
    console.log(produtosYpe) 

   
                   





           



                   


  //======================================================================


