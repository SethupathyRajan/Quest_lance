import React from 'react';
import ServiceCard from './ServiceCard';
import "../styles/ServicePage.css";
import Header from '../components/HeaderComponent';
import Footer from '../components/Footer';

const UXUIDesign = () => {
  const services = [
    {
      title: 'UI/UX Research & Strategy',
      description: 'Ensure your product meets user needs with our UX research services.',
      price: 'From ₹15000',
      rating: '4.8',
      imageUrl: 'https://via.placeholder.com/300x200?text=UX+Research',
    },
    {
      title: 'UI Design',
      description: 'Create stunning user interfaces that engage and delight users.',
      price: 'From ₹12000',
      rating: '4.9',
      imageUrl: 'https://via.placeholder.com/300x200?text=UI+Design',
    },
  ];

  return (
    <>
      <Header />
      <div className="service-container">
        <header className="service-header">
          <h1>UI/UX Design</h1>
          <p>Craft user-centric designs that elevate user experiences.</p>
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

export default UXUIDesign;
