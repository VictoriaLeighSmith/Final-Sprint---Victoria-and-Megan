import CartItem from "../components/CartItem";
import { Link } from "react-router-dom";
import "./CartPage.css";

const CartPage = ({ cart, increaseQty, decreaseQty, removeFromCart }) => {
  const subtotal = cart.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  const TAX_RATE = 0.15;
  const tax = subtotal * TAX_RATE;
  const total = subtotal + tax;

  return (
    <div className="cart-page">
      <div className="cart-container">
        <section className="cart-items-section">
          <h1>Your Cart</h1>

          {cart.length === 0 ? (
            <p className="empty-cart-message">Your cart is empty.</p>
          ) : (
            <>
              <div className="cart-items-list">
                {cart.map((item) => (
                  <CartItem
                    key={item.id}
                    item={item}
                    removeFromCart={removeFromCart}
                    increaseQty={increaseQty}
                    decreaseQty={decreaseQty}
                  />
                ))}
              </div>

              <Link to="/checkout" className="checkout-link">
                <button className="cart-checkout-btn">
                  Proceed to Checkout
                </button>
              </Link>
            </>
          )}
        </section>

        <aside className="cart-summary">
          <h2>Order Summary</h2>

          {cart.length === 0 ? (
            <p>Your subtotal will appear here.</p>
          ) : (
            <>
              {cart.map((item) => (
                <p key={item.id}>
                  {item.name} x {item.quantity} = $
                  {(item.quantity * item.price).toFixed(2)}
                </p>
              ))}

              <hr />

              <div className="totals">
                <p>Subtotal: ${subtotal.toFixed(2)}</p>
                <p>Tax: ${tax.toFixed(2)}</p>
                <p className="total">Total: ${total.toFixed(2)}</p>
              </div>
            </>
          )}
        </aside>
      </div>
    </div>
  );
};

export default CartPage;
