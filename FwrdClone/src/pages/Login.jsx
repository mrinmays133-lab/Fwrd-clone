import React from 'react';
import './login.css';

const AuthPage = () => {
  return (
    <div className="auth-page">
      <div className="auth-container">
        <header className="auth-header">
          <h1 className="logo">LUXION</h1>
          <div className="assistance-text">
            Need assistance? <span>(866) 434-3169</span> | <a href="#">Live Chat</a>
          </div>
        </header>

        <main className="auth-main">
          <section className="auth-panel">
            <h2>Sign In To My Account</h2>
            <p className="sub-text">Access your saved cart, order history, and exclusive offers.</p>
            <form className="auth-form">
              <input type="email" placeholder="Email address" className="form-input" />
              <input type="password" placeholder="Password" className="form-input" />

              <div className="options-row">
                <label className="checkbox-label">
                  <input type="checkbox" defaultChecked />
                  <span>Remember me</span>
                </label>
                <a href="#">Forgot your password?</a>
              </div>

              <button type="submit" className="auth-button">
                Sign In
              </button>
            </form>
          </section>

          <section className="auth-panel auth-panel--secondary">
            <h2>Create An Account</h2>
            <p className="sub-text">Create an account to enjoy faster checkout and order tracking.</p>
            <ul className="feature-list">
              <li>Checkout faster</li>
              <li>Track your orders</li>
              <li>Save favorites</li>
            </ul>

            <form className="auth-form">
              <input type="email" placeholder="Email address" className="form-input" />
              <input type="password" placeholder="Create a password" className="form-input" />
              <input type="password" placeholder="Verify your password" className="form-input" />

              <label className="checkbox-label checkbox-label--multiline">
                <input type="checkbox" defaultChecked />
                <span>
                  Receive updates on new arrivals, sales, and promotions. Opt out any time. <a href="#">Privacy Policy</a>
                </span>
              </label>

              <div className="gender-selection">
                <label>
                  <input type="radio" name="gender" />
                  <span>Women</span>
                </label>
                <label>
                  <input type="radio" name="gender" />
                  <span>Men</span>
                </label>
                <label>
                  <input type="radio" name="gender" defaultChecked />
                  <span>Both</span>
                </label>
              </div>

              <button type="submit" className="auth-button auth-button--secondary">
                Agree and Continue
              </button>
            </form>
          </section>
        </main>

        <footer className="auth-footer">
          By signing in or clicking “Agree and Continue”, you agree to our
          <a href="#"> Terms of Service</a> and <a href="#">Privacy Policy</a>.
        </footer>
      </div>
    </div>
  );
};

export default AuthPage;
