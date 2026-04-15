import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "./Cart.css";

const Cart = () => {
  const { cart, removeItem, updateQty, total } = useContext(CartContext);

  return (
    <div className="cart">
      <h2>SHOPPING BAG ({cart.length})</h2>

      <div className="cart-container">

        {/* LEFT - ITEMS */}
        <div className="cart-items">
          {cart.map((item) => (
            <div key={item.id} className="cart-item">

              <img src={item.image} alt={item.name} />

              <div className="cart-details">
                <h4>{item.name}</h4>
                <p>₹{item.price}</p>

                <select
                  value={item.quantity}
                  onChange={(e) =>
                    updateQty(item.id, Number(e.target.value))
                  }
                >
                  {[1,2,3,4,5].map(q => (
                    <option key={q} value={q}>{q}</option>
                  ))}
                </select>

                <button onClick={() => removeItem(item.id)}>
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT - SUMMARY */}
        <div className="cart-summary">
          <h3>ORDER SUMMARY</h3>
          <p>Subtotal: ₹{total.toFixed(2)}</p>
          <p>Shipping: Free</p>
          <h4>Total: ₹{total.toFixed(2)}</h4>

          <button className="checkout-btn">
            PROCEED TO CHECKOUT
          </button>
        </div>

      </div>
    </div>
  );
};

export default Cart;