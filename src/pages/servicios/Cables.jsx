// src/pages/Cables.jsx
import React from 'react';
import '../../styles/Cables.css';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';

// Importa el nuevo componente de tarjeta
import CableCard from '../CableCard'; 

// Importa las imágenes que usarás en el carrusel
import cable1_1 from "../../assets/cables-img/cable1_1.png";
import cable1_2 from "../../assets/cables-img/cable1_2.png";
import cable2_1 from "../../assets/cables-img/cable2_1.png";
import cable2_2 from "../../assets/cables-img/cable2_2.png";
import cable3_1 from "../../assets/cables-img/cable3_1.png";
import cable3_2 from "../../assets/cables-img/cable3_2.png";
import cable3_3 from "../../assets/cables-img/cable3_3.png";
import cable4 from "../../assets/cables-img/cable4.jpeg";

// Datos para las tarjetas (puedes añadir más si tienes más de 3)
const cableData = [
  {
    title: "Pruebas de Aislamiento y Descargas Parciales",
    description: `Verificamos la integridad del sistema de aislamiento mediante técnicas como descargas parciales, tangente delta y RI.`,
    description2: `Estas pruebas permiten:`,
    features: ["•	Detectar defectos invisibles a simple vista en el aislamiento.", "•	Reducir el riesgo de fallas eléctricas inesperadas.", "•	Extender la vida útil de los cables."],
    images: [cable1_1, cable1_2, cable4],
    description3: `Beneficio clave: seguridad y confiabilidad al máximo nivel.`,

  },
  {
    title: "Pruebas de Impedancia del conductor",
    description: `Medimos la resistencia del conductor y la continuidad de todo el trayecto del cable para asegurar una instalación correcta y eficiente, mediante técnicas como TDR, Rohm, L, entre otras.`,
    description2: `Con esta prueba se pueden identificar:`,
    features: ["•	Empalmes defectuosos.", "•	Problemas de corrosión o desgaste.", "•	Pérdidas eléctricas que afectan el rendimiento."],
    images: [cable2_1, cable2_2],
    description3: ` Beneficio clave: mayor eficiencia energética y reducción de costos.`,
  },
  {
    title: "Pruebas de Alta Tensión y Puesta en Servicio",
    description: `Realizamos ensayos de alta tensión (HIPOT, VLF coseno rectangular, VLF senoidal, termografía) antes de la puesta en operación, tras una reparación, o prueba de mantenimiento.`,
    description2: `Su objetivo es:`,
    features: ["•	Confirmar que el cable soporta condiciones nominales y sobretensiones.", "•	Garantizar la seguridad de las instalaciones.", "•	Asegurar el cumplimiento normativo."],
    images: [cable3_1, cable3_2, cable3_3],
    description3: `Beneficio clave: tranquilidad al poner en servicio un sistema seguro y robusto.`,
  },
];

function Cables() {
  return (
    <>
      <Helmet>
        <title>Cables | Boosting</title>
      </Helmet>
      <div>
        <section className="cables-banner"> 
          <div className="banner-content"> 
            <motion.h1 
              initial={{ opacity: 0, y: -30 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.6 }} 
            > 
              CABLES DE MEDIA TENSIÓN 
            </motion.h1> 
            <motion.p 
              className="banner-subtitle" 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              transition={{ delay: 0.5, duration: 0.6 }} 
            > 
              <strong>Cables de media tensión con cubiertas aisladas PVC, XLPE, EPR <br /> 
              de cualquier tipo de configuración interna 
              </strong>  
            </motion.p> 
          </div> 
        </section>
        <div className="actuador-wrapper"> 
          <motion.section  
            className="actuador-header" 
            initial={{ opacity: 0, y: -30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6 }} 
          > 
            <p className='cables-justy'> 
              En <strong>Boosting</strong> realizamos pruebas especializadas a cables de potencia para garantizar su  
              confiabilidad, seguridad y desempeño a lo largo de toda su vida útil. Nuestros ensayos 
              cumplen con estándares internacionales (IEC, IEEE) y permiten detectar fallas incipientes  
              antes de que se conviertan en problemas críticos.
            </p> 
            <p className='padding-top-40px'>
            <strong>Explora nuestras principales pruebas:</strong> </p>
          </motion.section> 
          
        </div>
        
        {/* Nueva sección con las tarjetas dinámicas */}
        <section className="cableses-container">
          <div className="tipos-cables">
            {cableData.map((cable, index) => (
              <CableCard
                key={index}
                title={cable.title}
                description={cable.description}
                description2={cable.description2}
                features={cable.features}
                images={cable.images}
                description3={cable.description3}
              />
            ))}
          </div>
        </section>
        <div className='contenedor-contactanos'>
        <center><h4>¿Quieres conocer más o solicitar una prueba?</h4></center>
        <center><h4><a href="/contacto">Contáctanos</a></h4></center>
      </div>
        
        {/* ... (el resto de tu código, como la sección de diagnósticos) ... */}
      </div>
    </>
  );
};

export default Cables;