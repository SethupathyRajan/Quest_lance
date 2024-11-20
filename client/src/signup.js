import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import logo from './assets/logo.png';
import './styles/Signup.css'; // Import the CSS file

function Signup() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirm_password: '',
    business_name: '',
    phone: '',
    category: '',
    description: '',
  });

  const [currentStep, setCurrentStep] = useState(1);
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState('');
  const [fadeClass, setFadeClass] = useState('fade-in'); // Start with fade-in

  useEffect(() => {
    // Ensure the form is visible with fade-in effect on mount
    setFadeClass('fade-in');
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
    setErrors({});
    setSuccess('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/signup', formData);
      setSuccess(response.data.message);
      setFormData({
        name: '',
        email: '',
        password: '',
        confirm_password: '',
        business_name: '',
        phone: '',
        category: '',
        description: '',
      });
      setCurrentStep(1);
    } catch (error) {
      setErrors({ error: error.response?.data?.error || 'Something went wrong!' });
    }
  };

  const handleNext = () => {
    setFadeClass('fade-out');
    setTimeout(() => {
      setCurrentStep((prev) => prev + 1);
      setFadeClass('fade-in');
    }, 300); // Match duration with the CSS transition
  };

  const handleBack = () => {
    setFadeClass('fade-out');
    setTimeout(() => {
      setCurrentStep((prev) => prev - 1);
      setFadeClass('fade-in');
    }, 300); // Match duration with the CSS transition
  };

  return (
    <div className='sign'>
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="signup-container">
          <div className="text-center mb-4">
            <div>
              <img src={logo} style={{ height: '80px', width: '80px', backgroundColor: '#ddd', borderRadius: '50%', margin: '0 auto' }} />
            </div>
            <h3 className="fw-bold mt-3">Signup</h3>
          </div>
          <form onSubmit={handleSubmit}>
            <div className={`form-step ${fadeClass}`}>
              {currentStep === 1 && (
                <>
                  <div className="mb-4">
                    <label htmlFor="name" className="form-label">Full Name</label>
                    <input type="text" id="name" className="form-control" value={formData.name} onChange={handleChange} required />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="email" className="form-label">Email Address</label>
                    <input type="email" id="email" className="form-control" value={formData.email} onChange={handleChange} required />
                  </div>
                </>
              )}

              {currentStep === 2 && (
                <>
                  <div className="mb-4">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" id="password" className="form-control" value={formData.password} onChange={handleChange} required />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="confirm_password" className="form-label">Confirm Password</label>
                    <input type="password" id="confirm_password" className="form-control" value={formData.confirm_password} onChange={handleChange} required />
                  </div>
                </>
              )}

              {currentStep === 3 && (
                <>
                  <div className="mb-4">
                    <label htmlFor="business_name" className="form-label">Business Name</label>
                    <input type="text" id="business_name" className="form-control" value={formData.business_name} onChange={handleChange} required />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="phone" className="form-label">Phone Number</label>
                    <input type="text" id="phone" className="form-control" value={formData.phone} onChange={handleChange} required />
                  </div>
                </>
              )}

              {currentStep === 4 && (
                <>
                  <div className="mb-4">
                    <label htmlFor="category" className="form-label">Category</label>
                    <input type="text" id="category" className="form-control" value={formData.category} onChange={handleChange} required />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="description" className="form-label">Business Description</label>
                    <textarea id="description" className="form-control" rows="3" value={formData.description} onChange={handleChange} required></textarea>
                  </div>
                </>
              )}
            </div>

            {errors.error && <p className="text-danger mb-3">{errors.error}</p>}
            {success && <p className="text-success mb-3">{success}</p>}

            <div className="d-flex justify-content-between">
              {currentStep > 1 && (
                <button type="button" className="btn btn-secondary" onClick={handleBack}>Back</button>
              )}
              {currentStep < 4 ? (
                <button type="button" className="btn btn-primary" onClick={handleNext}>Next</button>
              ) : (
                <button type="submit" className="btn btn-success">Register</button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;