const CartPage = ({ cart }) => {
  return (
    <div>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cart.map((item) => <p>{item.name}</p>)
      )}
    </div>
  );
};

export default CartPage;
