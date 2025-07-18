import '../styles/Contacto.css';
import { motion } from 'framer-motion';
import { FaFacebookF, FaInstagram, FaLinkedin, FaYoutube,  } from 'react-icons/fa';
import {FaXTwitter} from 'react-icons/fa6';
import { Helmet } from "react-helmet";


function Contacto() {
  return (
<>
    <Helmet>
        <title>Contacto | Boosting</title>
      </Helmet>
    
    <><section className="contacto-container">
      <motion.h2
        className="contacto-title"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        ¡Contáctanos!
      </motion.h2>
      <div className='contacto-numeros'>
        <p>
          <img src="img/whatsappblack.png" alt="wpp_logo" width={45} height={45} />
          <strong>  +57 3215421054 </strong>
        </p>
      </div>

      <div className="contacto-content">
        {/* Formulario */}
        <motion.form
          className="contacto-form"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <p>Hola</p>
          <label>Nombre</label>
          <input type="text" placeholder="Tu nombre completo" />

          <label>Email</label>
          <input type="email" placeholder="tucorreo@ejemplo.com" />

          <label>Mensaje</label>
          <textarea rows="5" placeholder="Escribe tu mensaje aquí..."></textarea>

          <button type="submit">Enviar Mensaje</button>
        </motion.form>

        {/* Imagenes decorativas animadas */}
        <motion.div
          className="contacto-images"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.img
            src="img/contacto1.jpg"
            alt="Ilustración 1"
            className="img-hover"
            whileHover={{ scale: 1.05 }} />
          <motion.img
            src="img/contacto2.jpg"
            alt="Ilustración 2"
            className="img-hover"
            whileHover={{ scale: 1.05 }} />
        </motion.div>
      </div>
    </section>
     {/* Sección de Redes Sociales */}
     <section className='contacto-container redes-sociales'>
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Síguenos en nuestras redes sociales
        </motion.h3>
        <div className="iconos-redes">
          <div className='fb-icon'>
          <motion.a href="https://facebook.com" target="_blank" whileHover={{ scale: 1.2 }}>
            <FaFacebookF />
          </motion.a>
          </div>
          <motion.a href="https://instagram.com" target="_blank" whileHover={{ scale: 1.2 }}>
            <FaInstagram />
          </motion.a>
          <motion.a href="https://linkedin.com" target="_blank" whileHover={{ scale: 1.2 }}>
            <FaLinkedin />
          </motion.a>
          <motion.a href="https://youtube.com" target="_blank" whileHover={{ scale: 1.2 }}>
            <FaXTwitter/>
          </motion.a>
        </div>
      </section>
    </>
    </>
  );
}

export default Contacto;
