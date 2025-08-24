import React from 'react';
import ServiceCard from './ServiceCard';
import '../styles/ServicesSection.css'; // Asegúrate de crear este archivo CSS

const services = [
  {
    id: 1,
    title: 'MÁQUINAS ROTATIVAS: GENERADORES Y MOTORES',
    images: [
      '/img/generador1.jpeg',
      '/img/generador2.jpeg',
      '/img/generador3.jpeg',
    ],
    to: '/servicios/maquinas-rotativas',
  },
  {
    id: 2,
    title: 'MÁQUINAS ESTÁTICAS: TRANSFORMADORES, INTERRUMPTORES Y SECCIONADORES',
    images: [
      '/lineas-transmision/imagen1.jpg',
      '/lineas-transmision/imagen2.jpg',
      '/lineas-transmision/imagen3.jpg',
    ],
    to: '/servicios/lineas-transmision',
  },
  {
    id: 3,
    title: 'CABLES DE POTENCIA',
    images: [
      '/lineas-transmision/imagen1.jpg',
      '/lineas-transmision/imagen2.jpg',
      '/lineas-transmision/imagen3.jpg',
    ],
    to: '/servicios/lineas-transmision',
  },
  {
    id: 4,
    title: 'MONTAJES Y MONITOREO EN LÍNEA',
    images: [
      '/lineas-transmision/imagen1.jpg',
      '/lineas-transmision/imagen2.jpg',
      '/lineas-transmision/imagen3.jpg',
    ],
    to: '/servicios/lineas-transmision',
  },
  {
    id: 5,
    title: 'AUTOMATIZACIÓN Y CENTRO DE DATOS',
    images: [
      '/lineas-transmision/imagen1.jpg',
      '/lineas-transmision/imagen2.jpg',
      '/lineas-transmision/imagen3.jpg',
    ],
    to: '/servicios/lineas-transmision',
  },
  // Añade más servicios aquí...
];

const ServicesSection = () => {
  return (
    <section className="services-section">
      <h2 className="section-title">Servicios de Diagnóstico</h2>
      <div className="services-container">
        {services.map(service => (
          <ServiceCard
            key={service.id}
            title={service.title}
            images={service.images}
            to={service.to}
          />
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;