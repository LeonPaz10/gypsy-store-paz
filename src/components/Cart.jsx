import { useContext } from "react"
import { CartContext } from "./CartContext"
import {BsFillTrashFill} from 'react-icons/bs'
import { Link } from "react-router-dom"

const Cart = () => {

    const {cart, cartTotal, vaciarCarrito, removeItem} = useContext(CartContext)
    console.log(cart)
    return(
        <div  className="container my-5">

            {
                cart.length === 0?
                 <div>




                    <h2 className="text-center  my-5 pt-5">Tu carrito está vacio :(</h2>
                    <hr />

                    <h4>¿No sabes qué comprar?</h4>
                   
                    <h4>¡Miuchos productos te esperan!</h4>
                  
                   <Link to={"/"} className="btn btn-primary">Volver a lista de productos</Link>
                 </div>
                 : 
                 <>
                   <h2 className="container compra">Resumen de compra</h2>
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
            <Link className="btn btn-success" to={"/checkout"} >Terminar mi compra</Link>
            <br />
            <br />
                <Link to="/" className='btn btn-primary'>

                    <span>Seguir comprando</span>

                </Link>
                <br />
                <br />
                 </>
            }

          
        </div>
    )
}
export default Cart