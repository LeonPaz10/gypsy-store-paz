import React, { useContext }  from 'react'
import { Link } from 'react-router-dom'
import {BsFillCartFill} from 'react-icons/bs'
import { CartContext } from './CartContext'


const CartWidjet = () => {
  const {cartQuantity} = useContext(CartContext)
  return (
    
        <Link to="/cart" className='cart-widget'>

         <BsFillCartFill/>

         <span> {cartQuantity()} </span>

        </Link>
    
  )
}

export default CartWidjet