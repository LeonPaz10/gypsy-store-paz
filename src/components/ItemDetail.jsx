import React, { useContext, useState } from 'react'
import ItemCount from './ItemCount'
import { Card } from 'react-bootstrap';
import { CartContext } from './CartContext';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'
import item from './Item';




const ItemDetail = ({productDetail}) => {

  const  {cart, addItem, isInCart} = useContext(CartContext); 
  console.log( isInCart (...cart, item));

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
      cantidad: contador,

    }
    addItem(itemToAdd);
    
  }
  const navigate = useNavigate()
  const handleNavigate = () =>{
      navigate(-1)
    }
  return (
   <div className=' verMas' >
     
    <Card style={{ width: '16rem', margin: '12px', paddingTop: '30px', marginTop: '30px',borderRadius: '10px', borderColor: '#212529 ' }}>
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
                   <h6>Stock disponible: {stock} </h6>  
                </Card.Text>

                {stock === 0 && <h6 style={{color: 'red', fontWeight: '700'}}>Sin stock  </h6>} 

                {
                  stock > 0 &&
                  <>
                  {stock <= 5  && <h6 style={{color: 'red', fontWeight: '700'}}>Ultimas unidades!  </h6>}


                  </>
                }	
                {
                  stock > 0 &&
                  <>
                  {
                          !isInCart(id) ?
                          <ItemCount  onAdd={addToCart} initial={initial} 
                         stock={stock} contador={contador} setContador={setContador}/>
                         :<Link to="/cart" className='btn btn-danger'> Terminar mi compra</Link>
                  }
                 
                  </>
            

               }
               <hr />


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