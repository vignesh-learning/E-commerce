import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./sample.css";

function Login() {
  const navigate = useNavigate();
  const { VITE_BACKEND_URL } = import.meta.env;

  const [isActive, setIsActive] = useState(false);

  const [loginError, setLoginError] = useState("");
  const [loginSuccess, setLoginSuccess] = useState("");
  const [signupError, setSignupError] = useState("");
  const [signupSuccess, setSignupSuccess] = useState("");

  const [loginLoading, setLoginLoading] = useState(false);
  const [signupLoading, setSignupLoading] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const [name, setName] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoginError("");
    setLoginSuccess("");

    if (!email || !password) {
      return setLoginError("Please fill all fields");
    }

    try {
      setLoginLoading(true);
      const res = await axios.post(`${VITE_BACKEND_URL}/login`, { email, password });

      if (res.data.token) {
        if (rememberMe) {
          localStorage.setItem("token", res.data.token);
        } else {
          sessionStorage.setItem("token", res.data.token);
        }
        setLoginSuccess("Login successful! Redirecting...");
        setTimeout(() => navigate("/Home"), 1500);
      } else {
        setLoginError(res.data.message || "Invalid email or password");
      }
    } catch (err) {
      setLoginError(err.response?.data?.message || "Server error");
    } finally {
      setLoginLoading(false);
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    setSignupError("");
    setSignupSuccess("");

    if (!name || !signupEmail || !signupPassword || !confirmPassword) {
      return setSignupError("Please fill all fields");
    }

    if (signupPassword.length < 6) {
      return setSignupError("Password must be at least 6 characters");
    }

    if (signupPassword !== confirmPassword) {
      return setSignupError("Passwords do not match");
    }

    try {
      setSignupLoading(true);
      const res = await axios.post(`${VITE_BACKEND_URL}/signup`, {
        name,
        email: signupEmail,
        password: signupPassword,
      });

      if (res.data.success) {
        setSignupSuccess("Account created successfully! Please login.");
        setIsActive(false);
      } else {
        setSignupError(res.data.message || "Signup failed");
      }
    } catch (err) {
      setSignupError(err.response?.data?.message || "Signup failed");
    } finally {
      setSignupLoading(false);
    }
  };

  return (
    <div className="login-page">
      <div className="auth-body">
        <div className={`auth-container ${isActive ? "active" : ""}`}>
          <div className="form-box login">
            <div className="logo">🛒</div>
            <h2>Welcome Back</h2>
            <p>Login to continue shopping</p>

            {loginError && <div className="error-msg">{loginError}</div>}
            {loginSuccess && <div className="success-msg">{loginSuccess}</div>}

            <form onSubmit={handleLogin}>
              <div className="input-group">
                <input
                  type="email"
                  placeholder=" "
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label>Email</label>
              </div>

              <div className="input-group">
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder=" "
                />
                <label>Password</label>
              </div>

              <div className="extra-options">
                <label>
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={() => setRememberMe(!rememberMe)}
                  />
                  Remember me
                </label>
                <span className="forgot">Forgot Password?</span>
              </div>

              <button type="submit" disabled={loginLoading}>
                {loginLoading ? "Logging in..." : "Login"}
              </button>

              <span
                className="show-pass"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "Hide Password" : "Show Password"}
              </span>
            </form>
          </div>

          <div className="form-box signup">
            <div className="logo">🛍️</div>
            <h2>Create Account</h2>
            <p>Join and start shopping</p>

            {signupError && <div className="error-msg">{signupError}</div>}
            {signupSuccess && <div className="success-msg">{signupSuccess}</div>}

            <form onSubmit={handleSignup}>
              <div className="input-group">
                <input
                  type="text"
                  required
                  placeholder=" "
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <label>Full Name</label>
              </div>

              <div className="input-group">
                <input
                  type="email"
                  placeholder=" "
                  required
                  value={signupEmail}
                  onChange={(e) => setSignupEmail(e.target.value)}
                />
                <label>Email</label>
              </div>

              <div className="input-group">
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  placeholder=" "
                  value={signupPassword}
                  onChange={(e) => setSignupPassword(e.target.value)}
                />
                <label>Password</label>
              </div>

              <div className="input-group">
                <input
                  type="password"
                  placeholder=" "
                  required
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <label>Confirm Password</label>
              </div>

              <button type="submit" disabled={signupLoading}>
                {signupLoading ? "Signing up..." : "Sign Up"}
              </button>
            </form>
          </div>

          <div className="overlay">
            {!isActive ? (
              <div>
                <h2>New Here?</h2>
                <p>Sign up and explore amazing deals</p>
                <button onClick={() => setIsActive(true)}>Sign Up</button>
              </div>
            ) : (
              <div>
                <h2>Welcome Back!</h2>
                <p>Already have an account? Login here</p>
                <button onClick={() => setIsActive(false)}>Login</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
