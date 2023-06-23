import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './header.css';

//Cuerpo de las cards (si llegamos a poner imagenes deberiamos hacer un const para las imagenes?)
const Card = ({ title }) => (
  <div className="card">
    <div className="card-body">
      <p className="card-text">{title}</p>
      <img src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa1d%20text%20%7B%20fill%3A%23555%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa1d%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22285.921875%22%20y%3D%22218.3%22%3EFirst%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" alt="imagen" />
    </div>
  </div>
);

//Titulo de las cards, si creas una nueva card solo pone <Card title="titulo" />
const Menu = () => (
  <>
    <Card title="Ayuda" />
    <Card title="Beneficios" />
    <Card title="Preguntas" />
  </>
);

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleMenuToggle = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <div className="muni_header">
      <Menu />

      <div className="muni_card_text_start">
        {toggleMenu ? (
          <RiCloseLine color="#fff" size={27} onClick={handleMenuToggle} />
        ) : (
          <RiMenu3Line color="#fff" size={27} onClick={handleMenuToggle} />
        )}
        {toggleMenu && (
          <div className="muni__navbar-menu_container scale-up-center">
            <div className="muni__navbar-menu_container-links">
              <Menu />
              <div className="muni__navbar-menu_container-links-sign">
                <p>aca</p>
                <button type="button">Registrate</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
