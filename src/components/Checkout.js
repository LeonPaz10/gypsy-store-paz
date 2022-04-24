import { useContext } from "react";
import { CartContext } from "./CartContext";
import { useState } from "react";
import db from "../firebase/config";
import { collection, addDoc, doc } from "firebase/firestore";

const Checkout = () =>{

    const {cart, cartTotal} = useContext(CartContext);

    // const [nombre, setNombre] = useState('');
    // const [mail, setMail] = useState('');
    // const [telefono, setTelefono] = useState('');


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
            }
        }
        console.log("Orden enviada");
      

        const ordersRef = collection(db, 'orders');

        addDoc(ordersRef, orden)
        .then((doc) =>{
            console.log(doc);
        })
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