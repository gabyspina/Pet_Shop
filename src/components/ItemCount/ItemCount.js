import {useState} from 'react';
import "./ItemCount.css";
import {Button}  from '@mui/material';
import { Link } from 'react-router-dom';

const ItemCount = ({ stock, initial, onAdd}) => {

    const [qty, setQty] = useState(initial);

console.log('add',onAdd);

    const handleCounterUp = () => {

        if (qty < stock) {
            setQty(qty + 1);
                return qty;


        }else{
            alert("No se puede comprar mas de 5 unidades");
        }
    }

    const handleCounterDown = () => {

        if (qty > initial) {
            setQty(qty - 1);         
                return qty;
            
    }   else{
            alert   ("No se puede comprar menos de 0 unidades");
    }
}


        return (
<div className="item-count">
    <div className='counter-section'>
        <div className='counter'>
            <div>
                <button onClick={handleCounterDown}>-</button>  
            </div>
            <div>
                <h3>{qty}</h3>
            </div>

            <div>
                <button onClick={handleCounterUp}>+</button>
            </div>


        </div>
        <div className='btn'>

                <Button variant='contained' onClick={() => onAdd(qty)} >Add to Cart</Button>

        </div>
        
    </div>
</div>
        )
    }


    export default ItemCount;

