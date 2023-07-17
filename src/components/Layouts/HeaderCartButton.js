import { useContext } from 'react';
import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';
import CartContext from '../../store/cart-context';
const HeaderCartButton = (props) => {

const ctxCart = useContext(CartContext)

let quantity = 0
 ctxCart.items.forEach(item=>{
quantity = quantity+ Number(item.quantity)
})

  return (
    <button className={classes.button} onClick={props.onAny}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{quantity}</span>
    </button>
  );
};

export default HeaderCartButton;