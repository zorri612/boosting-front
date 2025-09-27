import '../../styles/Capacitaciones.css';
import { motion } from 'framer-motion';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import retieImg from "../../assets/retie.png";
import iecImg from "../../assets/iec-ieee.png";
import iec2Img from "../../assets/iec2.jpg";
import electricoImg from "../../assets/diag-electrico.jpg";
import mecanicoImg from "../../assets/diag-mecanico.png";
import sistemasImg from "../../assets/sistemas-inteligentes.png";
import telecomunicacionesImg from "../../assets/telecomunicaciones.jpg";
import rcaImg from "../../assets/rca.png";

import { Helmet } from "react-helmet";

function Capacitaciones() {
  return (

    <>
    <Helmet>
        <title>Capacitaciones | Boosting</title>
      </Helmet>

    <div>
      {/* Banner principal */}
      <section className="capacitacion-banner">
        <div className="banner-content">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            CAPACITACIONES
          </motion.h1>
          <motion.p
            className="banner-subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          ><strong>
            En nuestra oferta de capacitaciones encontrarás programas diseñados para fortalecer el conocimiento técnico y práctico de profesionales e instituciones. <br />
            Cada curso está pensado para brindar herramientas aplicables de inmediato en el entorno laboral.
            </strong>
          </motion.p>
        </div>
      </section>

      {/* Sección básica de texto */}
      

      {/* Nueva sección visual y técnica */}
      <section className="capacitacion-wrapper">
         {/* Encabezado animado */}
      <motion.section 
        className="capacitacion-header"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      ></motion.section>
        <div className="">
           <center><h2>Conoce nuestro catálogo de capacitaciones 👇 </h2></center>   

          <div className="tipos-capacitacion"> 
          <div className="capacitacion"> 
          <img src={retieImg} alt="capacitacion retie" />
          <h3>RETIE</h3>
          <ul>
            Capacitación especializada en el Reglamento Técnico de Instalaciones Eléctricas de Colombia.
            Aprende a interpretar y aplicar la normativa vigente para garantizar seguridad, eficiencia
            y cumplimiento en proyectos eléctricos.
          </ul>
        </div>

        <div className="capacitacion"> 
          <img src={iec2Img} alt="capacitacion iec-ieee" />
          <h3>IEEE / IEC</h3>
          <ul>
            Formación en estándares internacionales que rigen la ingeniería eléctrica y electrónica. 
            Conoce cómo aplicar las normas IEEE e IEC en el mantenimiento y operación de máquinas 
            eléctricas (transformadores y motores) con visión global.
          </ul>
        </div>

        <div className="capacitacion"> 
          <img src={electricoImg} alt="cap diagnostico electrico" />
          <h3>Diagnóstico Eléctrico</h3>
          <ul>
            Curso enfocado en técnicas y herramientas para la detección y análisis de fallas en sistemas eléctricos. 
            Incluye metodologías de medición, interpretación de resultados y estrategias de mantenimiento predictivo.
          </ul>
        </div>
        <div className="capacitacion"> 
          <img src={mecanicoImg} alt="capacitacion hidraulico" />
          <h3>Diagnóstico Mecánico</h3>
          <ul>
            Capacitación en técnicas de diagnóstico para equipos rotativos y sistemas mecánicos. 
            Aprende sobre vibraciones, análisis de fallas y metodologías para prolongar la vida 
            útil de los activos industriales.
          </ul>
        </div>

        <div className="capacitacion"> 
          <img src={sistemasImg} alt="capacitacion seco" />
          <h3>Sistemas Inteligentes</h3>
          <ul>
            Formación en tecnologías aplicadas a la automatización y digitalización industrial. 
            Descubre el uso de sistemas inteligentes para la gestión de energía, control avanzado 
            y mantenimiento basado en datos.
          </ul>
        </div>

        <div className="capacitacion"> 
          <img src={rcaImg} alt="Turbocapacitacion" />
          <h3>RCA (Análisis de Causa Raíz)</h3>
          <ul>
            Entrenamiento en metodologías de análisis de fallas para identificar y eliminar las causas 
            de problemas recurrentes. Mejora la confiabilidad de tus procesos mediante técnicas 
            estructuradas de RCA.
          </ul>
        </div>
        <div className="capacitacion"> 
          <img src={telecomunicacionesImg} alt="capa telecomunicacioness" />
          <h3>Telecomunicaciones</h3>
          <ul>
            Capacitación en fundamentos y tendencias de las telecomunicaciones. 
            Aprende sobre redes, protocolos y su aplicación en entornos modernos de conectividad.
          </ul>
        </div>
      </div>
        
        </div>
      </section>
       <div className="contenedor-contactanos">
        <center><h3>Pregunta por nuestras capacitaciones <a href="/contacto">Aquí</a></h3></center>
      </div>
    </div>
    </>
  );
}

export default Capacitaciones;
