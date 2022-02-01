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
  render() {
    return (
      <MainContainer>

        <Post
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
