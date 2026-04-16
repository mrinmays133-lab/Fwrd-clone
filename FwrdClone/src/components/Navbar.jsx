import React, { useState, useContext } from "react";
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

const Navbar = ({ toggleTheme, theme }) => {
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);
  const { cart } = useContext(CartContext);
  const itemCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav className="navbar">
      {/* Mini Nav */}
      <div className="navbar-mini">
        <div className="mini-right">
          <span>EN</span>
          <span>|</span>
          <span>INR</span>
          <span><Link to="/login">Sign In</Link></span>
        </div>
      </div>

      {/* Top Nav */}
      <div className="navbar-top">
        <div className="navbar-left">
          <span>Womens</span>
          <span>Mens</span>
        </div>

        <div className="navbar-center">
          <h1>
            <Link to="/">LUXION</Link>
          </h1>
        </div>

        <div className="navbar-right">
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search"
              className={`search-input ${isSearchExpanded ? 'expanded' : ''}`}
              onFocus={() => setIsSearchExpanded(true)}
              onBlur={() => setIsSearchExpanded(false)}
            />
          </div>
          <button onClick={toggleTheme} className="theme-toggle" title="Toggle dark mode">
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
          <Link to="/cart">My Bag ({itemCount})</Link>
        </div>
      </div>

      {/* Bottom Nav - Categories */}
      <div className="navbar-bottom">
        <ul className="navbar-links">
          {categories.map((cat) => (
            <li key={cat.label}><Link to={cat.path}>{cat.label}</Link></li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;