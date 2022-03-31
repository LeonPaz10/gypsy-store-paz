import React from 'react'
import { Link } from 'react-router-dom'

const CartWidjet = () => {
  return (
    
        <button className='icon-shop' type='button'> 

            <Link className="redir-page" aria-current="page" to=""> <span className="bi bi-bag"> </span></Link>

        </button>
        
    
  )
}

export default CartWidjet