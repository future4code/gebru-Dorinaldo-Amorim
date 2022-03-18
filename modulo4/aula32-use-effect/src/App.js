import React, { useEffect, useState } from "react";
import "./styles.css";
import axios from "axios";
import PokeCard from "./components/PokeCard/PokeCard";
import styled from 'styled-components';
import Img from "./img/arena.png"



const Divi =styled.div`
   background-image: url(${Img});
   height: 69vh;
    display: flex;
    font-family: sans-serif;
    text-align: center;
    justify-content: space-between;
    padding-top: 15%;
`

export default function App () {
  const [pokeList,setpokeList]=useState([])
  const [pokeList2,setpokeList2]=useState([])
  const [pokeName,setpokeName]=useState('')
  const [pokeName2,setpokeName2]=useState('')

  useEffect(() => {
    getcomponentDid()
  },[] )

    // método que roda após a montagem do componente
   const getcomponentDid = () => {
    // função axios que está batendo na API e buscando 151 pokemons
    axios
      .get("https://pokeapi.co/api/v2/pokemon/?limit=151")
      .then(res => {
        // função que está setando no estado os 151 pokemons
   
        setpokeList(res.data.results );
        setpokeList2(res.data.results );
       })
      .catch(err => {
        console.log(err);
      });
  };

  
 const changePokeName = event => {
  setpokeName(event.target.value)
  };

  const changePokeName2 = event => {
    setpokeName2(event.target.value)
    };
  


  

    return (
        <Divi>
            <div></div>
            <div> {/* evento onChange chama função toda vez que o usuário 
        escolhe um novo pokemon no dropdown */}
        <select onChange={changePokeName}>
          <option value={""}>Nenhum</option>
          {/* renderizando a lista de pokemons como opções do select */}
          {pokeList.map(pokemon => {
            return (
              <option key={pokemon.name} value={pokemon.name}>
                {pokemon.name}
              </option>          
            );
          })}
        </select>
        {/* expressão booleana que renderiza o componente PokeCard,
        caso o valor de pokeName, no estado, seja true */}
        {pokeName && <PokeCard pokemon={pokeName} />}</div>




        <div> {/* evento onChange chama função toda vez que o usuário 
        escolhe um novo pokemon no dropdown */}
        <select onChange={changePokeName2}>
          <option value={""}>Nenhum</option>
          {/* renderizando a lista de pokemons como opções do select */}
          {pokeList2.map(pokemon => {
            return (
              <option key={pokemon.name} value={pokemon.name}>
                {pokemon.name}
              </option>
            );
          })}
        </select>
        {/* expressão booleana que renderiza o componente PokeCard,
        caso o valor de pokeName, no estado, seja true */}
        {pokeName2 && <PokeCard pokemon={pokeName2} />}</div>
        <div></div>

        </Divi>
    )
}













//   state = {
//     // lista de pokemons que está sendo guardada no estado
//     pokeList: [],
//     // nome do pokemon guardado no estado, assim que o usuário
//     // escolhe um nome no dropdown
//     pokeName: ""
//   };

//   // método que roda após a montagem do componente
//   componentDidMount = () => {
//     // função axios que está batendo na API e buscando 151 pokemons
//     axios
//       .get("https://pokeapi.co/api/v2/pokemon/?limit=151")
//       .then(response => {
//         // função que está setando no estado os 151 pokemons
//         this.setState({ pokeList: response.data.results });
//       })
//       .catch(err => {
//         console.log(err);
//       });
//   };

//   changePokeName = event => {
//     this.setState({ pokeName: event.target.value });
//   };

//   render() {
//     return (
//       <div className="App">
//         {/* evento onChange chama função toda vez que o usuário 
//         escolhe um novo pokemon no dropdown */}
//         <select onChange={this.changePokeName}>
//           <option value={""}>Nenhum</option>
//           {/* renderizando a lista de pokemons como opções do select */}
//           {this.state.pokeList.map(pokemon => {
//             return (
//               <option key={pokemon.name} value={pokemon.name}>
//                 {pokemon.name}
//               </option>
//             );
//           })}
//         </select>
//         {/* expressão booleana que renderiza o componente PokeCard,
//         caso o valor de pokeName, no estado, seja true */}
//         {this.state.pokeName && <PokeCard pokemon={this.state.pokeName} />}
//       </div>
//     );
//   }
// }

