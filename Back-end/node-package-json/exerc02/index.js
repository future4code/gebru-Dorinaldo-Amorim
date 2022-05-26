
////////////////////////////////////////////////////////////////////////////////////////////////

//Exer 2

const operador = process.argv[2]
const num1 = Number(process.argv[3])
const num2 = Number(process.argv[4])
const operacao = 0

    if (operador === "add") {
             console.log(`A soma dos números é ${num1 + num2}`)
    }
    if (operador === "mult") {
             console.log(`A multiplicação dos números é ${num1 * num2}`)
    }
    if (operador === "div") {
             console.log(`A divisão dos números é ${num1 / num2}`)
    }

    /////////////////////////////////////////////////////////////////////////////
