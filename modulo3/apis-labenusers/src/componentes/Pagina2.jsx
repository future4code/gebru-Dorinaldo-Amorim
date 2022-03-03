import React from 'react';
import axios from 'axios';

const axiosConfig = {
  headers: {
    Authorization: "dorinaldo-amorim-gebru"
  }
};

export default class Pagina2 extends React.Component {
state={
  userDetail: {},
  userEdition: "editButton",
  name: "",
  email: ""

}

componentDidMount() {
  this.getUserDetail();
}

getUserDetail =() => {
  axios
    .get(
      `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${this.props.userId}`,
      axiosConfig
    )
      .then(response => {
        this.setState({ userDetail : response.data});
      })
      .catch(error => {
        alert(`Nenhum dado encontrado! `)
      })
};

changeUserEditionFiel = ()=>{
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

handleEmailChange = event => {
  const newEmailValue = event.target.value;
  this.setState({email: newEmailValue})
};

handleCreateUser = event => {   //criNDO USUÁRIO...
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
      const userEdition =
      this.state.userEdition === "editButton" ? (
        <button onClick={this.changeUserEditionFiel}>Editar usuário</button>
      ) : (
        <div>
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
          <button onClick={this.handleCreateUser}>Salvar edição</button>
        </div>
      );

  return (
    <div>
         <p>pagina2 </p>
            <div>
              <p>{this.state.userDetail.name}</p>
               <p>{this.state.userDetail.email}</p>
                </div>
                 <div>{userEdition}</div>
                <hr />
              <button onClick={this.props.changePage}>
         Voltar para lista de usuários        </button>
       </div>
 
  )
}
}

//   render() {


//     return (
//       <div>
//         <div>
//           <p>{this.state.userDetail.name}</p>
//           <p>{this.state.userDetail.email}</p>
//         </div>
//         <div>{userEdition}</div>
//         <hr />
//         <button onClick={this.props.changePage}>
//           Voltar para lista de usuários
//         </button>
//       </div>
//     );
//   }
// }

// export default UserDetail;