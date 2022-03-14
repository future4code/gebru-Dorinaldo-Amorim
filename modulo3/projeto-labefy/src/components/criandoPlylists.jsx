import React from 'react';
import axios from 'axios';


export default class Pagina1 extends React.Component {
  state = {
    name:"", 
  
  };
 
handleNameChange = event => {
  const newNameValue =event.target.value;
  this.setState({ name: newNameValue })
};


handleCreateUser = event => {
  const axiosConfig = {
    headers: {
      Authorization: "dorinaldo-amorim-gebru"
    }
  };

  const body= {
    name: this.state.name,
   
  };

 
axios
  .post(
    "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
    body,
    axiosConfig
  )
    .then(() => {
      alert(`plylist ${this.state.name} criado com sucesso`);
      this.setState({ name: ""})
    })

    .catch(error => {
      alert("Erro ao criar o usuário");
      this.setState({ name: ""})
    
    });

  };

render() {
  return (

<div>
<   p>criar plylist </p>

<input 
  placeholder="Nome"
  type="text"
  value={this.state.name}
  onChange={this.handleNameChange}   
/>

<button onClick={this.handleCreateUser}>criar plylist</button>
</div>
    );
  }
}
