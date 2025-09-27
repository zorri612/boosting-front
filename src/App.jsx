import React from 'react';
import { useState, useRef, useEffect} from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './styles/index.css';
import {motion} from 'framer-motion';
import Blog from './pages/Blog';
import Contacto from './pages/Contacto';
import Generador from './pages/servicios/Generador';
import Lineas from './pages/servicios/Lineas';
import Actuador from './pages/servicios/Actuador';  
import Cables from './pages/servicios/Cables';
import Capacitaciones from './pages/servicios/Capacitaciones';
import Motor from './pages/servicios/Motor';
import Transformador from './pages/servicios/Transformador';
import Otros from './pages/servicios/Otros';
import Servicios from './pages/Servicios';
import About from './pages/aboutUs';
import InfoCardsSection from './pages/InfoCardsSection'; // Ajusta la ruta
import ServicesSection from './pages/ServicesSection'; // Ajusta la ruta


function Header() {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    // Esta función se ejecuta solo cuando el menú está abierto
    if (open && dropdownRef.current) {
      const dropdownElement = dropdownRef.current;
      const rect = dropdownElement.getBoundingClientRect();
      const viewportWidth = window.innerWidth;

      // Detecta si el menú está cerca del borde derecho
      const isNearRightEdge = (viewportWidth - rect.right) < 200; // 200px es un valor de ajuste
      
      // Si el menú está cerca del borde, añade la clase 'align-right'
      if (isNearRightEdge) {
        dropdownElement.classList.add('align-right');
      } else {
        dropdownElement.classList.remove('align-right');
      }
    }
  }, [open]); // Se ejecuta cada vez que el estado 'open' cambia

  return (
    <header className="bg-light shadow">
      <div className="container d-flex justify-content-between align-items-center py-3">
        <Link to="/" className="navbar-brand fw-bold text-primary">
          <img src="../../img/logo_black.png" width={100} height={100} alt="logo_boosting" />
        </Link>
        <nav className="d-flex align-items-center gap-3">
          <strong><Link to="/" className="nav-link">Home</Link></strong>
          
          {/* Dropdown principal */}
          <div 
            className="dropdown"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
            ref={dropdownRef} // Referencia para el elemento
          >
            <button
              className="dropdown-toggle-button"
              onClick={() => setOpen(!open)}
            >
              Servicios
            </button>
            <ul className={`dropdown-menu-custom ${open ? 'open' : ''}`}>
              <li className="has-submenu">
                <span className="dropdown-link">Máquinas rotativas ▸</span>
                <ul className="submenu">
                  <li><Link to="/servicios/generador">Generadores</Link></li>
                  <li><Link to="/servicios/motor">Motores</Link></li>
              </ul>
            </li>

            <li className="has-submenu">
              <span className="dropdown-link">Transformadores ▸</span>
              <ul className="submenu">
                <li><Link to="/servicios/transformadores/sumergidos">Sumergidos en aceite o ésteres</Link></li>
                <li><Link to="/servicios/transformadores/secos">Secos</Link></li>
                <li><Link to="/servicios/transformadores/autotransformadores">Autotransformadores</Link></li>
                <li><Link to="/servicios/transformadores/proteccion">Protección y medida</Link></li>
              </ul>
            </li>

            <li><Link to="/servicios/cables">Cables de potencia</Link></li>
            <li><Link to="/servicios/capacitaciones">Capacitaciones</Link></li>
            <li><Link to="/servicios/otros">Otros</Link></li>
          </ul>

          </div>
          <strong><Link to="/blog" className="nav-link">Blog</Link></strong>
          <strong><Link to="/contacto" className="nav-link">Contacto</Link></strong>
        </nav>
      </div>
    </header>
  );
}

function Body() {
  return (
    <main className="body-container">
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
      ></motion.div>
      <h1 className="body-title">
        Potenciamos tus Proyectos
      </h1>
      <h1 className="body-title">
         de<span className="text-electric"> Ingeniería Eléctrica</span>
      </h1>
      <h3 className="body-subtitle">
        Tecnología Avanzada para la gestión Inteligente de Activos de Potencia.
      </h3>
      <p className="body-subtitle">
        Diagnóstico | Monitoreo continuo | Soluciones Predictivas | Inteligencia Artificial
      </p>

      <div className="body-buttons">
        <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="btn btn-primary">
          Conocer Servicios
        </motion.button>

        <Link to="/aboutus" className="btn btn-outline-secondary">Sobre Nosotros</Link>
        </div>

        <div className="contenedor-introduccion-nuevos-servicios">
          <motion.div
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
        ></motion.div>
        <h2 className="titulo-introduccion-nuevos-servicios">
          Boosting se actualizó para ti.
        </h2>
        <h3 className="titulo-introduccion-nuevos-servicios">
          Explora nuestros <span className="text-electric"> Nuevos Servicios, </span>
          con la excelencia técnica de siempre.
        </h3>
        </div>


        <div className='body-info-cards'>
          <InfoCardsSection />
        </div>

        <div className='body-info-cards'>
          <ServicesSection />
        </div>
    </main>
  );
}

function Footer() {
  return (
    <footer className="bg-light text-center py-4 mt-5 border-top">
      <Link to="/" className="navbar-brand fw-bold text-primary" ><img src="../../img/logo_black.png" width={90} height={90} alt="logo_boosting" /></Link>
      <div>Ubicación: Carrera 100 #5-169 Oficina 509 B - Cali/ Colombia</div>
      <div>Presencia Nacional e Internacional</div>
      <div>Contacto: administración@boostingsas.com | +57 314 828 7297</div>
    </footer>
  );
}


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/servicios/:servicio" element={<Body />} />
        <Route path="/servicios/generador" element={<Generador />} />
        <Route path="/servicios/lineas" element={<Lineas />} />
        <Route path="/servicios/actuador" element={<Actuador />} />
        <Route path="/servicios/cables" element={<Cables />} />
        <Route path="/servicios/capacitaciones" element={<Capacitaciones />} />
        <Route path="/servicios/otros" element={<Otros />} />
        <Route path="/servicios/motor" element={<Motor />} />
        <Route path="/servicios/transformador" element={<Transformador />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/aboutus" element={<About />} />

        

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
