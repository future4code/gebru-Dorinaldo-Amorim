import React from 'react';
import styled from 'styled-components';
import Imagen from './img/a.png';


const Div =styled.div`
text-align: center;
background-image: url(${Imagen});
height: 98vh;
color: white ;

`
export default  class App extends React.Component {




  render() {
    return (
      <Div >
     
     <p>olá mundo</p>
      </Div>
    );
  }

}


