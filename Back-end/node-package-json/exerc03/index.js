

    /////////////////////////////////////////////////////////////////////////////

    // Exerc 3

    // OBSEERVAÇÃO USE: npm start taref NOME.TAREFA
    const indicadorDeAddTarefa = process.argv[2]
    const tarefa = process.argv[3]
    const listaDeTarefas= ['lavar a casa', "fazer o almoço"]

    if (indicadorDeAddTarefa === "taref") {
        listaDeTarefas.push(tarefa)
        console.log("Tarefa adicionada com sucesso!")
        console.log(`Minhas tarefas: ${listaDeTarefas}`)
       
    }

/////////////////////////////////////////////////////////////////////////////////////


