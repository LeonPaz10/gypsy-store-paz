import React from 'react'

const Navbar = () => {
  return (
    <div>
        <nav className="navbar navbar-dark bg-dark fixed-top">
  <div className="container-fluid">
    <a className="navbar-brand " href="index.js">GYPSY STORE  </a>
    
    

    <div className='iconos-navbar'>

            <button className='icon-shop' type='button'> 

                <a className="redir-page" aria-current="page" href=""> <span className="bi bi-bag"> </span></a>

            </button>

            <button className='icon-contacto' type='button'> 

                <a className='contacto-page' href='Contacto.js'> <span className="bi bi-person"> </span> </a>
            

            </button>

            <button className='icon-ubi' type='button'> 
            <a className='ubi-page' href='https://www.google.com.ar/maps/place/Kevingston/@-34.7839839,-58.8748599,13z/data=!4m8!1m2!2m1!1sropa+deportiva!3m4!1s0x95bcec034f1a5ea9:0xa615311817281176!8m2!3d-34.7839835!4d-58.8398419'> <span className="bi bi-geo-alt"> </span> </a>
            

            </button>
            
            <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
            <span className="navbar-toggler-icon"></span>
            
            
            </button>
            

    </div>

    
    <div className="offcanvas offcanvas-end " tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
        
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasNavbarLabel" >GYPSY STORE </h5>
        <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        
        
      </div>

      
      <div className="offcanvas-body navbar-dark bg-dark">
        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3 navbar-dark bg-dark ">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="index.js">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="Nosotros.js">Nosotros</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="offcanvasNavbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Ropa
            </a>
            <ul className="dropdown-menu p-3 mb-2 bg-dark text-white" aria-labelledby="offcanvasNavbarDropdown">
              <li><a className="dropdown-item p-3 mb-2 bg-secondary text-white" href="#">Mujer</a></li>
              <li><a className="dropdown-item p-3 mb-2 bg-secondary text-white" href="#">Hombre</a></li>
              <li>
                <hr className="dropdown-divider"/>
              </li>
              
            </ul>
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