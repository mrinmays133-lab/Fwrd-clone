import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">

      <div className="navbar-mini">
        <div className="mini-right">
          <span>EN</span>
          <span>|</span>
          <span>INR</span>
          <a href="Login.jsx">Login</a>
          <span>Sign In</span>
        </div>
      </div>


      <div className="navbar-top">
        <div className="navbar-left">
          <span>Womens</span>
          <span>Mens</span>
        </div>

        <div className="navbar-center">
          <h1>FasHiOn</h1>
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

export default Navbar