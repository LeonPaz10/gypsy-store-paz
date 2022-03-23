import React from 'react'
import Boton from './Boton'

function ItemCount() {
    const click = () =>{
        console.log( 'click')
    }
    const borrarContador = () =>{
        console.log('borrar')
    }
  return (
      
    <div className='contenedor-principal'>

        <Boton 
        texto='agregar'
        botonDeAdd={true}
        click={click}/>

        <Boton
        texto='borrar'
        botonDeAdd={false}
        click={borrarContador}/>

     
    </div>
  )
}

export default ItemCount