// src/Register.js
import React, { useState } from "react";
import { db } from "./firebase"; // Importamos Firestore
import { doc, setDoc } from "firebase/firestore"; // Para guardar en Firestore

const Register = () => {
  const [userInfo, setUserInfo] = useState({
    nombre: "",
    apellidos: "",
    email: "",
    telefono: "",
  });

  const handleInputChange = (e) => {
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    const { nombre, apellidos, email, telefono } = userInfo;

    try {
      // Guardar los datos adicionales en Firestore usando el email como ID
      await setDoc(doc(db, "users", email), {
        nombre,
        apellidos,
        email,
        telefono,
      });

      alert("Usuario registrado y datos guardados en Firestore.");

      // Limpiar el formulario después del registro
      setUserInfo({
        nombre: "",
        apellidos: "",
        email: "",
        telefono: "",
      });
    } catch (error) {
      console.error("Error al registrar usuario", error);
      alert("Error: " + error.message);
    }
  };

  return (
    <div>
      <h2>Registro</h2>
      <form onSubmit={handleRegister}>
        <div>
          <label>Nombre:</label>
          <input type="text" name="nombre" value={userInfo.nombre} onChange={handleInputChange} required />
        </div>
        <div>
          <label>Apellidos:</label>
          <input type="text" name="apellidos" value={userInfo.apellidos} onChange={handleInputChange} required />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" value={userInfo.email} onChange={handleInputChange} required />
        </div>
        <div>
          <label>Teléfono:</label>
          <input type="tel" name="telefono" value={userInfo.telefono} onChange={handleInputChange} required />
        </div>
        <button type="submit">Registrar</button>
      </form>
    </div>
  );
};

export default Register;
