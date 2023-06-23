import React from 'react';
import './footer.css';

const img = [
  'https://www.ww2.muniquilicura.cl/wp-content/uploads/2021/10/logo-gestion-quilicura-footer.png',
  'https://www.ww2.muniquilicura.cl/wp-content/uploads/2021/10/emergencia-footer.png',
  'https://www.ww2.muniquilicura.cl/wp-content/uploads/2021/10/concejos-footer.png',
];

const Footer = () => (
  <footer className="footer">
    <div className="footer-content">
      {img.map((image, index) => (
        <img key={index} src={image} alt="" />
      ))}
    </div>
  </footer>
);

export default Footer;
