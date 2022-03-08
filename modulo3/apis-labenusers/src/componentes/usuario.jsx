import React from "react";
import styled from "styled-components";
import axios from "axios";

import UserDetail from "./Pagina2";
  



const DeleteButton = styled.span`
   padding-left: 8px;
  color: red;
  border: 2px solid white;
  height: 80%;
  border-radius: 15px;
  cursor: pointer;
  
`
const Div =styled.div`
 display: flex;
 justify-content: space-between;

`
const Linha =styled.li`
align-items: center;
width: 60%;
margin-left: 20%;
`

const axiosConfig = {
  headers: {
    Authorization: "dorinaldo-amorim-gebru"
  }
};

class Users extends React.Component {
  state = {
    usersList: [],
    currentPage: "usersList",
    userId: "",
    name: ""
  };

  componentDidMount() {
    this.fetchUsersList();
  }

  fetchUsersList = () => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        axiosConfig
      )
      .then(response => {
        this.setState({ usersList: response.data });
      })
  }

  handleUserDeletion = userId => {
     // eslint-disable-next-line no-restricted-globals
       if (confirm("Tem certeza que deseja apagar o usuário?")) {
      axios
        .delete(
          `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${userId}`,
          axiosConfig
        )
        .then(() => {
          this.fetchUsersList();
          alert("Usuário esta sendo apagado!");
       
        })
        .catch(e => {
          alert("ERRO AO APAGAR USUARIO");
        });
    }
  };

  changePage = userId => {
    if (this.state.currentPage === "usersList") {
      this.setState({ currentPage: "userDetail", userId: userId });
    } else {
      this.setState({ currentPage: "usersList", userId: "" });
    }
  };

  handleNameChange = event => {
    const newNameValue = event.target.value;

    this.setState({ name: newNameValue });
  };

  handleSearchUser = () => {
    axios
      .get(
        `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/search?name=${
          this.state.name
        }&email=`,
        axiosConfig
      )
      .then(response => {
        this.setState({ usersList: response.data });
      })
      .catch(error => {
        alert("Erro ao criar o usuário");
        console.log(error);
      });
  };

  render() {
    return (
      <div>
        {this.state.currentPage === "usersList" ? (
          <div>
            <ul>
              {this.state.usersList.length === 0 && <div>Carregando...</div>}
              {this.state.usersList.map(user => {
                return (
               
                  <Linha>
                       <Div>
                        <div>
                          <span onClick={() => this.changePage(user.id)}>
                           {user.name}
                         </span>
                        </div>
                    <div>
                      <DeleteButton
                         onClick={() => this.handleUserDeletion(user.id)}
                           >    X
                       </DeleteButton>
                    </div>                              
                      </Div>
                      <hr />
                  </Linha>
            
                  
                );
              })}
            </ul>
            <hr />
            <h4>Procurar usuário</h4>
            <input
              placeholder="Nome exato para busca"
              type="text"
              value={this.state.name}
              onChange={this.handleNameChange}
            />
            <button onClick={this.handleSearchUser}>Salvar edição</button>
          </div>
        ) : (
          <UserDetail userId={this.state.userId} changePage={this.changePage} />
        )}
      </div>
    );
  }
}

export default Users;