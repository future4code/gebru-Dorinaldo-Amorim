import React from 'react';
import styled from 'styled-components';
import Imagen from './img/a.png';
import Pagina1 from './componentes/Pagina1';
import Users from './componentes/usuario';

const Conteiner =styled.div`
text-align: center;
background-image: url(${Imagen});
height: 98vh;
color: white ;
padding-top:   30px;

`

const Div = styled.div`
  border: 2px solid white;
  padding: 2%;
  width: 45%;
  margin: auto;
  height: 80%;
  border-radius: 15px;
  
`
const Div2 = styled.div`
  border: 2px solid white;
  padding: 2%;
  width: 98%;
  margin: auto;
  height: 80%;
  border-radius: 15px;
  
`
const Butao =styled.button`
 border-radius: 15px;

`

export default  class App extends React.Component {
  state = {
    pag: 1
  }

irParaProximaPagina = () => {
  this.setState({ pag: this.state.pag +1 });
    if (this.state.pag === 2) {
      this.setState({ pag: 1})
    }
}

selecaoDeBOtao = () => {
  switch(this.state.pag) {
    case 1:
      return <Butao onClick={this.irParaProximaPagina}>Buscar Cadastros </Butao> ;
    case 2:
      return <Butao onClick={this.irParaProximaPagina}>Novo Cadastro </Butao> ;  
  }
}


  render() {
    return (
      <Conteiner >

        <Div>          
           
             <Div2>
             {this.state.pag === 1? <Pagina1 /> : <Users />  }
             </Div2>
             {this.selecaoDeBOtao()} 
        </Div>
     
       
      </Conteiner>
    );
  }

}


//=============================================================


//surge: 