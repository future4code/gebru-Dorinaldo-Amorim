import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';
import Foto from './img/foto.jpg';
import Foto1 from './img/foto1.jpg';
import Fotod from './img/download.jpg';
import Fotod1 from './img/download (1).jpg';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
state= {
  postUsuario: [
    {
    nomeUsuario: '',
    fotoUsuario: '',
    fotoPost: ''
  }
],

  valorInputNomeUsuario: "",
  valorInputFotoUsuario: "",
  valorInputFotoPost: ""
};

onChangeInputNomeUsuario = (event)=> { this.setState({valorInputNomeUsuario : event.target.value})   };
onChangeInputFotoUsuario = (event)=> { this.setState({valorInputFotoUsuario: event.target.value})   };
onChangeInputFotoPost = (event)=> { this.setState({valorInputFotoPost: event.target.value})   };

addPost= ()=> {

  const newPost = {
    nomeUsuario: this.state.valorInputNomeUsuario,
    fotoUsuario: this.state.valorInputFotoUsuario,
    fotoPost: this.state.valorInputFotoPost

  };



const MeuPost = [...this.state.postUsuario, newPost];
this.setState({postUsuario: MeuPost});
this.setState({ valorInputNomeUsuario: ""});
this.setState({valorInputFotoUsuario: ""});
this.setState({ valorInputFotoPost: ""})
}


  render() {

const listaPost = this.state.postUsuario.map((posty) => {
  return (
<Post
   nomeUsuario={posty.nomeUsuario}
   fotoUsuario={posty.fotoUsuario}
   fotoPost={posty.fotoPost}
/>
 
   )
});






    return (
      <MainContainer>


        <input
        value={this.state.valorInputNomeUsuario}
        onChange={this.onChangeInputNomeUsuario}
        placeholder={'name'}
        />
         <input
        value={this.state.valorInputFotoUsuario}
        onChange={this.onChangeInputFotoUsuario}
        placeholder={'fotoUsu'}
        />
         <input
        value={this.state.valorInputFotoPost}
        onChange={this.onChangeInputFotoPost}
        placeholder={'fotoPOst'}
        />

        <button onClick={this.addPost}>enviar</button>

        {listaPost}




        
//         <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />

<Post
          nomeUsuario={'Cassia fotos'}
          fotoUsuario={Foto}
          fotoPost={Foto1}
        />
<Post
          nomeUsuario={'Mundo em alta definição'}
          fotoUsuario={Fotod}
          fotoPost={Fotod1}
        />
     
     
     









      </MainContainer>
     
    );
  }
}

export default App;
