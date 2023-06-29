import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css';
import logo from '../../assets/logo1.png';
import { useNavigate, Link } from 'react-router-dom';

//Este codigo se basa mas en el css por si lo revisa alguien igual deje todo comentado ahi en el navbar.css

//Aqui estan los botones home, etc
const Menu = () => (
  <>
    <p><Link to="/">Inicio</Link></p>
    <p><Link to="/ayuda">Ayuda</Link></p>
    <p><Link to="/beneficio">Beneficio</Link></p>
    <p><Link to="/preguntas">Preguntas</Link></p>
  </>
);



const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleMenuToggle = () => {
    setToggleMenu(!toggleMenu);
  };

  const navigate = useNavigate();

  const Click = () => {
    navigate('/login');
  };

  const Clock = () => {
    navigate('/register');
  };

  return (
    

    <div className='muni__navbar'>
      <div className='muni__navbar-links'>
        <div className='muni__navbar-links_logo'>
          <a>
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </a>
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
        <p onClick={Click}>iniciar sesión</p>
        <button onClick={Clock} type='button'>Registrate</button>
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
              <p onClick={Click}>iniciar sesión</p>
                <button onClick={Clock} type='button'>Registrate</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
