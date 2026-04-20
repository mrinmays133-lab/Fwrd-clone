import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import "./Checkout.css";

const Checkout = () => {
  const { cart, total } = useContext(CartContext);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
  });

  const [errors, setErrors] = useState({});

  const formatPrice = (price) =>
    `₹${price.toLocaleString("en-IN", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })}`;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const newErrors = {};
    if (!form.firstName.trim()) newErrors.firstName = "First name is required";
    if (!form.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email))
      newErrors.email = "Valid email is required";
    if (!form.phone.trim() || !/^\d{10}$/.test(form.phone))
      newErrors.phone = "Valid 10-digit phone number required";
    if (!form.address.trim()) newErrors.address = "Address is required";
    if (!form.city.trim()) newErrors.city = "City is required";
    if (!form.state.trim()) newErrors.state = "State is required";
    if (!form.pincode.trim() || !/^\d{6}$/.test(form.pincode))
      newErrors.pincode = "Valid 6-digit pincode required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    // Pass shipping info to payment page via state
    navigate("/payment", { state: { shippingInfo: form } });
  };

  const shipping = 0;
  const tax = Math.round(total * 0.18);
  const grandTotal = total + tax + shipping;

  if (cart.length === 0) {
    return (
      <div className="checkout-empty">
        <h2>Your cart is empty</h2>
        <button onClick={() => navigate("/shop")}>Continue Shopping</button>
      </div>
    );
  }

  return (
    <div className="checkout-page">
      {/* PROGRESS BAR */}
      <div className="checkout-progress">
        <div className="progress-step active">
          <span className="step-num">1</span>
          <span className="step-label">Shipping</span>
        </div>
        <div className="progress-line"></div>
        <div className="progress-step">
          <span className="step-num">2</span>
          <span className="step-label">Payment</span>
        </div>
        <div className="progress-line"></div>
        <div className="progress-step">
          <span className="step-num">3</span>
          <span className="step-label">Confirmation</span>
        </div>
      </div>

      <div className="checkout-layout">
        {/* LEFT — FORM */}
        <div className="checkout-form-section">
          <h2 className="section-title">Shipping Information</h2>

          <form onSubmit={handleSubmit} noValidate>
            <div className="form-row">
              <div className="form-group">
                <label>First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={form.firstName}
                  onChange={handleChange}
                  placeholder="Rahul"
                  className={errors.firstName ? "input-error" : ""}
                />
                {errors.firstName && <span className="error-msg">{errors.firstName}</span>}
              </div>
              <div className="form-group">
                <label>Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={form.lastName}
                  onChange={handleChange}
                  placeholder="Sharma"
                  className={errors.lastName ? "input-error" : ""}
                />
                {errors.lastName && <span className="error-msg">{errors.lastName}</span>}
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="rahul@example.com"
                  className={errors.email ? "input-error" : ""}
                />
                {errors.email && <span className="error-msg">{errors.email}</span>}
              </div>
              <div className="form-group">
                <label>Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="9876543210"
                  maxLength={10}
                  className={errors.phone ? "input-error" : ""}
                />
                {errors.phone && <span className="error-msg">{errors.phone}</span>}
              </div>
            </div>

            <div className="form-group full-width">
              <label>Street Address</label>
              <input
                type="text"
                name="address"
                value={form.address}
                onChange={handleChange}
                placeholder="Flat 12B, Sunshine Apartments, MG Road"
                className={errors.address ? "input-error" : ""}
              />
              {errors.address && <span className="error-msg">{errors.address}</span>}
            </div>

            <div className="form-row three-col">
              <div className="form-group">
                <label>City</label>
                <input
                  type="text"
                  name="city"
                  value={form.city}
                  onChange={handleChange}
                  placeholder="Mumbai"
                  className={errors.city ? "input-error" : ""}
                />
                {errors.city && <span className="error-msg">{errors.city}</span>}
              </div>
              <div className="form-group">
                <label>State</label>
                <select
                  name="state"
                  value={form.state}
                  onChange={handleChange}
                  className={errors.state ? "input-error" : ""}
                >
                  <option value="">Select State</option>
                  {[
                    "Andhra Pradesh","Arunachal Pradesh","Assam","Bihar","Chhattisgarh",
                    "Delhi","Goa","Gujarat","Haryana","Himachal Pradesh","Jharkhand",
                    "Karnataka","Kerala","Madhya Pradesh","Maharashtra","Manipur",
                    "Meghalaya","Mizoram","Nagaland","Odisha","Punjab","Rajasthan",
                    "Sikkim","Tamil Nadu","Telangana","Tripura","Uttar Pradesh",
                    "Uttarakhand","West Bengal",
                  ].map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
                {errors.state && <span className="error-msg">{errors.state}</span>}
              </div>
              <div className="form-group">
                <label>Pincode</label>
                <input
                  type="text"
                  name="pincode"
                  value={form.pincode}
                  onChange={handleChange}
                  placeholder="400001"
                  maxLength={6}
                  className={errors.pincode ? "input-error" : ""}
                />
                {errors.pincode && <span className="error-msg">{errors.pincode}</span>}
              </div>
            </div>

            <button type="submit" className="proceed-btn">
              CONTINUE TO PAYMENT →
            </button>
          </form>
        </div>

        {/* RIGHT — ORDER SUMMARY */}
        <div className="checkout-summary">
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
                  {item.selectedSize && <p className="summary-item-meta">Size: {item.selectedSize}</p>}
                  {item.selectedColor && <p className="summary-item-meta">Color: {item.selectedColor}</p>}
                </div>
                <p className="summary-item-price">{formatPrice(item.price * item.quantity)}</p>
              </div>
            ))}
          </div>

          <div className="summary-divider" />

          <div className="summary-line">
            <span>Subtotal</span>
            <span>{formatPrice(total)}</span>
          </div>
          <div className="summary-line">
            <span>GST (18%)</span>
            <span>{formatPrice(tax)}</span>
          </div>
          <div className="summary-line">
            <span>Shipping</span>
            <span className="free-ship">FREE</span>
          </div>

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

export default Checkout;