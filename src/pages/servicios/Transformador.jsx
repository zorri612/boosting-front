import '../../styles/Transformador.css';
import { motion } from 'framer-motion';
import aceiteImg from "../../assets/transformador-aceite.png"; // reemplaza por tu ruta real
import secoImg from "../../assets/transformador-seco.png"; // reemplaza por tu ruta real
import { Helmet } from "react-helmet";

function Transformador() {
  return (
    <>
    <Helmet>
        <title>Transformador | Boosting</title>
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
            Transformador
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
      <div className="actuador-wrapper">
      {/* Encabezado animado */}
      <motion.section 
        className="actuador-header"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        
        <p>
          Los <strong>Transformadores</strong> son dispositivos eléctricos que permiten convertir
          la energía eléctrica alterna de un nivel de tensión a otro mediante la
          inducción electromagnética. Están compuestos por bobinas devanadas sobre
          un núcleo de material ferromagnético, aisladas entre sí.</p>
      </motion.section>
      </div>
      

      {/* Nueva sección visual y técnica */}
      <section className="transformadores-container">
    
      <div className="tipos-transformador">
        <div className="transformador">
          <img src={aceiteImg} alt="Transformador en aceite" />
          <h3>Transformador Sumergido en Aceite</h3>
          <ul>
            <li>Ideal para exteriores</li>
            <li>Utiliza aceite como aislante</li>
            <li>Mayor capacidad de enfriamiento</li>
          </ul>
        </div>

        <div className="transformador">
          <img src={secoImg} alt="Transformador seco" />
          <h3>Transformador Seco</h3>
          <ul>
            <li>Ideal para interiores</li>
            <li>Sin líquidos aislantes</li>
            <li>Mayor seguridad ante incendios</li>
          </ul>
        </div>
      </div>

      <div className="diagnosticos">
        <h3>Diagnósticos y Servicios</h3>
        <ul>
          <li> Análisis por cromatografía de gases disueltos (DGA)</li>
          <li> Análisis de contenido de Policlorobifenilos (PCBs)</li>
          <li>Análisis de Furanos (si no ha sufrido tratamientos de regeneración)</li>
          <li>Análisis de Respuesta en Frecuencia (SFRA)</li>
          <li>Análisis de Respuesta dieléctrica (FDS o FDR)</li>
          <li>Relación de transformación (TTR)</li>
          <li>Polaridad</li>
          <li>Curvas de saturación</li>
          <li>Resistencia de aislamiento</li>
          <li> Índice de polarización (IP)</li>
          <li>Índice de absorción (DAR)</li>
          <li>Índice de descarga dieléctrica (DD)</li>
          <li>Resistencia de devanados</li>
          <li>Factor de Disipación o Tangente delta (FD)</li>
          <li> Descargas parciales (DP)</li>
          <li>Termografía</li>
          <li>Análisis de vibración a bases de sujeción</li>
        </ul>
      </div>
    
    </section>
    </div>
    </>
  );
};


export default Transformador;
