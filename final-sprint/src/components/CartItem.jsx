import "./CartItem.css";

// Reusable cart item component
// Displays item details and optionally includes quantity controls
const CartItem = ({
  item,
  increaseQty,
  decreaseQty,
  removeFromCart,
  variant,
}) => {
  // Determine if component is being used in checkout mode
  const isCheckout = variant === "checkout";

  return (
    <article className={`cart-item ${isCheckout ? "checkout-item" : ""}`}>
      {/* Fallback image used if product image is missing */}
      <img src={item.image || "https://placehold.co/400x400"} alt={item.name} />

      <div className="cart-item-info">
        <h3>{item.name}</h3>
        <p>${item.price.toFixed(2)}</p>

        {/* Show quantity text in checkout, description in cart view */}
        {isCheckout ? (
          <p className="qty-text">Qty: {item.quantity}</p>
        ) : (
          <p className="description">{item.description}</p>
        )}
      </div>

      {/* Only show controls when NOT in checkout */}
      {!isCheckout && (
        <div className="cart-item-controls">
          <div className="qty-controls">
            {/* Decrease quantity */}
            <button className="qty-btn" onClick={() => decreaseQty(item)}>
              -
            </button>

            <span>{item.quantity}</span>

            {/* Increase quantity */}
            <button className="qty-btn" onClick={() => increaseQty(item)}>
              +
            </button>

            {/* Remove item from cart */}
            <button className="remove-btn" onClick={() => removeFromCart(item)}>
              remove
            </button>
          </div>
        </div>
      )}
    </article>
  );
};

export default CartItem;
