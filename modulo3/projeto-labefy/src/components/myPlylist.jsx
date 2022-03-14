import React from 'react';
import styled from "styled-components";
import axios from "axios";
import PlylistDetail from './criarOlylists';

const Card = styled.div`
  display: flex;
  border: 1px solid gray;
  margin: 8px;
  padding: 0 8px;
  justify-content: space-between;
  align-items: center;
  width: 250px;
`




const axiosConfig = {
    headers: {
      Authorization: "dorinaldo-amorim-gebru",
    
    }
  };
  

export default  class Plylistas extends React.Component {
    state = {
        minhasPlylists: [],
        currentPage: "minhasPlylists",
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

      changePage =  plylistsId => {
        if (this.state.currentPage === "minhasPlylists") {
          this.setState({ currentPage: "plylistDetail", plylistsId:  plylistsId });
        } else {
          this.setState({ currentPage: "minhasPlylists",  plylistsId: "" });
        }
      };

      handleNameChange = event => {
        const newNameValue = event.target.value;
    
        this.setState({ nomePlylits: newNameValue });
      };
    


      handleSearchUser = () => {
        axios
          .get(
            `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/search?name=${
              this.state.nomePlylits
            }`,
            axiosConfig
          )
          .then(response => {
            this.setState({  minhasPlylists: response.data });
          })
          .catch(error => {
            alert("Erro ao criar plylist");
            console.log(error);
          });
      };
    
    

      render(){
          return(
            <div>
            {this.state.currentPage === "minhasPlylists" ? (
              <div>
                <div>
            
                    {this.state.minhasPlylists.length === 0 && <div><p>Carregando...</p></div>} 
                    {this.state.minhasPlylists.map(user => {
                      return (               
                  <Card>   
                  
                  <span onClick={() => this.changePage(user.id)}>
                            {user.nomePlylits}
                           </span>
                        <hr />
                </Card>
                        
                      );
                    })}

</div>
                <hr />
                <h4> plylist</h4>
                <input
                  placeholder="Nome exato para busca"
                  type="text"
                  value={this.state.nomePlylits}
                  onChange={this.handleNameChange}
                />
                <button onClick={this.handleSearchUser}>Salvar edição</button>
              </div>
                      ) : (
                        <PlylistDetail plylistsId={this.state.plylistsId} changePage={this.changePage} />
   
                      )}

<hr />

                    </div>
                  );

      }
    }