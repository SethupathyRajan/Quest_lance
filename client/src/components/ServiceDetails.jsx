import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; // Hook to access URL params
import '../styles/ServiceDetails.css';

const ServiceDetails = () => {
  const { id } = useParams(); // Get the 'id' from the URL
  const [service, setService] = useState(null);

  useEffect(() => {
    if (!id) {
      // If no 'id' in the URL, show an error message or redirect
      console.error("No service ID provided");
      return;
    }

    // Fetch the service details based on the 'id'
    fetch(`http://localhost:5000/service/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setService(data);
      })
      .catch((error) => {
        console.error("Error fetching service details:", error);
      });
  }, [id]); // Re-run when 'id' changes

  if (!service) {
    return <div>Loading...</div>; // Or display a loading spinner
  }

  return (
    <div className="service-details-container">
      <div className="service-details-header">
        <h1>{service.title}</h1>
        <p>{service.description}</p>
      </div>

      <div className="service-image-container">
        <img
          src={service.imageUrl || 'https://via.placeholder.com/300'}
          alt={service.title}
          className="service-image"
        />
      </div>

      <div className="service-price">
        <span>Price: {service.price}</span>
      </div>

      <div className="service-contact-info">
        <p><strong>Contact:</strong> {service.contactInfo}</p>
        <p><strong>Seller's Name:</strong> {service.name}</p>
      </div>

      <div>
        <button className="contact-btn">Contact Seller</button>
      </div>
    </div>
  );
};

export default ServiceDetails;
