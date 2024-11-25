import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import CustomizedBreadcrumbs from './components/Breadcrumb.jsx';
import './Login.css';

const Login = () => {
  const navigate = useNavigate();

  const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

  // Signup State
  const [user, setUser] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    cpassword: '',
  });

  // Login State
  const [logemail, setlogEmail] = useState('');
  const [logpass, setlogPass] = useState('');

  // Handle input changes for signup
  const handleInputs = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  // Signup Handler
  const PostData = async (e) => {
    e.preventDefault();

    // Validate form input before submitting
    if (!ValidateForm()) return;

    try {
      const { name, email, phone, password, cpassword } = user;
      const res = await axios.post(`${BACKEND_URL}/sign-up`, {
        name,
        email,
        phone,
        password,
        cpassword,
      });

      if (res.status === 422 || !res.data) {
        toast.error('Invalid Registration', {
          position: 'bottom-right',
          theme: 'colored',
        });
      } else {
        toast.success('Registration Successful', {
          position: 'bottom-right',
          theme: 'colored',
        });
        setTimeout(() => {
          window.location.reload();
        }, 2500);
      }
    } catch (error) {
      console.error('Error during registration:', error);
      toast.error('Something went wrong. Please try again.', {
        position: 'bottom-right',
        theme: 'colored',
      });
    }
  };

  // Login Handler
  const loginUser = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(`${BACKEND_URL}/login`, {
        email: logemail,
        password: logpass,
      });

      if (res.status === 400 || !res.data) {
        toast.error('Invalid Credentials', {
          position: 'bottom-right',
          theme: 'colored',
        });
      } else {
        toast.success('Login Successful', {
          position: 'bottom-right',
          theme: 'colored',
        });
        setTimeout(() => navigate('/FindJobs'), 2000);
      }
    } catch (error) {
      console.error('Error during login:', error);
      toast.error('Something went wrong. Please try again.', {
        position: 'bottom-right',
        theme: 'colored',
      });
    }
  };

  // Validate Form
  const ValidateForm = () => {
    const { name, email, phone, password, cpassword } = user;
    const regemail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/g;
    const regphone = /^\d{10}$/;

    if (!name) {
      alert('Please enter your full name.');
      return false;
    }
    if (!email || !regemail.test(email)) {
      alert('Please enter a valid email address.');
      return false;
    }
    if (!phone || !regphone.test(phone)) {
      alert('Please enter a valid phone number.');
      return false;
    }
    if (!password || password.length < 8) {
      alert('Password must be at least 8 characters long.');
      return false;
    }
    if (!cpassword || cpassword !== password) {
      alert('Passwords do not match.');
      return false;
    }
    return true;
  };

  // Toggle Between Login and Signup
  const toggleForm = (toLogin) => {
    const checkBox = document.getElementById('reg-log');
    checkBox.checked = !toLogin;
  };

  return (
    <>
      <div className="sign">
        <CustomizedBreadcrumbs />
        <div className="signup-container">
          <div className="row full-height justify-content-center">
            <div className="Glass">
              <div className="py-5 text-center col-12 align-self-center">
                <div className="pt-5 pb-5 text-center section">
                  <h6 id="H6" className="pb-3 mb-0">
                    <span id="l" onClick={() => toggleForm(true)}>Log In</span>
                    <span id="r" onClick={() => toggleForm(false)}>Sign Up</span>
                  </h6>
                  <input type="checkbox" id="reg-log" className="checkbox" />

                  <div className="mx-auto card-3d-wrap">
                    <div className="card-3d-wrapper">
                      {/* Login Form */}
                      <div className="card-front">
                        <div className="center-wrap">
                          <form method="POST" onSubmit={loginUser}>
                            <h4 id="H4" className="pb-3 mb-4">Log In</h4>
                            <div className="form-group">
                              <input
                                type="email"
                                name="logemail"
                                className="form-style"
                                placeholder="Your Email"
                                value={logemail}
                                onChange={(e) => setlogEmail(e.target.value)}
                                autoComplete="off"
                              />
                              <i className="input-icon uil uil-at"></i>
                            </div>
                            <div className="mt-2 form-group">
                              <input
                                type="password"
                                name="logpass"
                                className="form-style"
                                placeholder="Your Password"
                                value={logpass}
                                onChange={(e) => setlogPass(e.target.value)}
                                autoComplete="off"
                              />
                              <i className="input-icon uil uil-lock-alt"></i>
                            </div>
                            <button
                              type="submit"
                              className="mt-4 btn old-signup-btn"
                            >
                              Login
                            </button>
                          </form>
                        </div>
                      </div>
                      {/* Sign Up Form */}
                      <div className="card-back">
                        <div className="center-wrap">
                          <form method="POST" onSubmit={PostData}>
                            <h4 id="H4" className="pb-3 mb-4">Sign Up</h4>
                            <div className="form-group">
                              <input
                                type="text"
                                name="name"
                                className="form-style"
                                placeholder="Full Name"
                                value={user.name}
                                onChange={handleInputs}
                              />
                              <i className="input-icon uil uil-user"></i>
                            </div>
                            <div className="mt-2 form-group">
                              <input
                                type="email"
                                name="email"
                                className="form-style"
                                placeholder="Your Email"
                                value={user.email}
                                onChange={handleInputs}
                              />
                              <i className="input-icon uil uil-at"></i>
                            </div>
                            <div className="mt-2 form-group">
                              <input
                                type="tel"
                                name="phone"
                                className="form-style"
                                placeholder="Your Phone Number"
                                value={user.phone}
                                onChange={handleInputs}
                              />
                              <i className="input-icon uil uil-phone"></i>
                            </div>
                            <div className="mt-2 form-group">
                              <input
                                type="password"
                                name="password"
                                className="form-style"
                                placeholder="Password"
                                value={user.password}
                                onChange={handleInputs}
                              />
                              <i className="input-icon uil uil-lock-alt"></i>
                            </div>
                            <div className="mt-2 form-group">
                              <input
                                type="password"
                                name="cpassword"
                                className="form-style"
                                placeholder="Confirm Password"
                                value={user.cpassword}
                                onChange={handleInputs}
                              />
                              <i className="input-icon uil uil-lock-alt"></i>
                            </div>
                            <button
                              type="submit"
                              className="mt-4 btn old-signup-btn"
                            >
                              Sign Up
                            </button>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Login;
