import ProductCard from "../components/ProductCard";
import "./Shop.css";

const Shop = ({ products }) => {
  return (
    <div className="shop-page-container">
      <div className="shop-page-title">
        <h2>Shop All</h2>
      </div>
      <div className="product-cards-wrapper">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
