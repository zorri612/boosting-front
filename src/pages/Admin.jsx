import "../styles/Acceso.css";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { FaUser, FaHardHat } from "react-icons/fa";

export default function Acceso() {
  return (
    <>
      <Helmet>
        <title>Acceso | Boosting</title>
      </Helmet>

    <section className="accesoContainer">
      <h2 className="accesoTitle">Selecciona tu tipo de acceso</h2>

      <div className="accesoGrid">
        {/* Cliente */}
        <motion.div
          className="accesoCard"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        >
          <FaUser className="accesoIcon" />
          <h3>Cliente</h3>
          <p>Acceso para clientes y aliados</p>
        </motion.div>

        {/* Trabajador */}
        <motion.div
          className="accesoCard"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        >
          <FaHardHat className="accesoIcon" />
          <h3>Trabajador</h3>
          <p>Acceso interno para colaboradores</p>
        </motion.div>
      </div>
    </section>

    </>
  );
}
