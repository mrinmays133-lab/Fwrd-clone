<<<<<<< HEAD



import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
=======
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import CartProvider from "./context/CartContext";
import "./index.css";
>>>>>>> e0eeed6a5c8f53f7a52b8b650b3060b145ad3229

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
  </React.StrictMode>
);