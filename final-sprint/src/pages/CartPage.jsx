import CartItem from "../components/CartItem";
import { Link } from "react-router-dom";
import "./CartPage.css";

// Cart page component
// Displays cart items and calculates order totals
const CartPage = ({ cart, increaseQty, decreaseQty, removeFromCart }) => {
  // Calculate subtotal based on item price and quantity
  const subtotal = cart.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  // Tax and final total calculations
  const TAX_RATE = 0.15;
  const tax = subtotal * TAX_RATE;
  const total = subtotal + tax;

  return (
    <section className="cart-page">
      <div className="cart-container">
        <section className="cart-items-section">
          <h2>Your Cart</h2>

          {/* Show message if cart is empty, otherwise render cart items */}
          {cart.length === 0 ? (
            <p className="empty-cart-message">Your cart is empty.</p>
          ) : (
            <>
              <div className="cart-items-list">
                {/* List of cart items */}
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

              {/* Navigate to checkout */}
              <Link to="/checkout" className="cart-checkout-btn">
                Proceed to Checkout
              </Link>
            </>
          )}
        </section>

        <aside className="cart-summary">
          <h2>Order Summary</h2>

          {/* Display summary or placeholder if cart is empty */}
          {cart.length === 0 ? (
            <p>Your subtotal will appear here.</p>
          ) : (
            <>
              {/* Line items breakdown */}
              {cart.map((item) => (
                <p key={item.id}>
                  {item.name} x {item.quantity} = $
                  {(item.quantity * item.price).toFixed(2)}
                </p>
              ))}

              <hr />

              {/* Totals section */}
              <div className="totals">
                <p>Subtotal: ${subtotal.toFixed(2)}</p>
                <p>Tax: ${tax.toFixed(2)}</p>
                <p className="total">Total: ${total.toFixed(2)}</p>
              </div>
            </>
          )}
        </aside>
      </div>
    </section>
  );
};

export default CartPage;
