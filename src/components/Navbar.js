import React from 'react'
import { Link } from 'react-router-dom'
import CartWidjet from './CartWidjet'



const Navbar = () => {
  return (
    <div>
        <nav className="navbar navbar-dark bg-dark fixed-top  container-fluid">
  <div className="container-fluid">
    <Link className="navbar-brand " to="/">GYPSY STORE  </Link>


    
    

    <div className='iconos-navbar'>

 <CartWidjet/>


      
            <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
            <span className="navbar-toggler-icon"></span>
            
            
            </button>
            

    </div>

    
    <div className="offcanvas offcanvas-end " tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
        
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasNavbarLabel" >GYPSY STORE </h5>
        <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        
        
      </div>

      
      <div className="offcanvas-body navbar-dark bg-dark">
        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3 navbar-dark bg-dark ">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
          </li>
            <li className="nav-item">
              <Link className="nav-link" to="/category/remeras">remeras</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/category/zapatos">zapatos</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/category/cintos">cintos</Link>
            </li>
         
         
        </ul>
       
      </div>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar