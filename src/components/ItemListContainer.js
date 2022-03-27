import React, { useState, useEffect } from 'react'

import ItemList from './ItemList'













const ItemListContainer = () => {

  const [listaProductos, setListaProductos] = useState([])

  const [cargando, setCargando] = useState(false)

  

  

  

  const productos = [
    { id:'01',
      nombre: "Camisa Blanca",
      stock: 5,
      initial:1,
      precio: 13000,
      img: 'https://w7.pngwing.com/pngs/24/545/png-transparent-t-shirt-sleeve-clothing-collar-shoulder-white-tshirt-tshirt-white-active-shirt.png'
    },
    {
      id:'02',
      nombre: "Zapatos ",
      stock: 2,
      initial:1,
      precio: 26000,
      img: 'https://e7.pngegg.com/pngimages/88/948/png-clipart-shoe-shoes-brown-leather-thumbnail.png'
    },
    {
      id:'03',
      nombre: "Cinto",
      stock: 10,
      initial:1,
      precio: 2000,
      img: 'https://w7.pngwing.com/pngs/920/15/png-transparent-belt-buckles-product-design-belt-belt-buckle-black-belt-buckles.png'
    }
  ]
  
  
const getProducts = new Promise((resolve, reject) => {
  //acciones
  let condition=true;
  if (condition) {
    setTimeout (() => { 
      resolve(productos)
    }, 2000)
    
  } else{
    reject('Error')
  }
}) 
// console.log(getProducts)

useEffect(()=>{
  setCargando(true)
  getProducts
  .then((res) => setListaProductos(res)) 
  .catch((err) => console.log('error',err))
  .finally(() => setCargando(false))
}, [])






  return (

    <div >

      {cargando ? <p className='loader ' > Cargando... </p> : <ItemList listaProductos={listaProductos} /> }
      
      
     
     
    </div>  


  )
}

export default ItemListContainer