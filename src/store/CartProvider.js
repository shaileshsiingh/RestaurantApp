import { useState } from "react"
import CartContext from "./cart-context"

const CartProvider = props => {
const [items, updateItems]=useState([])

const addItemHandler = (item) =>{
    updateItems([...items, item])
}
const removeItemHandler = (id) =>{}

    const cartContext = {
        items : items,
        totalAmount : 0,
        addItem : addItemHandler,
        removeItem : removeItemHandler
    }
    
return(
        <CartContext.Provider value={cartContext}>
            {console.log(cartContext)}
            {props.children}
        </CartContext.Provider>
)}
export default CartProvider