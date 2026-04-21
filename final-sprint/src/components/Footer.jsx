import "./Footer.css";

// Footer component
// Displays navigation links and brand name
const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="links-wrapper">
        {/* Placeholder links (prevent default navigation, these are decorative only) */}
        <div className="link-container">
          <a href="/" onClick={(e) => e.preventDefault()}>
            About Us
          </a>
          <a href="/" onClick={(e) => e.preventDefault()}>
            Contact Us
          </a>
          <a href="/" onClick={(e) => e.preventDefault()}>
            FAQ
          </a>
        </div>

        <div className="link-container">
          <a href="/" onClick={(e) => e.preventDefault()}>
            Shipping & Returns
          </a>
          <a href="/" onClick={(e) => e.preventDefault()}>
            Refund Policy
          </a>
          <a href="/" onClick={(e) => e.preventDefault()}>
            Terms & Conditions
          </a>
        </div>

        <div className="link-container">
          <a href="/" onClick={(e) => e.preventDefault()}>
            My Account
          </a>
          <a href="/" onClick={(e) => e.preventDefault()}>
            Accessibility
          </a>
          <a href="/" onClick={(e) => e.preventDefault()}>
            Careers
          </a>
        </div>
      </div>

      {/* Brand/logo */}
      <div className="logo-container">
        <p>Common</p>
      </div>
    </footer>
  );
};

export default Footer;
