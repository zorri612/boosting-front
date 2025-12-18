import '../../styles/Motor.css';
import { motion } from 'framer-motion';
import motorImg from "../../assets/motor.png"; // reemplaza por tu ruta real
import motor2Img from "../../assets/motor2.png"; // reemplaza por tu ruta real
import { Helmet } from "react-helmet";

import motor1 from "../../assets/motores/motor1.jpeg";
import motor2 from "../../assets/motores/motor2.jpeg";
import motor3 from "../../assets/motores/motor3.jpeg";



function Motor() {
  return (

    <>
    <Helmet>
        <title>Motor | Boosting</title>
      </Helmet>

    <div>
      {/* Banner principal */}
      <section className="motor-banner">
        <div className="banner-content">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            MOTOR
          </motion.h1>
          <motion.p
            className="banner-subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
           <strong>Motores de media tensión con cubiertas aisladas PVC, XLPE, EPR <br />
           de cualquier tipo de configuración interna
           </strong> 
           
          </motion.p>
        </div>
      </section>
    
      

      {/* Nueva sección visual y técnica */}
      <section className="motores-container">
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
                    En <strong>Boosting SAS</strong> somos especialistas en el diagnóstico avanzado y mantenimiento integral de motores eléctricos para la industria. 
                    Combinamos ingeniería de alto nivel con técnicas de monitoreo, pruebas especializadas y análisis predictivo para garantizar la confiabilidad,
                     continuidad de la producción y máxima eficiencia de sus equipos.
                  </p>
                  <p>
                  Evaluamos el estado real del motor mediante pruebas eléctricas, mecánicas y termográficas, identificamos fallas incipientes y optimizamos el desempeño
                   para evitar paradas no programadas o daños mayores. Nuestro enfoque técnico, riguroso y orientado a resultados permite a nuestros clientes operar
                    con total seguridad, prolongar la vida útil de sus activos y reducir costos operativos a través de un acompañamiento experto y especializado.
                  </p>
        
                  <div className="tipos-motor"> 
                  <div className="motor"> 
                  <img src={motor1} alt="Motor 1" />
                  {/*<h3>Análisis y Diagnóstico especializado</h3>*/}
                </div>
        
                <div className="motor"> 
                  <img src={motor2} alt="Motor 2" />
                  {/*<h3>Análisis y Diagnóstico especializado</h3>*/}
                </div>
        
                <div className="motor"> 
                  <img src={motor3} alt="Motor 3" />
                  {/*<h3>Análisis y Diagnóstico especializado</h3>*/}
                </div>
              </div>
                
                  <div className="motor-detalles">
                    <h2>Evaluación Integral de Motores Eléctricos</h2>
                    <p>
                    En <strong>Boosting SAS</strong> somos especialistas en la evaluación de la condición de los motores a través de un conjunto de 
                    diagnósticos de forma integral para todos sus sistemas, no solo el sistema de aislamiento (sistema eléctrico) sino
                     también de sistemas como: Rodamientos (Baleros), Acoplamiento, Enfriamiento (Intercambiador), etc.
                      </p>
                    <ul>
                      <li>Evaluación del Sistema de Aislamiento (Eléctrico):
                        <ul>
                          <li>Resistencia de aislamiento (IR)</li>
                          <li>Índice de polarización (IP)</li>
                          <li>Índice de absorción (DAR)</li>
                          <li>Descarga dieléctrica (DD)</li>
                          <li>Resistencia de devanados</li>
                          <li>Tangente delta (FD)</li>
                          <li>Descargas parciales (DP) para motores con tensión superior a 4160 voltios.</li>
                          <li>Prueba de Corriente de Fuga/Rotor (MCA/ESA)</li>
                        </ul>
                      </li>
                      <li>Evaluación del Sistema Mecánico:
                        <ul>
                          <li>Análisis de vibración</li>
                          <li>Evaluación de lubricación</li>
                          <li>Alineación láser</li>
                          <li>Análisis ODS (Operational Deflection Shapes)</li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

  

    
    
    </section>
    </div>
    </>
  );

};


export default Motor;
