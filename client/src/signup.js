import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import './Login.css'; // Updated styles for login/signup

function Signup() {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', password: '', confirmPassword: '' });
  const [message, setMessage] = useState({ type: '', text: '' }); // Unified message state
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
    setMessage({ type: '', text: '' }); // Clear messages on input
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent form reload
    const { name, phone, email, password, confirmPassword } = formData;
  
    if (password !== confirmPassword) {
      setMessage({ type: 'error', text: 'Passwords do not match.' });
      return;
    }
  
    try {
      // Send all fields to the backend
      const response = await axios.post('http://localhost:5000/signup', {
        name,
        phone,
        email,
        password,
        confirmPassword, // Ensure this is included
      });
  
      setMessage({ type: 'success', text: response.data.message });
      setTimeout(() => navigate('/login'), 2000); // Redirect to login
    } catch (error) {
      setMessage({ type: 'error', text: error.response?.data?.error || 'Registration failed.' });
    }
  };
  

  return (
    <div className="auth-container">
      <form onSubmit={handleSubmit} className="auth-form">
        <h2 className="text-center">Sign Up</h2>
        
        <div>
          <label htmlFor="name" className="form-label">Full Name</label>
          <input
            type="text"
            id="name"
            className="form-control"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="phone" className="form-label">Phone Number</label>
          <input
            type="tel"
            id="phone"
            className="form-control"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="form-label">Email Address</label>
          <input
            type="email"
            id="email"
            className="form-control"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="password" className="form-label">Password</label>
          <input
            type="password"
            id="password"
            className="form-control"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            className="form-control"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>

        {/* Conditional Message Rendering */}
        {message.text && (
          <div className={`message-container ${message.type}`}>
            <span className="message-text">{message.text}</span>
          </div>
        )}

        <button type="submit" className="btn btn-primary">Sign Up</button>
      </form>
    </div>
  );
}

export default Signup;
