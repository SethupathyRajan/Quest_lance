import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { House } from 'react-bootstrap-icons';
import { useNavigate } from 'react-router-dom';

const CustomBreadcrumb = () => {
  const navigate = useNavigate();

  const handleHomeClick = (event) => {
    event.preventDefault();
    navigate("/home");
  };

  const breadcrumbStyle = {
    background: 'linear-gradient(-45deg, rgba(255,255,255,0.25), rgba(0,0,0,0.8))',
    borderRadius: '50px',
    height: '40px',
    width: '100px',
    color: 'white',
    margin: '10px 0 0 10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    boxShadow: `
      12px 12px 16px 0 rgba(0, 0, 0, 0.7),
      -8px -8px 16px 0 rgba(255, 255, 255, 0.3)
    `,
    cursor: 'pointer',
    transition: 'transform 0.2s',
  };

  const hoverStyle = {
    ':hover': {
      transform: 'scale(1.05)',
    }
  };

  return (
    <nav aria-label="breadcrumb">
      <div 
        style={breadcrumbStyle} 
        onClick={handleHomeClick}
        className="d-flex align-items-center"
      >
        <House className="me-2" />
        <span>Home</span>
      </div>
    </nav>
  );
};

export default CustomBreadcrumb;