import '../../styles/Generador.css';
import { motion } from 'framer-motion';
import generadorImage from '../../assets/generador2.png'; // Asegúrate de tener esta imagen
import { Helmet } from "react-helmet";

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
            GENERADOR
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
           Un generador eléctrico es todo dispositivo capaz de transformar la energía mecánica en eléctrica.
            Esta transformación se consigue por la acción de un campo magnético sobre los conductores eléctricos
             dispuestos sobre una armadura (denominada también estátor). Todo el sistema basado principalmente en la ley de Faraday.
             </p>
            <p>
|           Sin embargo, este dispositivo necesita de un sistema de protección ante el control de la energía al que se le denomina
             sistema de aislamiento.
            Este sistema de aislamiento esta relacionado directamente con la vida útil del generador y con el funcionamiento libre
             de fallas en un porcentaje mayor al 60%, por lo que la evaluación de su condición es una prioridad para los dueños de dichas máquinas.
              </p>
          <div className="generador-imagen">
            <img src={generadorImage} alt="Generador eléctrico" />
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
