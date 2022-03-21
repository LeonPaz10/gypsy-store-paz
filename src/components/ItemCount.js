import React, { useState } from 'react'

function ItemCount(){

    const [contador, setContador] = useState(0) 
    const fechaActual = new Date();
        return (
          <div className='cont'>
              <div>
                  Remera blanca: {contador}
              </div>
{/* 
              <div>


                  {fechaActual.getDate()} / {fechaActual.getMonth()+1} / {fechaActual.getFullYear() } /
                    Hora : {fechaActual.getHours()} / minutos: {fechaActual.getMinutes()}
                    / segundos: {fechaActual.getSeconds()}

            </div> */}

            <button onClick={() => setContador(contador + 1)}>Agregar</button>
            <button onClick={() => setContador(contador - 1)}>Quitar</button>


          </div>
        )
      

    }



export default ItemCount