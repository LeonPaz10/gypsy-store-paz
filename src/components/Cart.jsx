import { useContext } from "react"
import { CartContext } from "./CartContext"
import {BsFillTrashFill} from 'react-icons/bs'
import { Link } from "react-router-dom"

const Cart = () => {

    const {cart, cartTotal, vaciarCarrito, removeItem} = useContext(CartContext)
    console.log(cart)
    return(
        <div  className="container my-5">
            <h2 className="container compra">Tu compra!</h2>
            <hr />
            {
                cart.map((item)=> (
                    <div key={item.id}>
                        <h4>
                            {item.nombre}
                        </h4>
                        <p> cantidad: {item.cantidad }</p>
                        <h5>Precio unitario: $ {item.precio} </h5>
                        <h5>Precio total: $ {item.precio * item.cantidad} </h5> 
                        <button className="btn btn-danger" onClick={ ()  => removeItem(item.id)} > <BsFillTrashFill/></button>
                        <hr />
                    </div>
                ))
            }
            <h4>TOTAL: ${cartTotal()}</h4>
            <hr />
            <button className="btn btn-danger" onClick={vaciarCarrito}>Vaciar carrito</button>
            <br />
            <br />
                <Link to="/" className='btn btn-primary'>

                    <span>Seguir comprando</span>

                </Link>
        </div>
    )
}
export default Cart