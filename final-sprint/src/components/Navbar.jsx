import { Link, useLocation } from "react-router-dom";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { useEffect, useState } from "react";
import { Badge } from "@mui/material";
import "./Navbar.css";

// Navbar component
// Handles navigation, cart display, and dynamic styling on scroll
const Navbar = ({ cartCount, loading, error }) => {
  // Tracks whether page has been scrolled (for styling)
  const [scrolled, setScrolled] = useState(false);

  // Get current route to determine page-specific behavior (transparent nav before scroll on home)
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      // Only apply scroll effect on home page
      if (!isHome) {
        return;
      }

      // Set scrolled state when user scrolls past set area
      setScrolled(window.scrollY > 20);
    };

    // Run once and attach scroll listener
    handleScroll();
    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on unmount or route change
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location.pathname]);

  return (
    <header>
      {/* Navbar changes style based on loading, route, and scroll state */}
      <nav
        className={`navbar ${
          loading || error || !isHome || scrolled
            ? "navbar-solid"
            : "navbar-transparent"
        }`}
      >
        <div className="navbar-container">
          <div className="nav-link-container">
            {/* Shop navigation link */}
            <Link to="/shop" className="nav-link">
              Shop
            </Link>
          </div>

          <div className="logo-link-container">
            {/* Home navigation link */}
            <Link to="/" className="logo-link">
              Common
            </Link>
          </div>

          <div className="cart-link-container">
            {/* Cart icon with item count badge */}
            <Link to="/cart" className="cart-link" aria-label="View cart">
              <Badge badgeContent={cartCount}>
                <HiOutlineShoppingBag />
              </Badge>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
