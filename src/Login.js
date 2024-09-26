import React, { useState, useEffect } from "react";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";  
import { useNavigate, useLocation } from "react-router-dom"; 
import { onAuthStateChanged } from "firebase/auth"; 
import "./Login.css"; // Importa tu archivo CSS

const Login = () => {
  const [loginInfo, setLoginInfo] = useState({ email: "", password: "" });
  const [registerInfo, setRegisterInfo] = useState({ email: "", password: "" });
  const navigate = useNavigate(); 
  const location = useLocation(); 
  const from = location.state?.from?.pathname || "/home";  

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate(from); 
      }
    });

    return () => unsubscribe();
  }, [navigate, from]);

  const handleChange = (e, type) => {
    const { name, value } = e.target;
    if (type === "login") {
      setLoginInfo({ ...loginInfo, [name]: value });
    } else {
      setRegisterInfo({ ...registerInfo, [name]: value });
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const { email, password } = loginInfo;
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate(from);  
    } catch (error) {
      alert("Error en el inicio de sesión: " + error.message);
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    const { email, password } = registerInfo;
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Registro exitoso");
      navigate(from);  
    } catch (error) {
      alert("Error en el registro: " + error.message);
    }
  };

  return (
    <div className="login-register-container">
      <div className="login-form">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <div>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={loginInfo.email}
              onChange={(e) => handleChange(e, "login")}
              required
            />
          </div>
          <div>
            <label>Contraseña:</label>
            <input
              type="password"
              name="password"
              value={loginInfo.password}
              onChange={(e) => handleChange(e, "login")}
              required
            />
          </div>
          <button type="submit">Iniciar sesión</button>
        </form>
      </div>

      <div className="register-form">
        <h2>Registro</h2>
        <form onSubmit={handleRegister}>
          <div>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={registerInfo.email}
              onChange={(e) => handleChange(e, "register")}
              required
            />
          </div>
          <div>
            <label>Contraseña:</label>
            <input
              type="password"
              name="password"
              value={registerInfo.password}
              onChange={(e) => handleChange(e, "register")}
              required
            />
          </div>
          <button type="submit">Registrar</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
