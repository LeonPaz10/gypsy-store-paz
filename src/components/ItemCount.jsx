import React, { useState } from 'react'

const ItemCount = ({stock, initial, onAdd }) => {

    const [contador, setContador] = useState(initial);

    const clickSum = () => {
       
        if (contador === stock) {
            return;
            
        }
        
            setContador(contador + 1);
        
            
        
    };

    const clickRes = () => {
        if (contador === initial) {
            return;
        }
      
            setContador(contador - 1);
        
            
        
    };


    
    const addToCart = () => {

      onAdd(contador);

    }
  return (
    <div className='contador mt-4'>

        <h3>Camisa blanca</h3>
       
        <button className='menos' onClick={() => clickRes('menos')} > - </button>


        <span className='contadorSpan'>{contador}</span>


        
        <button className='mas' onClick={() => clickSum('suma')}> + </button>
        <hr />
        <button className='addCart' onClick={() => addToCart('')}> Agregar al carrito</button>
      
    </div>
  )
}

export default ItemCount