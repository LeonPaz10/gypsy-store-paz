import { useContext } from "react";
import { CartContext} from "./CartContext";
import { useState } from "react";
import db from "../firebase/config";
import { getDocs, query, where,documentId, writeBatch, collection, addDoc, doc, Timestamp, updateDoc, getDoc } from "firebase/firestore";
import { Link, Navigate } from "react-router-dom";
import { async } from "@firebase/util";
import Swal from "sweetalert2";





const Checkout = () =>{

    const {cart, cartTotal, vaciarCarrito} = useContext(CartContext);

    const [orderId, setOrderId] = useState(null); 

    const mostrarAlerta = () =>{
        Swal.fire({
            title: '¡'+ values.nombre+ ', su compra fue efectuada correctamente!',
        text: ' Conserve este numero de seguimiento: ' + orderId ,
        icon: 'success',
        confirmButtonText: 'Ok!'
        })
    }
   


    const [values, setValues] = useState({
      nombre: '',
        mail: '',
        telefono: '' 
    });

    const handleChange = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value
        });
    }



    
    
    const handleSubmit = async (e) =>{
        e.preventDefault();
        const orden = {
            items: cart,
            total: cartTotal ( ),
            comprador: {
                nombre: values.nombre,
                email: values.mail,
                telefono: values.telefono
            },
            fyh: Timestamp.fromDate(new Date())
        }
        console.log("Orden enviada");
      

        const ordersRef = collection(db, 'orders');
        const batch = writeBatch(db);
        const productosRef = collection(db, 'productos');
        // query de buqueda
        const q = query(productosRef,where (documentId(), 'in', cart.map((item )=> item.id)));
        // traigo la coleccion
        const productos = await getDocs(q);

        const outOfStock = [];
        // recorro los productos
        productos.docs.forEach( (doc) => {
            const itemInCart = cart.find((item) => item.id === doc.id);
            if (doc.data().stock >= itemInCart.cantidad){
                batch.update(doc.ref,{
                    stock: doc.data().stock - itemInCart.cantidad
                });
            } else{
                outOfStock.push(itemInCart);
            }
        })
        if (outOfStock.length === 0){
            batch.commit()
            .then(() => {
                addDoc(ordersRef, orden)
                .then((doc) =>{
                    setOrderId(doc.id);
                    vaciarCarrito();
                }) 
            })  
           
            
        }else{
            alert(`No hay stock suficiente para los siguientes productos: ${outOfStock.map((item) => item.nombre).join(', ')}`);
        }

        

      
    }
    if (orderId){

        mostrarAlerta();
       
        
    }
    if(cart.length === 0){
        return <Navigate to={'/'} />
    }

    const validateForm = () =>{
        return values.nombre.length > 0 && values.mail.length > 0 && values.telefono.length > 0;
    }
    return(
        <div className="form-cont"> 
            <h1 className="container my-5 check">Checkout</h1>
            <hr/>
            <h5 className="container  ca"> * Todos los campos son obligatorios *</h5>
            <br/>
    
            <form onSubmit={handleSubmit} className="form-box">
                <label className="label">
                    Nombre y apeliido:
                </label>
                <input
                className="form-control my-3 container form"
                type={"text"}
                name={"nombre"}
                placeholder={" Insertar Nombre y Apeliido"}
                value={values.nombre}
                onChange={handleChange} 
                />
                <label className="label">
                    Email:
                </label>
                 <input
                className="form-control my-3 container form"
                type={"email"}
                name={"mail"}
                placeholder={"Insertar E-mail"}
                value={values.mail}
                onChange={handleChange}
                />
                <label className="label">
                    Telefono:
                </label>
                 <input
                className="form-control my-3 container  form"
                type={"number"}
                name={"telefono"}
                placeholder={"Insertar Telefono"}
                value={values.telefono}
                onChange={handleChange}
                />

                
                
                {validateForm() ? <button className="btn btn-primary my-3 container" type={"submit"}>Comprar</button> : <button className="btn btn-primary my-3 container" type={"submit"} disabled>Comprar</button>}
                
                
                

                   
                
            </form>
        
            
        </div>

    )
}

export default Checkout;