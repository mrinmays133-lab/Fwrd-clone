import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Shop from './pages/Shop';
import AuthPage from './pages/Login';

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <Router>
      <Navbar toggleTheme={toggleTheme} theme={theme} />
      <main className="page-layout">
        <div className="page-inner">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop/:category" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<AuthPage />} />
          </Routes>
        </div>
      </main>
      <Footer />
    </Router>
  );
}

export default App;