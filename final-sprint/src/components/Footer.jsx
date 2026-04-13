import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="links-wrapper">
        <div className="link-container">
          <a href="#">About Us</a>
          <a href="#">Contact Us</a>
          <a href="#">FAQ</a>
        </div>

        <div className="link-container">
          <a href="#">Shipping & Returns</a>
          <a href="#">Refund Policy</a>
          <a href="#">Terms & Conditions</a>
        </div>

        <div className="link-container">
          <a href="#">My Account</a>
          <a href="#">Accessibility</a>
          <a href="#">Careers</a>
        </div>
      </div>

      <div className="logo-container">
        <img src="https://placehold.co/250x100" alt="Logo" />
      </div>
    </div>
  );
};

export default Footer;
