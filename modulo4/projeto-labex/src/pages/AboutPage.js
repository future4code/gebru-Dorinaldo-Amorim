import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { goToHomePage, goBack } from "../routes/coordinator";

const AboutPage = () => {
  const navigate = useNavigate()
  const params = useParams()
  
 
  return (
    <div>
    


      <button onClick={()=>goToHomePage(navigate)}>Página Home</button>
      <button onClick={()=>goBack(navigate)}>Voltar</button>

    </div>
  );
};

export default AboutPage;
