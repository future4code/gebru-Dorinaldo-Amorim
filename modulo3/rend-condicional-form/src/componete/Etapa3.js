import React from 'react';
import styled from 'styled-components';


const Conteiner = styled.div`
text-align: center;
`



export default class Etapa3 extends React.Component {


render() {


  return (

<Conteiner>
    <h1>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h1>
<Formulaio>
            <label for="a">5. Por que você não terminou um curso de graduação?</label>
            <input type="text" name="a" id="a"></input>

            <label for="b">6. Você fez algum curso complementar?</label>
            <input type="text" name="b" id="b"></input>
</Formulaio>


</Conteiner>

  )
}
}