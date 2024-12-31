import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import "../styles/herosection.css";

const HeroSection = () => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeIn(true); // Trigger animation
    }, 100); // Slight delay ensures the animation runs after render
    return () => clearTimeout(timer); // Cleanup timer
  }, []);

  return (
    <div className="hero-section">
      <Container className="text-center text-white">
        <h1 className={`hero-title ${fadeIn ? "fade-in" : ""}`}>
          From imagination to execution, find your perfect match.
        </h1>
        <p className={`hero-subtitle ${fadeIn ? "fade-in" : ""}`}>
          Connecting you with the right talent to bring your vision to life.
        </p>
      </Container>
    </div>
  );
};

export default HeroSection;
