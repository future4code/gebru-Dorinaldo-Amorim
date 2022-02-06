import styled from "styled-components";
import React from "react";

/**--------------------------styled--------------------------------------------- */


/**====================================================================================================== */

const MainContainer = styled.div`
   display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: #282c34;
  padding: 0 ; 
  margin: 10px auto; 
`
const Main = styled.main`
height: 95vh;
  border: 1px solid black; 
  background-color: rgb(192, 248, 229);
  padding: 0 15%;
  border-radius: 10px;
`

const Footer = styled.footer`
  border-radius: 10px;
  background-color: rgb(168, 243, 212);
    border: 1px solid black;
  padding: 0 2vw;
  padding-right: 3vw;
 display: flex;
 `

const TeacherCard = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid gray;
  margin: 8px auto;
  padding: 0 8px;
  justify-content: space-between;
  align-items: center;
  width: 250px;
`

const AgeText = styled.p`
  color: orange;
`

const Input = styled.input`
  border-radius: 10px;
  
  `
  const Titulo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  `
  const Imag = styled.ims`
  `
  const Imag2 = styled.ims`
  `

export default  class App extends React.Component {
  state = {
    inputNome: '',
    inputTexto: '',          
    whattsState: [
      { id: 0, nome: 'a0', texto: " " },
    
    ]
  }

  guardaNome = (event) => {
    this.setState({ inputNome: event.target.value })
  }

  guardaTexto = (event) => {
    this.setState({ inputTexto: event.target.value })
  }

  addTeacher = () => {
    // Criamos a nova pessoa instrutora pegando as infos dos inputs
    const newTeacher = {
      id: Math.random(),
      nome: this.state.inputNome,
      texto: this.state.inputTexto
    }

    const copia = [...this.state.whattsState, newTeacher]
   

    this.setState({ whattsState: copia })

    this.setState({ inputNome: '', inputTexto: '' })
  }

  deleteTeacher = (idDaPessoaInstrutoraParaApagar) => {
    const copia = [...this.state.whattsState]

    const newTeacherList = copia.filter((teacher) => {
      return teacher.id !== idDaPessoaInstrutoraParaApagar
    })

    this.setState({ teacherState: newTeacherList })
  }

  render() {
    const saida = this.state.whattsState.map((entrada) => {

      if ( entrada.nome === 'a0') {
        return (
          <h2>Olá ! digite uma mensagem .</h2>
        )

      }  else if ( entrada.nome === 'eu') {
  return (
    <TeacherCard key={entrada.id}>
           <Titulo>
              <AgeText></AgeText>
                   <button onClick={() => this.deleteTeacher(entrada.id)}>x </button>
            </Titulo>
        
            <div>
                <p>{entrada.texto}</p>
        </div>
  
  </TeacherCard>
  )
}   else if (entrada.nome !== 'eu') {
                   return (
                       <TeacherCard key={entrada.id}>

                             <Titulo>
                                <AgeText>{entrada.nome}</AgeText>
                                     <button onClick={() => this.deleteTeacher(entrada.id)}>X</button>
                               </Titulo>
           
                        <div>
                    <p>{entrada.texto}</p>
               </div>
    </TeacherCard>
  )

}


  
    })

    return (
<MainContainer>
<div>
       <Main>
       {saida}
     
       </Main>
     <Footer>
     
      <Input
        placeholder={'Nome'}
        value={this.state.inputNome.toLowerCase()}
        onChange={this.guardaNome}
      />
      <Input
        placeholder={'Texto'}
        value={this.state.inputTexto.toLocaleLowerCase()}
        onChange={this.guardaTexto}
      />
      <button onClick={this.addTeacher}>Adicionar</button>
     </Footer>
 
      
     
       
      </div>
</MainContainer>
    )
  }
}


