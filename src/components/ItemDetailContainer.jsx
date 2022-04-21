import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import { db } from '../firebase/config'
import {doc, getDoc} from 'firebase/firestore'



const ItemDetailContainer = () => {
    const[productDetail, setProductDetail] = useState(null)
    const [cargando, setCargando] = useState(true )
    const {itemId}= useParams( )
      useEffect(() => {
        setCargando(true);
       
         const docRef = doc(db, 'productos', itemId)
         getDoc(docRef) 
         .then(doc =>{
           setProductDetail({id: doc.id, ...doc.data()})
         })

         .finally(() => setCargando(false))

         


    }, [itemId])
  return (
    <Container  className='mt-5' > 

        {cargando ? <h1>Cargando...</h1> : <ItemDetail productDetail={productDetail} />}

    </Container>
  )
}

export default ItemDetailContainer 