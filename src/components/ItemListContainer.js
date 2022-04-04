import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';


import ItemList from './ItemList'
import { css } from "@emotion/react";

import PropagateLoader from "react-spinners/PropagateLoader";

import { getProducts } from './mocks/Fake';
import ItemCount from './ItemCount';



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
  let [color] = useState("grey");








  // console.log(getProducts)
  useEffect(() => {
    setCargando(true);
    getProducts
      .then((res) =>{
        if(categoryId){
          setListaProductos(res.filter(producto => producto.category === categoryId))
        }else{
          setListaProductos (res)
        }
 
      })
      .catch((err) => console.log('error', err))
      .finally(() => setCargando(false));
  }, [categoryId]);






  return (

    <div>

      {cargando ? <PropagateLoader color={color} loading={cargando} css={override} size={15} /> : <ItemList listaProductos={listaProductos} />}
      




    </div>


  );
}

export default ItemListContainer