import React, { useState } from 'react';
import '../styles/PrivacyPolicy.css'; // Importing the custom CSS for Privacy Policy
import Header from './HeaderComponent';
import Footer from './Footer';
const PrivacyPolicy = () => {
  const [expanded, setExpanded] = useState(null);

  const handleExpand = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  return (<>
  <Header/>
    <div className="privacy-policy-container">
      <h1>Privacy Policy</h1>
      <div className="privacy-policy-content">
        <div className="privacy-card" onClick={() => handleExpand(0)}>
          <div className="privacy-card-title">1. Introduction</div>
          {expanded === 0 && (
            <div className="privacy-card-description">
              This Privacy Policy explains how Questlance collects, uses, and protects your personal information when you use our platform. We are committed to safeguarding your privacy.
            </div>
          )}
        </div>

        <div className="privacy-card" onClick={() => handleExpand(1)}>
          <div className="privacy-card-title">2. Information We Collect</div>
          {expanded === 1 && (
            <div className="privacy-card-description">
              We collect information when you register, use our services, and communicate with us. This includes personal details such as name, email address, and payment information.
            </div>
          )}
        </div>

        <div className="privacy-card" onClick={() => handleExpand(2)}>
          <div className="privacy-card-title">3. How We Use Your Information</div>
          {expanded === 2 && (
            <div className="privacy-card-description">
              We use your information to provide services, communicate updates, and improve the user experience. We do not sell your personal information to third parties.
            </div>
          )}
        </div>

        <div className="privacy-card" onClick={() => handleExpand(3)}>
          <div className="privacy-card-title">4. Data Security</div>
          {expanded === 3 && (
            <div className="privacy-card-description">
              We take appropriate security measures to protect your personal information from unauthorized access, alteration, and disclosure.
            </div>
          )}
        </div>

        <div className="privacy-card" onClick={() => handleExpand(4)}>
          <div className="privacy-card-title">5. Your Rights</div>
          {expanded === 4 && (
            <div className="privacy-card-description">
              You have the right to access, correct, or delete your personal data. You may also withdraw consent at any time, subject to legal restrictions.
            </div>
          )}
        </div>

        <div className="privacy-card" onClick={() => handleExpand(5)}>
          <div className="privacy-card-title">6. Changes to This Privacy Policy</div>
          {expanded === 5 && (
            <div className="privacy-card-description">
              We may update this Privacy Policy from time to time. Any changes will be posted on this page, and your continued use of our services indicates your acceptance of the updated policy.
            </div>
          )}
        </div>

        <div className="privacy-card" onClick={() => handleExpand(6)}>
          <div className="privacy-card-title">7. Contact Us</div>
          {expanded === 6 && (
            <div className="privacy-card-description">
              If you have any questions about this Privacy Policy or your data, please contact us at <a href="mailto:info@questlance.com">info@questlance.com</a>.
            </div>
          )}
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default PrivacyPolicy;
