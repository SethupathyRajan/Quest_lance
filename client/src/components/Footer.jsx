import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';

function Footer() {
  return (
    <footer className="text-center text-lg-start bg-body-tertiary text-muted">
      {/* Section: Social media */}
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        {/* Left */}
        <div className="me-5 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>

        {/* Right */}
        <div>
          <a href="" className="me-4 text-reset">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="" className="me-4 text-reset">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="" className="me-4 text-reset">
            <i className="fab fa-google"></i>
          </a>
          <a href="" className="me-4 text-reset">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="" className="me-4 text-reset">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="" className="me-4 text-reset">
            <i className="fab fa-github"></i>
          </a>
        </div>
      </section>
      {/* Section: Social media */}

      {/* Section: Links */}
      <section>
        <div className="container text-center text-md-start mt-5">
          {/* Grid row */}
          <div className="row mt-3">
            {/* Grid column */}
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
               
            </div>

            {/* Grid column */}
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Categories</h6>
              <LinkContainer to="/web-development">
        <p><a href="#!" className="text-reset">Web Development</a></p>
      </LinkContainer>
      <LinkContainer to="/digital-marketing">
        <p><a href="#!" className="text-reset">Digital Marketing</a></p>
      </LinkContainer>
      <LinkContainer to="/content-creation">
        <p><a href="#!" className="text-reset">Content Creation</a></p>
      </LinkContainer>
      <LinkContainer to="/app-development">
        <p><a href="#!" className="text-reset">App Development</a></p>
      </LinkContainer>
            </div>

            {/* Grid column */}
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">For clients</h6>
              <p><a href="#!" className="text-reset">Trust</a></p>
              <p><a href="#!" className="text-reset">Safety</a></p>
              <p><a href="#!" className="text-reset">Learn & Guide</a></p>
              <p><a href="#!" className="text-reset">Help</a></p>
            </div>

            {/* Grid column */}
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Company</h6>
              <p><a href="#!" className="fas fa-home me-3">About Us</a></p>
              <p><a href="#!" className="fas fa-envelope me-3">Help & Support</a></p>
              <p><a href="#!" className="fas fa-phone me-3">Terms of Service</a></p>
              <p><a href="#!" className="fas fa-print me-3">Privacy Policy</a></p>
            </div>
          </div>
        </div>
      </section>
      {/* Section: Links */}

      {/* Copyright */}
      <div className="text-center p-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2021 Copyright: 
        <a className="text-reset fw-bold" href="#">QuestLance</a>
      </div>
      {/* Copyright */}
    </footer>
  );
}

export default Footer;