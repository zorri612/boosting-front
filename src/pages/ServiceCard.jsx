import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/ServiceCard.css';

const ServiceCard = ({ title, images, to }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.5,
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={`service-card ${isVisible ? 'visible' : ''}`}
    >
      <Link to={to} className="service-card-link">
        <div className="card-background-carousel">
          {images.map((img, index) => (
            <img key={index} src={img} alt={`${title} ${index + 1}`} className="carousel-image" />
          ))}
        </div>
        <div className="card-overlay"></div>
        <div className="card-content">
          <h3 className="card-title">{title}</h3>
        </div>
      </Link>
    </div>
  );
};

export default ServiceCard;