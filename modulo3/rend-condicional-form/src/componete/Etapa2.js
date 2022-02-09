import React from 'react';
import styled from 'styled-components';


const Conteiner = styled.div`
text-align: center;
`



export default class Etapa2 extends React.Component {


render() {


  return (

<Conteiner>
<h1>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h1>
    <Formulaio>
        <label for="nome">5. Qual curso?</label>
            <input type="text" name="nome" id="nome"></input>

             <label for="c">6. Qual a unidade de ensino?</label>
            <input type="text" name="c" id="c"></input>
        </Formulaio>

</Conteiner>

  )
}
}