import React from 'react';
import { useState } from 'react';
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
import Servicios from './pages/Servicios';
import About from './pages/aboutUs';


function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-light shadow">
      <div className="container d-flex justify-content-between align-items-center py-3">
        <Link to="/" className="navbar-brand fw-bold text-primary">
          <img src="../../img/logo_black.png" width={100} height={100} alt="logo_boosting" />
        </Link>

        <nav className="d-flex align-items-center gap-3">
          <strong><Link to="/" className="nav-link">Home</Link></strong>
          <strong><Link to="/blog" className="nav-link">Blog</Link></strong>
          <strong><Link to="/contacto" className="nav-link">Contacto</Link></strong>

          {/* Nuevo dropdown personalizado */}
          <div className="dropdown" onMouseLeave={() => setOpen(false)}>
            <button
              className="btn btn-outline-secondary dropdown-toggle"
              onClick={() => setOpen(!open)}
            >
              Servicios
            </button>

            <ul className={`dropdown-menu-custom ${open ? 'open' : ''}`}>
              <li><Link to="/servicios/generador" className="dropdown-item">Generador</Link></li>
              <li><Link to="/servicios/lineas" className="dropdown-item">Líneas de Transmisión</Link></li>
              <li><Link to="/servicios/actuador" className="dropdown-item">Actuador</Link></li>
              <li><Link to="/servicios/transformador" className="dropdown-item">Transformador</Link></li>
              <li><Link to="/servicios/cables" className="dropdown-item">Cables</Link></li>
              <li><Link to="/servicios/capacitaciones" className="dropdown-item">Capacitaciones</Link></li>
              <li><Link to="/servicios/motor" className="dropdown-item">Motor</Link></li>
            </ul>
          </div>

          <strong><button className="btn-acceder">Acceder</button></strong>
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-light text-center py-4 mt-5 border-top">
      <Link to="/" className="navbar-brand fw-bold text-primary" ><img src="../../img/logo_black.png" width={90} height={90} alt="logo_boosting" /></Link>
      <div className="fw-bold">BoostingSAS</div>
      <div>Ubicación: Calle Ficticia 123, Ciudad Imaginaria</div>
      <div>Contacto: contacto@boostingsas.com | +57 300 000 0000</div>
    </footer>
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
      <p className="body-subtitle">
        En BoostingSAS brindamos soluciones innovadoras, eficientes y seguras. Conoce nuestros servicios y transforma tus ideas en realidad.
      </p>
      <p className="body-subtitle">
        En BoostingSAS brindamos soluciones innovadoras, eficientes y seguras. Conoce nuestros servicios y transforma tus ideas en realidad.
      </p>
      <p className="body-subtitle">
        En BoostingSAS brindamos soluciones innovadoras, eficientes y seguras. Conoce nuestros servicios y transforma tus ideas en realidad.
      </p>
      <p className="body-subtitle">
        En BoostingSAS brindamos soluciones innovadoras, eficientes y seguras. Conoce nuestros servicios y transforma tus ideas en realidad.
      </p>
      <div className="body-buttons">
        <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="btn btn-primary">
          Conocer Servicios
        </motion.button>

        <Link to="/aboutus" className="btn btn-outline-secondary">Sobre Nosotros</Link>
        </div>
    </main>
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
