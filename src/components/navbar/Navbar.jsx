import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css';
import logo from '../../assets/logo1.png';

//Este codigo se basa mas en el css por si lo revisa alguien igual deje todo comentado ahi en el navbar.css

//Aqui estan los botones home, etc
const Menu = () => (
  <>
    <p><a href='#home'>INICIO</a></p>
    <p><a href='#home'>AYUDA</a></p>
    <p><a href='#home'>BENEFICIOS</a></p>
    <p><a href='#home'>PREGUNTAS</a></p>
    <p><a href='#home'>SOBRE NOSOTROS</a></p>
  </>
);


const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleMenuToggle = () => {
    setToggleMenu(!toggleMenu);
  };

  return (

    <div className='muni__navbar'>
      <div className='muni__navbar-links'>
        <div className='muni__navbar-links_logo'>
          <img src={logo} alt="logo" />
        </div>
        <div className="separador1">
        <p>|</p>
        </div>
        <div className='muni__navbar-links_container'>
          <Menu />
        </div>
      </div>
      <div className="separador2">
        <p>|</p>
      </div>
      <div className='muni__navbar-sign'>
        <p>iniciar sesión</p>
        <button type='button'>Registrate</button>
      </div>


      <div className='muni__navbar-menu'>
        {toggleMenu ? (
          <RiCloseLine color="#fff" size={27} onClick={handleMenuToggle} />
        ) : (
          <RiMenu3Line color="#fff" size={27} onClick={handleMenuToggle} />
        )}
        {toggleMenu && (
          <div className='muni__navbar-menu_container scale-up-center'>
            <div className='muni__navbar-menu_container-links'>
              <Menu />
              <div className='muni__navbar-menu_container-links-sign'>
                <p>iniciar sesión</p>
                <button type='button'>Registrate</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
