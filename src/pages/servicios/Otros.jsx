import '../../styles/Otros.css';
import { motion } from 'framer-motion';
import seccionadores from "../../assets/otros/seccionadores.jpeg"; // reemplaza por tu ruta real
import paneles from "../../assets/otros/paneles.png";
import rack from "../../assets/otros/rack.png";
import { Helmet } from "react-helmet";

function otros() {
  return (

    <>
    <Helmet>
        <title>Otros Servicios | Boosting</title>
      </Helmet>

    <div>
      {/* Banner principal */}
      <section className="otros-banner">
        <div className="banner-content">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            OTROS
          </motion.h1>
          <motion.p
            className="banner-subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          ><strong>
           Servicios Electrotécnicos Complementarios y Proyectos a la Medida.<br />
            </strong>
          </motion.p>
        </div>
      </section>

      {/* Sección básica de texto */}
      

      {/* Nueva sección visual y técnica */}
      <section className="otros-wrapper">
         {/* Encabezado animado */}
      <motion.section 
        className="otros-header"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      ></motion.section>
        <div className="otros-contenido">
           <p>
          En <strong>Boosting SAS</strong> entendemos que la confiabilidad de sus operaciones depende de una infraestructura eléctrica robusta y bien planificada. 
          Por ello, complementamos nuestros servicios de diagnóstico y mantenimiento con Soluciones Integrales y Soporte Especializado en Infraestructura Eléctrica.
             </p>
          <p>Esta área está diseñada para abarcar las necesidades auxiliares y de proyecto de su empresa, asegurando que cada componente, desde la generación hasta el
          punto de consumo, opere con máxima eficiencia y seguridad.</p>
            
         

          <div className="tipos-otros"> 
          <div className="otros"> 
          <img src={paneles} alt="otros hidraulico" />
          <h3>Paneles Solares</h3>
          
        </div>

        <div className="otros"> 
          <img src={seccionadores} alt="otros seco" />
          <h3>Interruptores y seccionadores</h3>
          
        </div>

        <div className="otros"> 
          <img src={rack} alt="Turbootros" />
          <h3>Montajes eléctricos y de comunicaciones</h3>
          
        </div>
      </div>
        
        </div>
      </section>
    </div>
    </>
  );
}

export default otros;
