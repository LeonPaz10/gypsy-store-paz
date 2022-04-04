import React, { useState } from 'react'
import { Button } from 'react-bootstrap'

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

        
       
      
        <Button  className='menos' onClick={() => clickRes('menos')} variant="primary">-</Button>


        <span className='contadorSpan'>{contador}</span>


        <Button   className='mas' onClick={() => clickSum('suma')} variant="primary">+</Button>
        
        <hr />
        <Button variant="outline-dark" className='addCart' onClick={() => addToCart('')}> Agregar al carrito</Button>{' '}
        <hr />
       
      
    </div>
  )
}

export default ItemCount