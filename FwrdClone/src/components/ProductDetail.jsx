import React, { useContext, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import products from "../data/products.js";
import "./ProductDetail.css";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);

  const product = products.find((p) => p.id === parseInt(id));
  
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState("ivory");
  const [addedToCart, setAddedToCart] = useState(false);

  const formatPrice = (price) =>
    `₹${price.toLocaleString("en-IN", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })}`;

  if (!product) {
    return (
      <div className="pdp-error">
        <p>Product not found</p>
        <button onClick={() => navigate(-1)} className="back-btn">
          Go Back
        </button>
      </div>
    );
  }

  const handleAddToCart = () => {
    // Add product to cart with selected options
    const cartItem = {
      ...product,
      selectedSize,
      selectedColor,
      quantity: 1,
    };
    
    addToCart(cartItem);
    setAddedToCart(true);

    // Reset feedback after 2 seconds
    setTimeout(() => {
      setAddedToCart(false);
    }, 2000);
  };

  return (
    <div className="pdp">
      {/* LEFT SIDE - PRODUCT IMAGE */}
      <div className="pdp-left">
        {product.image ? (
          <img src={product.image} alt={product.name} className="main-img" />
        ) : (
          <div className="main-img-placeholder">
            {product.brand} — {product.name}
          </div>
        )}
      </div>

      {/* RIGHT SIDE - PRODUCT DETAILS */}
      <div className="pdp-right">
        <span className="tag">NEW</span>

        <h2 className="brand">{product.brand}</h2>
        <p className="title">{product.name}</p>
        <p className="type">{product.type}</p>
        <h3 className="price">{formatPrice(product.price)}</h3>

        {/* SIZE SELECTION */}
        <div className="section">
          <p className="label">
            Size: <span>{selectedSize ? selectedSize : "Select"}</span>
          </p>
          <div className="sizes">
            {["XXS", "XS", "S", "M", "L", "XL"].map((size) => (
              <button
                key={size}
                className={`size-btn ${selectedSize === size ? "active" : ""}`}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* COLOR SELECTION */}
        <div className="section">
          <p className="label">Color: {selectedColor}</p>
          <div className="colors">
            <span
              className={`color ivory ${selectedColor === "ivory" ? "active" : ""}`}
              onClick={() => setSelectedColor("ivory")}
              title="Ivory"
            ></span>
            <span
              className={`color black ${selectedColor === "black" ? "active" : ""}`}
              onClick={() => setSelectedColor("black")}
              title="Black"
            ></span>
            <span
              className={`color pink ${selectedColor === "pink" ? "active" : ""}`}
              onClick={() => setSelectedColor("pink")}
              title="Pink"
            ></span>
          </div>
        </div>

        {/* ACTION BUTTONS */}
        <div className="button-section">
          <button
            className={`add-btn ${addedToCart ? "added" : ""}`}
            onClick={handleAddToCart}
            disabled={!selectedSize}
          >
            {addedToCart ? "✓ Added to Cart" : "ADD TO CART"}
          </button>
          {/* <button className="wish-btn">♡ Add To Wish List</button> */}
        </div>

        {/* SHIPPING INFO */}
        <p className="shipping">
          Free international shipping on orders of $100 USD or more
        </p>

        {/* BACK BUTTON */}
        <button onClick={() => navigate(-1)} className="back-btn-link">
          ← Continue Shopping
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;