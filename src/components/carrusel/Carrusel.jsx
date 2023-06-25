import React from "react";
import Slider from "./slider";
import './carrusel.css';
import quilicura from '../../assets/quilicura.jpg';
import emprendedores from '../../assets/emprendedores.jpg';
import viejopascuero from '../../assets/viejopascuero.jpeg';

//Carousel de imagenes, se puede cambiar las imagenes en el array images la funciones se encuentran en el archivo slider.jsx (Esto lo saque de internet menos el css)

const Carrusel  = () => {

const images = [
  quilicura,
  emprendedores, 
  viejopascuero,
];

  return (
    <div className="brand_slider">
      <Slider images={images} />
    </div>
  );
};

export default Carrusel;
