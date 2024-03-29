import React from "react";
import "../style/Boton.css"

function Boton ({texto, esBotonClick, funcionClick,}) {
    return(
        <button className={esBotonClick ? "boton-click" : "boton-reiniciar"}
        onClick={funcionClick}>
            {texto} 
        </button>
    );
}
export default Boton
