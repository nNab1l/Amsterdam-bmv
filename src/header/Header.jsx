import React, { useState, useEffect } from 'react';
import img1 from './961_1440x960.jpg';
import img2 from './Valley-vallei-op-6e-verdieping-1800x1201.jpg';
import img3 from './Zuidas.jpg';

const Header = () => {
  const ImageSlider = () => {
    const [selectedSlide, setSelectedSlide] = useState(2);

    const handleSlideClick = (index) => {
      setSelectedSlide(index);
      resetTimer();
    };

    const resetTimer = () => {
      clearInterval(timer);
      startTimer();
    };

    const startTimer = () => {
      const interval = 5000; // 5 seconds
      timer = setInterval(() => {
        const nextSlide = (selectedSlide + 1) % 3;
        setSelectedSlide(nextSlide);
      }, interval);
    };

    useEffect(() => {
      startTimer();
      return () => {
        clearInterval(timer);
      };
    }, [selectedSlide]);

    return (
      <figure className='header__fig'>
        <img
          src={selectedSlide === 0 ? img1 : selectedSlide === 1 ? img2 : img3}
          alt=""
          className='header__img'
        />
        <ul className='header__slide'>
          <li
            className={`header__slider ${selectedSlide === 0 ? 'header__slider--selected' : ''}`}
            onClick={() => handleSlideClick(0)}
          ></li>
          <li
            className={`header__slider ${selectedSlide === 1 ? 'header__slider--selected' : ''}`}
            onClick={() => handleSlideClick(1)}
          ></li>
          <li
            className={`header__slider ${selectedSlide === 2 ? 'header__slider--selected' : ''}`}
            onClick={() => handleSlideClick(2)}
          ></li>
        </ul>
      </figure>
    );
  };

  let timer; // Declare the timer variable outside of the component

  return (
    <header className='header'>
      <nav className='header__nav'>
        <ul className='header__ul'>
          <li className='header__li'>Home</li>
          <li className='header__li'>Projecten</li>
          <li className='header__li'>Werken Bij</li>
        </ul>
      </nav>
      <article className='header__article'>
        <ImageSlider />
      </article>
    </header>
  );
};

export default Header;
