import React from 'react'
import  {BsCart4} from 'react-icons/bs';
import { Link } from 'react-router-dom';
import './CartWidget.css'
import { CartContext } from "../../components/CartContext/CartContext";
import {useContext} from 'react'

const CartWidget = () => {

  const {getQty} = useContext(CartContext);


  return (
    <div className='cart-icon'>
{    
        <Link to='/cart' className='link-icon'>
            <BsCart4 size={30} />
            {
            getQty() >0 &&  <button>{getQty()}</button>
            }
        </Link>
}
    </div>
  )
}

export default CartWidget


