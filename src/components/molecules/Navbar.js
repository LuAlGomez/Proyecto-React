import React from 'react';
import { useState } from 'react';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
<<<<<<< HEAD

=======
  

  
>>>>>>> navbar

  return (
    <nav className="nav" >
      <div className={`nav_toggle ${isOpen && "open"} `} onClick={() => setIsOpen(!isOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>


      <a href='#' className='logo'> <img src='./images/logo-proyecto.png' /></a>


      <ul className={`nav_menu  ${isOpen && "open"}`}>
        <li className='nav_item'>
          <a href='#' className='nav_link'>Inicio</a>
        </li>
        <li className='nav_item'>
          <a href='#' className='nav_link'>Libros</a>
        </li>
        <li className='nav_item'>
          <a href='#' className='nav_link'>Nosotros</a>
        </li>
        <li className='nav_item'>
          <a href='#' className='nav_link'>Contacto</a>
        </li>
      </ul>
<<<<<<< HEAD
      <div className='cart_container'>
        <a href='#' className='cart'><img src='./images/cart_1.png' /></a>
      </div>
=======
      <div className='cart-icon' onClick={() => setActive(!active)}>
        

      </div>
      
>>>>>>> navbar

    </nav>
  )
}

export default Navbar