import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import "../styles/herosection.css"; // Include custom styles

const HeroSection = () => {
  return (
    <div className="hero-section">
      <Container className="text-center text-white">
        <h1 className="hero-title">
        From imagination to execution, find your perfect match.
        </h1>
        <p className="hero-subtitle">
        Connecting you with the right talent to bring your vision to life.
        </p>
        <Row className="justify-content-center">
          <Col md={8}>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search projects or developers"
                className="me-2"
              />
              <Button variant="success">Search</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HeroSection;
