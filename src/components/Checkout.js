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
            title: '¡Gracias por tu compra!',
        text: 'tu numero de orden es: ' + orderId,
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
    return(
        <div>
            <h1 className="container my-5 check">Checkout</h1>
            <hr/>

            <form onSubmit={handleSubmit}>
                <input
                className="form-control my-3 container"
                type={"text"}
                name={"nombre"}
                placeholder={"Nombre"}
                value={values.nombre}
                onChange={handleChange} 
                />
                 <input
                className="form-control my-3 container"
                type={"email"}
                name={"mail"}
                placeholder={"E-mail"}
                value={values.mail}
                onChange={handleChange}
                />
                 <input
                className="form-control my-3 container"
                type={"number"}
                name={"telefono"}
                placeholder={"Cel n°"}
                value={values.telefono}
                onChange={handleChange}
                />
                
                
                <button className="btn btn-primary" type="submit">Enviar </button>
                

                   
                
            </form>
        
            
        </div>

    )
}

export default Checkout;