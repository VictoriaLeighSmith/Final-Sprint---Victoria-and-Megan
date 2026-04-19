import { useRef, useState } from "react";
import { useParams } from "react-router-dom";
import "./ProductDetails.css";

const ProductDetails = ({ products, addToCart }) => {
  const { id } = useParams();
  // To allow success popup each time the add to cart button is clicked, created a key using date to make sure the value is different each time so it re-renders. Using a boolean value makes it tricky.
  const [popupKey, setPopupKey] = useState(0);

  const product = products.find((item) => Number(item.id) === Number(id));

  const handleAddToCart = () => {
    addToCart(product);
    setPopupKey(Date.now());
  };

  if (!product) {
    return <p>Loading product info ...</p>;
  }

  return (
    <div className="product-details-container">
      <div className="details-image-container">
        <img src={product.detailsImage} alt={product.name} />
      </div>

      <div className="details-info-container">
        <h3>{product.name}</h3>
        <p>${product.price.toFixed(2)}</p>
        <p>{product.description}</p>

        <div className="purchase-section">
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

          <button onClick={handleAddToCart}>ADD TO CART</button>
        </div>
        {popupKey !== 0 && (
          <div key={popupKey} className="add-to-cart-success">
            <p>Added to cart!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
