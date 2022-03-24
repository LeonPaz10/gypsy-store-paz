import React from 'react'
import ItemCount from './ItemCount'
import ItemList from './ItemList'



const productos = [
  {
    nombre: "Producto 1",
    stock: 5,
    precio: 25000,
    img: 'http://assets.stickpng.com/thumbs/580b57fbd9996e24bc43bf78.png'
  },
  {
    nombre: "Producto 2",
    stock: 2,
    precio: 26000,
    img: 'http://assets.stickpng.com/thumbs/580b57fbd9996e24bc43bf78.png'
  },
  {
    nombre: "Producto 3",
    stock: 10,
    precio: 30000,
    img: 'http://assets.stickpng.com/thumbs/580b57fbd9996e24bc43bf78.png'
  }
]

const onAdd = (contador) => {
  console.log('add to cart',contador)



}

const ItemListContainer = () => {

  return (

    <div className='container d-flex' style={{ marginTop: '70px' }}>
      {productos.map((producto, index) =>
        <ItemList key={index} {...producto} />
      )
      }

    </div>


  )
}

export default ItemListContainer