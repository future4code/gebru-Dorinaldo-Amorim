import React, { useState, useEffect} from 'react';
import axios from 'axios';
import styled from 'styled-components';
import IMG from './img/original.gif';





const Perfil =() => {

  const [matchers,setmatchers]=useState({})


  useEffect (() => {
    getProfileToChoose()
  },[])

  const getProfileToChoose= () => {
   
    axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/dorinaldo-gebru/person")
      .then(res => {
      
        setmatchers(res.data.profile );
      
       })
      .catch(err => {
        console.log(err);
      });
  };




  return (
    <div>{matchers ?  
       <div  id={matchers.id} > 
         < img src={matchers.photo}/>
         <h2>{matchers.name}{', '}{matchers.age}</h2>
         <p>{matchers.bio}</p>
  
    {console.log(matchers.name)}
  </div> :
 
       <div><img src={IMG}/>  
    <p>carregando...</p> </div>} </div>
  )


}
export default Perfil;