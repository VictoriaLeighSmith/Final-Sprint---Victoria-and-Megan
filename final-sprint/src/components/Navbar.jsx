import { Link, useLocation } from "react-router-dom";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { useEffect, useState } from "react";
import { Badge } from "@mui/material";
import "../index.css";
import "./Navbar.css";

const Navbar = ({ cartCount }) => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      if (!isHome) {
        return;
      }

      setScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location.pathname]);

  return (
    <nav
      className={`navbar ${
        isHome && !scrolled ? "navbar-transparent" : "navbar-solid"
      }`}
    >
      <div className="navbar-container">
        <div className="nav-link-container">
          <Link to="/shop" className="nav-link">
            Shop
          </Link>
        </div>

        <div className="logo-link-container">
          <Link to="/" className="logo-link">
            Common
          </Link>
        </div>

        <div className="cart-link-container">
          <Link to="/cart" className="cart-link">
            <Badge badgeContent={cartCount}>
              <HiOutlineShoppingBag />
            </Badge>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
