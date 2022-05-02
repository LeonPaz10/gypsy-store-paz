import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
   <header className='header'>
     <div className='containerr'>
     <div className='logo'>
                <Link to={"/"}>GYPSY STORE </Link>
                <hr />
    </div>
       <div className='row '>
         
         <nav className='nav  '>
           <ul >
             <li><a href=""><Link to={"/"} className="active">Home </Link></a></li>
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