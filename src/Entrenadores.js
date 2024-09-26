import React, { useState } from "react";
import { db } from "./firebase"; // Importa tu configuración de Firebase
import { collection, addDoc } from "firebase/firestore";
import "./Entrenadores.css"; // Importa tu archivo CSS para los estilos

const entrenadoresData = [
  {
    nombre: "Juan",
    apellidos: "Pérez",
    especializacion: "Entrenamiento Personalizado",
    descripcion: "Juan tiene más de 5 años de experiencia ayudando a personas a alcanzar sus metas de fitness. Se especializa en entrenamiento funcional y nutrición.",
    email: "juan.perez@gymshark.com",
  },
  {
    nombre: "María",
    apellidos: "Gómez",
    especializacion: "Yoga y Meditación",
    descripcion: "Con más de 8 años en la práctica de yoga, María ofrece clases que combinan relajación y fortalecimiento físico.",
    email: "maria.gomez@gymshark.com",
  },
  {
    nombre: "Carlos",
    apellidos: "López",
    especializacion: "Entrenamiento de Fuerza",
    descripcion: "Carlos es un apasionado del levantamiento de pesas y está aquí para ayudarte a maximizar tu fuerza y rendimiento.",
    email: "carlos.lopez@gymshark.com",
  },
  {
    nombre: "Ana",
    apellidos: "Martínez",
    especializacion: "Entrenamiento Cardiovascular",
    descripcion: "Ana se enfoca en la salud cardiovascular y ofrece rutinas de cardio personalizadas que se adaptan a las necesidades de cada cliente.",
    email: "ana.martinez@gymshark.com",
  },
  {
    nombre: "Luis",
    apellidos: "Fernández",
    especializacion: "Rehabilitación y Fisioterapia",
    descripcion: "Luis tiene experiencia en fisioterapia y se especializa en ayudar a las personas a recuperarse de lesiones a través de ejercicios específicos.",
    email: "luis.fernandez@gymshark.com",
  },
];

const Entrenadores = () => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    nombre: "",
    apellidos: "",
    telefono: "",
    correo: "",
    experiencia: "",
  });

  const [successMessage, setSuccessMessage] = useState(""); // Estado para el mensaje de éxito

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "entrenadores"), formData);
      setSuccessMessage("¡Gracias por tu currículum! Nos pondremos en contacto pronto."); // Mostrar mensaje
      
      // Ocultar el mensaje después de 3 segundos
      setTimeout(() => {
        setSuccessMessage("");
      }, 3000);

      setShowForm(false);
      setFormData({ nombre: "", apellidos: "", telefono: "", correo: "", experiencia: "" }); // Limpiar el formulario
    } catch (error) {
      console.error("Error al enviar información:", error);
      setSuccessMessage("Error al enviar tu currículum. Inténtalo de nuevo.");
      
      // Ocultar el mensaje de error después de 3 segundos
      setTimeout(() => {
        setSuccessMessage("");
      }, 3000);
    }
  };

  return (
    <div className="entrenadores-container">
      <h1>Entrenadores Personales</h1>
      <button onClick={() => setShowForm(!showForm)}>
        {showForm ? "Cancelar" : "Enviar currículum"}
      </button>

      {/* Mostrar el mensaje de éxito si existe */}
      {successMessage && <div className="success-message">{successMessage}</div>}

      {showForm && (
        <form onSubmit={handleSubmit} className="curriculum-form">
          <input
            type="text"
            name="nombre"
            placeholder="Nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="apellidos"
            placeholder="Apellidos"
            value={formData.apellidos}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="telefono"
            placeholder="Teléfono"
            value={formData.telefono}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="correo"
            placeholder="Correo electrónico"
            value={formData.correo}
            onChange={handleChange}
            required
          />
          <textarea
            name="experiencia"
            placeholder="Experiencia previa"
            value={formData.experiencia}
            onChange={handleChange}
            required
          />
          <button type="submit">Enviar</button>
        </form>
      )}

      <div className="entrenadores-list">
        {entrenadoresData.map((entrenador, index) => (
          <div className="entrenador-card" key={index}>
            <h2>{entrenador.nombre} {entrenador.apellidos}</h2>
            <p><strong>Especialización:</strong> {entrenador.especializacion}</p>
            <p><strong>Descripción:</strong> {entrenador.descripcion}</p>
            <p><strong>Email:</strong> <a href={`mailto:${entrenador.email}`}>{entrenador.email}</a></p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Entrenadores;
