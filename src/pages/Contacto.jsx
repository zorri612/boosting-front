import '../styles/Contacto.css';
import { motion } from 'framer-motion';
import { FaFacebookF, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { Helmet } from "react-helmet";
import TeamSection from './TeamSection';
import { useState } from 'react';
import Modal from '../components/Modal';

function Contacto() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: ''
  });

  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:4000/enviar-correo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        alert('¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto.');
        setFormData({ nombre: '', email: '', mensaje: '' });
      } else {
        alert('Hubo un problema al enviar tu mensaje. Por favor, intenta de nuevo más tarde.');
        
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Hubo un error de conexión con el servidor. Por favor, revisa tu conexión e intenta de nuevo.');
      
    }
  };

  // ⚠️ Agrega esta función para cerrar el modal
  const handleCloseModal = () => {
    setShowModal(false);
  };
  
  return (
    <>
      <Helmet>
        <title>Contacto | Boosting</title>
      </Helmet>
      
      <section className="contacto-container">
        <motion.h2
          className="contacto-title"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          ¡Contáctanos!
        </motion.h2>
        
        <div>
          <TeamSection />
        </div>

        <div className="contacto-content">
          <motion.form
            className="contacto-form"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
          >
            <h4 style={{ margin: '50px' }}>
              Si lo prefieres, déjanos tu información
              y te contactamos por correo electrónico.
            </h4>

            <label>Nombre</label>
            <input 
              type="text" 
              placeholder="Tu nombre completo" 
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              required 
            />

            <label>Email</label>
            <input 
              type="email" 
              placeholder="tucorreo@ejemplo.com" 
              name="email"
              value={formData.email}
              onChange={handleChange}
              required 
            />

            <label>Mensaje</label>
            <textarea 
              rows="5" 
              placeholder="Escribe tu mensaje aquí..."
              name="mensaje"
              value={formData.mensaje}
              onChange={handleChange}
              required 
            ></textarea>

            <button type="submit">Enviar Mensaje</button>
          </motion.form>

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
              whileHover={{ scale: 1.05 }}
            />
            <motion.img
              src="img/contacto2.jpg"
              alt="Ilustración 2"
              className="img-hover"
              whileHover={{ scale: 1.05 }}
            />
          </motion.div>
        </div>
      </section>

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

      {/* ⚠️ Esto es lo que faltaba en el código */}
      <Modal 
        show={showModal} 
        message={modalMessage} 
        onClose={handleCloseModal} 
      />
    </>
  );
}

export default Contacto;