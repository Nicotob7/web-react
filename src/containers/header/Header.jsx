import React from 'react';
import './header.css';
import quilicura from '../../assets/quilicura.jpg';
import emprendedores from '../../assets/emprendedores.jpg';
import viejopascuero from '../../assets/viejopascuero.jpeg';

//Cuerpo de las cards (si llegamos a poner imagenes deberiamos hacer un const para las imagenes?)
const Card = ({ title, image }) => (
  <div className="card">
    <div className="card-body">
      <p className="card-text">{title}</p>
      <img src={image} alt="logo" />
    </div>
  </div>
);

const Menu = () => {
  const images = {
    quilicura: quilicura,
    emprendedores: emprendedores,
    viejopascuero: viejopascuero,
  };

  return (
    <>
      <Card title="Ayuda" image={images.quilicura} />
      <Card title="Beneficios" image={images.emprendedores} />
      <Card title="Preguntas" image={images.viejopascuero} />
    </>
  );
};

const Header = () => {

  return (
    <div className="muni_header">
      <Menu />
      <div className="muni_card_text_start">
      </div>
    </div>
  );
};

export default Header;
