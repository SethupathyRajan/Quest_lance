import React from 'react';
import op from '../assets/ss.jpg'; // Ensure the correct path to your image
import '../styles/ImageOverlay.css'; // Import the CSS file

function ImgOverlay() {
  return (
        <div className="custom-card-container">
          <img
            src={op}
            alt="Card"
            className="custom-card-image"
          />
          <div className="custom-card-overlay">
            <img src="{logo}" alt="" className='image-over' />
            <p className="custom-card-description">
              "Be Your Own Boss. Start Freelancing Today!"
            </p>
          </div>
        </div>
  );
}

export default ImgOverlay;