import React, { useEffect, useState } from 'react'
import { getProducts } from './mocks/Fake'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {
    const[productDetail, setProductDetail] = useState({})
    const [cargando, setCargando] = useState(false)



    useEffect(() => {
        setCargando(true)
        getProducts
        .then((res) => setProductDetail(res.find((item) => item.id ==='03')))
        .catch((err) => console.log(err))
        .finally(() => setCargando(false))  
    }, [])
  return (
    <div>
        {cargando ? <h2>Cargando...</h2> : <ItemDetail productDetail={productDetail} />}
         
    </div>
  )
}

export default ItemDetailContainer 