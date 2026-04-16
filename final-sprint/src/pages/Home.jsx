import ProductCard from "../components/ProductCard";
import "./Home.css";
import faceImage from "../assets/Home Face.png";

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
        <img src={faceImage} alt="Image of a womans face" />
      </div>

      <div className="home-page-section-1">
        <div className="section-1-image-container">
          <img src="https://placehold.co/600x600" />
        </div>

        <div className="section-1-info-container">
          <h3 className="section-1-title">
            <em>Makeup</em>
          </h3>

          <div className="home-product-preview-row">
            {sectionOneProducts.map((product) => (
              <ProductCard key={product.id} product={product} compact />
            ))}
          </div>
        </div>
      </div>

      <div className="home-page-section-2">
        <div className="section-2-info-container">
          <h3 className="section-2-title">
            <em>Sets</em>
          </h3>

          <div className="home-product-preview-row">
            {sectionTwoProducts.map((product) => (
              <ProductCard key={product.id} product={product} compact />
            ))}
          </div>
        </div>

        <div className="section-2-image-container">
          <img src="https://placehold.co/600x600" />
        </div>
      </div>
    </div>
  );
};

export default Home;
