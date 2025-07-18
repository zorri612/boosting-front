import '../../styles/Motor.css';
import { motion } from 'framer-motion';
import motorImg from "../../assets/motor.png"; // reemplaza por tu ruta real
import motor2Img from "../../assets/motor2.png"; // reemplaza por tu ruta real
import { Helmet } from "react-helmet";


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
           <strong>motor de media tensión con cubiertas aisladas PVC, XLPE, EPR <br />
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

        <p className='motor-justy'>
        El motor eléctrico es un dispositivo que convierte la energía eléctrica 
        en energía mecánica de rotación por medio de la acción de los campos 
        magnéticos generados en sus bobinas. Son máquinas eléctricas rotatorias 
        compuestas por un estator y un rotor. Algunos de los motores eléctricos 
        son reversibles, ya que pueden convertir energía mecánica en energía eléctrica
         funcionando como generadores o dinamo. Los motores eléctricos de tracción
          usados en locomotoras o en automóviles híbridos realizan a menudo ambas
           tareas, si se diseñan adecuadamente. Son utilizados en infinidad de 
           sectores tales como instalaciones industriales, comerciales y particulares.
            Su uso está generalizado en ventiladores, vibradores para teléfonos móviles, 
            bombas, medios de transporte eléctricos, electrodomésticos, esmeriles angulares 
            y otras herramientas eléctricas, unidades de disco, etc.</p>
      </motion.section>
      </div>
      

      {/* Nueva sección visual y técnica */}
      <section className="motores-container">
    
      <div className="tipos-motor">
        <div className="motor">
          <img src={motorImg} alt="motor en aceite" />
        
        </div>
        <div className="motor">
          <img src={motor2Img} alt="motor en aceite" />
        
        </div>
        </div>
        <section>
        <div className='actuador-header'>
          <p className='motor-justy'>
          Los motores eléctricos pueden ser impulsados por fuentes de corriente continua (CC),
           y por fuentes de corriente alterna (CA). La corriente directa o corriente continua 
           proviene de las baterías, los paneles solares, dínamos, fuentes de alimentación 
           instaladas en el interior de los aparatos que operan con estos motores y con
            rectificadores. La corriente alterna puede tomarse para su uso en motores 
            eléctricos bien sea directamente de la red eléctrica, alternadores de las plantas
             eléctricas de emergencia y otras fuentes de corriente alterna bifásica o 
             trifásica como los inversores de potencia. Los pequeños motores se pueden
              encontrar hasta en relojes eléctricos. Los motores de uso general con dimensiones
               y características más estandarizadas proporcionan la potencia adecuada al uso
                industrial. Los motores eléctricos más grandes se usan para propulsión de 
                trenes, compresores y aplicaciones de bombeo con potencias que alcanzan 100
                 megavatios. Estos motores pueden ser clasificados por el tipo de fuente de
                  energía eléctrica, construcción interna, aplicación, tipo de salida de 
                  movimiento, etcétera.
                  </p>
            </div>
        </section>

  

    
    
    </section>
    </div>
    </>
  );

};


export default Motor;
