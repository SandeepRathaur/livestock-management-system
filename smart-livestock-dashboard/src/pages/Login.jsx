// Import React hooks
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const [error, setError] = useState("");

  // ✅ UPDATED LOGIN FUNCTION (BACKEND)
  const submit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("https://livestock-backend-8osq.onrender.com/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password })
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Login failed");
        return;
      }

      // ✅ SAVE TOKEN + USER
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", data.name);
      localStorage.setItem("auth", "true");

      navigate("/farmer-dashboard");

    } catch (err) {
      setError("Server error");
    }
  };

  return (
    <div className="auth-bg">

      <form className="auth-card" onSubmit={submit} style={{ background: "none" }}>

        <h2
          className="welcome-title"
          style={{ fontSize: "30px", fontWeight: "lighter", textAlign: "center" }}
        >
          Welcome to
        </h2>

        <h2
          className="cattlecloud-title"
          style={{ fontSize: "40px", textAlign: "center" }}
        >
          CattleCloud
        </h2>

        {/* Changed only for responsive styling */}
        <div className="login-form-container">

          <div style={{ fontWeight: "bold", color: "aquamarine" }}>
            Email:-
          </div>

          <input
            className="auth-input"
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ display: "block", fontSize: "15px", marginBottom: "10px" }}
          />

          {error && (
            <p style={{ color: "red", fontSize: "14px" }}>
              {error}
            </p>
          )}

          <div style={{ fontWeight: "bold", color: "aquamarine" }}>
            Password:-
          </div>

          <div className="password-container" style={{ position: "relative" }}>

            <input
              className="auth-input password-input"
              type={show ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{
                display: "block",
                fontSize: "15px",
                paddingRight: "40px"
              }}
            />

            <button
              type="button"
              onClick={() => setShow(!show)}
              className="show-password-btn"
              style={{
                position: "absolute",
                right: "5px",
                top: "50%",
                transform: "translateY(-50%)",
                background: "none",
                border: "none",
                cursor: "pointer"
              }}
            >
              {show ? "🙈" : "👁️"}
            </button>

          </div>
        </div>

        <button
          type="submit"
          className="login-button"
          style={{
            color: "white",
            backgroundColor: "aqua",
            padding: "10px",
            fontSize: "20px",
            textAlign: "center",
            borderRadius: "25px",
            margin: "10px"
          }}
        >
          Login
        </button>

        <div style={{ color: "white", marginTop: "10px", textAlign: "center" }}>
          if you forgot your password?
          <Link to="/forgot-password" style={{ color: "aquamarine" }}>
            Forgot Password
          </Link>
        </div>

        <div style={{ color: "white", marginTop: "10px", textAlign: "center" }}>
          Don't have an account?
          <Link to="/register" style={{ color: "aquamarine" }}>
            Register
          </Link>
        </div>

      </form>
    </div>
  );
}