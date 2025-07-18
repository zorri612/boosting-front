import '../../styles/Actuador.css';
import actuador1 from '../../assets/actuador1.png';
import actuador2 from '../../assets/actuador2.png';
import { motion } from 'framer-motion';
import { Helmet } from "react-helmet";

function Actuador() {
  return (

    <>
    <Helmet>
        <title>Actuador | Boosting</title>
      </Helmet>

    <div>
      {/* Banner principal */}
      <section className="actuador-banner">
        <div className="banner-content">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            ACTUADOR
          </motion.h1>
          <motion.p
            className="banner-subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          ><strong>
            Hidroactuadores, Turboactuadores, Plantas Diésel,<br />
            Dinamómetros de media potencia
            </strong>
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
        <h1>¿Qué es un Actuador?</h1>
        <p>
          Un <strong>actuador</strong> es un dispositivo que transforma energía hidráulica, neumática o eléctrica en un efecto físico dentro de un proceso automatizado.
        </p>
      </motion.section>

      {/* Contenido principal en 2 columnas */}
      <section className="actuador-info">
        <div className="actuador-texto">
          <p>
            Este dispositivo recibe órdenes desde una unidad de control para accionar un elemento final, como una válvula. Son claves para el correcto funcionamiento de sistemas automatizados, ajustando señales según la necesidad del proceso.
          </p>
          <h3>Tipos de actuadores:</h3>
          <ul>
          🔹<a 
            href="https://es.wikipedia.org/wiki/Actuador#Actuadores_hidr%C3%A1ulicos" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Hidráulicos
          </a>
            <li>🔹<a 
            href="https://es.wikipedia.org/wiki/Actuador_neum%C3%A1tico" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Neumáticos
          </a></li>
            <li>🔹<a 
            href="https://suspaintecnica.es/blog/funciones-actuadores-
            electricos-n46#:~:text=Los%20actuadores%20el%C3%A9ctricos%20
            son%20dispositivos,y%20movimientos%20lineales%20o%20rotativos." 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Eléctricos
          </a></li>
            <li>🔹<a 
            href="https://industriasgsl.com/blogs/automatizacion/actuador-
            automatico?srsltid=AfmBOorIii_jgqRk65J9tRZS9l6cakwCaoQ0s_lscyx4UvP1GfNwSQ_d" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Automáticos
          </a></li>
          </ul>
          <p>
            Los actuadores hidráulicos, neumáticos y eléctricos se utilizan comúnmente en sistemas mecatrónicos. Se eligen en función del tipo de trabajo requerido: potencia, precisión o posicionamiento.
          </p>
        </div>
        <div className="actuador-imagenes">
          <img src={actuador1} alt="Actuador eléctrico" />
          <img src={actuador2} alt="Actuador industrial" />
        </div>
      </section>

      {/* Comparación técnica */}
      <section className="actuador-detalles">
        <h2>Aplicaciones y Consideraciones</h2>
        <p>
          🔧 <strong>Actuadores hidráulicos:</strong> ideales para tareas de alta potencia, aunque requieren sistemas complejos de energía y mantenimiento constante.<br />
          💨 <strong>Actuadores neumáticos:</strong> buenos para movimientos simples, pero limitados en precisión.<br />
          ⚡ <strong>Actuadores eléctricos:</strong> ofrecen control fino y fácil integración en sistemas automatizados.
        </p>
      </section>
    </div>
    </div>
    </>
  );
}

export default Actuador;
