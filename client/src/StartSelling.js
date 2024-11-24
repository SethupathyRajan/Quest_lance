import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import heroImage from "./assets/heroImage.jpg";
import Footer from "./components/Footer.jsx";
import HeaderComponent from './components/HeaderComponent.jsx';
import "./styles/StartSelling.css";


function StartSelling() {
  return (
    <div className="start-selling-page">
      <HeaderComponent/>
      <div className="hero-section" style={{ backgroundImage: `url(${heroImage})` }}>
        <Container>
          <Row className="justify-content-center text-center">
            <Col md={8}>
              <h1 className="hero-title">
                Ready to earn on your terms?
              </h1>
              <p className="hero-subtitle">
                Become a seller on QuestLance and start earning money on your schedule.
              </p>
              <Button
                variant="success"
                size="lg"
                className="start-selling-btn"
                href="#"
              >
                Start Selling
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer/>
    </div>
  );
}

export default StartSelling;
