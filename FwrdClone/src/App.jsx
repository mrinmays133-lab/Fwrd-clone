import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Shop from './pages/Shop';
import AuthPage from './pages/Login';

function App() {
  return (
    <Router>
      <Navbar />
      {/* <Shop /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop/:category" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<AuthPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;