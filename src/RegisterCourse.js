// src/RegisterCourse.js
import React, { useState } from "react";
import { db } from "./firebase";
import { addDoc, collection } from "firebase/firestore";
import { useLocation } from "react-router-dom"; // Importa useLocation

const RegisterCourse = () => {
  const { state } = useLocation(); // Recibe el estado de navegación
  const curso = state?.curso; // Extrae el curso del estado

  const [registrationInfo, setRegistrationInfo] = useState({
    nombre: "",
    apellidos: "",
    email: "",
    telefono: "",
  });

  const handleInputChange = (e) => {
    setRegistrationInfo({
      ...registrationInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    const { nombre, apellidos, email, telefono } = registrationInfo;

    try {
      // Guardar la inscripción del curso
      await addDoc(collection(db, "course_registrations"), {
        nombre,
        apellidos,
        email,
        telefono,
        cursoId: curso.id,
        cursoNombre: curso.nombre,
      });

      alert("Inscripción al curso realizada correctamente.");
    } catch (error) {
      console.error("Error al registrar en el curso", error);
      alert("Error: " + error.message);
    }
  };

  if (!curso) {
    return <div>Cargando curso...</div>; // Mensaje mientras carga
  }

  return (
    <div>
      <h2>Registro al Curso {curso.nombre}</h2>
      <form onSubmit={handleRegister}>
        <div>
          <label>Nombre:</label>
          <input
            type="text"
            name="nombre"
            value={registrationInfo.nombre}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Apellidos:</label>
          <input
            type="text"
            name="apellidos"
            value={registrationInfo.apellidos}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={registrationInfo.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Teléfono:</label>
          <input
            type="tel"
            name="telefono"
            value={registrationInfo.telefono}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit">Registrar al Curso</button>
      </form>
    </div>
  );
};

export default RegisterCourse;
