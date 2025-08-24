import React, { useRef, useEffect, useState } from 'react';
import '../styles/ServiceCard.css';
import { Link } from 'react-router-dom'; // Usamos Link para la navegación

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
        threshold: 0.5, // La tarjeta se activa cuando el 50% de ella es visible
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

  const cardStyle = {
    '--bg-image-1': `url(${images[0]})`,
    '--bg-image-2': `url(${images[1]})`,
    '--bg-image-3': `url(${images[2]})`,
    '--bg-image-4': `url(${images[3]})`,
  };

  return (
    <div
      ref={cardRef}
      className={`service-card ${isVisible ? 'visible' : ''}`}
      style={cardStyle}
    >
      <Link to={to} className="service-card-link">
        <div className="card-background"></div>
        <div className="card-content">
          <h3 className="card-title">{title}</h3>
        </div>
      </Link>
    </div>
  );
};

export default ServiceCard;