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
                      <ul className='container d-flex justify-content-around menu-horizontal' >
                        <li><a ><Link to={"/"} className="">Home </Link></a></li>
                        <li><a> Productos </a>

                          <ul className='menu-vertical'>
                            <li><a href="#ancla-1"><Link className="" to="/category/remeras">Remeras</Link></a></li>
                            <li><a href=""><Link className="" to="/category/zapatos">Zapatos</Link></a></li>
                            <li><a href=""><Link className="" to="/category/cintos">Cintos</Link></a></li>
                          </ul>
                        
                        </li>
                        <li><a href="https://www.instagram.com/gyppsy_store/"> Contacto </a></li>
                      </ul>
                  </nav>
            </div>
        </div>

      

       

   </header>
   
  )
}

export default Navbar