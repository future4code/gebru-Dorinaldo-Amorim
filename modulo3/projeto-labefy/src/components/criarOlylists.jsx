import React from 'react';
import axios from 'axios';


const axiosConfig = {
  headers: {
    Authorization: "dorinaldo-amorim-gebru"
  }
};

export default class Pagina2 extends React.Component {
state={
  plylistDetail: {},
  userEdition: "editButton",
  name: "",
 }

componentDidMount() {
  this.getplylistDetail();
}

getplylistDetail =() => {
  axios
    .get(
      `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.plylistsId}`,
      axiosConfig
    )
      .then(response => {
        this.setState({ plylistDetail : response.data});
      })
      .catch(error => {
        alert(`Nenhum dado encontrado! `)
      })
};

changePlylistEditionFiel = ()=>{
  if (this.state.userEdition === "editButton") {
    this.setState({ userEdition: "userEditForm"})
  } else { 
    this.setState({ userEdition: "editButton"})
  }
};

handleNameChange = event => {
  const newNameValue =event.target.value;
  this.setState({ name: newNameValue })
};



handleCreatePlylist = event => {   
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
      alert(`Plylist ${this.state.name} criado com sucesso`);
      this.setState({ name: ""})
    })

    .catch(error => {
      alert("Erro ao criar o plylist");
      this.setState({ name: ""})
    
    });

  };

render() {
      const userEdition =
      this.state.userEdition === "editButton" ? (
        <button onClick={this.changePlylistEditionFiel}>Editar plylist</button>
      ) : (
        <div>
          <input
            placeholder="Nome"
            type="text"
            value={this.state.name}
            onChange={this.handleNameChange}
          />
        
          <button onClick={this.handleCreatePlylist}>Salvar edição</button>
        </div>
      );

  return (
    <div>
         <p>criar plylist </p>
            <div>
              <p>{this.state.plylistDetail.name}</p>
              
                </div>
                 <div>{userEdition}</div>
                <hr />
              <button onClick={this.props.changePage}>
         Voltar para plylist        </button>
       </div>
 
  );
}
}
