import React, { useState } from 'react'

const ItemCount = ({stock, onAdd, initial}) => {

 

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
    <div className=''>

        
       
        <button className='menos' onClick={() => clickRes('menos')} > - </button>


        <span className='contadorSpan'>{contador}</span>


        
        <button className='mas' onClick={() => clickSum('suma')}> + </button>
        <hr />
        <button className='addCart' onClick={() => addToCart('')}> Agregar al carrito</button>
      
    </div>
  )
}

export default ItemCount