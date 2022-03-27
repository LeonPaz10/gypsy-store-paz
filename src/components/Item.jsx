import React from 'react'
import ItemCount from './ItemCount'

 
 const item = ({producto }) => {
  return (
    <div className="card container-fluid" style={{width: '18rem'}}>
    <img src={producto.img} className="card-img-top" alt={producto.nombre}/>
    <div className="card-body">
      <h5 className="card-title">{producto.nombre}</h5>
      <p className="card-text"> $ {producto.precio}</p>
      <p className="card-text"> Stock: {producto.stock}</p>
      <a href="#" ><ItemCount/></a>

      
    </div>
  </div>
  )
}

export default item