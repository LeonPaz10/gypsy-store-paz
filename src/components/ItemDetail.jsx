import React, { useEffect, useState } from 'react'
import ItemCount from './ItemCount'
import { Card } from 'react-bootstrap';

import { useNavigate } from 'react-router-dom';




const ItemDetail = ({productDetail}) => {

  const initial = 1;

  const [contador, setContador] = useState(initial);

  const {nombre, description, img, precio, stock, id} = productDetail



 

  
  const addToCart = () => {
    const itemToAdd ={

      id,
      nombre,
      precio,
      description,
      img,
      contador,

    }
    console.log(itemToAdd);
    
  }
 
  

  

  


 


  
    
  

  const navigate = useNavigate()
  const handleNavigate = () =>{
      navigate(-1)
    }
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

                <Card.Text>
                   <h6>Stock: {stock} </h6>  
                </Card.Text>



                {/* <Select
                options={options}
                onSelect={setTalle}

                /> */}

                <span><ItemCount  onAdd={addToCart} initial={initial} stock={stock} contador={contador} setContador={setContador}/></span>


                <button className='btn btn-outline-primary' onClick={handleNavigate}>Volver</button>


                
            
                    
                 
            </Card.Body>
        </Card>
{/* 
        {isMobile
        ? <button className=' btn btn-outline-primary align-self-center'> Descarga Gypsy Store en tu celular!</button>
        : <button className='btn btn-outline-dark align-self-center align-content-lg-end'>Descarga Gypsy Store en tu computadora!</button>
        } */}
   </div>
    
  )
}

export default ItemDetail