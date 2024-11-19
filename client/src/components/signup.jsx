import axios from 'axios';
import { MDBBtn, MDBCard, MDBCardBody, MDBContainer, MDBInput } from 'mdb-react-ui-kit';
import React, { useState } from 'react';

function Signup() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirm_password: '',
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState('');

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
      });
    } catch (error) {
      setErrors({ error: error.response?.data?.error || 'Something went wrong!' });
    }
  };

  return (
    <MDBContainer fluid className="p-4 background-radial-gradient overflow-hidden">
      <MDBCard className='text-black m-auto' style={{ maxWidth: '400px', borderRadius: '25px' }}>
        <MDBCardBody>
          <div className="text-center">
            <h3 className="text-center fw-bold mb-4">Sign Up</h3>
            
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <MDBInput
                  label='Your Name'
                  id='name'
                  type='text'
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-4">
                <MDBInput
                  label='Your Email'
                  id='email'
                  type='email'
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-4">
                <MDBInput
                  label='Password'
                  id='password'
                  type='password'
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-4">
                <MDBInput
                  label='Repeat your password'
                  id='confirm_password'
                  type='password'
                  value={formData.confirm_password}
                  onChange={handleChange}
                  required
                />
              </div>

              {errors.error && <p className="text-danger mb-4">{errors.error}</p>}
              {success && <p className="text-success mb-4">{success}</p>}

              <MDBBtn className='mb-4 w-100 gradient-custom-4' size='lg'>
                Register
              </MDBBtn>
            </form>
          </div>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
}

export default Signup;