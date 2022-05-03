import React, { useContext }  from 'react'
import { Link } from 'react-router-dom'
import {BsCart4} from 'react-icons/bs'
import { CartContext } from './CartContext'


const CartWidjet = () => {
  const {cartQuantity} = useContext(CartContext)
  return ( <div class="container shopping">

					<a>
						<div class="cart">
            <Link to="/cart" className='cart-widget'>
              <BsCart4/>
             </Link> 
							<div class="cart_num_container">
								<div class="cart_num_inner">
									<div class="cart_num"> {cartQuantity() || ''}</div>
								</div>
							</div>
						</div>
					</a>
				
				</div>
    
       
    
  )
}

export default CartWidjet