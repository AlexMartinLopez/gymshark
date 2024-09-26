// src/AgregarCurso.js
import React, { useState } from "react";
import { agregarCurso } from "./firebase";

const AgregarCurso = () => {
  const [curso, setCurso] = useState({
    nombre: "",
    horario: "",
    entrenador: "",
    especializacion: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurso({
      ...curso,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await agregarCurso(curso);
    alert("Curso añadido correctamente");
    setCurso({
      nombre: "",
      horario: "",
      entrenador: "",
      especializacion: ""
    });
  };

  return (
    <div>
      <h1>Agregar Curso</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre:</label>
          <input
            type="text"
            name="nombre"
            value={curso.nombre}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Horario:</label>
          <input
            type="text"
            name="horario"
            value={curso.horario}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Entrenador:</label>
          <input
            type="text"
            name="entrenador"
            value={curso.entrenador}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Especialización:</label>
          <input
            type="text"
            name="especializacion"
            value={curso.especializacion}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Agregar Curso</button>
      </form>
    </div>
  );
};

export default AgregarCurso;
