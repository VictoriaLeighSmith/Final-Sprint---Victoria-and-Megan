import "./Checkout.css";
import OrderSummary from "../components/OrderSummary";
import { useState } from "react";

const Checkout = ({ cart }) => {
  const [popupKey, setPopupKey] = useState(0);
  const [popupMessage, setPopupMessage] = useState("");

  const handleOrderSuccess = (e) => {
    e.preventDefault();

    const form = e.target;
    const inputs = form.querySelectorAll("input");

    let isValid = true;

    inputs.forEach((input) => {
      if (!input.value.trim()) {
        isValid = false;
      }
    });

    if (!isValid) {
      setPopupMessage("Please fill out all fields");
      setPopupKey(Date.now());
      return;
    }

    setPopupMessage("Order placed successfully!");
    setPopupKey(Date.now());
  };

  return (
    <div className="checkout-page">
      <div className="checkout-container">
        <form className="checkout-form" onSubmit={handleOrderSuccess}>
          <h2>Checkout</h2>

          <section className="checkout-section">
            <h3>Contact Info</h3>
            <div className="row">
              <input type="text" placeholder="Full Name" />
              <input type="email" placeholder="Email" />
            </div>
          </section>

          <section className="checkout-section">
            <h3>Shipping Address</h3>
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
            <h3>Payment</h3>
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
      {popupKey !== 0 && (
        <div key={popupKey} className="order-success">
          <p>{popupMessage}</p>
        </div>
      )}
    </div>
  );
};

export default Checkout;
