import React from 'react'
import  {BsCart4} from 'react-icons/bs';
import { Link } from 'react-router-dom';
import './CartWidget.css'

const CartWidget = () => {
  return (
    <div className='cart-icon'>
    
        <Link to='/cart' className='link-icon'>
        <BsCart4 size={30} />
        <span>0</span>
        
        </Link>

    </div>
  )
}

export default CartWidget


