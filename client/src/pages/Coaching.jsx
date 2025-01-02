import React from 'react';
import ServiceCard from './ServiceCard';
import "../styles/ServicePage.css";
import Header from '../components/HeaderComponent';
import Footer from '../components/Footer';

const Coaching = () => {
  const services = [
    {
      title: 'Business Coaching',
      description: 'Get expert coaching to grow your business and improve your leadership skills.',
      price: 'From ₹15000',
      rating: '4.9',
      imageUrl: 'https://via.placeholder.com/300x200?text=Business+Coaching',
    },
    {
      title: 'Life Coaching',
      description: 'Personalized coaching sessions to help you achieve your personal goals.',
      price: 'From ₹12000',
      rating: '4.8',
      imageUrl: 'https://via.placeholder.com/300x200?text=Life+Coaching',
    },
  ];

  return (
    <>
      <Header />
      <div className="service-container">
        <header className="service-header">
          <h1>Coaching</h1>
          <p>Unlock your full potential with personalized coaching services.</p>
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

export default Coaching;
