import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; //
import Home from "./pages/Home";
import AuthPage from "./pages/Login"; // Ensure your Login component is imported
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from "./pages/Home";
import Cart from "./pages/Cart";

function App() {
  return (
    <Router> {/* */}
      <div>
        <Navbar />
        <Routes> {/* */}
          <Route path="/" element={<Home />} /> {/* */}
          <Route path="/login" element={<AuthPage />} /> {/* */}
        </Routes>
        <Footer />
      </div>
    </Router>
    <div>
  );
}

export default App;