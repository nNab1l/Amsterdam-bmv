import React, { useState, useEffect } from 'react';
import img1 from './961_1440x960.jpg';
import img2 from './Valley-vallei-op-6e-verdieping-1800x1201.jpg';
import img3 from './img/grass.jpg';
import logo from './img/logo-gemeente-amsterdam.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const [rotationAngle, setRotationAngle] = useState(0);
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      const scaledRotation = scrollPosition * 0.3; 

      const limitedRotation = Math.min(scaledRotation, 15);

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

  const toggleMobileNav = () => {
    setMobileNavOpen(!isMobileNavOpen);
  };

  const mobileNavClasses = `header__mobileNav ${isMobileNavOpen ? 'open' : ''}`;

  return (
    <header className='header'>
      <article className='header__blur'></article>
      <article className='header__blur header__blur--two'></article>
      <nav className='header__nav'>
      <img src={logo} alt="" className='header__logo'/>
        <ul className='header__ul'>
          <li className='header__li'>Organisatie</li>
          <li className='header__li'>Projecten</li>
          <li className='header__li'>Werken Bij</li>
          <li className='header__li header__li--altNav' onClick={toggleMobileNav}>
            <FontAwesomeIcon icon={faBars} />
          </li>
        </ul>
      </nav>
      <nav className={mobileNavClasses}>
        <ul className="header__mobileUl">
          <li className="header__mobileLi">Organisatie</li>
          <li className="header__mobileLi">Projecten</li>
          <li className="header__mobileLi">Werken Bij</li>
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
