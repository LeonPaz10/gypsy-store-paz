import React from 'react'
import ItemCount from './ItemCount'
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ItemDetail = ({productDetail}) => {
  const initial=1;

   const onAdd = (contador) => {
    console.log(`Agregado al carrito, ${contador} ${productDetail.nombre}`);
  }

  
    
    const {nombre, description, img, precio, stock} = productDetail
  return (
   <div className='d-flex verMas' >
     
    <Card style={{ width: '16rem', margin: '12px', paddingTop: '30px', marginTop: '30px' }}>
            <Card.Img variant="top" src={img} />
            <Card.Body>
               
               
                <Card.Text>
                   <h2> ${precio} </h2>  
                </Card.Text>

                <Card.Title>{nombre}</Card.Title>
                <Card.Text>
                    {description} 
                </Card.Text>

                <span><ItemCount initial={initial} stock={stock} onAdd={onAdd}/></span>
                
            
                    
                 
            </Card.Body>
        </Card>
   </div>
    
  )
}

export default ItemDetail