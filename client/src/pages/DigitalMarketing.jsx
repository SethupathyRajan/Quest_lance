import React from 'react';
import ServiceCard from './ServiceCard';
import "../styles/ServicePage.css";
import Header from '../components/HeaderComponent';
import Footer from '../components/Footer';

const DigitalMarketing = () => {
  const services = [
    {
      title: 'SEO Optimization',
      description: 'Improve your website’s search engine ranking with our expert SEO services.',
      price: 'From ₹4999',
      rating: '4.7',
      imageUrl: 'https://via.placeholder.com/300x200?text=SEO+Optimization',
    },
    {
      title: 'Social Media Marketing',
      description: 'Grow your brand presence across social media platforms with targeted campaigns.',
      price: 'From ₹7999',
      rating: '4.8',
      imageUrl: 'https://via.placeholder.com/300x200?text=Social+Media+Marketing',
    },
  ];

  return (
    <>
      <Header />
      <div className="service-container">
        <header className="service-header">
          <h1>Digital Marketing</h1>
          <p>Boost your online presence with our expert digital marketing services.</p>
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

export default DigitalMarketing;
