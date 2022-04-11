
import { Button } from 'react-bootstrap'

const ItemCount = ({onAdd, initial, stock, contador, setContador}) => {

  

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


 

  return (
    <div className=''>

        
       
      
        <Button  className='menos' onClick={() => clickRes('menos')} variant="primary">-</Button>


        <span className='contadorSpan'>{contador}</span>


        <Button   className='mas' onClick={() => clickSum('suma')} variant="primary">+</Button>
        
        <hr />
        <Button variant="outline-success" className='addCart' onClick={() => onAdd('')}> Agregar al carrito</Button>{' '}
        <hr />
       
      
    </div>
  )
}

export default ItemCount