import CartItem from "../components/CartItem";
import { Link } from "react-router-dom";

const CartPage = ({ cart, increaseQty, decreaseQty, removeFromCart }) => {
  //Calculations for summary
  const subtotal = cart.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);
  const TAX_RATE = 0.15;
  const tax = subtotal * TAX_RATE;
  const total = tax + subtotal;

  return (
    <div className="cart-layout">
      <div className="cart-items">
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          cart.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              removeFromCart={removeFromCart}
              increaseQty={increaseQty}
              decreaseQty={decreaseQty}
            />
          ))
        )}
        <Link to="/checkout">
          <button>Checkout</button>
        </Link>
      </div>

      <div className="cart-summary">
        <h1>Summary</h1>

        {cart.map((item) => (
          <p key={item.id}>
            {item.name} x {item.quantity} = $
            {(item.quantity * item.price).toFixed(2)}
          </p>
        ))}

        <hr />

        <p>Subtotal: ${subtotal.toFixed(2)}</p>
        <p>Tax: ${tax.toFixed(2)}</p>
        <p>
          <strong>Total: ${total.toFixed(2)}</strong>
        </p>
      </div>
    </div>
  );
};

export default CartPage;
