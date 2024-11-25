import React from 'react';
import ServiceListing from '../components/ServiceListing';

function CyberSecurity(){
  const services = [
    {
      id: 1,
      title: 'Vulnerability Assessment',
      description: 'Comprehensive security testing for your systems.',
      price: '₹15,000',
      image: 'https://via.placeholder.com/280x150.png?text=Vulnerability+Assessment',
    },
    {
      id: 2,
      title: 'Penetration Testing',
      description: 'Advanced penetration testing for critical systems.',
      price: '₹25,000',
      image: 'https://via.placeholder.com/280x150.png?text=Penetration+Testing',
    },
  ];

  return <ServiceListing title="Cyber Security" services={services} />;
};

export default CyberSecurity;
