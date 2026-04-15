import React from 'react';
import { Link } from 'react-router-dom'; // Essential for navigation
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-mini">
        <div className="mini-right">
          <span>🇮🇳</span>
          <a href="#">EN</a>
          <span>|</span>
          <a href="#">INR</a>
          <a href="#">Need Help?</a>
          {/* Using Link for the internal Login page */}
          <Link to="/login" className="login-link">Sign In</Link>
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
        </div>
      </div>

      <div className="navbar-bottom">
        <ul className="navbar-links">
          <li><a href="#">Clothing</a></li>
          <li><a href="#">Bags</a></li>
          <li><a href="#">Accessories</a></li>
          <li><a href="#">Shoes</a></li>
          <li><a href="#">Beauty</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;