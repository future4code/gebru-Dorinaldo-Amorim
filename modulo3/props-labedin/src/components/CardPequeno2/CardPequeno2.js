import React from "react";
import './CardPequeno2.css'

function CardPequeno2 (props) {

return(
    <div className="peqcard2-container">
       <img src={ props.picture2 }  />
       <div>       
           <p ><b>Endereço : </b>{ props.Endeco}</p>  
      </div>

    </div>
)

}

export  default CardPequeno2;