import products from "../data/products.js";
import "./Shop.css"; // ✅ reuse same styling
import { useLocation, Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const SearchPage = () => {
  const navigate = useNavigate();
  const [filteredProducts, setFilteredProducts] = useState([]);

  const query =
    new URLSearchParams(useLocation().search).get("q") || "";

  const formatPrice = (price) =>
    `₹${price.toLocaleString("en-IN", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })}`;

  useEffect(() => {
    const result = products.filter((product) =>
      `${product.name} ${product.brand} ${product.category} ${product.type}`
        .toLowerCase()
        .includes(query.toLowerCase())
    );

    setFilteredProducts(result);
  }, [query]);

  const handleCheck = (productId) => {
    navigate(`/product/${productId}`); // ✅ SAME as Shop
  };

  return (
    <div className="ms-page">
      <div className="ms-container">
        <h1 className="ms-title">Search Results</h1>
        <p className="ms-count">
          {filteredProducts.length} Items for "{query}"
        </p>

        <div className="ms-grid">
          {filteredProducts.map((product) => (
            <div key={product.id} className="ms-card">
              <div className="ms-image-wrapper">
                
                {/* ✅ SAME LINK AS SHOP */}
                <Link
                  to={`/product/${product.id}`}
                  className="ms-card-link"
                >
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
                </Link>

                {/* ✅ SAME BUTTON AS SHOP */}
                <button
                  className="ms-add-to-cart"
                  onClick={(e) => {
                    e.preventDefault();
                    handleCheck(product.id);
                  }}
                >
                  Check
                </button>
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

export default SearchPage;