import ProductCard from "../components/ProductCard";
import "./Shop.css";

// Shop page component
// Receives product data as props and displays all products
const Shop = ({ products }) => {
  return (
    <section className="shop-page-container">
      <header className="shop-page-title">
        <h2>Shop All</h2>
      </header>

      <div className="product-cards-wrapper">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default Shop;
