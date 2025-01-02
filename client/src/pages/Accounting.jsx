import React from 'react';
import ServiceCard from './ServiceCard';
import "../styles/ServicePage.css";
import Header from '../components/HeaderComponent';
import Footer from '../components/Footer';

const Accounting = () => {
  const services = [
    {
      title: 'Bookkeeping',
      description: 'Ensure your financial records are accurate and up-to-date.',
      price: 'From ₹8000',
      rating: '4.7',
      imageUrl: 'https://via.placeholder.com/300x200?text=Bookkeeping',
    },
    {
      title: 'Tax Preparation',
      description: 'Get professional assistance for tax filings and planning.',
      price: 'From ₹12000',
      rating: '4.8',
      imageUrl: 'https://via.placeholder.com/300x200?text=Tax+Preparation',
    },
  ];

  return (
    <>
      <Header />
      <div className="service-container">
        <header className="service-header">
          <h1>Accounting</h1>
          <p>Manage your finances efficiently with our expert accounting services.</p>
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

export default Accounting;
