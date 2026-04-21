import CartItem from "./CartItem";
import "./OrderSummary.css";

// Order summary component
// Displays cart items and calculated totals during checkout
const OrderSummary = ({ cart }) => {
  // Calculate subtotal from cart items
  const subtotal = cart.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  // Tax and final total calculations
  const TAX_RATE = 0.15;
  const tax = subtotal * TAX_RATE;
  const total = tax + subtotal;

  return (
    <section className="order-summary-content">
      <h2>Order Summary</h2>

      {/* Render cart items in checkout-style format */}
      <div className="summary-items">
        {cart.map((item) => (
          <CartItem key={item.id} item={item} variant="checkout" />
        ))}
      </div>

      <hr />

      {/* Totals breakdown */}
      <div className="summary-totals">
        <p>Subtotal: ${subtotal.toFixed(2)}</p>
        <p>Tax: ${tax.toFixed(2)}</p>
        <p className="summary-total">Total: ${total.toFixed(2)}</p>
      </div>
    </section>
  );
};

export default OrderSummary;
