import React, { useState, useEffect, useCallback } from "react";

const Slider = ({ images, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
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
      <img src={images[currentIndex]} alt="" />
    </div>
  );
};

export default Slider;
