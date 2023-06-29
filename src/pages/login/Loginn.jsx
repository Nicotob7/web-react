import React, { useState } from "react";
import "./login.css";

const Login = () => {
  const [isEntrepreneur, setIsEntrepreneur] = useState(true);

  const handleModeChange = () => {
    setIsEntrepreneur(!isEntrepreneur);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes agregar la lógica de autenticación para el inicio de sesión
    // Puedes utilizar el estado `isEntrepreneur` para determinar si es un emprendedor o administrador
  };

  return (
    <div className="card_login">
      <div className="card-content">
        <h2>{isEntrepreneur ? "Iniciar sesión como Emprendedor" : "Iniciar sesión como Administrador"}</h2>
        {isEntrepreneur ? (
          <form className="login user" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email">Email de Emprendedor:</label>
              <input type="email" id="email" required />
            </div>
            <div>
              <label htmlFor="password">Contraseña:</label>
              <input type="password" id="password" required />
            </div>
            <button type="submit">Iniciar sesión</button>
          </form>
        ) : (
          <form className="login admin" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email">Email de Administrador:</label>
              <input type="email" id="email" required />
            </div>
            <div>
              <label htmlFor="password">Contraseña de Administrador:</label>
              <input type="password" id="password" required />
            </div>
            <button type="submit">Iniciar sesión</button>
          </form>
        )}
        <button onClick={handleModeChange}>Cambiar modo</button>
      </div>
    </div>
  );
};

export default Login;
