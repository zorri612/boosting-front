import '../../styles/Generador.css';
import { motion } from 'framer-motion';
import generadorImage from '../../assets/generador2.png'; // Asegúrate de tener esta imagen
import aceiteImg from "../../assets/transformador-aceite.png"; // reemplaza por tu ruta real
import secoImg from "../../assets/transformador-seco.png";
import { Helmet } from "react-helmet";

function Generador() {
  return (

    <>
    <Helmet>
        <title>Otros Servicios | Boosting</title>
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
            OTROS
          </motion.h1>
          <motion.p
            className="banner-subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          ><strong>
            Hidrogeneradores, Turbogeneradores, Plantas Diésel,<br />
            Dinamómetros de media potencia
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
          OTROS
             </p>
            
         

          <div className="tipos-generador"> 
          <div className="generador"> 
          <img src={aceiteImg} alt="Generador hidraulico" />
          <h3>Paneles Solares</h3>
          <ul>
            <li>Ideal para </li>
            <li>Utiliza  como </li>
            <li>Mayor  de </li>
          </ul>
        </div>

        <div className="generador"> 
          <img src={secoImg} alt="Generador seco" />
          <h3>Interruptores y seccionadores</h3>
          <ul>
            <li>Ideal</li>
            <li>Sin  </li>
            <li>Mayor  ante </li>
          </ul>
        </div>

        <div className="generador"> 
          <img src={secoImg} alt="Turbogenerador" />
          <h3>Montajes eléctricos y de comunicaciones</h3>
          <ul>
            <li>Ideal</li>
            <li>Sin  </li>
            <li>Mayor  ante </li>
          </ul>
        </div>
      </div>
        
          <div className="generador-detalles">
            <h2>Evaluación integral de generadores eléctricos</h2>
            <p>
            En Boosting SAS somos especialistas en la evaluación de la condición de los generadores
             a través de un conjunto de diagnósticos de forma integral para todos sus sistemas, 
             no solo el sistema de aislamiento sino también de sistemas como: Lubricación, Acoplamiento,
              Intercambiador, etc.). Todos estos a través de:
              </p>
            <ul className="lista-diagnostico">
              <li> Resistencia de aislamiento (IR)</li>
              <li> Índice de polarización (IP)</li>
              <li> Índice de absorción (DAR)</li>
              <li> Descarga dieléctrica (DD)</li>
              <li>Resistencia de devanados</li>
              <li> Tangente delta (FD)</li>
              <li> Descargas parciales (DP)</li>
              <li> Análisis de vibración</li>
              <li> Evaluación de lubricación</li>
              <li> Alineación láser</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}

export default Generador;
