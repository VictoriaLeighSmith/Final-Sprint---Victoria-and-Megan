import "./Checkout.css";
import OrderSummary from "../components/OrderSummary";
import { useState } from "react";

// Checkout page component
// Handles basic form validation and displays order summary
const Checkout = ({ cart, clearCart }) => {
  // Used to trigger popup re-render
  const [popupKey, setPopupKey] = useState(0);

  // Stores message to display in popup (error or success)
  const [popupMessage, setPopupMessage] = useState("");

  // Handle form submission and validate input fields
  const handleOrderSuccess = async (e) => {
    e.preventDefault();

    const form = e.target;
    const inputs = form.querySelectorAll("input");

    let isValid = true;

    // Check that all input fields are filled
    inputs.forEach((input) => {
      if (!input.value.trim()) {
        isValid = false;
      }
    });

    // If any input fields are missing information, display an error asking the user to fill out all fields
    if (!isValid) {
      setPopupMessage("Please fill out all fields");
      setPopupKey(Date.now());
      return;
    }

    // Otherwise, show a success message
    setPopupMessage("Order placed successfully!");
    setPopupKey(Date.now());

    // Reset form and clear cart only after "successfully" placing an order
    form.reset();
    await clearCart();
  };

  return (
    <section className="checkout-page">
      {/* Checkout form */}
      <div className="checkout-container">
        <form className="checkout-form" onSubmit={handleOrderSuccess}>
          <h2>Checkout</h2>

          {/* Contact information section */}
          <section className="checkout-section">
            <h3>Contact Info</h3>
            <div className="row">
              <input type="text" placeholder="Full Name" />
              <input type="email" placeholder="Email" />
            </div>
          </section>

          {/* Shipping information section */}
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

          {/* Payment information section */}
          <section className="checkout-section">
            <h3>Payment</h3>
            <input type="text" placeholder="Card Number" />
            <div className="row">
              <input type="text" placeholder="MM/YY" />
              <input type="text" placeholder="CVC" />
            </div>
          </section>

          {/* Submit order button */}
          <button type="submit">Place Order</button>
        </form>

        {/* Order summary sidebar */}
        <aside className="order-summary">
          <OrderSummary cart={cart} />
        </aside>
      </div>
      {/* Popup message for validation or success */}
      {popupKey !== 0 && (
        <div key={popupKey} className="popup-message">
          <p>{popupMessage}</p>
        </div>
      )}
    </section>
  );
};

export default Checkout;
