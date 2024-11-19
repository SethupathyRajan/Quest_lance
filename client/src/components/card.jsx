import React from 'react';
import { Card, Carousel, Col, Row } from 'react-bootstrap';
import '../styles/card.css'; // Adjust path based on your project structure

function GridExample({ cardData }) {
  return (
    <Carousel controls={false} indicators={false} touch={true}>
      <Carousel.Item>
        {/* A single Row that contains all cards, arranged horizontally */}
        <div className="carousel-inner-wrapper">
          <Row className="g-1">
            {Array.isArray(cardData) && cardData.map((card, idx) => (
              <Col xs={6} md={3} key={idx}>
                <Card className="large-card">
                  <Card.Img className="t" variant="top" src={card.image} />
                  <Card.Body>
                    <Card.Title>{card.title}</Card.Title>
                    <Card.Text>{card.text}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default GridExample;