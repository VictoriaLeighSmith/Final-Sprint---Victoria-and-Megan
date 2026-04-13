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
      <img src="https://placehold.co/400x400" alt="cart item image" />
      <div className="cart-details">
        <p>{item.name}</p>
        <p>${item.price}.00</p>
        {isCheckout && <p>Qty: {item.quantity}</p>}
        {!isCheckout && <p>{item.description}</p>}
      </div>
      {!isCheckout && (
        <div className="cart-controls">
          <div className="quantity-controls">
            <button onClick={() => decreaseQty(item)}>-</button>
            <span>{item.quantity}</span>
            <button onClick={() => increaseQty(item)}>+</button>
          </div>

          <button onClick={() => removeFromCart(item)}>remove</button>
        </div>
      )}
    </div>
  );
};

export default CartItem;
