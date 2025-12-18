import '../../styles/Transformador.css';
import { motion } from 'framer-motion';
import { Trans } from 'react-i18next';
import proteccion1 from "../../assets/transformadores/proteccion1.jpeg"; // reemplaza por tu ruta real
import proteccion2 from "../../assets/transformadores/proteccion2.jpeg"; // reemplaza por tu ruta real
import proteccion3 from "../../assets/transformadores/proteccion3.jpeg"; // reemplaza por tu ruta real
import proteccion4 from "../../assets/transformadores/proteccion4.png"; // reemplaza por tu ruta real
import proteccion5 from "../../assets/transformadores/proteccion5.png"; // reemplaza por tu ruta real
import proteccion6 from "../../assets/transformadores/proteccion6.png"; // reemplaza por tu ruta real

import { Helmet } from "react-helmet";

function Transformador() {
  return (
    <>
    <Helmet>
        <title>Protección y Medida de Transformadores | Boosting</title>
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
            Protección de <Trans>Transformadores</Trans>
          </motion.h1>
          <motion.p
            className="banner-subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
           <strong>Transformadores de corriente y de potencial<br />
           </strong> 
           
          </motion.p>
        </div>
      </section>
      {/* Nueva sección visual y técnica */}
            <section className="transformador-container">
          
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
                        <h3>Protección y Medida en Transformadores</h3>
                        <p>
                        En <strong>Boosting SAS</strong> entendemos que los transformadores son el corazón de su sistema de potencia y que su seguridad operativa es primordial.
                        Por ello, ofrecemos servicios especializados en la instalación, calibración y monitoreo de los sistemas de Protección y Medida.
                        Nuestra intervención asegura que los equipos de control, como relés, medidores y seccionadores, respondan de manera correcta e inmediata ante 
                        cualquier evento, desde fallas internas hasta sobrecargas.
                        Esto no solo previene daños catastróficos y costosos tiempos de parada, sino que también garantiza la continuidad del servicio y la integridad del 
                        activo a largo plazo.
                        </p>
                        <p>
                          Confíe en nuestra experiencia para optimizar los ajustes de protección, extender la vida útil de sus transformadores y asegurar que su sistema de medida sea preciso para una gestión energética eficiente.
                        </p>

                        <div className="tipos-transformador">
                        <div className="transformador-proteccion"> 
                        <img src={proteccion4} alt="Transformador 1" />
                        <h3>Transformador de Corriente</h3>
                      </div>
              
                      <div className="transformador-proteccion"> 
                        <img src={proteccion5} alt="Transformador 2" />
                        <h3>Transformador de Potencial</h3>
                      </div>

                      <div className="transformador-proteccion"> 
                        <img src={proteccion6} alt="Transformadores TPs" />
                        <h3>Transformadores Medida y Protección, mediana y baja tensión </h3>
                      </div>
                    </div>

                        <div className="transformador-detalles">
                          <h2>Procedimientos de Protección para Transformadores</h2>
                          <p>
                          En <strong>Boosting SAS</strong> somos especialistas en la protección de Transformadores.
                            </p>
                          <ul className="">
                            <li>Polarización</li>
                            <li>Relación de transformación</li>
                            <li>Curva de Saturación</li>
                            <li>Inductancia</li>
                            <li>Aislamiento</li>
                            <li>Burden de carga</li>
                            
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
