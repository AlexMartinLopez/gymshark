// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Home from "./Home";
import Cursos from "./Cursos";
import Entrenadores from "./Entrenadores";
import Header from "./Header";
import Register from "./Register";  // Importa el componente de registro
import MisCursos from "./MisCursos"; // Importa el componente MisCursos

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cursos" element={<Cursos />} />
        <Route path="/entrenadores" element={<Entrenadores />} />
        <Route path="/home" element={<Home />} />
        <Route path="/registro" element={<Register />} />
        <Route path="/mis-cursos" element={<MisCursos />} /> 
      </Routes>
    </Router>
  );
};

export default App;
