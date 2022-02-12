import React from 'react'
import styled from 'styled-components'
import './styles.css'

const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
`

const ListaTarefas = styled.div`
display: flex;
justify-content: space-between;
width: 250px;
`

const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${({completa}) => (completa ? 'line-through' : 'none')};
`

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`
const button = styled.button`
height: 4%;
`

class App extends React.Component {
    state = {
      tarefas: [
        { id: Date.now(), texto: 'corrida matinal', completa: true }
     
      ],
      inputValue: '',
      filtro: 'completas'
    }

  componentDidUpdate() {
    const tarefas = this.state.tarefas;
      localStorage.setItem( 'tarefas', JSON.stringify(tarefas));
  };

  componentDidMount() {
    if (localStorage.getItem('tarefas')){
      const tarefasLS= localStorage.getItem('tarefas');
        const tarefasObjeto = JSON.parse(tarefasLS);

          this.setState({
            tarefas: tarefasObjeto
          });
    }
  };

  onChangeInput = (event) => {
    this.setState({inputValue: event.target.value})
  }

  criaTarefa = () => {

    const novaTarefa = {
      id : Date.now(), 
      texto: this.state.inputValue,
      completa: false
    }

    const novaListaDeTarefa = [...this.state.tarefas, novaTarefa]
    this.setState({ tarefas : novaListaDeTarefa})
    this.setState({inputValue: ''})
    console.log(this.statetarefas)
  }

  selectTarefa = (id) => {
    const newtarefas = this.state.tarefas.map(( tarefa) => {
      if (id === tarefa.id) {
        const listaDeTarefas = {
          ...tarefa , 
          completa : !tarefa.completa
        }
        return listaDeTarefas

      } else {
        return tarefa
      }
    }) 
    this.setState({tarefas: newtarefas})
    console.log(this.state.tarefas)
  }

  onChangeFilter = (event) => {
    this.setState({filtro: event.target.value})
  }

  deleteTarefa = ( idTarefa) => {

  }

  render() {
    const listaFiltrada = this.state.tarefas.filter(tarefa => {
      switch (this.state.filtro) {
        case 'pendentes':
          return !tarefa.completa
        case 'completas':
          return tarefa.completa
        default:
          return true
      }
    })

    return (
      <div className="App">
        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <input value={this.state.inputValue} onChange={this.onChangeInput}/>
          <button onClick={this.criaTarefa}>Adicionar</button>
        </InputsContainer>
        <br/>

        <InputsContainer>
          <label>Filtro</label>
          <select value={this.state.filtro} onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </InputsContainer>

        <TarefaList>
          {listaFiltrada.map(tarefa => {
            return (
              <Tarefa
                completa={tarefa.completa}
                onClick={() => this.selectTarefa(tarefa.id)}
              >
                <ListaTarefas>
                {tarefa.texto } 
                  <div>
                  <button onClick={() => this.deleteTarefa(tarefa.id)}>  X</button>
                  </div>
                </ListaTarefas>
              </Tarefa>
            )
          })}
        </TarefaList>
      </div>
    )
  }
}

export default App



//    red-bag.surge.sh
