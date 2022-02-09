import React from 'react';
import Etapa1 from './componete/Etapa1';
import Etapa2 from './componete/Etapa2';
import Etapa3 from './componete/Etapa3';
import Final from './componete/Final';



export default class App extends React.Component {
  state = {
    etapa: 1,
  }

  irParaProximaEtapa = () => {
    this.setState({etapa : this.state.etapa += 1});
   }

   renderizaEtapa = () => {
  
          this.state.etapa === 1 &&  <Etapa1 />
          this.state.etapa === 2 &&  <Etapa2 />
          this.state.etapa === 3 &&  <Etapa3 />
          this.state.etapa === 4 &&  <Final />

  }

render() {


  return (

      <div>
          {this.renderizaEtapa()}
            <button onClick={this.irParaProximaEtapa()}>Próxima Etapa</button>
      </div>

      )

  }

}














  // switch (this.state.etapa) {
    //   case 1: 
    //     return <Etapa1 />;
    //   case 2: 
    //     return <Etapa2 />;
    //   case 3: 
    //     return <Etapa3 />;
    //   case 4:  
    //       return <Final />;
    // }