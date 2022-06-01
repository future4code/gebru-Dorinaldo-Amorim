
//ex.2
function obterEstatisticas(numeros: number[]): estatisticas {

    const numerosOrdenados :number[]= numeros.sort(
        (a, b) => a - b
    )

    let soma: number = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas: estatisticas = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}

type estatisticas = {
    maior: number,
    menor: number,
    media: number
}


const amostraDeIdades: number[]= [21, 18, 65, 44, 15, 18] 


console.log(obterEstatisticas(amostraDeIdades))







