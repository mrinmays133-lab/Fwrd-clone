import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";// Essential for navigation
import './Navbar.css';

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
      <div className="navbar-mini">
        <div className="mini-right">
          <span>🇮🇳</span>
          <a href="#">EN</a>
          <span>|</span>
          <a href="#">INR</a>
          <a href="#">Need Help?</a>
          {/* Using Link for the internal Login page */}
          <Link to="/login" className="login-link">Sign In</Link>
          <span>INR</span>
          <span><Link to="/login">Sign In</Link></span>
          {/* Replace <a> with <Link> and point to the "/login" path */}
          <Link to="/login" className="login-link">Sign In</Link> {/* */}
        </div>
      </div>

      <div className="navbar-top">
        <div className="navbar-left">
          <a href="#">Womens</a>
          <a href="#">Mens</a>
        </div>

        <div className="navbar-center">
          {/* Clicking the logo takes you home */}
          <Link to="/" className="logo-link">
            <h1>LUXION</h1>
          </Link>
        </div>

        <div className="navbar-right">
          <a href="#">Search</a>
          <a href="#">My Bag (0)</a>
          <span>Womens</span>
        </div>

        <div className="navbar-center">

          <h1>
            <Link to="/">LUXION</Link>
          </h1>

          {/* Link the logo back to the home page */}
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            <h1>FasHiOn</h1>
          </Link> {/* */}
      {/* Top */}
      <div className="navbar-top">
        <div className="navbar-spacer"></div>


        {/* Logo */}
        <div className="navbar-logo">
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            LUXION
          </Link>
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
          <Link to="/cart">My Bag ({itemCount})</Link>
        </div>
      </div>

      <div className="navbar-bottom">
        <ul className="navbar-links">
          <li><a href="#">Clothing</a></li>
          <li><a href="#">Bags</a></li>
          <li><a href="#">Accessories</a></li>
          <li><a href="#">Shoes</a></li>
          <li><a href="#">Beauty</a></li>
          <li><Link to="/shop">Clothing</Link></li>
          <li><Link to="/shop">Bags</Link></li>
          <li><Link to="/shop">Accessories</Link></li>
          <li><Link to="/shop">Shoes</Link></li>
          <li><Link to="/shop">Beauty</Link></li>

        </ul>
        {/* Actions */}
        <div className="navbar-actions">
          <Link to="/login" className="navbar-link">
            Sign In
          </Link>

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