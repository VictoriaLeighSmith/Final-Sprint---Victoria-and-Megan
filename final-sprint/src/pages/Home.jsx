import ProductCard from "../components/ProductCard";
import "./Home.css";

const Home = ({ products }) => {
  const sectionOneProducts = products.filter((product) =>
    [1, 2, 3].includes(Number(product.id)),
  );

  const sectionTwoProducts = products.filter((product) =>
    [5, 10, 15].includes(Number(product.id)),
  );

  return (
    <div className="home-page-container">
      <div className="hero-container">
        <img src="https://placehold.co/1400x450" />
      </div>

      <div className="home-page-section-1">
        <div className="section-1-image-container">
          <img src="https://placehold.co/400x500" />
        </div>

        <div className="section-1-info-container">
          <p>Makeup</p>

          <div className="home-product-preview-row">
            {sectionOneProducts.map((product) => (
              <ProductCard key={product.id} product={product} compact />
            ))}
          </div>
        </div>
      </div>

      <div className="home-page-section-2">
        <div className="section-2-info-container">
          <p>Sets</p>

          <div className="home-product-preview-row">
            {sectionTwoProducts.map((product) => (
              <ProductCard key={product.id} product={product} compact />
            ))}
          </div>
        </div>

        <div className="section-2-image-container">
          <img src="https://placehold.co/400x500" />
        </div>
      </div>
    </div>
  );
};

export default Home;
