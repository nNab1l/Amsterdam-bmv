import React, { useState, useEffect } from 'react';
import img1 from './961_1440x960.jpg';
import img2 from './Valley-vallei-op-6e-verdieping-1800x1201.jpg';
import img3 from './img/header.webp';
import logo from './img/logo-gemeente-amsterdam.webp';
import HeaderNav from './HeaderNav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-scroll'

const Header = () => {
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);



  const toggleMobileNav = () => {
    setMobileNavOpen(!isMobileNavOpen);
  };

  const mobileNavClasses = `header__mobileNav ${isMobileNavOpen ? 'open' : ''}`;

  return (
    <header className='header'>
      <article className='header__blur'></article>
      <article className='header__blur header__blur--two'></article>
      <HeaderNav toggleMobileNav={toggleMobileNav} />
      <figure className='header__figure'>
        <img src={img3} alt="Moderne Amsterdamse appartementen met gras" className='header__img'/>
        <h2 className='header__h2'>De bouw van Amsterdam:<br></br> van dichterbij</h2>
      </figure>
    </header>
  );
};

export default Header; 
export { HeaderNav };