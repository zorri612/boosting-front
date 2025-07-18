import '../../styles/Cables.css';
import { motion } from 'framer-motion';
import cableImg from "../../assets/cables.png"; // reemplaza por tu ruta real
import cable2Img from "../../assets/cables2.png"; // reemplaza por tu ruta real
import { Helmet } from "react-helmet";


function Cables() {
  return (

    <>
    <Helmet>
        <title>Cables | Boosting</title>
      </Helmet>

    <div>
      {/* Banner principal */}
      <section className="cables-banner">
        <div className="banner-content">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            CABLES DE MEDIA TENSIÓN
          </motion.h1>
          <motion.p
            className="banner-subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
           <strong>Cables de media tensión con cubiertas aisladas PVC, XLPE, EPR <br />
           de cualquier tipo de configuración interna
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

        <p className='cables-justy'>
        El término cable significa en su origen “cuerda”, del latín Capulum,
         o también del Hebreo Kabel de “cuerda fuerte”, cable eléctrico se le
          llama a una manguera de material aislante y protector que contiene 
          un conductor (también hilo eléctrico) aislado o conjunto de conductores
           aislados (conductor eléctrico), generalmente de cobre o aluminio. 
           Existen distintos tipos de cables tanto como configuraciones y usos,
            en especial en el ámbito industrial, los cables más usados son los
             recubiertos que oscilan entre niveles de tensión desde 5 KV hasta 60 KV.</p>
      </motion.section>
      </div>
      

      {/* Nueva sección visual y técnica */}
      <section className="cableses-container">
    
      <div className="tipos-cables">
        <div className="cables">
          <img src={cableImg} alt="cables en aceite" />
        
        </div>
        <div className="cables">
          <img src={cable2Img} alt="cables en aceite" />
        
        </div>
        </div>
        <section>
        <div className='actuador-header'>
          <p className='cables-justy'>
            En <strong>Boosting SAS </strong>sabemos que la importancia de un funcionamiento de un
             circuito libre de fallas tiene un impacto económico alto para el desarrollo de todas
              las empresas, por eso nos dedicamos a evaluar el estado de todos los activos posibles
               de los sistemas eléctricos para que no tengas que reaccionar ante estos eventos,
                sino que se puedan prever todas las posibilidades y soluciones antes de un siniestro.</p>
        </div>
        </section>

  

      <div className="diagnosticos">
        <p>
      Para estos activos en especial se ha dispuesto de las siguientes evaluaciones
       con las que de seguro tus activos contarán con una historia clínica de muy alto 
       nivel eliminando por completo fallas no previstas por desgastes en el sistema de aislamiento:
       </p>
        <ul>
          <li> Inyección de tensión de prueba a muy baja frecuencia (VLF)</li>
          <li>Prueba de Factor de Disipación o tangente delta (FD)</li>
          <li>Pruebas de Descargas Parciales con localización de falla</li>
          <li>Reflectometría en el dominio del tiempo (TDR)</li>
          <li>Termografía.</li>
          
        </ul>
      </div>
    
    </section>
    </div>
    </>
  );
};


export default Cables;
