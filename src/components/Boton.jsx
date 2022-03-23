import React from "react";

function Boton({texto, botonDeAdd, click}){

    return(
        <button className={botonDeAdd ? 'boton-add': 'boton-del'}
         onclick={click}>   
            {texto} 

        </button>
    )
};

export default Boton;