import "./ProductCard.css";

const ProductCard = ({ product }) => {
  return (
    <div className="product-container">
      <div className="product-image-container">
        <img src={product.image} alt={product.name}></img>
      </div>

      <div className="product-info-container">
        <h3>{product.name}</h3>
        <p>${product.price.toFixed(2)}</p>

        <p>{product.description}</p>
      </div>
    </div>
  );
};

export default ProductCard;
