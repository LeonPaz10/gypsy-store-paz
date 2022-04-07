import React, { useEffect, useState } from 'react'
import ItemCount from './ItemCount'
import { Card } from 'react-bootstrap';

import { Link, useNavigate } from 'react-router-dom';
import Select from './Select';



const ItemDetail = ({productDetail}) => {

  const options =[
    {value: 'xl' ,text: 'xl'},
    {value: 'l', text: 'l'},
    {value: 'm',text: 'm'},
  ]
  

  const [talle, setTalle]= useState('xl')

  // const [isMobile, setIsMobile] = useState(false)

  // const checkIsMobile = () => {
  //   console.log(window.visualViewport.width)
  //   if (window.visualViewport.width <= 552) {
  //     setIsMobile(true)
  //   }else{
  //     setIsMobile(false)
  //   }
  // }

  // useEffect(() =>{
  //   checkIsMobile()
  //   window.addEventListener('resize', checkIsMobile)
  //   return () => {
  //     window.removeEventListener('resize', checkIsMobile)
  //   }
  // },[])


  const initial=1;

  const onAdd = (contador) => {
    console.log(`Agregado al carrito,  ${productDetail.id}  ${productDetail.nombre} ${productDetail.precio} ${contador} `);
  }


  
    
  const {nombre, description, img, precio, stock, id } = productDetail

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

                <Select
                options={options}
                onSelect={setTalle}

                />

                <span><ItemCount initial={initial} stock={stock} onAdd={onAdd}/></span>


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