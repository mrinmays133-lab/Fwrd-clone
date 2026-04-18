import { useState } from "react";
import "./Login.css";
import { signInWithPopup } from "firebase/authz";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile
} from "firebase/auth";
import { auth, provider } from "./firebase";
import { useNavigate } from "react-router-dom";

const GoogleIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18">
    <path fill="#4285F4" d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844a4.14 4.14 0 0 1-1.796 2.716v2.258h2.908c1.702-1.567 2.684-3.875 2.684-6.615z"/>
    <path fill="#34A853" d="M9 18c2.43 0 4.467-.806 5.956-2.184l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 0 0 9 18z"/>
    <path fill="#FBBC05" d="M3.964 10.706A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.282-1.706V4.962H.957A8.997 8.997 0 0 0 0 9c0 1.452.348 2.827.957 4.038l3.007-2.332z"/>
    <path fill="#EA4335" d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 0 0 .957 4.962L3.964 7.294C4.672 5.167 6.656 3.58 9 3.58z"/>
  </svg>
);

const Auth = () => {
  const [mode, setMode] = useState(null);
  const navigate = useNavigate();

  // 🔥 FORM STATE
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (mode === "login") {
        // LOGIN
        const userCredential = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );

        console.log("Logged in:", userCredential.user);
        navigate("/");
      } else {
        // SIGNUP
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );

        await updateProfile(userCredential.user, {
          displayName: `${firstName} ${lastName}`
        });

        console.log("Signed up:", userCredential.user);
        navigate("/");
      }
    } catch (error) {
      console.error(error.message);
      alert(error.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      console.log("User:", result.user);
      navigate("/");
    } catch (error) {
      console.error(error);
      alert("Google login failed");
    }
  };

  if (mode === null) {
    return (
      <div className="auth-page">
        <main className="auth-choice">
          <h2 className="auth-choice-title">Welcome</h2>
          <p className="auth-choice-sub">Sign in or create an account to continue.</p>
          <div className="auth-choice-buttons">
            <button className="btn btn-primary" onClick={() => setMode("login")}>
              Login
            </button>
            <button className="btn btn-outline" onClick={() => setMode("signup")}>
              Sign Up
            </button>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="auth-page">
      <main className="auth-form-wrap">
        <button className="auth-back" onClick={() => setMode(null)}>
          ← Back
        </button>

        <div className="auth-card">
          <h2 className="auth-form-title">
            {mode === "login" ? "Login" : "Create Account"}
          </h2>

          <p className="auth-form-sub">
            {mode === "login"
              ? "Enter your details to access your account."
              : "Join Luxion. It only takes a moment."}
          </p>

          <form onSubmit={handleSubmit} className="auth-form">
            {mode === "signup" && (
              <div className="auth-row">
                <div className="auth-field">
                  <label>First Name</label>
                  <input
                    type="text"
                    placeholder="Jane"
                    required
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
                <div className="auth-field">
                  <label>Last Name</label>
                  <input
                    type="text"
                    placeholder="Doe"
                    required
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
              </div>
            )}

            <div className="auth-field">
              <label>Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="auth-field">
              <label>Password</label>
              <input
                type="password"
                placeholder="••••••••"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button type="submit" className="btn btn-primary btn-block">
              {mode === "login" ? "Login" : "Sign Up"}
            </button>
          </form>

          <div className="auth-divider">
            <span>or</span>
          </div>

          <button
            type="button"
            className="btn btn-google btn-block"
            onClick={handleGoogleLogin}
          >
            <GoogleIcon />
            <span>{mode === "login" ? "Login with Google" : "Sign up with Google"}</span>
          </button>

          <p className="auth-switch">
            {mode === "login" ? (
              <>
                Don't have an account?{" "}
                <button type="button" className="auth-link" onClick={() => setMode("signup")}>
                  Sign Up
                </button>
              </>
            ) : (
              <>
                Already have an account?{" "}
                <button type="button" className="auth-link" onClick={() => setMode("login")}>
                  Login
                </button>
              </>
            )}
          </p>
        </div>
      </main>
    </div>
  );
};

export default Auth;