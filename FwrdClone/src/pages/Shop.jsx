import products from "../data/products.js";
import "./Shop.css";
import { useParams } from "react-router-dom";
import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";

const Shop = () => {
  const { category } = useParams();
  const { addToCart } = useContext(CartContext);

  const [addedId, setAddedId] = useState(null);

  const formatPrice = (price) =>
    `₹${price.toLocaleString("en-IN", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })}`;

  const filteredProducts = products.filter(
    (product) => product.category === category
  );

  const handleAdd = (product) => {
    addToCart(product);
    setAddedId(product.id);

    setTimeout(() => {
      setAddedId(null);
    }, 1200);
  };

  return (
    <div className="ms-page">
      <div className="ms-container">
        <h1 className="ms-title">{category?.toUpperCase()}</h1>
        <p className="ms-count">{filteredProducts.length} Items</p>

        <div className="ms-grid">
          {filteredProducts.map((product) => (
            <div key={product.id} className="ms-card">
              <div className="ms-image-wrapper">
                {product.image ? (
                  <img
                    src={product.image}
                    alt={product.name}
                    className="ms-image"
                  />
                ) : (
                  <div className="ms-image-placeholder">
                    {product.brand} — {product.name}
                  </div>
                )}

                {/* ✅ FIXED BUTTON */}
                <button
                  className="ms-add-to-cart"
                  onClick={() => handleAdd(product)}
                >
                  ADD TO Bag
                </button>

                {/* ✅ POPUP FEEDBACK */}
                {addedId === product.id && (
                  <div className="added-popup">Added 🛍️</div>
                )}
              </div>

              <div className="ms-info">
                <p className="ms-brand">{product.brand}</p>
                <p className="ms-name">{product.name}</p>
                <p className="ms-price">
                  {formatPrice(product.price)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;