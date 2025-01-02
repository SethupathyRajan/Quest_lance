import React from 'react';
import ServiceCard from './ServiceCard';
import "../styles/ServicePage.css";
import Header from '../components/HeaderComponent';
import Footer from '../components/Footer';

const CyberSecurity = () => {
  const services = [
    {
      title: 'Network Security',
      description: 'Protect your business with robust network security solutions.',
      price: 'From ₹10000',
      rating: '4.9',
      imageUrl: 'https://via.placeholder.com/300x200?text=Network+Security',
    },
    {
      title: 'Penetration Testing',
      description: 'Simulate cyberattacks to find vulnerabilities in your systems.',
      price: 'From ₹15000',
      rating: '5.0',
      imageUrl: 'https://via.placeholder.com/300x200?text=Penetration+Testing',
    },
  ];

  return (
    <>
      <Header />
      <div className="service-container">
        <header className="service-header">
          <h1>Cyber Security</h1>
          <p>Ensure your business is safe with our comprehensive cyber security services.</p>
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

export default CyberSecurity;
