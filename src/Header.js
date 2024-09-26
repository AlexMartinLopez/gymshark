import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { auth } from "./firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import "./Header.css";
import logo from "./images/Gymshark.png"; // Asegúrate de que la ruta de la imagen sea correcta

const Header = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      alert("Error al cerrar sesión: " + error.message);
    }
  };

  return (
    <header className="header">
      <nav className="nav">
        <div className="logo-container">
          <Link to="/home">
            <img src={logo} alt="Gymshark" className="logo" />
          </Link>
        </div>

        <div className="nav-right">
          {user ? (
            <>
              <span className="user-email">Bienvenido, {user.email}</span>
              <div className="nav-links">
                <Link to="/cursos">Cursos</Link>
                <Link to="/entrenadores">Entrenadores personales</Link>
                <Link to="/mis-cursos">Mis Cursos</Link>
              </div>
              <button className="logout-button" onClick={handleLogout}>
                Cerrar sesión
              </button>
            </>
          ) : (
            <Link to="/login">Login</Link>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
