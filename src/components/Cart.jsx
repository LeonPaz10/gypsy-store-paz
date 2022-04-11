import { useContext } from "react"
import { CartContext } from "./CartContext"

const Cart = () => {

    const {cart} = useContext(CartContext)
    console.log(cart)
    return(
        <div  className="container my-5">
            <h2>tu compra</h2>
        </div>
    )
}
export default Cart