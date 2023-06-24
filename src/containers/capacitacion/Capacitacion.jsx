import React from 'react';
import ReactPlayer from 'react-player';
import './capacitacion.css';

//Este documento es para la pagina de capacitacion, aqui se encuentra el video,
//ya es responsive se puede visualizar en cualquier dispositivo pero en la vista pc se ve peor, no se si se puede mejorar eso

const Card = () => (
  <>
      <div className='player-wrapper'>
        <ReactPlayer
          className='react-player'
          url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          width='100%'
          height='100%'
          controls
        />
      </div>

      <div className='player-wrapper'>
        <ReactPlayer
          className='react-player'
          url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          width='100%'
          height='100%'
          controls
        />
      </div>
      
  </>
);

const Capacitacion = () => {
  return (
    <div className="container">
      <div className="video_container">
        <Card/>
      </div>
    </div>
  );
};

export default Capacitacion;