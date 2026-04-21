import { Link } from "react-router-dom";
import "./ProductCard.css";

// Reusable product card component
// Displays product info and links to product details page
// 'compact' prop controls a simplified layout for smaller previews
const ProductCard = ({ product, compact = false }) => {
  return (
    <div className={`product-container ${compact ? "compact-card" : ""}`}>
      {/* Link wraps entire card for easy navigation */}
      <Link to={`/products/${product.id}`} className="product-card-link">
        {/* Product image */}
        <div className="product-image-container">
          <img src={product.image} alt={product.name}></img>
        </div>

        {/* Product information */}
        <div className="product-info-container">
          <h3>{product.name}</h3>
          <p>${product.price.toFixed(2)}</p>

          {/* Only show description in full (non-compact) cards */}
          {!compact && (
            <p className="product-short-description">
              {product.shortDescription}
            </p>
          )}
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
