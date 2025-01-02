import React from 'react';
import ServiceCard from './ServiceCard';
import "../styles/ServicePage.css";
import Header from '../components/HeaderComponent';
import Footer from '../components/Footer';

const ContentCreation = () => {
  const services = [
    {
      title: 'Video Content Creation',
      description: 'Create engaging video content for your brand or social media platforms.',
      price: 'From ₹8000',
      rating: '4.8',
      imageUrl: 'https://via.placeholder.com/300x200?text=Video+Content',
    },
    {
      title: 'Graphic Design',
      description: 'Design custom graphics for your brand, social media, or marketing campaigns.',
      price: 'From ₹5000',
      rating: '4.7',
      imageUrl: 'https://via.placeholder.com/300x200?text=Graphic+Design',
    },
  ];

  return (
    <>
      <Header />
      <div className="service-container">
        <header className="service-header">
          <h1>Content Creation</h1>
          <p>Bring your brand to life with high-quality content creation services.</p>
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

export default ContentCreation;
