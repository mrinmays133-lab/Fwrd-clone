import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import "./Cart.css";

const Cart = () => {
  const { cart, removeItem, updateQty, total } = useContext(CartContext);
  const navigate = useNavigate();

  const formatPrice = (price) =>
    `₹${price.toLocaleString("en-IN", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })}`;

  return (
    <div className="cart">
      <h2>SHOPPING BAG ({cart.length})</h2>

      <div className="cart-container">

        {/* LEFT - ITEMS */}
        <div className="cart-items">
          {cart.length === 0 ? (
            <p className="empty-cart">Your cart is empty</p>
          ) : (
            cart.map((item) => (
              <div key={item.cartItemId} className="cart-item">

                <img src={item.image || "placeholder.jpg"} alt={item.name} />

                <div className="cart-details">
                  <h4>{item.brand} - {item.name}</h4>
                  <p className="price">{formatPrice(item.price)}</p>
                  
                  {/* Display selected size and color */}
                  <div className="item-options">
                    {item.selectedSize && (
                      <span className="option">Size: <strong>{item.selectedSize}</strong></span>
                    )}
                    {item.selectedColor && (
                      <span className="option">Color: <strong>{item.selectedColor}</strong></span>
                    )}
                  </div>

                  <div className="quantity-section">
                    <label>Qty: </label>
                    <select
                      value={item.quantity}
                      onChange={(e) =>
                        updateQty(item.cartItemId, Number(e.target.value))
                      }
                    >
                      {[1,2,3,4,5,6,7,8,9,10].map(q => (
                        <option key={q} value={q}>{q}</option>
                      ))}
                    </select>
                  </div>

                  <button
                    onClick={() => removeItem(item.cartItemId)}
                    className="remove-btn"
                  >
                    Remove
                  </button>
                </div>

                <div className="item-total">
                  {formatPrice(item.price * item.quantity)}
                </div>
              </div>
            ))
          )}
        </div>

        {/* RIGHT - SUMMARY */}
        {cart.length > 0 && (
          <div className="cart-summary">
            <h3>ORDER SUMMARY</h3>
            <p>Subtotal: {formatPrice(total)}</p>
            <p>Shipping: Free</p>
            <h4>Total: {formatPrice(total)}</h4>

           
            <button
              className="checkout-btn"
              onClick={() => navigate("/checkout")}
            >
              PROCEED TO CHECKOUT
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;