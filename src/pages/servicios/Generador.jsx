import '../../styles/Generador.css';
import { motion } from 'framer-motion';
import generadorImage from '../../assets/generador2.png'; // Asegúrate de tener esta imagen
import aceiteImg from "../../assets/transformador-aceite.png"; // reemplaza por tu ruta real
import secoImg from "../../assets/transformador-seco.png";
import generadorCamara from "../../assets/generadores/generador-camara.jpeg";
import generador2 from "../../assets/generadores/generador2.jpeg";
import generador4 from "../../assets/generadores/generador4.jpeg";
import generador6 from "../../assets/generadores/generador6.jpeg";
import devanado from "../../assets/generadores/devanado-comp.png";

import { Helmet } from "react-helmet";


import { fromJSON } from 'postcss';

function Generador() {
  return (

    <>
    <Helmet>
        <title>Generador | Boosting</title>
      </Helmet>

    <div>
      {/* Banner principal */}
      <section className="generador-banner">
        <div className="banner-content">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            GENERADORES
          </motion.h1>
          <motion.p
            className="banner-subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          ><strong>
            Hidrogeneradores, Turbogeneradores, Plantas Diésel,<br />
            Generadores Eléctricos de baja, media y alta potencia.
            </strong>
          </motion.p>
        </div>
      </section>

      {/* Sección básica de texto */}
      

      {/* Nueva sección visual y técnica */}
      <section className="generador-wrapper">
         {/* Encabezado animado */}
      <motion.section 
        className="generador-header"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      ></motion.section>
        <div className="generador-contenido">
           <p>
            En <strong>Boosting SAS</strong> somos especialistas en el diagnóstico avanzado y mantenimiento integral
             de generadores eléctricos para la industria. Combinamos ingeniería de alto nivel con
              técnicas de monitoreo, pruebas especializadas y análisis predictivo para garantizar
               la confiabilidad, continuidad operativa y máxima eficiencia de sus equipos. Evaluamos el estado real del generador mediante pruebas eléctricas, mecánicas y termográficas, identificamos fallas incipientes y optimizamos el desempeño antes de que se conviertan en tiempos de parada o pérdidas económicas. Nuestro enfoque técnico, riguroso y orientado a resultados permite a nuestros clientes operar con total seguridad, prolongar la vida útil de sus activos y reducir costos operativos a través de un acompañamiento experto y especializado.
          </p>

          <div className="tipos-generador"> 
          <div className="generador"> 
          <img src={generadorCamara} alt="Generador hidraulico" />
          <h3>Análisis y Diagnóstico especializado</h3>
        </div>

        <div className="generador"> 
          <img src={generador2} alt="Generador seco" />
          <h3>Overhaul general</h3>
        </div>

        <div className="generador"> 
          <img src={devanado} alt="Turbogenerador" />
          <h3>Recuperación de Sistema de aislamiento</h3>
        </div>
      </div>
        
          <div className="generador-detalles">
            <h2>Evaluación integral de generadores eléctricos</h2>
            <p>
            En Boosting SAS somos especialistas en la evaluación de la condición de los generadores
             a través de un conjunto de diagnósticos de forma integral para todos sus sistemas, 
             no solo el sistema de aislamiento sino también de sistemas como: Lubricación, Acoplamiento,
              Intercambiador, etc. Todos estos a través de:
              </p>
            <ul className="">
              <li>Resistencia de aislamiento (IR)</li>
              <li>Índice de polarización (IP)</li>
              <li>Índice de absorción (DAR)</li>
              <li>Descarga dieléctrica (DD)</li>
              <li>Resistencia de devanados</li>
              <li>Tangente delta (FD)</li>
              <li>Descargas parciales (DP)</li>
              <li>Análisis de vibración</li>
              <li>Evaluación de lubricación</li>
              <li>Alineación láser</li>
              <li>Electromagnetic Core Imperfection Detection (ELCID)</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}

export default Generador;
