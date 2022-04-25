import { useContext } from "react";
import { CartContext} from "./CartContext";
import { useState } from "react";
import db from "../firebase/config";
import { collection, addDoc, doc, Timestamp, updateDoc, getDoc } from "firebase/firestore";
import { Link, Navigate } from "react-router-dom";

const Checkout = () =>{

    const {cart, cartTotal, vaciarCarrito} = useContext(CartContext);

    const [orderId, setOrderId] = useState(null);
   


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



    
    
    const handleSubmit = (e) =>{
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

        cart.forEach((item) => {
            const docRef = doc(db, 'productos', item.id);

            getDoc(docRef)
            .then((doc) => {
                 updateDoc(docRef,{
                    stock: doc.data().stock - item.cantidad

                 })
            })
        });

        addDoc(ordersRef, orden)
        .then((doc) =>{
            console.log(doc);
            setOrderId(doc.id);
            vaciarCarrito();
        })
    }
    if (orderId){
        return <div className="container my-5 oe">
            <h1>Orden enviada, gracias por tu compra</h1>
            <h3>Tu orden es la siguiente: {orderId}</h3>
            <Link to="/" className="btn btn-primary">Volver al inicio</Link>
        </div>

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