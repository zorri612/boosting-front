// src/components/AboutUs/AboutUs.jsx

import React from 'react';
import '../styles/Blog.css';
import { Helmet } from "react-helmet";


const Blog = () => {
  // Array de objetos para los casos de éxito
  
  return (
    <>
      <Helmet>
        <title>Blog | Boosting</title>
      </Helmet>
    <div className="aboutUsContainer">
      <h1><strong><span className="text-electric"> Blog</span></strong></h1>

      <div className="introSection">
        <p>
        Explora nuestro <strong>Blog Boosting SAS</strong>, el espacio donde compartimos nuestra contribución al conocimiento técnico. Aquí encontrarás las publicaciones y hallazgos de nuestros investigadores en estudios nacionales e internacionales, reflejando nuestra constante búsqueda de innovación.
        </p>
        <p>Algunos de nuestros artículos <strong>destacados</strong> están a continuación:</p>
      </div>

      {/* ARTICULO 1*/}
      <div className="sectionCard">
        <div className="imagePlaceholder">
          <img src="/img/blog/articulo1.png" alt="Nuestra Historia" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
        <div className="content">
          <h2 className="cardTitle">Conjunto de datos de imágenes termográficas para la detección de minas terrestres enterradas.</h2>
          <h4>Resumen</h4>
          <p>
            Este artículo presenta un conjunto de datos de imágenes termográficas de terrenos con minas antipersonales para identificar la presencia o ausencia de estos artefactos mediante técnicas de aprendizaje automático y visión artificial. El conjunto de datos cuenta con 2700 imágenes termográficas adquiridas a diferentes alturas, utilizando una cámara infrarroja Zenmuse XT (7-13 µm), integrada en el dron DJI Matrice 100. El experimento de adquisición de datos consiste en capturar imágenes aéreas infrarrojas de un terreno en el que se enterraron elementos con características similares a las minas antipersonales tipo legbreaker. Las minas se colocaron en el suelo a una profundidad de entre 0 y 10 cm y se distribuyeron en un área de 10 m x 10 m. El dron utilizó un protocolo de vuelo que establecía la trayectoria, la duración del vuelo, la altura de adquisición y la frecuencia de muestreo de las imágenes. Este conjunto de datos se utilizó en «Detección de minas terrestres antipersonales «legbreaker» mediante el análisis de imágenes termográficas aéreas del suelo».
          </p>
          <a 
            href="https://www.sciencedirect.com/science/article/pii/S2352340923005437?via%3Dihub" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Leer más
          </a>
        </div>
      </div>

      {/* ARTICULO 2 */}
      <div className="sectionCard reversed">
        <div className="imagePlaceholder">
          <img src="/img/blog/articulo2.png" alt="Nuestra Historia" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
        <div className="content">
          <h2 className="cardTitle">Detección de minas antipersonales del tipo «legbreakers» mediante el análisis de imágenes termográficas captadas desde un dron a diferentes alturas.</h2>
          <h4>Resumen</h4>
          <p>
            Se presenta un método para la detección de minas antipersonales de plástico denominadas «rompepiernas» a partir de imágenes del terreno obtenidas de forma remota por un dron a alturas comprendidas entre 1 y 5 m. La propuesta alcanzó una precisión del 92,13 % y una sensibilidad del 82,4 % al evaluar el rendimiento en 260 imágenes de prueba, un número superior al utilizado en trabajos anteriores, y con minas enterradas en terreno real con presencia de vegetación. Lo anterior en imágenes obtenidas en diferentes fechas con diferentes condiciones ambientales y humedad del suelo. Además, se comprobó que el método se adaptaba a tres cámaras termográficas diferentes, siendo necesario únicamente ajustar el parámetro gamma asociado a la técnica de mejora del contraste térmico utilizada. Se corroboró que las minas son más fáciles de detectar cuanto más superficialmente están enterradas y cuando la altura de vuelo del dron se encuentra entre 1 y 2 m. Por último, cabe destacar que la propuesta tiene el potencial de ejecutarse en sistemas de procesamiento a bordo del dron, gracias a la simplicidad de su algoritmo.
          </p>
          <a href="https://www.sciencedirect.com/science/article/pii/S1350449524004511?via%3Dihub">Leer más</a>
        </div>
      </div>
      
      {/* ARTICULO 3 */}
      <div className="sectionCard ">
        <div className="imagePlaceholder">
          <img src="/img/blog/articulo3.png" alt="Artículo 3" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
        <div className="content">
          <h2 className="cardTitle">Detección de minas terrestres antipersonales «rompepiernas» mediante el análisis de imágenes termográficas aéreas del suelo.</h2>
          <h4>Resumen</h4>
          <p>
          Se desarrolló una metodología de detección automática de minas terrestres antipersonales (APL) «rompepiernas» basada en técnicas de procesamiento de imágenes digitales y reconocimiento de patrones, aplicada a imágenes térmicas obtenidas mediante un vehículo aéreo no tripulado (UAV) equipado con una cámara térmica. Las imágenes se obtuvieron a partir de la inspección de un terreno natural con vegetación escasa y en condiciones no controladas, en el que se enterraron prototipos de APL «rompepiernas» a diferentes profundidades. Se obtuvieron resultados notables utilizando un clasificador Multilayer Perceptron (MLP), alcanzando porcentajes medios de éxito en la detección de áreas sospechosas con presencia de estos artefactos de alrededor del 97,1 % para imágenes adquiridas a 1 m del suelo y del 88,8 % a altitudes superiores.
          </p>
          <a href="https://www.sciencedirect.com/science/article/pii/S1350449522002882?via%3Dihub">Leer más</a>
        </div>
      </div>

      {/* ARTICULO 4*/}
      <div className="sectionCard reversed">
        <div className="imagePlaceholder">
          <img src="/img/blog/articulo4.png" alt="Artículo 4"/>
        </div>
        <div className="content">
          <h2 className="cardTitle">Conjunto de datos de imágenes resueltas por fase de descargas parciales internas, en corona y superficiales en generadores eléctricos.</h2>
          <h4>Resumen</h4>
          <p>
            Este artículo presenta el proceso de recopilación de datos para la clasificación de descargas parciales en generadores eléctricos utilizando imágenes en formato PNG. Los datos se recopilaron mediante mediciones de campo en más de 40 generadores en diversas ubicaciones de Colombia, además de utilizar un simulador de descargas parciales proporcionado por Omicron Energy.
A lo largo del proceso de recopilación, se prestó especial atención a la precisión y coherencia de las imágenes, evitando deformaciones y distorsiones que pudieran afectar a la naturaleza de las descargas parciales. Se hizo hincapié en lograr una alta resolución en los patrones de resolución de fase (PRPD) para correlacionarlos eficazmente con el fenómeno físico adyacente. El análisis se centró en clasificar las imágenes según el tipo de descarga parcial, identificándolas como descargas internas, superficiales o corona. Los patrones de impulsos obtenidos se representan en color RGB, lo que ayuda a evaluar la repetibilidad de los impulsos a lo largo de su distribución.
Estos datos tienen potencial para el desarrollo de software de clasificación de patrones para sistemas de monitorización de generadores. Permiten el entrenamiento y la validación de algoritmos de clasificación, lo que simplifica la detección y el análisis automatizados de descargas parciales en generadores eléctricos. Su aplicabilidad se extiende más allá de la industria eléctrica y puede ser valiosa en otros campos que requieren un análisis complejo de señales y patrones.
          </p>
          <p>
            El artículo destaca el riguroso proceso de recopilación de datos y el preciso análisis realizado para obtener un valioso conjunto de imágenes en formato PNG para la clasificación de descargas parciales. Estos datos tienen un gran potencial para mejorar el software de clasificación de patrones, lo que impulsará el progreso en la supervisión y el análisis de los generadores eléctricos.
          </p>
          <a href="https://www.sciencedirect.com/science/article/pii/S2352340923010223?via%3Dihub">Leer más</a>
        </div>
      </div>
      


      {/* ARTICULO 5 */}
      <div className="sectionCard">
        <div className="imagePlaceholder">
          <img src="/img/blog/articulo5.png" alt="Artículo 5" />
        </div>
        <div className="content">
          <h2 className="cardTitle">Técnicas para el diagnóstico de transformadores de potencia: Una revisión crítica.</h2>
          <h4>Resumen</h4>
          <p>
            Los sistemas de transmisión de energía eléctrica comprenden un enlace fundamental en el sector productivo y social de un país. Uno de los principales componentes de estos sistemas son los transformadores de potencia que permiten la exportación de energía en alta tensión a grandes distancias. La falla de un transformador de potencia puede conllevar el colapso parcial o total de un sistema eléctrico. Existen diversas técnicas para el mantenimiento y diagnóstico de dichos equipos. En este trabajo se realiza una revisión crítica de ocho de las principales técnicas de diagnóstico de transformadores de potencia incluyendo una descripción básica y evolución histórica, teniendo en cuenta que actualmente son aplicadas en línea o que tienen un alto potencial para llegar a serlo.
          </p>
          <a href="https://www.scielo.cl/scielo.php?pid=S0718-33052020000200184&script=sci_abstract">Leer más</a>

          
        </div>
      </div>

    </div>
    </>
  );
};

export default Blog;