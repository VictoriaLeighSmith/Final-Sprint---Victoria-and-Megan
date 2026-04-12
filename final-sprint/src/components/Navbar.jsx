import { Link } from "react-router-dom";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { Badge } from "@mui/material";
import "./Navbar.css";

const Navbar = ({ cartCount }) => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="nav-link-container">
          <Link to="/shop" className="nav-link">
            Shop
          </Link>
        </div>

        <div className="logo-link-container">
          <Link to="/" className="logo-link">
            OUR COMPANY NAME
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
