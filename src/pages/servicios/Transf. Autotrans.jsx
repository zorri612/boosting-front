import '../../styles/Transformador.css';
import { motion } from 'framer-motion';
import aceiteImg from "../../assets/transformador-aceite.png"; // reemplaza por tu ruta real
import secoImg from "../../assets/transformador-seco.png"; // reemplaza por tu ruta real
import { Helmet } from "react-helmet";

function Transformador() {
  return (
    <>
    <Helmet>
        <title>Autotransformadores | Boosting</title>
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
            Autotransformadores
          </motion.h1>
          <motion.p
            className="banner-subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
           <strong>Sumergidos en aceite, Secos, Autotransformadores, Desfasadores,<br />
           Tridevanados, de medición y/o protección TC´s TP’s</strong> 
           
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
                          En <strong>Boosting SAS</strong> (descripcion de los servicios que se ofrecen en transformadores)
                        </p>

                        <div className="tipos-transformador">
                        <div className="transformador"> 
                        <img src={aceiteImg} alt="Transformador 1" />
                        {/*<h3>Análisis y Diagnóstico especializado</h3>*/}
                      </div>
              
                      <div className="transformador"> 
                        <img src={secoImg} alt="Transformador 2" />
                        {/*<h3>Análisis y Diagnóstico especializado</h3>*/}
                      </div>

                      <div className="transformador"> 
                        <img src={secoImg} alt="Transformador 3" />
                        {/*<h3>Análisis y Diagnóstico especializado</h3>*/}
                      </div>
                    </div>

                        <div className="transformador-detalles">
                          <h2>TITULO DE EVALUACION DE TRANSFORMADORES</h2>
                          <p>
                          En <strong>Boosting SAS</strong> somos especialistas de tal tal tal 
                            </p>
                          <ul className="lista-diagnostico">
                            <li>✔ Ta ta ta ta</li>
                            
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
