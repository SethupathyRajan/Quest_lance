import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

function Footer() {
  return (
    <footer className="text-center text-lg-start bg-body-tertiary text-muted">
      {/* Section: Links */}
      <section>
        <div className="container text-center text-md-start mt-5">
          {/* Grid row */}
          <div className="row mt-3 justify-content-center">
            {/* Grid column */}
            <div className="col-auto mx-3 mb-4">
              <Link to="/about-us" className="text-reset">
                About Us
              </Link>
            </div>
            <div className="col-auto mx-3 mb-4">
              <Link to="/help-support" className="text-reset">
                Help & Support
              </Link>
            </div>
            <div className="col-auto mx-3 mb-4">
              <Link to="/terms-of-service" className="text-reset">
                Terms of Service
              </Link>
            </div>
            <div className="col-auto mx-3 mb-4">
              <Link to="/privacy-policy" className="text-reset">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Section: Links */}

      {/* Copyright */}
      <div className="text-center p-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2024 Copyright:  
        <a className="text-reset fw-bold" href="#">QuestLance</a>
      </div>
      {/* Copyright */}
    </footer>
  );
}

export default Footer;
