import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import gymImage from "./images/gym.jpg"; // Imagen de fondo

const Home = () => {
  return (
    <div className="home-container">
      <div className="overlay">
        <h1>Bienvenido a GymShark</h1>
        <p>Transforma tu cuerpo y mente con nuestros programas.</p>

        <div className="section">
          <div className="section-content">
            <h2>Cursos</h2>
            <p>
              En GymBase, ofrecemos una variedad de cursos especializados para
              ayudarte a alcanzar tus metas de fitness. Uno de nuestros cursos
              más populares es el <strong>"Entrenamiento Funcional"</strong>, 
              diseñado para mejorar la fuerza, resistencia y agilidad a través de ejercicios intensos y dinámicos. ¡Es ideal para cualquier persona
              que quiera estar en forma y desafiar sus límites!
            </p>
            <Link to="/cursos" className="cta-button">Explorar Cursos</Link>
          </div>
        </div>

        <div className="section">
          <div className="section-content">
            <h2>Entrenadores Personales</h2>
            <p>
              Nuestros entrenadores están certificados y listos para guiarte
              en cada paso de tu entrenamiento. Por ejemplo, 
              <strong> Laura Martínez</strong> es experta en entrenamiento de fuerza
              y nutrición deportiva. Con años de experiencia ayudando a sus
              clientes a alcanzar sus objetivos, Laura puede diseñar un plan
              personalizado para que consigas resultados efectivos y duraderos.
            </p>
            <Link to="/entrenadores" className="cta-button">
              Conoce a los Entrenadores
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
