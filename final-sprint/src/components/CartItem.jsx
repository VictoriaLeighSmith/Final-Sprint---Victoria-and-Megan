import "./CartItem.css";

const CartItem = ({ item, increaseQty, decreaseQty, removeFromCart }) => {
  return (
    <div className="cart-item">
      <img src="https://placehold.co/400x400" alt="cart item image" />
      <div className="cart-details">
        <p>{item.name}</p>
        <p>${item.price}.00</p>
        <p>{item.description}</p>
      </div>
      <div className="cart-controls">
        <div className="quantity-controls">
          <button onClick={() => decreaseQty(item)}>-</button>
          <span>{item.quantity}</span>
          <button onClick={() => increaseQty(item)}>+</button>
        </div>

        <button onClick={() => removeFromCart(item)}>remove</button>
      </div>
    </div>
  );
};

export default CartItem;
