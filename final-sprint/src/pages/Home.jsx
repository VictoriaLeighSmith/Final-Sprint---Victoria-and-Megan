import "./Home.css";

const Home = () => {
  return (
    <div className="home-page-container">
      <div className="hero-container">
        <img src="https://placehold.co/1400x450" />
      </div>

      <div className="home-page-section-1">
        <div className="section-1-image-container">
          <img src="https://placehold.co/400x400" />
        </div>

        <div className="section-1-info-container">
          <p>RANDOM INFO/PRODUCTS HERE</p>
        </div>
      </div>

      <div className="home-page-section-2">
        <div className="section-2-info-container">
          <p>RANDOM INFO/PRODUCTS HERE</p>
        </div>

        <div className="section-2-image-container">
          <img src="https://placehold.co/400x400" />
        </div>
      </div>
    </div>
  );
};

export default Home;
