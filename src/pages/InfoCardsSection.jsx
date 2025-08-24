import React from 'react';
import InfoCard from './InfoCard';
import '../styles/InfoCardsSection.css'; // Archivo CSS para el contenedor

// Datos para las tarjetas informativas
const cardData = [
  {
    id: 1,
    title: 'TURBO SECADO DE PARTES ACTIVAS',
    description: 'Realizamos turbo secado en sitio para las partes activas de máquinas rotativas (generadores y motores) y transformadores. Este servicio permite eliminar la humedad del aislamiento de manera rápida y eficiente, reduciendo los tiempos de inactividad y mejorando la confiabilidad de los equipos.',
    imageUrl: '/' // Reemplaza con la ruta de tu imagen
  },
  {
    id: 2,
    title: 'TERMOVACÍO EN TRANSFORMADORES',
    description: 'Ofrecemos tratamiento de termo vacío en sitio para transformadores de potencia, una técnica avanzada que optimiza las propiedades dieléctricas del aceite aislante al eliminar la humedad. Este servicio garantiza un mantenimiento eficiente sin necesidad de trasladar el equipo.',
    imageUrl: '/imagen-termo-vacio.png' // Reemplaza con la ruta de tu imagen
  },
  {
    id: 3,
    title: 'MANTENIMIENTO Y REPARACIÓN DE MOTORES ASÍNCRONOS',
    description: 'Proporcionamos mantenimiento y reparación para motores asíncronos de hasta 20 HP. Esto incluye limpieza, cambio de rodamientos, rebobinado y pruebas eléctricas, asegurando el máximo rendimiento y durabilidad de sus equipos.',
    imageUrl: '/imagen-motores.png' // Reemplaza con la ruta de tu imagen
  },
];

const InfoCardsSection = () => {
  return (
    <section className="info-cards-section">
      {cardData.map(card => (
        <InfoCard
          key={card.id}
          title={card.title}
          description={card.description}
          imageUrl={card.imageUrl}
        />
      ))}
    </section>
  );
};

export default InfoCardsSection;