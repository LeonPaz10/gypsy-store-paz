import React from 'react'
import ItemCount from './ItemCount'



const ItemListContainer = () => {

  const stock = 10;
  const initial = 1;
  const onAdd = (contador) => {
    console.log('add to cart',contador)



  }
  return (
    
    <ItemCount stock={stock} initial={initial} onAdd={onAdd}/>
  )
}

export default ItemListContainer