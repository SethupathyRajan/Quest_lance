import React from 'react';
import Card from 'react-bootstrap/Card';
import op from '../assets/ss.jpg'; // Ensure the correct path to your image
import '../styles/ImageOverlay.css'; // Import the CSS file

function ImgOverlay() {
  return (
    <Card className="bg-dark">
      {/* Use the imported image here */}
      <Card.Img
        src={op}
        alt="Cardimage"
        style={{
          width: 'auto',  // Set the width to 50% of the container
          height: '100%', // Maintain aspect ratio
          objectFit: 'cover' // Ensure the image covers the area
        }}
      />
      <Card.ImgOverlay>
        <Card.Title className='c1'>Quest<super>Lance</super></Card.Title>
        <Card.Text className='cd'>
        "Be Your Own Boss. Start Freelancing Today!"
        </Card.Text>
        <Card.Text></Card.Text>
      </Card.ImgOverlay>
    </Card>
  );
}

export default ImgOverlay;