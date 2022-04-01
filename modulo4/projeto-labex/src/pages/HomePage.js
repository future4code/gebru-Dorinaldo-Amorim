import React from "react";
import { useNavigate } from "react-router-dom";
import { goToAboutPage } from "../routes/coordinator";


const HomePage = () => {
  const navigate = useNavigate()

  return (
    <div>
    
      <button onClick={goToAboutPage()}>xxxx</button>
 

    </div>
  );
};

export default HomePage;
