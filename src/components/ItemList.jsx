import React from 'react'
import Item from './Item'


const ItemList = ({listaProductos}) => {
  return (
    <div className='container d-flex justify-content-evenly d-flex flex-wrap mt-2' style={{ marginTop: '70px' }}>
      
      
 
        {listaProductos.map((producto) => <Item producto={producto} key={producto.id}/>)}

        



    </div>
  )
}

export default ItemList