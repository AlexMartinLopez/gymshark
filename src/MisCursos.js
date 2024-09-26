import React, { useState, useEffect } from "react";
import { db, auth } from "./firebase";
import { collection, getDocs, doc, updateDoc, deleteDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import './MisCursos.css'; // Importa tu archivo CSS

const MisCursos = () => {
  const [registrations, setRegistrations] = useState([]);
  const [editInfo, setEditInfo] = useState({
    nombre: "",
    apellidos: "",
    telefono: "",
  });
  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
    // Configura el listener para obtener el email del usuario logueado
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserEmail(user.email); // Solo se usa para filtrar inscripciones
        fetchRegistrations(user.email);
      }
    });
    return () => unsubscribe();
  }, []);

  // Función para obtener las inscripciones desde Firestore
  const fetchRegistrations = async (email) => {
    try {
      const registrationsCollection = collection(db, "courseRegistrations");
      const registrationsSnapshot = await getDocs(registrationsCollection);

      // Filtra por las inscripciones del usuario logueado
      const userRegistrations = registrationsSnapshot.docs
        .map((doc) => ({ id: doc.id, ...doc.data() }))
        .filter((reg) => reg.email === email);

      setRegistrations(userRegistrations);
    } catch (error) {
      console.error("Error al obtener inscripciones:", error);
    }
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditInfo({ ...editInfo, [name]: value });
  };

  const handleUpdate = async (registrationId, registration) => {
    try {
      const registrationDoc = doc(db, "courseRegistrations", registrationId);
      
      // Crear un objeto para la actualización solo con los campos que han sido modificados
      const updatedFields = {};
      if (editInfo.nombre) updatedFields.nombre = editInfo.nombre;
      if (editInfo.apellidos) updatedFields.apellidos = editInfo.apellidos;
      if (editInfo.telefono) updatedFields.telefono = editInfo.telefono;

      await updateDoc(registrationDoc, updatedFields);

      alert("Inscripción actualizada correctamente.");
      fetchRegistrations(userEmail); // Refresca la lista de inscripciones
      // Resetea el formulario de edición
      setEditInfo({ nombre: "", apellidos: "", telefono: "" });
    } catch (error) {
      console.error("Error al actualizar inscripción:", error);
      alert("Error: " + error.message);
    }
  };

  // Función para eliminar una inscripción
  const handleDelete = async (registrationId) => {
    try {
      const registrationDoc = doc(db, "courseRegistrations", registrationId);
      await deleteDoc(registrationDoc);

      alert("Te has dado de baja del curso.");
      fetchRegistrations(userEmail); // Refresca la lista de inscripciones
    } catch (error) {
      console.error("Error al eliminar inscripción:", error);
      alert("Error: " + error.message);
    }
  };

  return (
    <div className="mis-cursos-container">
      <h1>Mis Cursos</h1>
      {registrations.length > 0 ? (
        registrations.map((registration) => (
          <div className="course-card" key={registration.id}>
            <h3>{registration.curso || "Curso sin nombre"}</h3>
            <p>Nombre: {registration.nombre}</p>
            <p>Apellidos: {registration.apellidos}</p>
            <p>Email: {registration.email}</p> {/* El correo no se puede editar */}
            <p>Teléfono: {registration.telefono}</p>
            <input
              type="text"
              placeholder="Nuevo Nombre"
              name="nombre"
              value={editInfo.nombre}
              onChange={handleEditChange}
            />
            <input
              type="text"
              placeholder="Nuevos Apellidos"
              name="apellidos"
              value={editInfo.apellidos}
              onChange={handleEditChange}
            />
            <input
              type="tel"
              placeholder="Nuevo Teléfono"
              name="telefono"
              value={editInfo.telefono}
              onChange={handleEditChange}
            />
            <button onClick={() => handleUpdate(registration.id, registration)}>
              Actualizar
            </button>
            <button onClick={() => handleDelete(registration.id)}>
              Eliminar Inscripción
            </button>
          </div>
        ))
      ) : (
        <p>No estás registrado en ningún curso.</p>
      )}
    </div>
  );
};

export default MisCursos;
