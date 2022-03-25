import React, { useState, useEffect} from 'react';
import CardPerfil from './components/cardPerfil';
import axios from 'axios';
import './App.css';

function App() {
  const [matchers,setmatchers]=useState([])


  useEffect (() => {
    getmatchs()
  },[])

  const getmatchs= () => {
   
    axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/darvas/matches")
      .then(res => {
      
        setmatchers(res.data.results );
      
       })
      .catch(err => {
        console.log(err);
      });
  };
console.log(matchers, "oi")
  return (
  < >
    <p>olá mundo</p>
   <CardPerfil/>
   <div>{matchers}</div>
  </>
  );
}

export default App;
