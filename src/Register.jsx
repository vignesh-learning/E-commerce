import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./sample.css";

function Register() {
  const navigate = useNavigate();
  const { VITE_BACKEND_URL } = import.meta.env;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(`${VITE_BACKEND_URL}/login`, {
        email,
        password,
      });

      if (res.data === "Success") {
        navigate("/Home");
      } else {
        alert("Invalid email or password");
      }
    } catch {
      alert("Server error");
    }
  };

  return (
    <div className="login-page">
      <div className="auth-body">
        <div className="auth-container">

          {/* LOGIN FORM */}
          <div className="form-box login" style={{ width: "50%" }}>
            <div className="logo">🛒</div>
            <h2>Welcome Back</h2>
            <p>Login to continue shopping</p>

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
                  type="password"
                  placeholder=" "
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <label>Password</label>
              </div>

              <button type="submit">Login</button>
            </form>
          </div>

          {/* OVERLAY */}
          <div className="overlay">
            <div>
              <h2>New Here?</h2>
              <p>Sign up and explore amazing deals</p>
              <button onClick={() => navigate("/Login")}>
                Sign Up
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Register;
