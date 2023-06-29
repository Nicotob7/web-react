import React from 'react';
import ReactPlayer from 'react-player';
import './capacitacion.css';

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

const urls = [
  'https://www.youtube.com/watch?v=zbpcEczYELs',
  'https://www.youtube.com/watch?v=fKMUFr6l6to',
  'https://www.youtube.com/watch?v=qBy7Kz1hSUc',
  'https://www.youtube.com/watch?v=zbpcEczYELs',
  'https://www.youtube.com/watch?v=fKMUFr6l6to',
  'https://www.youtube.com/watch?v=qBy7Kz1hSUc',
  'https://www.youtube.com/watch?v=fKMUFr6l6to',
  'https://www.youtube.com/watch?v=qBy7Kz1hSUc',
];

const Capacitacion = () => {
  return (
    <div className="container">
      <h2>Capacitación</h2> {/* Título general */}
      <div className="video_container">
        {urls.map((url) => (
          <Card url={url} />
        ))}
      </div>
    </div>
  );
};

export default Capacitacion;
