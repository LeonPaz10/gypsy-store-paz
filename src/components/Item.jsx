import React from 'react'
import Card from 'react-bootstrap/Card'
import { Button } from 'react-bootstrap'

 
 const item = ({producto}) => {

    // eslint-disable-next-line no-unused-vars
    const onAdd = (contador) => {
    console.log(`Agregado al carrito, ${contador} ${producto.nombre}`);
    }

    console.log(producto) 

    
    
  return (

    <Card style={{ width: '16rem', margin: '12px' }}>
            <Card.Img variant="top" src={producto.img} />
            <Card.Body>
                <Card.Title>{producto.nombre}</Card.Title>
                <Card.Text>
                    {producto.description}
                </Card.Text>
                <Card.Text>
                    Precio: ${producto.precio}
                </Card.Text>
                
                    <Button variant="primary">Ver más</Button>
                
            </Card.Body>
        </Card>

  )
}

export default item