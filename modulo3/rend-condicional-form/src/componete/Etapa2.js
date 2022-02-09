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
  

        <form>

        <label>5. Qual curso?
    <input type="text" name="name" />
  </label>
  <input type="submit" value="Enviar" />

  <label>
  6. Qual a unidade de ensino
    <input type="text" name="name" />
  </label>
  <input type="submit" value="Enviar" />
        </form>

</Conteiner>

  )
}
}