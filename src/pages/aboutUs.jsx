import { Helmet } from "react-helmet";

export default function About() {
    return (
      <>
<Helmet>
        <title>Sobre Nosotros | Boosting</title>
      </Helmet>

      <div className="container py-5">
        <h1 className="h3 mb-3">SOBRE NOSOTROS</h1>
        <p>Diseño y mantenimiento de líneas de transmisión eléctrica.</p>
      </div>
      </>
    );
  }
  