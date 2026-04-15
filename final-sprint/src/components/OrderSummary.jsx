import CartItem from "./CartItem";

const OrderSummary = ({ cart }) => {
  // Calculations for order summary
  const subtotal = cart.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);
  const TAX_RATE = 0.15;
  const tax = subtotal * TAX_RATE;
  const total = tax + subtotal;
  return (
    // Using map to display cart items
    <div>
      {cart.map((item) => (
        <CartItem key={item.id} item={item} variant="checkout" />
      ))}
      <hr />
      <p>Subtotal: ${subtotal.toFixed(2)}</p>
      <p>Tax: ${tax.toFixed(2)}</p>
      <p>
        <strong>Total: ${total.toFixed(2)}</strong>
      </p>
    </div>
  );
};
export default OrderSummary;
