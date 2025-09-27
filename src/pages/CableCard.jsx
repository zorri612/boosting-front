// src/components/CableCard.jsx
import React from 'react';
import { motion } from 'framer-motion';
import '../styles/CableCard.css'; // Crearás este archivo en el siguiente paso

const CableCard = ({ title, description, features, images, description2, description3 }) => {
  return (
    <motion.div 
      className="cables"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* Contenedor del carrusel de imágenes */}
      <div className="cable-carousel-container">
        <div className="cable-carousel">
          {images.map((img, index) => (
            <img key={index} src={img} alt={`${title} image ${index + 1}`} className="carousel-img" />
          ))}
        </div>
      </div>
      
      {/* Contenido de la tarjeta */}
      <h3>{title}</h3>
      <p>{description}</p>
      <p>{description2}</p>
      <ul>
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      <p>{description3}</p>
    </motion.div>
  );
};

export default CableCard;