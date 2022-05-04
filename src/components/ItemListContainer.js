import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import ItemList from './ItemList'
import { css } from "@emotion/react";
import PropagateLoader from "react-spinners/PropagateLoader";
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../firebase/config';
import Carrusel from './Carrusel'



// Can be a string as well. Need to ensure each key-value pair ends with ;
const override = css`
  display: block;
  margin: 50vh auto;
  border-color: red;
  margin-top: 250px;
`;

function ItemListContainer() { 
  
  
const {categoryId} = useParams()
const [listaProductos, setListaProductos] = useState([]);

  const [cargando, setCargando] = useState(false);
  let [color] = useState("#212529 ");

  useEffect(() => {
    setCargando(true);

  // armar la referencia
  const productosRef = collection(db, 'productos');
  const q = categoryId ? query(productosRef, where('category', '==', categoryId)) : productosRef;
  //llamar la ref async 
  getDocs(q)
  .then(resp =>{
    const items = resp.docs.map((doc) => ({id: doc.id, ...doc.data()}));
    console.log(items) 
    setListaProductos(items)
  })
  .finally(() => setCargando(false))  
    
  }, [categoryId]);
  return (

    <div className='fondo'>

   

      {cargando ?
       <PropagateLoader color={color} loading={cargando} css={override} size={15} /> 
      :  <Carrusel/> }
       <ItemList listaProductos={listaProductos} />
       
    

     
      
      



    </div>


  );
}

export default ItemListContainer