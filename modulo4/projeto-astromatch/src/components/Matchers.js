import React, { useState, useEffect} from 'react';
import axios from 'axios';
import {Sessao, ImgPhoto2, Nome, Bio, Header, Conteine, CardMatchers} from './styled'
import PersonAddIcon from '@material-ui/icons/PersonAdd';

const Matchers =() => {
    const [matches,setmatches]=useState({})
    
    useEffect (() => {
        getPosts()
    },[])
  
     const getPosts = () => {
       
        axios
          .get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/dorinaldo-gebru/matches")
          .then(res => {
          
            setmatches(res.data.matches );
         
           })
          .catch(err => {
            console.log(err);
          });
      };
    

    return (
    <div>
      <Conteine>
          <Header>
            <div> <PersonAddIcon/> </div>
            <div><h2>Astro Match</h2></div>
            <div></div>
          </Header> <hr/> 
        {matches ? <CardMatchers>{matches.map((matc) => {
        return (
          <Sessao id={matc.id}>
            <ImgPhoto2 src={matc.photo}/>
            <div><Nome>{matc.name} </Nome> </div>
          </Sessao>
        )
      })} </CardMatchers> : <CardMatchers><p>carregando...</p> </CardMatchers>}
        <div></div>
   {console.log(matches, '007')}
      </Conteine>
    
    </div>
    );
  }

  export default Matchers;