import '../../styles/Transformador.css';
import { motion } from 'framer-motion';
import sumergido1 from "../../assets/transformadores/sumergido1.jpeg"; // reemplaza por tu ruta real
import sumergido2 from "../../assets/transformadores/sumergido2.jpeg"; // reemplaza por tu ruta real
import sumergido3 from "../../assets/transformadores/sumergido3.jpeg"; // reemplaza por tu ruta real
import seco4 from "../../assets/transformadores/seco4.jpeg"; // reemplaza por tu ruta real
import seco5 from "../../assets/transformadores/seco5.jpeg"; // reemplaza por tu ruta real

import { Helmet } from "react-helmet";

function Transformador() {
  return (
    <>
    <Helmet>
        <title>Transformadores Sumergidos | Boosting</title>
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
            Transformadores Sumergidos 
          </motion.h1>
          <motion.p
            className="banner-subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
           <strong>En aceite mineral, éster vegetal o sintético y retrollenados<br />
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
                          En <strong>Boosting SAS</strong> somos especialistas en el diagnóstico avanzado y mantenimiento
                          integral de transformadores sumergidos en líquido aislante (aceite) para la industria.
                          Combinamos ingeniería de alto nivel con técnicas de monitoreo, pruebas especializadas y
                          análisis de fluidos para garantizar la confiabilidad, continuidad operativa y máxima eficiencia
                          de sus equipos.
                        
                          Evaluamos el estado real del transformador mediante pruebas dieléctricas, análisis de gases
                          disueltos (DGA) y termografía, identificamos fallas incipientes en el aislamiento y el núcleo,
                          y optimizamos el desempeño antes de que se conviertan en fallas catastróficas.
                        </p>
                        <p>
                          Nuestro enfoque técnico, riguroso y orientado a resultados permite a nuestros clientes
                          operar con total seguridad, prolongar la vida útil de sus activos y reducir costos operativos
                          a través de un acompañamiento experto y especializado.
                        </p>

                        <div className="tipos-transformador">
                        <div className="transformador"> 
                        <img src={sumergido1} alt="Transformador Sumergido 1" />
                        {/*<h3>Análisis y Diagnóstico especializado</h3>*/}
                      </div>
              
                      <div className="transformador"> 
                        <img src={sumergido2} alt="Transformador Sumergido 2" />
                        {/*<h3>Análisis y Diagnóstico especializado</h3>*/}
                      </div>

                      <div className="transformador"> 
                        <img src={sumergido3} alt="Transformador Sumergido 3" />
                        {/*<h3>Análisis y Diagnóstico especializado</h3>*/}
                      </div>
                    </div>
                      
                        <div className="motor-detalles">
                          <h2>Pruebas de diagnóstico para Transformadores Sumergidos: </h2>
                          <p>
                          
                            </p>
                          <ul className="">
                            <li>Resistencia de aislamiento, IP, DAR, DD.</li>
                            <li>Espectroscopia en el Dominio de la Frecuencia FDS.</li>
                            <li>Análisis de respuesta en frecuencia FRA.</li>
                            <li>Relación de transformación.</li>
                            <li>Resistencia de devanados.</li>
                            <li>Impedancia.</li>
                            <li>Corrientes de excitación.</li>
                            <li>Descargas Parciales.</li>
                            <li>Pruebas a Bushings.</li>
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
