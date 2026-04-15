import { useParams } from "react-router-dom";
import "./ProductDetails.css";

const ProductDetails = ({ products, addToCart }) => {
  const { id } = useParams();
  const product = products.find((item) => Number(item.id) === Number(id));

  if (!product) {
    return <p>Loading product info ...</p>;
  }

  return (
    <div className="product-details-container">
      <div className="details-image-container">
        <img src="https://placehold.co/600x500" alt={product.name} />
      </div>

      <div className="details-info-container">
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <button onClick={() => addToCart(product)}>ADD TO CART</button>
      </div>
    </div>
  );
};

export default ProductDetails;
