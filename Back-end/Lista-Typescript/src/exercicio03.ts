enum GENERO {
	ACAO="ação",
	DRAMA="drama",
	COMEDIA="comédia",
	ROMANCE="romance",
	TERROR="terror"
}

function returnClass (
    name: string, 
    releaseYear: number, 
    genre: string, 
    punctuation?:number): string
    {
        const pontuação = punctuation

    if (pontuação) {
        return `
        Nome do filme    : ${name}, 
        ano de lançamento: ${releaseYear}, 
        genero           : ${genre}, 
        pontuação        : ${punctuation}`

    } else {
        return `
        Nome do filme    : ${name}, 
        ano de lançamento: ${releaseYear}, 
        genero           : ${genre} `
    }
  
}

console.log(returnClass("Duna", 2021, GENERO.ACAO, 74))
console.log(returnClass("sonic", 2020, GENERO.ACAO, 100))
console.log(returnClass("Batman", 2022, GENERO.ACAO))