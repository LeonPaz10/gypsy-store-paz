import React from 'react'

const ItemDetail = ({productDetail}) => {
    
    const {nombre, description, img} = productDetail
  return (
    <div>
        <h2>Detalle de producto {nombre}</h2>
        <img src={img} alt={nombre} />
        <p>{description}</p>
    </div>
  )
}

export default ItemDetail