import React, { useState, useEffect} from 'react';
import axios from 'axios';
import styled from 'styled-components';


const CardPerfils = styled.div`

`


const Matchers =() => {
    const [cardPerfil,setcardPerfil]=useState({})


     
    useEffect (() => {
        getPosts()
    },[])
  
 
    const getPosts = () => {
        // função axios que está batendo na API e buscando 151 pokemons
        axios
          .get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/dorinaldo-gebru/person")
          .then(res => {
            // função que está setando no estado os 151 pokemons
       
            setcardPerfil(res.data.matches );
         
           })
          .catch(err => {
            console.log(err);
          });
      };
    
      console.log(cardPerfil, '007')
  
    return (
    <CardPerfils >
     
        <div></div>
        <div>{cardPerfil}</div>
        <div></div>
   
    
    </CardPerfils>
    );
  }

  export default Matchers;