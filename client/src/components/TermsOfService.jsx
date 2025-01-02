import React, { useState } from 'react';
import '../styles/TermsOfService.css'; // Importing the custom CSS for Terms of Service
import Header from './HeaderComponent';
import Footer from './Footer';

const TermsOfService = () => {
  const [zoomedCard, setZoomedCard] = useState(null);

  const handleCardClick = (index) => {
    // If clicked card is already zoomed in, reset it
    setZoomedCard(zoomedCard === index ? null : index);
  };

  return (
    <>
      <Header />
      <div className="terms-container">
        <h1 className="terms-header">Terms of Service</h1>
        <div className="terms-card-container row">
          {[
            {
              title: '1. Introduction',
              content:
                'Welcome to Questlance! These terms of service govern your access to and use of our platform. By accessing or using our website, you agree to comply with these terms and conditions.',
            },
            {
              title: '2. Acceptance of Terms',
              content:
                'By using Questlance, you confirm that you have read, understood, and agreed to abide by the terms set forth in this agreement.',
            },
            {
              title: '3. User Responsibilities',
              content:
                'You must be at least 18 years old to use our services. You agree to provide accurate and complete information during registration.',
            },
            {
              title: '4. Platform Usage',
              content:
                'Questlance allows users to connect with freelancers and clients. All users are expected to act with integrity and respect.',
            },
            {
              title: '5. Payment Terms',
              content:
                'All payments for services rendered through Questlance must be processed through the platform. Questlance is not responsible for transactions made outside of the platform.',
            },
          ].map((section, index) => (
            <div
              key={index}
              className={`col-md-4 terms-card ${zoomedCard === index ? 'zoomed-in' : ''}`}
              onClick={() => handleCardClick(index)}
              onDoubleClick={() => handleCardClick(index)} // Double click to reset zoom
            >
              <div className="card-body">
                <div>{section.title}</div>
                <div className="terms-description">{section.content}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TermsOfService;
