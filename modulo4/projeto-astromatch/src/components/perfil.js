import React, { useState, useEffect} from 'react';
import axios from 'axios';
import IMG from './img/original.gif';
import {Sessao, ImgPhoto, Nome, Bio, Header, Conteine, Div,Botao, Botao2,DivImg,ConteinePai } from './styled'
import CancelIcon from '@material-ui/icons/Cancel';
import HowToRegIcon from '@material-ui/icons/HowToReg';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { ThemeProvider } from '@material-ui/styles';
import {theme} from './cores'



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
    <ConteinePai>
        <Conteine>
           <Header><div></div>
            <div><h2>Astromatch </h2></div>
          <div> <HowToRegIcon/> </div>
        </Header> <hr/> 
     
        {matchers ?  
         <Sessao  id={matchers.id}  > 
          <DivImg>  <ImgPhoto src={matchers.photo}  /></DivImg>
          <Nome>{matchers.name}{', '}{matchers.age}</Nome>
          <Bio>{matchers.bio}</Bio>
         </Sessao> :
 
       <Sessao><ImgPhoto src={IMG}/>  
         <p>carregando...</p> </Sessao>} 

         <Div>
           <ThemeProvider theme={theme}> 
             <Botao2  onclick={''}><CancelIcon fontSize="large" color="primary"/></Botao2>
             <Botao><FavoriteIcon fontSize="large" color="secondary"/> </Botao> 
            </ThemeProvider>
         </Div>
      </Conteine>
    
    </ConteinePai>
  )


}
export default Perfil;