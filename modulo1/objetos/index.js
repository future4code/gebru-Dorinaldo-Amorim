// Exercícios de interpretação de código

//1.  Leia o código abaixo

// const filme = {
// 	nome: "Auto da Compadecida", 
// 	ano: 2000, 
// 	elenco: [
// 		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
// 		"Virginia Cavendish"
// 		], 
// 	transmissoesHoje: [
// 		{canal: "Telecine", horario: "21h"}, 
// 		{canal: "Canal Brasil", horario: "19h"}, 
// 		{canal: "Globo", horario: "14h"}
// 		]
// }

// console.log(filme.elenco[0])
// // será impresso toda a lista contida no array elenco.

// console.log(filme.elenco[filme.elenco.length - 1])
// //  será impresso toda a lista contida no array elenco e a quantidade de elementos da lita."representando 
// // a quantidade de tores e atrizes ".

// console.log(filme.transmissoesHoje[2])
// //será impresso uma lista de objetos contendo em cada um dos objetos informações 
// // sobre o canal e o horario de exibição do filme.


// //Leia o código abaixo

// function minhaFuncao(objeto, propriedade) {
// 	return objeto[propriedade]
// }

// const pessoa = {
//   nome: "Caio", 
//   idade: 23, 
//   backender: false
// }

// console.log(minhaFuncao(pessoa, "backender"))
// // será impresso o resultado false, pois o primeiro paranmetro recebe o objeto e o segundo
// // recebe o elemento do objeto, que no caso será "backender:".
// console.log(minhaFuncao(pessoa, "altura"))
// // seerá impresso o resultado indefinido, pois apesar de ter reconhecido o obejeto, mas não reconheceu 
// // a chave/metodo.



//Exercícios de escrita de código:

// 1.exercicio:
// a) 
const dadosDaPessoa = {
    nome: "Susane",
    apelidos:["Suse", "Ane","Su"]
}

function impressaoDeDados (paranmetro1, paranmetro2){
    console.log(`Eu sou ${paranmetro1}, mas pode me chamar de: ${paranmetro2[0]}, ${paranmetro2[1]} ou ${paranmetro2[2]}`)

}
impressaoDeDados(dadosDaPessoa.nome,dadosDaPessoa.apelidos)

// b)

const copiaDeDados = {
    ... dadosDaPessoa,
    apelidos: ["Aninha","Susa","Sane"]
}

function impressaoDeDados (paranmetro1, paranmetro2){
    console.log(`Eu sou ${paranmetro1}, mas pode me chamar de: ${paranmetro2[0]}, ${paranmetro2[1]} ou ${paranmetro2[2]}`)

}
impressaoDeDados(copiaDeDados.nome,copiaDeDados.apelidos)

//2.exercicio:
const dadosPessoais1 = {
    nome:"João",
    idade:"28",
    profissao:"marceneiro",

}

const dadosPessoais2 = {
    nome:"Lucas",
    idade:"30",
    profissao:"programador",

} 

      function pessoa (paranmetro, paranmetro1, paranmetro2){
let a = paranmetro
let b = paranmetro1
let c = paranmetro2
Array = [a, a.length, Number( b), c,c.length]
console.log(Array)

     }

    pessoa(dadosPessoais1.nome, dadosPessoais1.idade, dadosPessoais1.profissao)
    pessoa(dadosPessoais2.nome, dadosPessoais2.idade, dadosPessoais2.profissao)


// 3.exercicio;
// a)

  carrinho = []

// b)

const frutas1 = {
    nome :"banana",
    disponibilidade: true
}

const frutas2 = {
    nome :"mamão",
    disponibilidade: true
}

const frutas3 = {
    nome :"melancia",
    disponibilidade: true
}

// c)
 function minhasFrutas (objeto,objeto1, objeto2){

   

     carrinho.push(objeto)
     carrinho.push(objeto1)
     carrinho.push(objeto2)
    
     console.log(carrinho)

 }

 // d)

 minhasFrutas(frutas1, frutas2, frutas3)



 //---------------------------desafio-------------------------------
//1° )

 function entreComDados ( ){
     let a = prompt('digite seu nome :') 
     let b = Number(prompt('digite sua idade :'))
     let c = prompt('digete sua profissão :')
      
     const informaçõesPessoais = {
         nome : a,
         profissao : c,
         idade : b
       
     }

     console.log(informaçõesPessoais)
     console.log(typeof(informaçõesPessoais))
 }
  entreComDados()

// 2° )

function entreComObjeto (paranmetro, paranmetro1){

    let a = Number(paranmetro.ano) < Number(paranmetro1.ano)
    let b = Number(paranmetro.ano) === Number(paranmetro1.ano)

    console.log(`O primeiro filme foi lançado antes do segundo? ${a}`)
    console.log(`O primeiro filme foi lançado no mesmo ano do segundo? ${b}`)




}
const filme ={
    nome: 'Coringa',
    ano: 2019
}

const filme2 ={
    nome: 'Bloodshot',
    ano: 2020
}

entreComObjeto(filme, filme2)


// 3° ) 

function alterandoFruta ( paranmetro){
paranmetro.disponibilidade = false

console.log(paranmetro)
}

 alterandoFruta(frutas2)