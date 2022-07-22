import "./navbar.css";
import React from 'react';
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";


const NavBar = () => {
  return (
    <div>
        <nav>
        <ul>
          <Link className="li" to='/'>Inicio</Link>
          <Link className="li" to='/food'>Alimentos</Link>
          <Link className="li" to='/accesorios'>Accesorios</Link>
          <Link className="li" to='/galery'>Galeria</Link>
          <CartWidget />
        </ul>

        </nav>
    </div>
  )
}

export default NavBar
