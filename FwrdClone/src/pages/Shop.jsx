import products from "../data/products.js";
import "./Shop.css";
import { useParams, Link, useNavigate } from "react-router-dom";

const Shop = () => {
  const { category } = useParams();
  const navigate = useNavigate();

  const formatPrice = (price) =>
    `₹${price.toLocaleString("en-IN", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })}`;

  const filteredProducts = products.filter(
    (product) => product.category === category
  );

  const handleCheck = (productId) => {
    navigate(`/product/${productId}`);
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
                <Link to={`/product/${product.id}`} className="ms-card-link">
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

                {/* ✅ CHECK BUTTON - NAVIGATES TO PRODUCT DETAIL */}
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

export default Shop;