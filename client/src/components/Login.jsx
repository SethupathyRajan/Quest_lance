import axios from 'axios';
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { AuthContext } from '../contexts/AuthContext';
import '../styles/Signup.css'; // Styles matching your requirements

function Login() {
  const { login } = useContext(AuthContext); // Access the login function from AuthContext
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState('');

  const navigate = useNavigate();

  const handleLoginChange = (e) => {
    setLoginData({ ...loginData, [e.target.id]: e.target.value });
    setErrors({});
    setSuccess('');
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/login', loginData);
      setSuccess(response.data.message);
      login(); // Update global login state
      navigate('/'); // Redirect to the main page
    } catch (error) {
      setErrors({ error: error.response?.data?.error || 'Invalid email or password!' });
    }
  };

  return (
    <div className="auth-container">
      {/* Optional Logo Section */}
      <div className="logo-container text-center mb-4">
        <img src="../assets/logo.png" alt="Logo" className="logo-img" />
      </div>
      <div className="auth-form">
        <h2 className="fw-bold mb-4 text-center">Log In</h2>
        <form onSubmit={handleLoginSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="form-label">Email Address</label>
            <input
              type="email"
              id="email"
              className="form-control"
              value={loginData.email}
              onChange={handleLoginChange}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              id="password"
              className="form-control"
              value={loginData.password}
              onChange={handleLoginChange}
              required
            />
          </div>
          {errors.error && <p className="text-danger mb-3">{errors.error}</p>}
          {success && <p className="text-success mb-3">{success}</p>}
          <button type="submit" className="btn btn-primary w-100">Log In</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
