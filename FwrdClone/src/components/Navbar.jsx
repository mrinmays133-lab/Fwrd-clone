import { Link } from 'react-router-dom'; //
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-mini">
        <div className="mini-right">
          <span>EN</span>
          <span>|</span>
          <span>INR</span>
          {/* Replace <a> with <Link> and point to the "/login" path */}
          <Link to="/login" className="login-link">Sign In</Link> {/* */}
        </div>
      </div>

      <div className="navbar-top">
        <div className="navbar-left">
          <span>Womens</span>
        </div>

        <div className="navbar-center">
          {/* Link the logo back to the home page */}
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            <h1>FasHiOn</h1>
          </Link> {/* */}
        </div>

        <div className="navbar-right">
          <span>Search</span>
          <span>My Bag (0)</span>
        </div>
      </div>

      <div className="navbar-bottom">
        <ul className="navbar-links">
          <li>Clothing</li>
          <li>Bags</li>
          <li>Accessories</li>
          <li>Shoes</li>
          <li>Beauty</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;