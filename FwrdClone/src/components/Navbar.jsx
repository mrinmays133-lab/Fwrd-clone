import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

import "./Navbar.css";

import { auth } from "../pages/firebase"; // 
import { onAuthStateChanged, signOut } from "firebase/auth"; 
import "./Navbar.css";
import { useNavigate } from "react-router-dom";


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


  const [user, setUser] = useState(null); 
  const navigate = useNavigate();


  const itemCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  // 🔥 listen for login state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  // 🔥 logout function
  const handleLogout = async () => {
    await signOut(auth);
    navigate("/");
  };

  return (
    <nav className="navbar">

      {/* Mini Nav */}
      <div className="navbar-mini">
        <div className="mini-right">
          <span>🇮🇳</span>
          <span>EN</span>
          <span>|</span>
          <span>INR</span>

          <Link to="/login">Sign In</Link>


          {/* 🔥 CONDITIONAL UI */}
          {user ? (
            <>
              <img
               src={
               user.photoURL ||
              "https://cdn-icons-png.flaticon.com/512/847/847969.png"
              }
              alt="profile"
              className="profile-pic"
              />

              <button onClick={handleLogout} className="logout-btn">
                LogOut
              </button>
            </>
          ) : (
            <Link to="/login">Sign In</Link>
          )}

        </div>
      </div>

      {/* Top Nav */}
      <div className="navbar-top">
        <div className="navbar-left">

          <span>Womens</span>
        </div>

        {/* Logo */}
        <div className="navbar-center">

          <span></span>
        </div>

        <div className="navbar-logo">

          <Link to="/" className="logo-link">
            <h1>LUXION</h1>
          </Link>
        </div>


        {/* Right Section */}


        <div className="navbar-right">
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search"
              className={`search-input ${isSearchExpanded ? "expanded" : ""}`}
              onFocus={() => setIsSearchExpanded(true)}
              onBlur={() => setIsSearchExpanded(false)}
            />
          </div>

          <button onClick={toggleTheme} className="theme-toggle">
            {theme === "light" ? "🌙" : "☀️"}
          </button>

          <Link to="/cart">My Bag ({itemCount})</Link>
        </div>
      </div>

      {/* Bottom Nav */}
      <div className="navbar-bottom">
        <ul className="navbar-links">
          {categories.map((cat) => (
            <li key={cat.label}>
              <Link to={cat.path}>{cat.label}</Link>
            </li>
          ))}
        </ul>
      </div>

    </nav>
  );
};

export default Navbar;