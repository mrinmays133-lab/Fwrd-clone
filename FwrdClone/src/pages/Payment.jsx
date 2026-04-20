import { useContext, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import "./Payment.css";

const Payment = () => {
  const { cart, total, clearCart } = useContext(CartContext);
  const navigate = useNavigate();
  const location = useLocation();
  const shippingInfo = location.state?.shippingInfo || {};

  const [paymentMethod, setPaymentMethod] = useState("card");
  const [cardForm, setCardForm] = useState({
    cardNumber: "",
    cardName: "",
    expiry: "",
    cvv: "",
  });
  const [upiId, setUpiId] = useState("");
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const formatPrice = (price) =>
    `₹${price.toLocaleString("en-IN", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })}`;

  const tax = Math.round(total * 0.18);
  const grandTotal = total + tax;

  const formatCardNumber = (val) =>
    val.replace(/\D/g, "").slice(0, 16).replace(/(.{4})/g, "$1 ").trim();

  const formatExpiry = (val) => {
    const cleaned = val.replace(/\D/g, "").slice(0, 4);
    if (cleaned.length >= 3) return cleaned.slice(0, 2) + "/" + cleaned.slice(2);
    return cleaned;
  };

  const handleCardChange = (e) => {
    let { name, value } = e.target;
    if (name === "cardNumber") value = formatCardNumber(value);
    if (name === "expiry") value = formatExpiry(value);
    if (name === "cvv") value = value.replace(/\D/g, "").slice(0, 3);
    setCardForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const newErrors = {};
    if (paymentMethod === "card") {
      const rawCard = cardForm.cardNumber.replace(/\s/g, "");
      if (rawCard.length !== 16) newErrors.cardNumber = "Enter a valid 16-digit card number";
      if (!cardForm.cardName.trim()) newErrors.cardName = "Cardholder name is required";
      if (!/^\d{2}\/\d{2}$/.test(cardForm.expiry)) newErrors.expiry = "Enter expiry as MM/YY";
      if (cardForm.cvv.length !== 3) newErrors.cvv = "CVV must be 3 digits";
    }
    if (paymentMethod === "upi") {
      if (!upiId.trim() || !/^[\w.-]+@[\w]+$/.test(upiId))
        newErrors.upiId = "Enter a valid UPI ID (e.g. name@upi)";
    }
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (paymentMethod === "cod") {
      placeOrder();
      return;
    }
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    placeOrder();
  };

  const placeOrder = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      clearCart?.();
    }, 2000);
  };

  if (success) {
    return (
      <div className="payment-success">
        <div className="success-card">
          <div className="success-icon">✓</div>
          <h2>Order Placed!</h2>
          <p>
            Thank you, <strong>{shippingInfo.firstName}</strong>! Your order has been
            confirmed and will be delivered to <strong>{shippingInfo.city}</strong>.
          </p>
          <p className="success-total">Order Total: {formatPrice(grandTotal)}</p>
          <div className="success-actions">
            <button onClick={() => navigate("/shop")} className="btn-primary">
              CONTINUE SHOPPING
            </button>
            <button onClick={() => navigate("/")} className="btn-secondary">
              GO HOME
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="payment-page">
      {/* PROGRESS BAR */}
      <div className="checkout-progress">
        <div className="progress-step done">
          <span className="step-num">✓</span>
          <span className="step-label">Shipping</span>
        </div>
        <div className="progress-line done"></div>
        <div className="progress-step active">
          <span className="step-num">2</span>
          <span className="step-label">Payment</span>
        </div>
        <div className="progress-line"></div>
        <div className="progress-step">
          <span className="step-num">3</span>
          <span className="step-label">Confirmation</span>
        </div>
      </div>

      <div className="payment-layout">
        {/* LEFT — PAYMENT FORM */}
        <div className="payment-form-section">
          <h2 className="section-title">Payment Method</h2>

          {/* METHOD TABS */}
          <div className="payment-tabs">
            {[
              { id: "card", icon: "💳", label: "Credit / Debit Card" },
              { id: "upi", icon: "📲", label: "UPI" },
              { id: "cod", icon: "🚚", label: "Cash on Delivery" },
            ].map((tab) => (
              <button
                key={tab.id}
                className={`tab-btn ${paymentMethod === tab.id ? "tab-active" : ""}`}
                onClick={() => {
                  setPaymentMethod(tab.id);
                  setErrors({});
                }}
                type="button"
              >
                <span className="tab-icon">{tab.icon}</span>
                <span>{tab.label}</span>
              </button>
            ))}
          </div>

          <form onSubmit={handleSubmit}>
            {/* CARD FORM */}
            {paymentMethod === "card" && (
              <div className="method-section">
                <div className="card-preview">
                  <div className="card-chip" />
                  <p className="card-num-preview">
                    {cardForm.cardNumber || "•••• •••• •••• ••••"}
                  </p>
                  <div className="card-bottom">
                    <span>{cardForm.cardName || "CARDHOLDER NAME"}</span>
                    <span>{cardForm.expiry || "MM/YY"}</span>
                  </div>
                </div>

                <div className="form-group">
                  <label>Card Number</label>
                  <input
                    type="text"
                    name="cardNumber"
                    value={cardForm.cardNumber}
                    onChange={handleCardChange}
                    placeholder="1234 5678 9012 3456"
                    className={errors.cardNumber ? "input-error" : ""}
                  />
                  {errors.cardNumber && <span className="error-msg">{errors.cardNumber}</span>}
                </div>

                <div className="form-group">
                  <label>Cardholder Name</label>
                  <input
                    type="text"
                    name="cardName"
                    value={cardForm.cardName}
                    onChange={handleCardChange}
                    placeholder="RAHUL SHARMA"
                    className={errors.cardName ? "input-error" : ""}
                    style={{ textTransform: "uppercase" }}
                  />
                  {errors.cardName && <span className="error-msg">{errors.cardName}</span>}
                </div>

                <div className="form-row-two">
                  <div className="form-group">
                    <label>Expiry Date</label>
                    <input
                      type="text"
                      name="expiry"
                      value={cardForm.expiry}
                      onChange={handleCardChange}
                      placeholder="MM/YY"
                      className={errors.expiry ? "input-error" : ""}
                    />
                    {errors.expiry && <span className="error-msg">{errors.expiry}</span>}
                  </div>
                  <div className="form-group">
                    <label>CVV</label>
                    <input
                      type="password"
                      name="cvv"
                      value={cardForm.cvv}
                      onChange={handleCardChange}
                      placeholder="•••"
                      maxLength={3}
                      className={errors.cvv ? "input-error" : ""}
                    />
                    {errors.cvv && <span className="error-msg">{errors.cvv}</span>}
                  </div>
                </div>
              </div>
            )}

            {/* UPI FORM */}
            {paymentMethod === "upi" && (
              <div className="method-section">
                <div className="upi-logos">
                  {["GPay", "PhonePe", "Paytm", "BHIM"].map((app) => (
                    <span key={app} className="upi-badge">{app}</span>
                  ))}
                </div>
                <div className="form-group">
                  <label>UPI ID</label>
                  <input
                    type="text"
                    value={upiId}
                    onChange={(e) => {
                      setUpiId(e.target.value);
                      if (errors.upiId) setErrors((p) => ({ ...p, upiId: "" }));
                    }}
                    placeholder="yourname@okaxis"
                    className={errors.upiId ? "input-error" : ""}
                  />
                  {errors.upiId && <span className="error-msg">{errors.upiId}</span>}
                </div>
              </div>
            )}

            {/* COD */}
            {paymentMethod === "cod" && (
              <div className="method-section cod-section">
                <div className="cod-icon">🚚</div>
                <p>Pay with cash when your order is delivered.</p>
                <p className="cod-note">
                  Please keep exact change ready. COD charges may apply on select orders.
                </p>
              </div>
            )}

            {/* SHIPPING SUMMARY */}
            {shippingInfo.firstName && (
              <div className="shipping-recap">
                <p className="recap-label">Delivering to</p>
                <p className="recap-addr">
                  {shippingInfo.firstName} {shippingInfo.lastName} •{" "}
                  {shippingInfo.address}, {shippingInfo.city}, {shippingInfo.state} —{" "}
                  {shippingInfo.pincode}
                </p>
                <button
                  type="button"
                  className="change-addr"
                  onClick={() => navigate("/checkout")}
                >
                  Change
                </button>
              </div>
            )}

            <button type="submit" className="pay-btn" disabled={loading}>
              {loading ? (
                <span className="spinner" />
              ) : (
                `PAY ${formatPrice(grandTotal)}`
              )}
            </button>

            <p className="secure-note">🔒 Secured by 256-bit SSL encryption</p>
          </form>
        </div>

        {/* RIGHT — ORDER SUMMARY */}
        <div className="payment-summary">
          <h3>ORDER SUMMARY</h3>
          <div className="summary-items">
            {cart.map((item) => (
              <div key={item.cartItemId} className="summary-item">
                <div className="summary-item-img-wrap">
                  <img src={item.image || "placeholder.jpg"} alt={item.name} />
                  <span className="qty-badge">{item.quantity}</span>
                </div>
                <div className="summary-item-info">
                  <p className="summary-item-name">{item.brand} — {item.name}</p>
                  {item.selectedSize && (
                    <p className="summary-item-meta">Size: {item.selectedSize}</p>
                  )}
                </div>
                <p className="summary-item-price">{formatPrice(item.price * item.quantity)}</p>
              </div>
            ))}
          </div>

          <div className="summary-divider" />
          <div className="summary-line"><span>Subtotal</span><span>{formatPrice(total)}</span></div>
          <div className="summary-line"><span>GST (18%)</span><span>{formatPrice(tax)}</span></div>
          <div className="summary-line"><span>Shipping</span><span className="free">FREE</span></div>
          <div className="summary-divider" />
          <div className="summary-line total-line">
            <span>Total</span>
            <span>{formatPrice(grandTotal)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;