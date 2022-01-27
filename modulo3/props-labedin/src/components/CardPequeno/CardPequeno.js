import React from "react";
import './CardPequeno.css'

function CardPequeno (props) {

return(
    <div className="peqcard-container">
       <img src={ props.picture }  />
       <div>       
           <p ><b>Email: </b>{ props.email}</p>  
      </div>

    </div>



)

}

export  default CardPequeno;