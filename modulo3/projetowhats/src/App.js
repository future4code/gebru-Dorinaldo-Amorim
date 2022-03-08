import styled from "styled-components";
import React from "react";
import Foto from './img/logo mensagem.png';
/**--------------------------styled--------------------------------------------- */




const MainContainer =styled.div`
height: 100vh;
   display: flex;
  justify-content: center;
  flex-direction: column;

  background-color: #282c34;
  padding: 0 10vw;
   margin:  auto; 
   word-wrap: break-word;
`

const Header = styled.header`
height: 5vh;
text-align: center;
background-color: darkgreen;
color: whitesmoke;
`

const Main = styled.main`
 text-align: center;
height: 85vh;
  border: 1px solid black; 
  background-color: 	#FAEBD7;
  padding: 2vh 2vw 0;
  border-radius: 5px;
  word-wrap: break-word;
  overflow-x: scroll;
  overflow-x: hidden;
 
`

const Footer = styled.footer`
display: grid;
grid-template-columns: 30% 60% 10%;

height: 5%;
  justify-content: center;
  border-radius: 5px;
  background-color: #A9A9A9;
    border: 1px solid black;
  padding: 0.5vh 2vw;
  padding-right: 2vw;
  column-gap: 1vw;
 
 `

const TeacherCard = styled.div`

text-align: left;
background-color: rgb(36, 109, 67);
  display: flex;
  flex-direction: column;
  border: 1px solid gray;
  margin-left: 38%;
  margin-right: 2%;
  margin-top: 2%;
   padding: 0 8px;
  width: 60%;
  border-radius: 15px;
  word-wrap: break-word;
  color: whitesmoke;
  position: relative;
`
const TeacherCard2 = styled.div`
text-align: left;
background-color: rgb(83, 82, 82);
  display: flex;
  flex-direction: column;
  border: 1px solid gray;
  margin: 2% ;
  padding: 0 8px;
   width: 60%;
  border-radius: 15px;
  word-wrap: break-word;
  color: whitesmoke;
  position: relative;
`

const AgeText = styled.p`
  color: orange;
`

const Input = styled.input`
  border-radius: 10px;
    font-size: 140%;
  `
 
  const Titulo = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 4fr;
  align-items: center;
  `
    const Titulo2 = styled.div`
    display: grid;
    grid-template-columns:  4fr 0.5fr;
    align-items: center;
    `
      const Titulo3 = styled.div`
      display: flex;
      justify-content: space-between;
      align-items: center;
      `
 const Botao = styled.button`
  border-radius: 15px;
  
 `
  const Botao2 = styled.button`
  border-radius: 10px;
  color: red;
  opacity : 0.5;
 `

 const Afeter1 = styled.div`
  &:after {
	content: '';
	border: 15px solid transparent;
	border-top-color: rgb(36, 109, 67);
  position: absolute;
top: 0px;
right: -15px;
}

 `
 const Afeter2 =styled.div`
 &:after {
	content: '';
	border: 15px solid transparent;
	border-top-color: rgb(83, 82, 82);
  position: absolute;
top: 0px;
left: -15px;
}
  
 `

export default  class App extends React.Component {
  state = {
    inputNome: '',
    inputTexto: '',          
    whattsState: [
      { id: 0, nome: '', texto: " " },
    
    ]
  }

  guardaNome = (event) => {
    this.setState({ inputNome: event.target.value })
  }

  guardaTexto = (event) => {
    this.setState({ inputTexto: event.target.value })
  }

  addTexto = () => {
  
    const newTeacher = {
      id: Math.random(),
      nome: this.state.inputNome,
      texto: this.state.inputTexto
    }

    const copia = [...this.state.whattsState, newTeacher]
   

    this.setState({ whattsState: copia })

    this.setState({ inputNome: '', inputTexto: '' })
  }

  deleteTexto = (idDaPessoa) => {
    const copia = [...this.state.whattsState]

    const newTextoList = copia.filter((text) => {
      return text.id !== idDaPessoa
    })

    this.setState({ whattsState: newTextoList })
  }



  render() {
    const saida = this.state.whattsState.map((entrada) => {

      if ( entrada.nome === '') {
        return (
          <div>  <h2>Olá ! digite uma mensagem.  <Botao2 onClick={this.deleteTexto(entrada.id)}></Botao2>  </h2>
          
          </div>// mensagem desativada!!!
        
          
        )

      }  else if ( entrada.nome.toLocaleLowerCase() === 'eu') {
  return (
    <TeacherCard key={entrada.id}>
          <Titulo2>
            
                  <Titulo3>
                         <Botao2 onClick={() => this.deleteTexto(entrada.id)}>x</Botao2> 
                         <AgeText>{}</AgeText>
                  </Titulo3>
                  <Afeter1></Afeter1>  
                  
            </Titulo2>
        
            <div >
                <p>{entrada.texto}</p>
        </div>
  
  </TeacherCard>
  )
}   else if (entrada.nome !== 'eu') {
                   return (
                       <TeacherCard2 key={entrada.id}>
                          
                             <Titulo>
                                <Afeter2></Afeter2>
                                        <Titulo3>
                                            <AgeText>{entrada.nome}</AgeText>
                                               <Botao2 onClick={() => this.deleteTexto(entrada.id)}>x</Botao2> 
                                          </Titulo3>
                                       </Titulo>
           
                                   <div>
                               <p>{entrada.texto}</p>
                          </div>
              </TeacherCard2>
  )

}


  
    })

    return (
<MainContainer>
<div>
  <Header>
<h2>Zap-Labenu</h2>
      </Header>
           <Main>
             {saida}
     
          </Main>
     <Footer>
     
      <Input
        placeholder={'Nome'}
        value={this.state.inputNome}
        onChange={this.guardaNome}
      />
      <Input
        placeholder={'Texto'}
        value={this.state.inputTexto.toLocaleLowerCase()}
        onChange={this.guardaTexto}
      />
        <Botao onClick={this.addTexto}>Enviar</Botao>

     </Footer>
 
      
     
       
      </div>
</MainContainer>
    )
  }
}


/**====================================================================================================== */


// link do surge : bright-coat.surge.sh
