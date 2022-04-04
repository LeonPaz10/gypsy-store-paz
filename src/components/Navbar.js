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


      
            <button className='icon-contacto' type='button'> 

                <Link className='contacto-page' to='/contacto'> <span className="bi bi-person"> </span> </Link>
            

            </button>

            <button className='icon-ubi ml-4' type='button'> 
            <Link className='ubi-page' to='https://www.google.com.ar/maps/place/Kevingston/@-34.7839839,-58.8748599,13z/data=!4m8!1m2!2m1!1sropa+deportiva!3m4!1s0x95bcec034f1a5ea9:0xa615311817281176!8m2!3d-34.7839835!4d-58.8398419'> <span className="bi bi-geo-alt"> </span> </Link>
            

            </button>
            
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