import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import "./Navbar.css";

const categories = [
  { label: "CLOTHING", path: "/shop/clothing" },
  { label: "BAGS", path: "/shop/bags" },
  { label: "ACCESSORIES", path: "/shop/accessories" },
  { label: "SHOES", path: "/shop/shoes" },
  { label: "BEAUTY", path: "/shop/beauty" }
];

const Navbar = () => {
  const { cart } = useContext(CartContext);

  const itemCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav className="navbar">
      {/* Top */}
      <div className="navbar-top">
        <div className="navbar-spacer"></div>

        {/* Logo */}
        <div className="navbar-logo">
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            LUXION
          </Link>
        </div>

        {/* Actions */}
        <div className="navbar-actions">
          <Link to="/login" className="navbar-link">
            Sign In
          </Link>

          <Link to="/cart" className="navbar-link">
            My Bag ({itemCount})
          </Link>
        </div>
      </div>

      {/* Categories */}
      <div className="navbar-categories">
        {categories.map((cat) => (
          <Link key={cat.label} to={cat.path} className="navbar-cat">
            {cat.label}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;