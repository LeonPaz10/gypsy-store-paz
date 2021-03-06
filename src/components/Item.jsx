import React from 'react'
import Card from 'react-bootstrap/Card'
import { Button } from 'react-bootstrap'
import { Badge } from 'react-bootstrap'
import { Link } from 'react-router-dom'

 
 const item = ({producto}) => {

    // eslint-disable-next-line no-unused-vars
    const onAdd = (contador) => {
    console.log(`Agregado al carrito, ${contador} ${producto.nombre}`);
    }

    console.log(producto) 

    
    
  return (

    <Card style={{ width: '16rem', margin: '12px', paddingTop: '30px', marginTop: '30px', borderRadius: '10px', borderColor: '#212529 '}}>
            <Card.Img variant="top" src={producto.img} className='img' />
            <Card.Body>
               
               
                <Card.Text>
                   <h2> ${producto.precio} </h2>  <Badge bg="dark">Nuevo ingreso!</Badge>
                </Card.Text>

                <Card.Title>{producto.nombre}</Card.Title>
               
                
                   <Link to={`/item/${producto.id}`}><Button variant="primary">Ver más</Button> </Link> 
                    
                 
            </Card.Body>
        </Card>

  )
}

export default item