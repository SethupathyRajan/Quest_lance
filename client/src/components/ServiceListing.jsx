import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import '../styles/ServiceListing.css'; // Ensure this CSS includes the new fixes
import Footer from './Footer';
import Header from './HeaderComponent';

const ServiceListing = ({ title, services }) => {
  return (
    <>
      <Header />
      <Container>
        <h2 className="my-4 service-listing-title">{title}</h2>
        <Row>
          {services.length > 0 ? (
            services.map((service) => (
              <Col md={4} className="mb-4" key={service.id}>
                <Card className="service-card">
                  <Card.Img variant="top" src={service.image} />
                  <Card.Body>
                    <Card.Title className="service-card-title">{service.title}</Card.Title>
                    <Card.Text>{service.description}</Card.Text>
                    <Card.Text>
                      <strong>Price:</strong> {service.price}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))
          ) : (
            <Col>
              <div className="text-center">
                <img
                  src="https://via.placeholder.com/400x300.png?text=No+Services+Available"
                  alt="No services available"
                  className="img-fluid"
                />
                <p className="mt-3">No services available.</p>
              </div>
            </Col>
          )}
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default ServiceListing;
