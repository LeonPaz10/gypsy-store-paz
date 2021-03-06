import { useContext } from "react"
import { CartContext } from "./CartContext"
import {BsFillTrashFill} from 'react-icons/bs'
import { Link } from "react-router-dom"
import Swal from 'sweetalert2'

const Cart = () => {

    const {cart, cartTotal, vaciarCarrito, removeItem} = useContext(CartContext)
    console.log(cart)

    const handleVaciar = () => {
        Swal.fire({
            title: 'Estas seguro que queres vaciar tu carrito de compras?',
            text: "No podras revertir esta accion!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: 'red',
            cancelButtonColor: 'grey',
            confirmButtonText: 'Si, vaciar!'
          }).then((result) => {
            if (result.isConfirmed) {
                
              Swal.fire(
                'Vaciado!',
                'Su carrito esta vacio.',
                'success'
                
              )
                vaciarCarrito()
                
            }
          })
          
    }
       const handleRemove = () => {
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Producto eliminado',
            showConfirmButton: false,
            timer: 1500
          })
       } 
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
                                
                                <button className="btn btn-danger" onClick={ ()  =>handleRemove(removeItem(item.id))}  > <BsFillTrashFill/></button>

                                
                            </div>

                            
                        </div>

                        <hr />
                    
                       
                    </div>
                
                ))
                
                
            }

            
            <hr />
                        <h4>TOTAL: ${cartTotal()}</h4>
                         <hr />
          

                <div className=" btns">

                    <button className="btn btn-danger vaciar" id="vaciar" onClick={handleVaciar}><b>Vaciar carrito</b></button>
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

                </div>
        
            </>
            }

          
        </div>
    )
}
export default Cart