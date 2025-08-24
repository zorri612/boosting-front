// src/components/AboutUs/AboutUs.jsx

import React from 'react';
import '../styles/AboutUs.css';

const AboutUs = () => {
  // Array de objetos para los casos de éxito
  const successCases = [
    {
      title: "Alcance Internacional",
      text: `Hemos expandido nuestras fronteras, llevando nuestra experiencia a países como Belice,
            donde trabajamos en un destacado proyecto junto a INELEC CORP USA, y en Honduras,
            apoyando en el diagnóstico técnico a ENEE, la principal empresa de energía del país. Estas
            alianzas internacionales son un reflejo de nuestra capacidad para entregar resultados
            excepcionales, sin importar el lugar.`,
      imagePlaceholder: "Imagen del proyecto 1"
    },
    {
      title: "Alcance Nacional",
      text: `En el ámbito nacional, Boosting S.A.S. ha instalado sistemas de monitoreo ONLINE de
            descargas parciales para unidades de generación en empresas como GENSA, mejorando
            la seguridad y la operatividad de estos activos críticos. Además, hemos sido el soporte
            técnico clave en la reparación de transformadores de potencia de 80 MVA, garantizando la
            continuidad operativa de estas unidades esenciales.`,
      imagePlaceholder: "Imagen del proyecto 2"
    },
    {
      title: "Experiencia Local",
      text: `Nuestro alcance también incluye más de 100 servicios de medición específica en activos
            de potencia en Cali y el Valle del Cauca, evaluando sistemas cerrados de potencia para
            diferentes empresas. Cada uno de estos servicios está diseñado para optimizar el
            rendimiento y la vida útil de los activos eléctricos de nuestros clientes.
            `,
      imagePlaceholder: "Imagen del proyecto 3"
    },
    {
      title: "Monitoreo Online de Descargas Parciales 2024",
      text: `Entre nuestros casos de éxito más destacados del 2024 se encuentra la implementación de
            un sistema de monitoreo ONLINE de descargas parciales en una unidad de 87 MVA. Este
            sistema no solo permitió la adquisición y análisis de datos en tiempo real, sino que
            también proporcionó la trazabilidad necesaria para tomar decisiones estratégicas sobre la
            operación y el mantenimiento del equipo. Gracias a esta solución, se garantizó la
            integridad del activo y la seguridad de las operaciones, maximizando su vida útil y
            optimizando los costos para nuestro cliente.
`,
      imagePlaceholder: "Imagen del proyecto 4"
    },
  ];

  return (
    <div className="aboutUsContainer">
      <h1><strong><span className="text-electric"> Sobre Nosotros</span></strong></h1>

      <div className="introSection">
        <p>
          Aquí puedes poner una breve introducción a tu empresa.
          Algo que capture la esencia de lo que hacen antes de entrar en los detalles.
        </p>
      </div>

      {/* Sección 1: Nuestra Historia */}
      <div className="sectionCard">
        <div className="imagePlaceholder">
          Espacio para una imagen de la fundación
        </div>
        <div className="content">
          <h2 className="cardTitle">Nuestra Historia</h2>
          <p>
            <strong>Boosting</strong>, fundada en <strong>2021</strong>, comenzó como una empresa dedicada a
            ofrecer soluciones integrales de ingeniería en mantenimiento basado en
            condición, con el objetivo de mejorar la confiabilidad e integridad industrial.
            A través del cumplimiento riguroso de normativas aplicables y el uso de
            métodos precisos de medición y análisis, buscaba garantizar resultados
            óptimos y confiables para sus clientes.
            Desde sus inicios, Boosting tuvo la visión de consolidarse como un aliado
            estratégico de calidad, brindando confianza y seguridad en cada servicio.
            Además, aspiraba a expandir su alcance a nivel internacional, llevando sus
            soluciones innovadoras a nuevas industrias y mercados.
          </p>
        </div>
      </div>

      {/* Sección 2: Nuestro Presente */}
      <div className="sectionCard reversed">
        <div className="imagePlaceholder">
          Espacio para una imagen del equipo actual o de sus oficinas
        </div>
        <div className="content">
          <h2 className="cardTitle">Nuestro Presente</h2>
          <p>
            Hoy, <strong>Boosting</strong> se ha consolidado como un aliado estratégico y confiable para
            grandes industrias en Colombia, con presencia en Valle del Cauca, Boyacá,
            Cundinamarca, Antioquia y Cauca, atendiendo sectores como energía, alimentos,
            químicos, plásticos y combustibles.
            Además, ha expandido sus operaciones a <strong>Centroamérica</strong>, realizando
            mantenimiento de activos de potencia superiores a 10 MW en <strong>Belice</strong> y
            <strong>Honduras</strong>.
            Con más de <strong>100 intervenciones exitosas</strong> en actualización, mantenimiento y
            reparación de activos eléctricos, Boosting ha alcanzado sus metas,
            posicionándose como un referente en confiabilidad y excelencia industrial.
          </p>
        </div>
      </div>

      {/* Sección 3: Nuestro Futuro */}
      <div className="sectionCard">
        <div className="imagePlaceholder">
          Espacio para una imagen de la visión a futuro o un proyecto innovador
        </div>
        <div className="content">
          <h2 className="cardTitle">Nuestro Futuro</h2>
          <p>
            Para el año 2028, Boosting se consolidará como una empresa especialista en la
            <strong> reparación, mantenimiento y diagnóstico</strong> de <strong>transformadores
            y máquinas rotativas</strong>, ofreciendo soluciones avanzadas y personalizadas para la industria.
            Nuestro compromiso es ser reconocidos por la calidad y excelencia en cada
            intervención, posicionándonos como referentes en confiabilidad y desempeño.
            Además, impulsaremos la transformación digital en la gestión de activos,
            proporcionando a nuestros clientes herramientas innovadoras que optimicen sus
            procesos (IA’s, Dashboard) con los que se garantizará una administración eficiente,
            rápida y precisa de sus equipos, facilitando la toma de decisiones estratégicas.
          </p>
        </div>
      </div>

      {/* Sección 4: Casos de Éxito */}
      <div className="successCasesSection">
        <h2 className="successCasesTitle">Experiencia y Casos de Éxito</h2>
        <p className="successCasesIntro">
          Nuestra experiencia se mide en los resultados que entregamos. Estos son algunos de nuestros proyectos más destacados, donde hemos demostrado nuestro compromiso con la excelencia y la innovación.
        </p>

        <div className="casesGrid">
          {successCases.map((caso, index) => (
            <div key={index} className="caseCard">
              <div className="caseImagePlaceholder">
                {caso.imagePlaceholder}
              </div>
              <h3 className="caseTitle">{caso.title}</h3>
              <p className="caseText">
                {caso.text}
              </p>
            </div>
          ))}
        </div>
        <p className="successCasesOutro">
          En <strong>Boosting S.A.S.</strong>, combinamos experiencia, innovación y un enfoque personalizado para
          llevar a nuestros clientes al siguiente nivel. Nuestros logros son el testimonio de nuestro
          compromiso con la excelencia, la confiabilidad y el impacto positivo en la industria
          eléctrica.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;