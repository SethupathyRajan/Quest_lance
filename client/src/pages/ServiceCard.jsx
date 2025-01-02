// ServiceCard.js
import React from 'react';
import '../styles/ServicePage.css';

function ServiceCard({title, description, price, rating, imageUrl}) {
  return(
  <div className="service-card">
    <img src={imageUrl} alt={title} className="service-image" />
    <div className="service-info">
      <h3 className="service-title">{title}</h3>
      <p className="service-description">{description}</p>
      <div className="service-price-rating">
        <span className="price">{price}</span>
        <span className="rating">⭐ {rating}</span>
      </div>
      <button className="contact-btn">View Details</button>
    </div>
  </div>
);}

export default ServiceCard;
