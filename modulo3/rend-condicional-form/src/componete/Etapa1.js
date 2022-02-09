import React from 'react';
import styled from 'styled-components';


const Conteiner = styled.div`
text-align: center;
`
const Formulaio = styled.form`
text-align: center;
`

export default class Etapa1 extends React.Component {


render() {


  return (

<Conteiner>
    <div><h1>ETAPA 1 -DADOS PESSOAIS</h1></div>
        <Formulaio>
            <label for="nome">1. Qual é o seu nome ? </label>
            <input type="text" name="nome" id="nome"></input>
            <label for="idade">2. Qual a sua idade ? </label>
            <input type="text" name="idade" id="idade"></input>
            <label for="email">3. Qual o seu email ? </label>
            <input type="text" name="email" id="email"></input>
            <label for="escol.">4. Qual a sua escolaridade ? </label>
            <input type="text" name="escol," id="escol."></input>
        </Formulaio>


</Conteiner>

  )
}
}