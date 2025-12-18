import '../../styles/Transformador.css';
import { motion } from 'framer-motion';
import seco1 from "../../assets/transformadores/seco1.jpeg"; // reemplaza por tu ruta real
import seco2 from "../../assets/transformadores/seco2.jpeg"; // reemplaza por tu ruta real
import seco3 from "../../assets/transformadores/seco3.jpeg"; // reemplaza por tu ruta real
import seco4 from "../../assets/transformadores/seco4.jpeg"; // reemplaza por tu ruta real
import seco5 from "../../assets/transformadores/seco5.jpeg"; // reemplaza por tu ruta real

import { Helmet } from "react-helmet";

function Transformador() {
  return (
    <>
    <Helmet>
        <title>Transformadores Secos | Boosting</title>
      </Helmet>
      
    <div>
      {/* Banner principal */}
      <section className="transformador-banner">
        <div className="banner-content">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Transformadores Secos
          </motion.h1>
          <motion.p
            className="banner-subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
           <strong>Resina epóxica, poliéster, esmaltados, etc.<br />
           </strong> 
           
          </motion.p>
        </div>
      </section>
      {/* Nueva sección visual y técnica */}
            <section className="motores-container">
          
              {/* Nueva sección visual y técnica */}
                    <section className="transformador-wrapper">
                       {/* Encabezado animado */}
                    <motion.section 
                      className="transformador-header"
                      initial={{ opacity: 0, y: -30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6 }}
                    ></motion.section>
                      <div className="transformador-contenido">
                         <p>
                          En <strong>Boosting SAS</strong>  ofrecemos soluciones especializadas para el diagnóstico, mantenimiento y recuperación de transformadores secos,
                          garantizando la continuidad operativa y la confiabilidad eléctrica de nuestros clientes. Realizamos evaluaciones avanzadas del estado del aislamiento,
                          mediciones eléctricas y termográficas, inspecciones integrales por niveles de contaminación y deterioro, así como pruebas de condición para
                          identificar fallas incipientes.
                          Nuestros servicios de limpieza técnica interna y externa, ajuste de conexiones, restauración de superficies y control de partículas permiten optimizar
                          el desempeño térmico y prolongar la vida útil del equipo. Trabajamos bajo estándares internacionales y con herramientas de alta precisión para
                          asegurar resultados confiables y tiempos de intervención mínimos.
                        </p>

                        <div className="tipos-transformador">
                        <div className="transformador"> 
                        <img src={seco1} alt="Transformador Seco 1" />
                        {/*<h3>Análisis y Diagnóstico especializado</h3>*/}
                      </div>

                      <div className="transformador"> 
                        <img src={seco4} alt="Transformador Seco 4" />
                        {/*<h3>Análisis y Diagnóstico especializado</h3>*/}
                      </div>

                      <div className="transformador"> 
                        <img src={seco3} alt="Transformador Seco 3" />
                        {/*<h3>Análisis y Diagnóstico especializado</h3>*/}
                      </div>

                      
                    </div>

                        <div className="transformador-detalles">
                          <h2>Pruebas de Diagnóstico para Transformadores Secos</h2>
                      
                          <ul className="">
                            <li>Resistencia de aislamiento IP, DAR, DD-</li>
                            <li>Factor de disipación, Pérdidas en aislamiento, capacitancia.</li>
                            <li>Análisis de respuesta en frecuencia FRA.</li>
                            <li>Relación de transformación, Relación de transformación a devanados desfasadores.</li>
                            <li>Resistencia de devanados.</li>
                            <li>Impedancia</li>
                            <li>Corrientes de excitación.</li>
                            <li>Descargas Parciales.</li>
                            <li>Entre otros diagnósticos...</li>
                          </ul>
                        </div>
                      </div>
                    </section>
      
        
      
          
          
          </section>
    </div>
    </>
  );
};


export default Transformador;
