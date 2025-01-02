import React, { useState, useEffect } from "react";
import ServiceCard from "./pages/ServiceCard";  // Import ServiceCard component
import "./styles/ServicePage.css";      // Import the styles for this page
import Header from "./components/HeaderComponent";
import Footer from "./components/Footer";
const ServicesPage = () => {
  const [services, setServices] = useState([]);

  // Fetch services from the backend
  useEffect(() => {
    fetch("http://localhost:5000/get-services") // Assume an endpoint that fetches all services
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setServices(data.services); // Assuming the data contains a "services" array
        } else {
          console.error("Failed to fetch services", data.message);
        }
      })
      .catch((error) => {
        console.error("Error fetching services", error);
      });
  }, []);

  return (<>
  <Header/>
    <div className="service-container">
      {/* Header Section */}
      <div className="service-header">
        <h1>Explore Our Services</h1>
        <p>Browse through the best services provided by experts in various fields.</p>
      </div>

      {/* Grid Layout for Service Cards */}
      <div className="service-list">
        {services.length > 0 ? (
          services.map((service) => (
            <ServiceCard
              key={service._id}
              id={service._id}
              title={service.title}
              description={service.description}
              price={service.price}
              rating={service.rating || "N/A"}  // Assuming services may have a rating
              imageUrl={service.imageUrl || "https://via.placeholder.com/150"}  // Placeholder if image is not available
            />
          ))
        ) : (
          <p>No services available at the moment.</p>
        )}
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default ServicesPage;
