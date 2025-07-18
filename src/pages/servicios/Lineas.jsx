import '../../styles/Lineas.css';
import { motion } from 'framer-motion';
import lineastransmisionImage from '../../assets/drone.png'; // Asegúrate de tener esta imagen
import { Helmet } from "react-helmet";

function Lineas() {
  return (
<>
    <Helmet>
        <title>Lineas de Transmisión | Boosting</title>
      </Helmet>

    <div>
      {/* Banner principal */}
      <section className="lineastransmision-banner">
        <div className="banner-content">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Líneas de Transmisión
          </motion.h1>
          <motion.p
            className="banner-subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
           <strong>Drones de Alta Tecnología<br /></strong> 
           
          </motion.p>
        </div>
      </section>

      {/* Sección básica de texto */}
      

      {/* Nueva sección visual y técnica */}
      <section className="lineastransmision-wrapper">
        <div className="lineastransmision-contenido">
           <p>
           Una línea de alta tensión es un medio físico mediante el cual se realiza la transmisión de energía eléctrica a grandes distancias. 
           La constituye tanto el componente conductor, generalmente cables de acero, aluminio o cobre, como sus elementos de soporte, 
           las torres de alta tensión. Para mantener una revisión y mantenimiento continúo es necesario realizar inspecciones técnicas y
            es aquí donde entran en juego los drones, caracterizados por mejorar los resultados y abaratar los costes respecto a los medios convencionales.
             </p>
            <p>

           |  Una de las novedades más importantes y que supone un avance a la hora de realizar inspecciones con drones es el equipamiento de la aeronave 
              con tres sensores para la realización de tres tipos de imágenes. Por un lado está la grabación en HD (Alta Resolución / RGB), por otro la grabación
              termográfica para detectar los puntos de calor y por último la grabación ultravioleta. Esta última sirve para detectar el ‘efecto corona’, un tipo
              de fenómeno que se produce en las líneas eléctricas y que genera una de las principales fuentes de pérdida de energía. Además produce óxidos nitrosos
              que pueden ser perjudiciales para la salud en zonas pobladas, por lo que es fundamental realizar una grabación precisa y comprobar  el buen funcionamiento de la red
              </p>
          <div className="lineastransmision-imagen">
            <img src={lineastransmisionImage} alt="lineastransmision eléctrico" />
          </div>
          <div className="lineastransmision-detalles">
            <h2>Evaluación integral de lineastransmisiones eléctricos</h2>
            <p>
            En Boosting SAS somos especialistas en la evaluación de la condición de los lineastransmisiones
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

export default Lineas;
