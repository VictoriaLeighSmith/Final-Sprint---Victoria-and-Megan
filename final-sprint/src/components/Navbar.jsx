import { Link } from "react-router-dom";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { Badge } from "@mui/material";
import "../index.css";
import "./Navbar.css";
import { useEffect, useState } from "react";

const Navbar = ({ cartCount }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`navbar ${scrolled ? "navbar-solid" : "navbar-transparent"}`}
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
