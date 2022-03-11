import React from 'react';
import axios from 'axios';



export default class Pagina1 extends React.Component {
  state = {
    name:"", 
    email: ""
  };
 
handleNameChange = event => {
  const newNameValue =event.target.value;
  this.setState({ name: newNameValue })
};

handleEmailChange = event => {
  const newEmailValue = event.target.value;
  this.setState({email: newEmailValue})
};

handleCreateUser = event => {
  const axiosConfig = {
    headers: {
      Authorization: "dorinaldo-amorim-gebru"
    }
  };

  const body= {
    name: this.state.name,
    email: this.state.email
  };

 
axios
  .post(
    "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
    body,
    axiosConfig
  )
    .then(() => {
      alert(`Usuaário ${this.state.name} criado com sucesso`);
      this.setState({ name: "", email: ""})
    })

    .catch(error => {
      alert("Erro ao criar o usuário");
      this.setState({ name: "", email: ""})
    
    });

  };

render() {
  return (

<div>
<   p>Página de cadastro </p>

<input 
  placeholder="Nome"
  type="text"
  value={this.state.name}
  onChange={this.handleNameChange}   
/>
<input
  placeholder="E-mail"
  type="email"
  value={this.state.email}
  onChange={this.handleEmailChange}
/>
<button onClick={this.handleCreateUser}>criar usuário</button>
</div>
    );
  }
}

