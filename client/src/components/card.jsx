import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import '../styles/card.css'; // Adjust path based on your project structure

function GridExample({ cardData , hoverColors}) {
  return (
    <Row className="g-1">
    {Array.isArray(cardData) &&
      cardData.map((card, idx) => (
        <Col xs={6} md={3} key={idx}>
          <Card
            className="large-card"
            style={{
              '--hover-color': hoverColors && hoverColors[idx] ? hoverColors[idx] : 'transparent',
            }}
          >
            <Card.Img className="t" variant="top" src={card.image} />
            <Card.Body>
              <Card.Title>{card.title}</Card.Title>
              <Card.Text>{card.text}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
  </Row>
  );
}

export default GridExample;