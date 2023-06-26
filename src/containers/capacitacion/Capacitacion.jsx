import React from 'react';
import ReactPlayer from 'react-player';
import './capacitacion.css';

//Este documento es para la pagina de capacitacion, aqui se encuentra los video,
//ya es responsive se puede visualizar en cualquier dispositivo pero en la vista pc se ve peor, no se si se puede mejorar eso

const Card = ({ url }) => (
  <div className='player-wrapper'>
    <ReactPlayer
      className='react-player'
      url={url}
      width='100%'
      height='100%'
      controls
    />
  </div>
);

//Aqui se encuentra los links de los videos, se puede agregar mas videos
const urls = [
  'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
];

const Capacitacion = () => {
  return (
    <div className="container">
      <div className="video_container">
        {urls.map((url) => (
          <Card url={url} />
        ))}
      </div>
    </div>
  );
};

export default Capacitacion;
