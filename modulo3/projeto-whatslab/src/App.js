import React from 'react';
import './App.css';
import Msg from './componentes/Mensagem.js';

export default class App extends React.Component {
  state = {
    inputNome: "",
    inputMensagem: "",
    
  };

  onChangeNome = (event) => {
    this.setState({ inputNome: event.target.value });
  };

  onChangeMesagem = (event) => {
    this.setState({ inputMensagem: event.target.value });
  };


  limparInputs = () => {
    // return this.state.inputNome;
    document.write(this.state.inputMensagem) ;
    console.log( this.state.inputNome);
    console.log(this.state.inputMensagem);
   

    this.setState({
      inputNome: "",
      inputMensagem: "",
    
    });
  };
/**========================================================================= */



/*==========================================tela=========================================*/
  render() {
    return (
      <div className="App">
       

              <div className='coluna'>
             
 <MMsg
 
 />
{this.state.inputNome}
{this.state.inputMensagem}
<p id="pconfig" className="mensagens"><p >{this.state.inputNome}</p><p>{this.state.inputMensagem}</p></p>
    
               </div>



      <div className='footer' >
        
            <input placeholder='nome' value={this.state.inputNome} onChange={this.onChangeNome} />
       
      
            <input placeholder='mensagem' value={this.state.inputMensagem} onChange={this.onChangeMesagem} id='inp'/>
        
         <button onClick={this.limparInputs}>enviar</button>
        </div>


      </div>

     
    );
  }
}









/*===================================================================*/

// <div className="App">

// <div className='coluna'>
  
//   <div className='area-de-mensgens'>

//     <Mensagens 
//       remetente ='lljdfalksd '
//       msg = 'sdfasdkjfalk dfhjh jhdddhe jhdiurw ehuwwwq djha'
      
//       />




 
//   </div>

//   <div  className='footer'>  

// <form id='formf'>
// <label>
// <input type="text" name="name" />
// <input type="text" name="texto-mensagem" id='inp'/>  </label>
// <input type="submit" value="Enviar" />
// </form>

// </div>

// </div>


// </div>

