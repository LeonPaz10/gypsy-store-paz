import React, { useEffect, useState } from 'react'
import { getProducts } from './mocks/Fake'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'
import Container from 'react-bootstrap/Container'



const ItemDetailContainer = () => {
    const[productDetail, setProductDetail] = useState(null)
    const [cargando, setCargando] = useState(true )
    const {itemId}= useParams()
    



    useEffect(() => {
        setCargando(true);
        getProducts
        .then((res) => {
          setProductDetail(res.find(producto => producto.id === itemId))
        })
        .catch((err) => console.log(err))
        .finally(() => setCargando(false));
    }, [itemId])
  return (
    <Container  className='mt-5' > 

        {cargando ? <h1>Cargando...</h1> : <ItemDetail productDetail={productDetail} />}

    </Container>
  )
}

export default ItemDetailContainer 