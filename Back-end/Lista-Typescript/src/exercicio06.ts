type clienteDados ={
    cliente: string,
    saldoTotal: number,
    debitos: number[]
}



const contaClientes: clienteDados[] =[
	{ cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
	{ cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
	{ cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
	{ cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
	{ cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
	{ cliente: "Soter", saldoTotal: 1200, debitos: [] }
]


const contaNegativa= contaClientes.filter(cliente => {
    let soma:number = 0
    for (let num of cliente.debitos ) {
        soma = soma + num
    }
    if (cliente.saldoTotal - soma <= -1) {
        return cliente.saldoTotal = cliente.saldoTotal - soma 
    }
})

console.log("CONTAS COM POTENCIAIS NESCESSIDADES DE EMPRESTIMOS")
console.log(contaNegativa)