import React, { useState, useEffect } from 'react';
import img1 from './961_1440x960.jpg';
import img2 from './Valley-vallei-op-6e-verdieping-1800x1201.jpg';
import img3 from './grass.jpg';

const Header = () => {
  const [rotationAngle, setRotationAngle] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      const scaledRotation = scrollPosition * 0.3; 

      const limitedRotation = Math.min(scaledRotation, 25);

      setRotationAngle(limitedRotation);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); 

  const headerFigureStyle = {
    transform: `rotate(${rotationAngle}deg)`,
    transition: 'transform 1s ease', 
  };

  return (
    <header className='header'>
      <article className='header__blur'></article>
      <article className='header__blur header__blur--two'></article>
      <nav className='header__nav'>
        <ul className='header__ul'>
          <li className='header__li'>Home</li>
          <li className='header__li'>Projecten</li>
          <li className='header__li'>Werken Bij</li>
        </ul>
      </nav>
      <figure className='header__figure' style={headerFigureStyle}>
        <img src={img3} alt="" className='header__img'/>
        <h2 className='header__h2'>De bouw van Amsterdam:<br></br> van dichterbij</h2>
      </figure>
    </header>
  );
};

export default Header;
