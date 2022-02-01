
import React from "react";
import './mensagem.css'

export default class Mensagem extends React.Component {
   

              
render() {
    
  
    if (nome === "eu") {
        return (
            <div>{this.props.msg}</div>
                     )
    } else {
        return (
            <div>
           <p> <div>{this.props.remetente}</div>
            <div>{this.props.msg}</div></p>
            </div>
                     )
    }

}



/* <div className="mensagens">

<p id="pconfig">
<p> {props.remetente.toLowerCase() }</p>
<p>{props.msg.toLowerCase()} </p>
</p>



</div> */}
    



