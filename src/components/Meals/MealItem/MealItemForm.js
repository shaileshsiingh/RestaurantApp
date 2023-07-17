import React,{useContext} from 'react'
import classes from './MealItemForm.module.css'
import Input from '../../UI/Input'
import CartContext from '../../../store/cart-context'

function MealItemForm(props) {
const cartCtx = useContext(CartContext)
const addItemCart = (event) => {
  event.preventDefault()
  //update the cortcontext.items
  const quantity = document.getElementById('amount_' + props.id).value
  cartCtx.addItem({...props.item, quantity : quantity})
  console.log(props.item)
}
  
  return (
    <form className={classes.form}>
      {console.log(cartCtx.items)}
        <Input label = 'Amount' input = {{
            id : 'amount_' + props.id,
            type : 'number',
            min : '1',
            max : '5',
            step : '1',
            defaultValue : '1'

        }}/>
        <button onClick={addItemCart} >+ Add</button>
    </form>
  )
}

export default MealItemForm