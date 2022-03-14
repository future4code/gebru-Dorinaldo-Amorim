import React from 'react';
import styled from "styled-components";
import axios from "axios";
import Plylistas from './components/myPlylist';

const Conteiner =styled.div`
display: grid;
grid-template-rows: 6fr 1fr;
height: 100vh;
`
const Nav =styled.nav`
background-color: rgb(56, 56, 56);
color: orange;
height: 100%;
`

const Main = styled.main`
display: grid;
grid-template-columns: 1fr 5fr;
`

const axiosConfig = {
    headers: {
      Authorization: "dorinaldo-amorim-gebru",
    
    }
  };
  

export default  class App extends React.Component {
    state = {
        minhasPlylists: [],
        currentPage: 1,
        plylistsId: '',
        nomePlylits: '',
    }

    componentDidMount() {
        this.myPlylists();
      }

      myPlylists= () => {
        axios
        .get(
          "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
          axiosConfig
        )
        .then(response => {
            this.setState({ minhasPlylists: response.data });
          })
    
  
      }
    

    render (){
        return(
          <Conteiner>
              <Main>
                <Nav>
                   <ul>
                       <li onClick={''}>Home</li>
                       <li onClick={''}>criar plylists</li>
                       <li onClick={''}>musicas</li>
                   </ul>

                  </Nav>
                
                  <div>
                        { <Plylistas/>}

                  </div>
              </Main>
              <footer>oi...</footer>


          </Conteiner>
      );
    }
}
