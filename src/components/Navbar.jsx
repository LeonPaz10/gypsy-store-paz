import React from 'react'
import { Link } from 'react-router-dom'
import CartWidjet from './CartWidjet'





const Navbar = () => {
  return (
   <header className='container'>
        <div className=''>
            <div className='logo'>
                        <Link to={"/"} className='container logoLetra'>GYPSY STORE </Link>
                      
                      <div>
                      <CartWidjet />
                      </div>
                        

                    
            </div>
            <div className='container menu'>
                  
                  <nav className='container navegacion'>
                      <ul className='container d-flex justify-content-around' >
                        <li><a href=""><Link to={"/"} className="">Home </Link></a></li>
                        <li><a href="#ancla-1"> Productos </a></li>
                        <li><a href=""><Link to={"/"}> Contacto</Link></a></li>
                      </ul>
                  </nav>
            </div>
        </div>

   </header>
  )
}

export default Navbar