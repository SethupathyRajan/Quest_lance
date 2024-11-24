import React from 'react';
import ServiceListing from '../components/ServiceListing';

const Accounting = () => {
  const services = [
    {
      id: 1,
      title: 'Bookkeeping Services',
      description: 'Accurate and efficient bookkeeping solutions for your business.',
      price: '₹15,000',
      image: 'https://via.placeholder.com/280x150.png?text=Bookkeeping+Services',
    },
    {
      id: 2,
      title: 'Tax Preparation',
      description: 'Expert assistance with tax filing and preparation.',
      price: '₹25,000',
      image: 'https://via.placeholder.com/280x150.png?text=Tax+Preparation',
    },
    {
      id: 3,
      title: 'Financial Analysis',
      description: 'In-depth financial analysis to support decision-making.',
      price: '₹30,000',
      image: 'https://via.placeholder.com/280x150.png?text=Financial+Analysis',
    },
  ];

  return <ServiceListing title="Accounting Services" services={services} />;
};

export default Accounting;
