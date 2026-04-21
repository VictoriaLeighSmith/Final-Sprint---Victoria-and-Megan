import { useState } from "react";
import { useParams } from "react-router-dom";
import "./ProductDetails.css";

// Displays detailed information for a single product
// Includes add-to-cart functionality and dynamic shade rendering
const ProductDetails = ({ products, addToCart }) => {
  // Get product ID from URL
  const { id } = useParams();

  // To allow success popup each time the add to cart button is clicked, created a key using date to make sure the value is different each time so it re-renders. Using a boolean value makes it tricky.
  const [popupKey, setPopupKey] = useState(0);

  // Find the selected product based on URL ID
  const product = products.find((item) => Number(item.id) === Number(id));

  // Handle adding item to cart and showing success message. This allows the "Successfully added to cart" popup appear each time the button is clicked.
  const handleAddToCart = () => {
    addToCart(product);
    setPopupKey(Date.now());
  };

  // Show a message to let the user know data is loading if loading is slow
  if (!product) {
    return <p className="app-message">Loading product info ...</p>;
  }

  return (
    <section className="product-details-container">
      <div className="details-image-container">
        <img src={product.detailsImage} alt={product.name} />
      </div>

      <div className="details-info-container">
        <h1>{product.name}</h1>
        <p>${product.price.toFixed(2)}</p>
        <p>{product.description}</p>

        <section className="purchase-section">
          {/* SINGLE PRODUCT SHADES */}
          {product.shades?.length > 0 && (
            <div className="shade-row">
              {product.shades.map((color) => (
                <div
                  key={color}
                  className="shade"
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          )}

          {/* SET PRODUCT SHADES */}
          {product.setProducts?.length > 0 && (
            <div className="set-shades">
              {product.setProducts.map((item) => (
                <div key={item.name} className="set-shade-group">
                  <p>
                    <em>{item.name}</em>
                  </p>

                  {item.shades?.length > 0 && (
                    <div className="shade-row">
                      {item.shades.map((color) => (
                        <div
                          key={color}
                          className="shade"
                          style={{ backgroundColor: color }}
                        />
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          <button onClick={handleAddToCart}>Add to Cart</button>

          <p className="stock-qty">In Stock: {product.stock}</p>
        </section>
        {popupKey !== 0 && (
          <div key={popupKey} className="add-to-cart-success">
            <p>Added to cart!</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductDetails;
