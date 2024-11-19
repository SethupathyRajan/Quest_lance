import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import freelancer1 from '../assets/freelance1.jpg';
import freelancer2 from '../assets/freelance2.jpg';
import freelancer3 from '../assets/freelance3.jpg';
import '../styles/Carousel.css';

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <>
    
    <Carousel activeIndex={index} onSelect={handleSelect}>
    <Carousel.Item>
      <img className="d-block w-100" src={freelancer1} alt="Find the Perfect Freelancer" />
      <Carousel.Caption>
        <h1>Find the Perfect Freelancer</h1>
        <p>Connect with top talent across various fields and bring your project to life with expert support.</p>
      </Carousel.Caption>
    </Carousel.Item>
    
    <Carousel.Item>
      <img className="d-block w-100" src={freelancer2} alt="Get Your Project Done" />
      <Carousel.Caption>
        <h1>Get Your Project Done</h1>
        <p>From graphic design to software development, get any task completed quickly and efficiently.</p>
      </Carousel.Caption>
    </Carousel.Item>
  
    <Carousel.Item>
      <img className="d-block w-100" src={freelancer3} alt="Easy, Safe, and Transparent" />
      <Carousel.Caption>
        <h1>Easy, Safe, and Transparent</h1>
        <p>Enjoy secure transactions, transparent pricing, and a seamless hiring process.</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  </>
  );
}

export default ControlledCarousel;