import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import '../styles/ServicePage.css';

function ServiceCard({ id, title, description, price, rating, imageUrl }) {
  console.log("Service ID:", id); // Debugging to ensure id is passed correctly

  return (
    <div className="service-card">
      <img src={imageUrl} alt={title} className="service-image" />
      <div className="service-info">
        <h3 className="service-title">{title}</h3>
        <p className="service-description">{description}</p>
        <div className="service-price-rating">
          <span className="price">{price}</span>
          <span className="rating">⭐ {rating}</span>
        </div>
        <Link to={`/service/${id}`}>
          <button className="contact-btn">View Details</button>
        </Link>
      </div>
    </div>
  );
}

export default ServiceCard;
