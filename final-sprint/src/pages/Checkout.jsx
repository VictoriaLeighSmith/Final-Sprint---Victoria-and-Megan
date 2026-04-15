import "./Checkout.css";
import OrderSummary from "../components/OrderSummary";
import { useState } from "react";

const Checkout = ({ cart }) => {
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(true);
  };

  return (
    <div className="checkout-page">
      {success && (
        <div className="success-box">
          <p>Order placed successfully!</p>
        </div>
      )}

      <div className="checkout-container">
        <form className="checkout-form" onSubmit={handleSubmit}>
          <h1>Checkout</h1>

          <section className="checkout-section">
            <h2>Contact Info</h2>
            <div className="row">
              <input type="text" placeholder="Full Name" />
              <input type="email" placeholder="Email" />
            </div>
          </section>

          <section className="checkout-section">
            <h2>Shipping Address</h2>
            <div className="row">
              <input type="text" placeholder="Address" />
              <input type="text" placeholder="City" />
            </div>
            <div className="row">
              <input type="text" placeholder="Province" />
              <input type="text" placeholder="Postal Code" />
            </div>
          </section>

          <section className="checkout-section">
            <h2>Payment</h2>
            <input type="text" placeholder="Card Number" />
            <div className="row">
              <input type="text" placeholder="MM/YY" />
              <input type="text" placeholder="CVC" />
            </div>
          </section>

          <button type="submit">Place Order</button>
        </form>

        <aside className="order-summary">
          <OrderSummary cart={cart} />
        </aside>
      </div>
    </div>
  );
};

export default Checkout;
