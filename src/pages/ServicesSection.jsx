import React from 'react';
import ServiceCard from './ServiceCard';
import '../styles/ServicesSection.css'; 

const services = [
  {
    id: 1,
    title: 'MÁQUINAS ROTATIVAS: GENERADORES Y MOTORES',
    images: [
      '/img/maquinas-rotativas/generador-alta.png',
      '/img/maquinas-rotativas/motor-electrico.png',
      '/img/maquinas-rotativas/bobina.png',
    ],
    to: '/servicios/maquinas-rotativas',
  },
  {
    id: 2,
    title: 'MÁQUINAS ESTÁTICAS: TRANSFORMADORES, INTERRUMPTORES Y SECCIONADORES',
    images: [
      '/img/maquinas-estaticas/transformadores1.png',
      '/img/maquinas-estaticas/transformadores2.png',
      '/img/maquinas-estaticas/transformadores3.jpeg',
    ],
    to: '/servicios/maquinas-estaticas',
  },
  {
    id: 3,
    title: 'CABLES DE POTENCIA',
    images: [
      '/img/cables-potencia/cables1.jpeg',
      '/img/cables-potencia/cables2.jpg',
      '/img/cables-potencia/cables3.png',
      '/img/cables-potencia/cables4.jpeg',
    ],
    to: '/servicios/cables-potencia',
  },
  {
    id: 4,
    title: 'MONTAJES Y MONITOREO EN LÍNEA',
    images: [
      '/img/montajes/montajes1.jpeg',
      '/img/montajes/montajes2.jpeg',
      '/img/montajes/montajes3.jpeg',
    ],
    to: '/servicios/montajes-monitoreo',
  },
  {
    id: 5,
    title: 'AUTOMATIZACIÓN Y CENTRO DE DATOS',
    images: [
      '/img/automatizacion/automatizacion1.jpg',
      '/img/automatizacion/automatizacion2.jpeg',
      '/img/automatizacion/automatizacion3.jpg',
    ],
    to: '/servicios/automatizacion',
  },
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