import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./sample.css";

function Login() {
  const navigate = useNavigate();
  const { VITE_BACKEND_URL } = import.meta.env;

  const [isActive, setIsActive] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);


  const [name, setName] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // ---------------- LOGIN ----------------
  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!email || !password) {
      return setError("Please fill all fields");
    }

    try {
      setLoading(true);

      const res = await axios.post(`${VITE_BACKEND_URL}/login`, {
        email,
        password,
      });

      if (res.data.token) {
        if (rememberMe) {
          localStorage.setItem("token", res.data.token);
        } else {
          sessionStorage.setItem("token", res.data.token);
        }

        setSuccess("Login successful! Redirecting...");
        setTimeout(() => navigate("/Home"), 1500);
      } else {
        setError(res.data.message || "Invalid email or password");
      }
    } catch (err) {
      setError(err.response?.data?.message || "Server error");
    } finally {
      setLoading(false);
    }
  };

  // ---------------- SIGNUP ----------------
  const handleSignup = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!name || !signupEmail || !signupPassword || !confirmPassword) {
      return setError("Please fill all fields");
    }

    if (signupPassword.length < 6) {
      return setError("Password must be at least 6 characters");
    }

    if (signupPassword !== confirmPassword) {
      return setError("Passwords do not match");
    }

    try {
      setLoading(true);

      const res = await axios.post(`${VITE_BACKEND_URL}/signup`, {
        name,
        email: signupEmail,
        password: signupPassword,
      });

      if (res.data === "Success" || res.data.success) {
        setSuccess("Account created successfully! Please login.");
        setIsActive(false);
      } else {
        setError(res.data.message || "Signup failed");
      }
    } catch (err) {
      setError(err.response?.data?.message || "Signup failed");
    } finally {
      setLoading(false);
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

            {error && <div className="error-msg">{error}</div>}
            {success && <div className="success-msg">{success}</div>}

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

                  <button type="submit" disabled={loading}>
                    {loading ? "Logging in..." : "Login"}
                  </button>

                  <span
                    className="show-pass"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? "Hide Password" : "Show Password"}
                  </span>
                </form>
          </div>

          {/* ---------- SIGNUP ---------- */}
          <div className="form-box signup">
            <div className="logo">🛍️</div>
            <h2>Create Account</h2>
            <p>Join and start shopping</p>

            {error && <div className="error-msg">{error}</div>}
            {success && <div className="success-msg">{success}</div>}

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

              <button type="submit">Sign Up</button>
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
