import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/card.css";

const GridExample = ({ cardData, hoverColors }) => {
  return (
    <div className="grid-container">
      {cardData.map((card, index) => (
        <Link
          to={`/${card.title.toLowerCase().replace(/\s+/g, '-')}`}
          key={index}
          className="grid-item"
          style={{ '--hover-color': hoverColors[index % hoverColors.length] }}
        >
          <div className="card">
            <img src={card.image} alt={card.title} className="card-image" />
            <div className="card-title">{card.title}</div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default GridExample;
