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
<form>
<label>5. Por que você não terminou um curso de graduação?
    <input type="text" name="name" />
  </label>
  <input type="submit" value="Enviar" />

  <label>
  6. Você fez algum curso complementar?
    <input type="text" name="name" />
  </label>
  <input type="submit" value="Enviar" />
</form>


</Conteiner>

  )
}
}