import { Link } from "react-router-dom";
import "./ProductCard.css";

const ProductCard = ({ product, compact = false }) => {
  return (
    <div className={`product-container ${compact ? "compact-card" : ""}`}>
      <Link to={`/products/${product.id}`} className="product-card-link">
        <div className="product-image-container">
          <img src={product.image} alt={product.name}></img>
        </div>

        <div className="product-info-container">
          <h3>{product.name}</h3>
          <p>${product.price.toFixed(2)}</p>

          <br />

          {!compact && <p>{product.description}</p>}
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
