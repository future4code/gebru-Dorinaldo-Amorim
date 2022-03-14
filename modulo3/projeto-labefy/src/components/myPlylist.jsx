import React from 'react';
// import styled from "styled-components";
import axios from "axios";




const axiosConfig = {
    headers: {
      Authorization: "dorinaldo-amorim-gebru",
    
    }
  };
  

export default  class Plylistas extends React.Component {
    state = {
        minhasPlylists: [],
        currentPage: "usersList",
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

      changePage = userId => {
        if (this.state.currentPage === "usersList") {
          this.setState({ currentPage: "userDetail", plylistsId: userId });
        } else {
          this.setState({ currentPage: "usersList", userId: "" });
        }
      };


      handleSearchUser = () => {
        axios
          .get(
            `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/search?name=${
              this.state.name
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
            {this.state.currentPage === "usersList" ? (
              <div>
                <ul>
                  {this.state.minhasPlylists.length === 0 && <div>Carregando...</div>}
                  {this.state.minhasPlylists.map(user => {
                    return (
                   
                    <li>
                         
                            <div onClick={() => this.changePage(user.id)}>
                              {user.name}
                          
                            </div>
                                                 
                          
                          <hr />
                    </li>
                      
                    );
                  })}
                </ul>
                <hr />
                <h4>Procurar plylist</h4>
                <input
                  placeholder="Nome exato para busca"
                  type="text"
                  value={this.state.name}
                  onChange={this.handleNameChange}
                />
                <button onClick={this.handleSearchUser}>Salvar edição</button>
              </div>
                      ) : (
      <div plylistsId={this.state.plylistsId} changePage={this.changePage}></div>
                      )}
                    </div>
                  );

      }
    }