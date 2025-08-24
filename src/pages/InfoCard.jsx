import React from 'react';
import '../styles/InfoCard.css'; // Asegúrate de crear este archivo CSS

const InfoCard = ({ title, description, imageUrl }) => {
  return (
    <div className="info-card">
      <div className="info-image-container">
        <img src={imageUrl} alt={title} className="info-image" />
      </div>
      <div className="info-content">
        <h3 className="info-title">{title}</h3>
        <p className="info-description">{description}</p>
      </div>
    </div>
  );
};

export default InfoCard;