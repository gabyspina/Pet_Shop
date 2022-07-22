import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'

const home = () => {
  return (
    <div>


        <div className='contenedor-imagenes'>
  
          
          <Link className='link' to= '/food'><p className='home-img' id='comida'>Alimentos</p></Link>
          <Link  className='link' to='/accesorios'> <p className='home-img' id='accesorio'>Accesorios</p></Link>
          <Link className='link' to='/galery'><p className='home-img' id='galeria'>Galería</p> </Link>
        </div>
    </div>
  )
}

export default home