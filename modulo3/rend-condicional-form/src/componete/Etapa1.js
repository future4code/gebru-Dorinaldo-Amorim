import React from 'react';
import styled from 'styled-components';


const Conteiner = styled.div`
text-align: center;
`





export default class Etapa1 extends React.Component {


render() {


  return (


 <Conteiner>
           <form>

<h1>ETAPA 1 -DADOS PESSOAIS</h1>
        <label >1. Qual é o seu nome ?  <input type="text" name="name" /></label>
            <input type="text" name="nome" id="nome"></input>
            <label >2. Qual a sua idade ?  <input type="text" name="name" /> </label>
            <input type="text" name="idade" id="idade"></input>
            <label >3. Qual o seu email ?  <input type="text" name="name" /> </label>
            <input type="text" name="email" id="email"></input>
            <label >4. Qual a sua escolaridade ?  <input type="text" name="name" /> </label>
            <input type="text" name="escol," id="escol."></input>

        </form>
 </Conteiner>
    






  )
}
}