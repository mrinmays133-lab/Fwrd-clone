import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from "./pages/Home";
import Cart from "./pages/Cart";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Cart />
      <Footer />
    </div>
  );
}

export default App;