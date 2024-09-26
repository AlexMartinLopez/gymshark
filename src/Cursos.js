import React, { useState, useEffect } from "react";
import { obtenerCursos } from "./firebase"; // Función para obtener cursos desde Firestore
import { doc, setDoc } from "firebase/firestore";
import { db, auth } from "./firebase"; // Importación de la base de datos Firestore y autenticación
import { onAuthStateChanged } from "firebase/auth";
import "./Cursos.css"; // Importamos el archivo CSS

// Importa tus imágenes de la carpeta images
import imagenCurso1 from "./images/yoga.jpg"; 
import imagenCurso2 from "./images/kickbox.jpg"; 
import imagenCurso3 from "./images/entre.jpg"; 
// Agrega más imágenes según sea necesario

const Cursos = () => {
  const [cursos, setCursos] = useState([]);
  const [showRegister, setShowRegister] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [userInfo, setUserInfo] = useState({
    nombre: "",
    apellidos: "",
    email: "", 
    telefono: "",
  });
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [successMessage, setSuccessMessage] = useState(""); // Nuevo estado para el mensaje de éxito

  // Cargar los cursos al montar el componente
  useEffect(() => {
    fetchCursos();
    
    // Verificar el estado de autenticación
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
        alert("Debes iniciar sesión para registrarte en un curso.");
      }
    });

    return () => unsubscribe();
  }, []);

  // Obtener los cursos desde Firestore
  const fetchCursos = async () => {
    try {
      const cursosObtenidos = await obtenerCursos();
      // Asignar imágenes manualmente a los cursos
      const cursosConImagenes = cursosObtenidos.map((curso, index) => ({
        ...curso,
        imagenUrl: [imagenCurso1, imagenCurso2, imagenCurso3][index] || imagenCurso1, // Asigna imágenes a los cursos
      }));
      setCursos(cursosConImagenes);
    } catch (error) {
      console.error("Error al obtener los cursos:", error);
    }
  };

  // Maneja el cambio en los inputs del formulario
  const handleInputChange = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  // Maneja el registro del usuario al curso
  const handleRegister = async (e) => {
    e.preventDefault();

    if (!isAuthenticated) {
      alert("Debes iniciar sesión para registrarte en un curso.");
      return;
    }

    if (!selectedCourse) {
      alert("Por favor, selecciona un curso.");
      return;
    }

    try {
      // Guardar los datos adicionales en Firestore
      await setDoc(
        doc(db, "courseRegistrations", `${selectedCourse.id}_${userInfo.telefono}`), 
        {
          ...userInfo,
          curso: selectedCourse.nombre,
        }
      );

      // Configurar el mensaje de éxito
      setSuccessMessage(`Bienvenido al curso ${selectedCourse.nombre}`);
      setShowRegister(false); 
      setUserInfo({
        nombre: "",
        apellidos: "",
        email: "", 
        telefono: "",
      });

      // Desaparecer el mensaje después de 2 segundos
      setTimeout(() => {
        setSuccessMessage("");
      }, 2000);
    } catch (error) {
      console.error("Error al registrar en el curso:", error);
      alert("Error: " + error.message);
    }
  };

  // Mostrar el formulario de registro
  const handleShowRegister = (curso) => {
    setSelectedCourse(curso);
    setShowRegister(true);
  };

  return (
    <div className="cursos-container">
      <div className="cursos-background"></div> {/* Contenedor para el GIF de fondo */}

      {/* Mensaje de éxito que aparece en el medio */}
      {successMessage && (
        <div className="success-message">{successMessage}</div>
      )}

      {cursos.map((curso) => (
        <div
          key={curso.id}
          className="curso-card"
          style={{ backgroundImage: `url(${curso.imagenUrl})` }} // Imagen de fondo del curso
        >
          <div className="curso-background"></div>
          <div className="curso-info">
            <h3>{curso.nombre}</h3>
            <p>Horario: {curso.horario}</p>
            <p>Entrenador: {curso.entrenador}</p>
            <button onClick={() => handleShowRegister(curso)}>Registrar</button>

            {showRegister && selectedCourse?.id === curso.id && (
              <div className="register-form">
                <h2>Registro en {selectedCourse.nombre}</h2>
                <form onSubmit={handleRegister}>
                  <div>
                    <label>Nombre:</label>
                    <input
                      type="text"
                      name="nombre"
                      value={userInfo.nombre}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div>
                    <label>Apellidos:</label>
                    <input
                      type="text"
                      name="apellidos"
                      value={userInfo.apellidos}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div>
                    <label>Email:</label> 
                    <input
                      type="email"
                      name="email"
                      value={userInfo.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div>
                    <label>Teléfono:</label>
                    <input
                      type="tel"
                      name="telefono"
                      value={userInfo.telefono}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <button type="submit">Registrar en el curso</button>
                </form>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cursos;
