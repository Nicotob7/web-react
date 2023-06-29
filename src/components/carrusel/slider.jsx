import React, { useState, useEffect, useCallback } from "react";

const Slider = ({ images, interval = 7000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  }, [images]);

  const goToPreviousSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  }, [images]);

  useEffect(() => {
    const slideTimer = setTimeout(() => {
      goToNextSlide();
    }, interval);

    return () => {
      clearTimeout(slideTimer);
    };
  }, [currentIndex, interval, goToNextSlide]);

  return (
    <div className="slider">
      <div className="slider-image">
      <div className="slider-controls">
        <button onClick={goToPreviousSlide}>&#x2039;</button>
        <button onClick={goToNextSlide}>&#x203A;</button>
      </div>
        <img src={images[currentIndex]} alt="" />
      </div>
    </div>
  );
};

export default Slider;
