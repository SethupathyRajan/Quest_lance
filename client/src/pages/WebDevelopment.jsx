import React from 'react';
import ServiceCard from './ServiceCard';
import "../styles/ServicePage.css";
import Header from '../components/HeaderComponent';
import Footer from '../components/Footer';

const WebDevelopment = () => {
  const services = [
    {
      title: 'Custom Website Development',
      description: 'Create a custom website tailored to your business needs.',
      price: 'From ₹20000',
      rating: '4.8',
      imageUrl: 'https://via.placeholder.com/300x200?text=Custom+Web+Development',
    },
    {
      title: 'E-commerce Website Development',
      description: 'Build and scale your online store with our e-commerce solutions.',
      price: 'From ₹25000',
      rating: '4.7',
      imageUrl: 'https://via.placeholder.com/300x200?text=E-commerce+Development',
    },
  ];

  return (
    <>
      <Header />
      <div className="service-container">
        <header className="service-header">
          <h1>Web Development</h1>
          <p>Design and develop custom websites to elevate your business online.</p>
        </header>
        <div className="service-list">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default WebDevelopment;
