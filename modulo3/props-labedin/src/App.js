import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';
import CardPequeno2 from './components/CardPequeno2/CardPequeno2';





function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem='https://st3.depositphotos.com/1007566/13383/v/1600/depositphotos_133832928-stock-illustration-student-graduation-uniform-icon.jpg'
          nome="Dorinaldo S Amorim" 
          descricao="Oi, eu sou o Dorinaldo Amorim. Sou aluno da Labenu. Adoro programção, computação e tudo relacionado a Ti. Atualmente ainda não estou trabalhando nesta área, sou da área de saúde, más com o objetivo de em breve migrar para programação."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

{/* ---------------------exercicio------------------------------------------- */}

    <div className="page-section-container">
    <CardPequeno 
         picture="https://www.mundodaeletrica.com.br/y/1767/email-600.webp"
         email="dorinaldosa@gmail.com"
      />
    </div>

    <div className="page-section-container">
    <CardPequeno2 
         picture2="https://previews.123rf.com/images/valentint/valentint1511/valentint151100998/47634545-home-icon-internet-button-on-white-background-.jpg"
         Endeco="Barreias-Bahia"
      />
    </div>



{/* ------------------------------------------------------------------------ */}

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://st3.depositphotos.com/1007566/13383/v/1600/depositphotos_133832928-stock-illustration-student-graduation-uniform-icon.jpg" 
          nome="Dorinaldo S Amorim" 
          descricao="Trabalho a 12 anos a área de saúde, especificamente no setor odontológico, mas gracuado em Análise e desenvolvimento de sistemas." 
        />
        
        <CardGrande 
           imagem="https://st3.depositphotos.com/1007566/13383/v/1600/depositphotos_133832928-stock-illustration-student-graduation-uniform-icon.jpg" 
          nome="Dori" 
          descricao="Apontando defeitos            ??." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;


// link suge; squalid-pig.surge.sh

