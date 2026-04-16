import "./CartItem.css";

const CartItem = ({
  item,
  increaseQty,
  decreaseQty,
  removeFromCart,
  variant,
}) => {
  const isCheckout = variant === "checkout";

  return (
    <div className={`cart-item ${isCheckout ? "checkout-item" : ""}`}>
      <img src={item.image || "https://placehold.co/400x400"} alt={item.name} />

      <div className="cart-item-info">
        <h3>{item.name}</h3>
        <p>${item.price}.00</p>

        {isCheckout ? (
          <p className="qty-text">Qty: {item.quantity}</p>
        ) : (
          <p className="description">{item.description}</p>
        )}
      </div>

      {!isCheckout && (
        <div className="cart-item-controls">
          <div className="qty-controls">
            <button className="qty-btn" onClick={() => decreaseQty(item)}>
              -
            </button>

            <span>{item.quantity}</span>

            <button className="qty-btn" onClick={() => increaseQty(item)}>
              +
            </button>

            <button className="remove-btn" onClick={() => removeFromCart(item)}>
              remove
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartItem;
