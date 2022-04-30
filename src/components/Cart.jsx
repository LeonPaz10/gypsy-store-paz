import { useContext } from "react"
import { CartContext } from "./CartContext"
import {BsFillTrashFill} from 'react-icons/bs'
import { Link } from "react-router-dom"

const Cart = () => {

    const {cart, cartTotal, vaciarCarrito, removeItem} = useContext(CartContext)
    console.log(cart)
    return(
        <div  className="container my-5 " >

            {
                cart.length === 0?
                 <div>




                    <h2 className="text-center  my-5 pt-5 " > Tu carrito está vacio :(</h2>

                    <hr />

                    <h4>¿No sabes qué comprar?</h4>
                   
                    <h4>¡Muchos productos te esperan!</h4>
                    <br />
                  
                   <Link to={"/"} className="btn btn-primary">Volver a lista de productos</Link>
                 </div>
                 : 
                 <>
                   <h2 className="container compra">Resumen de compra</h2>
            <hr />
            {
                cart.map((item)=> (
                    <div key={item.id}>
                        <div className="resume container">
                            <div>
                                
                                <img src={item.img} alt={""} className="imgItem" />
                            </div>
                           
                            <div>
                                <h4 className="dates"> <b>Articulo</b></h4>
                                <p>{item.nombre}</p>

                            </div>

                            <div>
                                <h4><b>Cantidad</b></h4>
                                <p>{item.cantidad}</p>
                            </div>

                            <div>
                                <h4><b>Precio unitario</b></h4>
                                <p>${item.precio}</p>
                            </div>

                            <div>
                                <h4><b>Precio total</b></h4>
                                <p>${item.precio * item.cantidad}</p>
                               
                            </div>

                            <div>
                                
                                <button className="btn btn-danger" onClick={ ()  => removeItem(item.id)} > <BsFillTrashFill/></button>
                            </div>
                            
                        </div>
                    
                       
                        <hr />
                    </div>
                ))
            }
            <h4>TOTAL: ${cartTotal()}</h4>
            <hr />
            <button className="btn btn-danger " id="vaciar" onClick={vaciarCarrito}><b>Vaciar carrito</b></button>
            <br />
            <br />
            <Link className="btn btn-success " id="terminar" to={"/checkout"} ><b>Terminar mi compra</b></Link>
            <br />
            <br />
                <Link to="/" className='btn btn-primary ' id="seguir">

                    <span ><b>Seguir comprando</b></span>

                </Link>
                <br />
                <br />
                 </>
            }

          
        </div>
    )
}
export default Cart