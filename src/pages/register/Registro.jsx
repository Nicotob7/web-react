import React, { useState } from "react";
import "./registro.css";

const Registro = () => {
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (password !== repeatPassword) {
      alert("Las contraseñas no coinciden");
      return;
    }

    // Aquí puedes agregar la lógica de registro
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleRepeatPasswordChange = (event) => {
    setRepeatPassword(event.target.value);
  };

  return (
    <div className="card_register">
      <div className="card-content">
        <h2>Registro de Emprendedor</h2>
        <form className="register user" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Nombre:</label>
            <input type="text" id="name" required />
          </div>
          <div>
            <label htmlFor="age">Edad:</label>
            <input type="number" id="age" required />
          </div>
          <div>
            <label htmlFor="rut">RUT:</label>
            <input type="text" id="rut" required />
          </div>
          <div>
            <label htmlFor="entrepreneurship">Nombre de Emprendimiento:</label>
            <input type="text" id="entrepreneurship" required />
          </div>
          <div>
            <label htmlFor="address">Dirección:</label>
            <input type="text" id="address" required />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" required />
          </div>
          <div>
            <label htmlFor="password">Contraseña:</label>
            <input type="password" id="password" value={password} onChange={handlePasswordChange} required />
          </div>
          <div>
            <label htmlFor="repeatPassword">Repite Contraseña:</label>
            <input type="password" id="repeatPassword" value={repeatPassword} onChange={handleRepeatPasswordChange} required />
          </div>
          <button type="submit">Registrarse</button>
        </form>
      </div>
    </div>
  );
};

export default Registro;
