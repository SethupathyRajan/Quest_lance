import React, { useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { AuthContext } from "./contexts/AuthContext";
import "./SellerLogin.css";

const SellerLogin = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const { login } = useContext(AuthContext);
  const navigate = useNavigate(); // Initialize navigate

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await axios.post("http://localhost:5000/slogin", formData);
      console.log("Backend response:", res.data); // Debug log

      if (res.data.message === 'Login successful!') {
        login(); // Update the context to mark the user as logged in
        console.log("Login successful, navigating to add-service page..."); // Debug log
        navigate("/add-service"); // Redirect to AddService page
      } else {
        setError("Invalid credentials");
      }
    } catch (err) {
      console.error("An error occurred:", err); // Debug log
      setError("An error occurred.");
    }
  };

  return (
    <div className="seller-login-container">
      <div className="seller-login-form">
        <h2>Seller Login</h2>
        {error && <div className="seller-text-danger">{error}</div>}
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            required
          />
          <input
            type="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            required
          />
          <button type="submit" className="seller-login-btn">
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default SellerLogin;
