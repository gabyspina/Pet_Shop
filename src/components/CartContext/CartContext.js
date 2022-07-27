import {createContext, useEffect, useState} from 'react'

export const CartContext = createContext()

export const CartProvider = ({children}) => {


const [items , setItems] = useState([])
    

const addItem = (item, amount)  => {
        let itemAmount = {  ...item, qty: amount }
        if (!isInCart (item.id)){
            setItems([   ...items, itemAmount ]);
        }
        else {

            const   newItems = items.map(item => {
                if (item.id === item.id) {
                    const newItems = {
                        ...item,
                        qty: item.qty + amount
                    }
                    return newItems
                }else{
                    return item
                }
            })

            setItems(newItems)
        }
}
    
const isInCart = (id) => {
    return items.some(item => item.id === id)
}

const getQty = () => {
    let qty = 0
    items.forEach((item) =>
        qty += item.qty
    )
    return qty
}

    useEffect(() => {
        console.log ("Produtos en el carrito: ", items)
    },[items])



    return (
        <CartContext.Provider value={{items, addItem, isInCart, getQty}}>
            {children}
        </CartContext.Provider>
    )
        
}