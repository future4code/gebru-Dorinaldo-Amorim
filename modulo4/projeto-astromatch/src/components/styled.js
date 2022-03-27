import styled from 'styled-components';
import Imagen from './img/original.gif'

export const ConteinePai = styled.div`
background-image: url(${Imagen});
`

export const Sessao =styled.section`
position: relative;
color: white;
text-shadow: 3px 1px 4px black;
`
export const ImgPhoto2= styled.img`
height: 30px;
width: 30px;
border-radius: 8px;
margin: 1% 3% ;

`
export const DivImg =styled.div`
 display: flex;
 height: 450px;
 width: 375px;
 border-radius: 8px;
 margin: 1% 3% ;
  box-shadow: 0px -1px 16px 1px black;
`

export const ImgPhoto= styled.img`
margin: auto;
height: 450px;
width: 375px;
object-fit: cover;
`
export const Nome= styled.h2`
position: absolute;
top: 70%;
padding-left: 6%;

`

export const Bio = styled.p`
position: absolute;
bottom: 0;
padding-left: 4%;
padding-bottom: 4%;
word-wrap: break-word;
width: 370px;
`
export const Header = styled.header`
display: grid;
grid-template-columns: 1fr 2fr 1fr ;
border-bottom: 1px solid black;
`


export const Conteine = styled.div`
display: flex;
flex-direction: column;
background-color: white;
width: 400px;
height: 650px;
margin: auto;
border: 1px solid black;
margin-top: 10vh;
border-radius: 8px;
`
export const CardMatchers = styled.div`
position: relative;
display: flex;
flex-direction: row;
width: 400px;
height: 450px;
`

export const Div =styled.div`
 display: flex;
 justify-content: space-between;
padding: 7% 10%;

`

export const Botao = styled.button`
border-radius: 35px;
border: 1px solid red;
height: 130%;
width: 30%;
`

export const Botao2 = styled.button`
border-radius: 35px;
border: 1px solid green;
color: green;
height: 130%;
width: 30%;
`