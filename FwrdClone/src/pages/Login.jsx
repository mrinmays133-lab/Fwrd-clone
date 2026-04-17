import React, { useState } from 'react';
import './login.css';

const AuthPage = () => {
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(true);
  const [loginFeedback, setLoginFeedback] = useState('');

  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [registerConfirm, setRegisterConfirm] = useState('');
  const [subscribeUpdates, setSubscribeUpdates] = useState(true);
  const [gender, setGender] = useState('both');
  const [registerFeedback, setRegisterFeedback] = useState('');

  const handleLoginSubmit = (event) => {
    event.preventDefault();
    if (!loginEmail.trim() || !loginPassword.trim()) {
      setLoginFeedback('Please enter your email and password.');
      return;
    }
    setLoginFeedback('Welcome back! Signing you in...');
    setTimeout(() => setLoginFeedback('Signed in successfully.'), 600);
  };

  const handleRegisterSubmit = (event) => {
    event.preventDefault();
    if (!registerEmail.trim() || !registerPassword.trim() || !registerConfirm.trim()) {
      setRegisterFeedback('Please complete all registration fields.');
      return;
    }
    if (registerPassword !== registerConfirm) {
      setRegisterFeedback('Passwords do not match.');
      return;
    }
    setRegisterFeedback('Your account has been created successfully.');
    setTimeout(() => {
      setRegisterEmail('');
      setRegisterPassword('');
      setRegisterConfirm('');
    }, 400);
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        <header className="auth-header">
          <div>
            <h1 className="logo">LUXION</h1>
            <p className="auth-tagline">Luxury made effortless. Sign in or join to save your favorites.</p>
          </div>
          <div className="assistance-text">
            Need assistance? <span>(866) 434-3169</span> | <a href="#">Live Chat</a>
          </div>
        </header>

        <main className="auth-main">
          <section className="auth-panel">
            <div className="panel-heading">
              <h2>Sign In</h2>
              <p className="sub-text">Access your saved cart, order history, and exclusive offers.</p>
            </div>

            <form className="auth-form" onSubmit={handleLoginSubmit} noValidate>
              <input
                type="email"
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
                placeholder="Email address"
                className="form-input"
                aria-label="Email address"
              />
              <input
                type="password"
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
                placeholder="Password"
                className="form-input"
                aria-label="Password"
              />

              <div className="options-row">
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                  />
                  <span>Remember me</span>
                </label>
                <a href="#">Forgot password?</a>
              </div>

              {loginFeedback && <p className="auth-feedback">{loginFeedback}</p>}

              <button type="submit" className="auth-button">
                Sign In
              </button>
            </form>
          </section>

          <section className="auth-panel auth-panel--secondary">
            <div className="panel-heading">
              <h2>Create An Account</h2>
              <p className="sub-text">Create an account to enjoy faster checkout and order tracking.</p>
            </div>

            <ul className="feature-list">
              <li>Checkout faster</li>
              <li>Track your orders</li>
              <li>Save favorites</li>
            </ul>

            <form className="auth-form" onSubmit={handleRegisterSubmit} noValidate>
              <input
                type="email"
                value={registerEmail}
                onChange={(e) => setRegisterEmail(e.target.value)}
                placeholder="Email address"
                className="form-input"
                aria-label="Email address"
              />
              <input
                type="password"
                value={registerPassword}
                onChange={(e) => setRegisterPassword(e.target.value)}
                placeholder="Create a password"
                className="form-input"
                aria-label="Create a password"
              />
              <input
                type="password"
                value={registerConfirm}
                onChange={(e) => setRegisterConfirm(e.target.value)}
                placeholder="Verify your password"
                className="form-input"
                aria-label="Verify your password"
              />

              <label className="checkbox-label checkbox-label--multiline">
                <input
                  type="checkbox"
                  checked={subscribeUpdates}
                  onChange={(e) => setSubscribeUpdates(e.target.checked)}
                />
                <span>
                  Receive updates on new arrivals, sales, and promotions. Opt out any time. <a href="#">Privacy Policy</a>
                </span>
              </label>

              <div className="gender-selection">
                <label>
                  <input
                    type="radio"
                    name="gender"
                    value="women"
                    checked={gender === 'women'}
                    onChange={(e) => setGender(e.target.value)}
                  />
                  <span>Women</span>
                </label>
                <label>
                  <input
                    type="radio"
                    name="gender"
                    value="men"
                    checked={gender === 'men'}
                    onChange={(e) => setGender(e.target.value)}
                  />
                  <span>Men</span>
                </label>
                <label>
                  <input
                    type="radio"
                    name="gender"
                    value="both"
                    checked={gender === 'both'}
                    onChange={(e) => setGender(e.target.value)}
                  />
                  <span>Both</span>
                </label>
              </div>

              {registerFeedback && <p className="auth-feedback">{registerFeedback}</p>}

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
