import React from 'react';
import { Link } from 'react-router-dom'; // Essential for navigation
import { useState, useContext } from 'react';
import { CartContext } from '../context/CartContext';
import './Navbar.css';

const Navbar = () => {
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);
  const { cart } = useContext(CartContext);
  const itemCount = cart.reduce((acc, item) => acc + item.quantity, 0);
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
      </div>
    </nav>
  );
};

export default Navbar;