import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import { db } from '../firebase/config'
import {doc, getDoc} from 'firebase/firestore'
import { css } from "@emotion/react";
import PropagateLoader from "react-spinners/PropagateLoader";

const override = css`
  display: block;
  margin: 50vh auto;
  border-color: red;
  margin-top: 250px;
`;


const ItemDetailContainer = () => {
  let [color] = useState("#212529 ");
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
    <Container  className='mt-5 cargando' > 

{cargando ? <PropagateLoader color={color} loading={cargando} css={override} size={15} />  : <ItemDetail productDetail={productDetail} />}

    </Container>
  )
}

export default ItemDetailContainer 