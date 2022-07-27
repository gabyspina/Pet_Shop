import React from 'react'
import './NavCategory.css'

import { Link } from 'react-router-dom'

const NavCategory = () => {
  return (
    <nav>
      <ul>
        <Link to='/category/perro'>Perro</Link>
        <Link to='/category/gato'>Gatos</Link>
      </ul>


    </nav>
  )
}

export default NavCategory
