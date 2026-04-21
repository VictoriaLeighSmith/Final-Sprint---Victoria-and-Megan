import ProductCard from "../components/ProductCard";
import "./Home.css";
import faceImage from "../assets/HomeFace.png";

// Home page component
// Displays featured product sections and branding content
const Home = ({ products }) => {
  // Select specific products for first featured section
  const sectionOneProducts = products.filter((product) =>
    [1, 2, 3].includes(Number(product.id)),
  );

  // Select specific products for second featured section
  const sectionTwoProducts = products.filter((product) =>
    [5, 10, 15].includes(Number(product.id)),
  );

  return (
    <div className="home-page-container">
      {/* Hero image section */}
      <section className="hero-container">
        <img src={faceImage} alt="Woman wearing minimal makeup" />
      </section>

      {/* First featured section (Makeup) */}
      <section className="home-page-section-1">
        <div className="section-1-image-container"></div>

        <div className="section-1-info-container">
          <h2 className="section-1-title">
            <em>Makeup</em>
          </h2>

          {/* Preview selected products using compact cards */}
          <div className="home-product-preview-row">
            {sectionOneProducts.map((product) => (
              <ProductCard key={product.id} product={product} compact />
            ))}
          </div>
        </div>
      </section>

      {/* Branding/tagline section */}
      <section className="sentence-section">
        <h3>
          <em>Beauty, Simplified</em>
        </h3>
        <p>
          Minimal formulas designed to enhance what's already yours - nothing
          more, nothing extra.
        </p>
      </section>

      {/* Second featured section (Sets) */}
      <section className="home-page-section-2">
        <div className="section-2-info-container">
          <h2 className="section-2-title">
            <em>Sets</em>
          </h2>

          {/* Preview selected products using compact cards */}
          <div className="home-product-preview-row">
            {sectionTwoProducts.map((product) => (
              <ProductCard key={product.id} product={product} compact />
            ))}
          </div>
        </div>

        <div className="section-2-image-container"></div>
      </section>
    </div>
  );
};

export default Home;
