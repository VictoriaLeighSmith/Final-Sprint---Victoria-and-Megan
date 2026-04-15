import CartItem from "./CartItem";
import "./OrderSummary.css";

const OrderSummary = ({ cart }) => {
  const subtotal = cart.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  const TAX_RATE = 0.15;
  const tax = subtotal * TAX_RATE;
  const total = tax + subtotal;

  return (
    <div className="order-summary-content">
      <h2>Order Summary</h2>

      {/* ITEMS */}
      <div className="summary-items">
        {cart.map((item) => (
          <CartItem key={item.id} item={item} variant="checkout" />
        ))}
      </div>

      <hr />

      {/* TOTALS */}
      <div className="summary-totals">
        <p>Subtotal: ${subtotal.toFixed(2)}</p>
        <p>Tax: ${tax.toFixed(2)}</p>
        <p className="summary-total">Total: ${total.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default OrderSummary;
