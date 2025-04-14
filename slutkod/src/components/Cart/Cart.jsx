import './cart.css';
import { Link } from 'react-router-dom';

function Cart({cartBalance}) {

  return (
    <p className="cart">
      <span className="cart-text">Cart:</span>
      <Link to="/cart" className="link">
        <span className="cart-amount">{cartBalance}</span>
      </Link>
    </p>
  )
}

export default Cart;
