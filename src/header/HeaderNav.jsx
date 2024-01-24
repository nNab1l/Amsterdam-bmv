import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import logo from './img/logo-gemeente-amsterdam.webp';

const HeaderNav = () => {
    const [isMobileNavOpen, setMobileNavOpen] = useState(false);

    const toggleMobileNav = () => {
        setMobileNavOpen(!isMobileNavOpen);
      };
    
    const mobileNavClasses = `header__mobileNav ${isMobileNavOpen ? 'open' : ''}`;
  return (
    <>
        <nav className='header__nav'>
        <img src={logo} alt="Algemeen logo van de Amsterdamse gemeente" className='header__logo'/>
            <ul className='header__ul'>
            <li className='header__li'>
            <Link href='#org' activeClass="active" smooth spy to="org">
              Organisatie
            </Link>
            </li>
           
            
            <li className='header__li'>
            <Link href='#pro' activeClass="active" smooth spy to="pro">
              Projecten
            </Link>
            </li>
           
          
            <li className='header__li'>
            <Link href='#org' activeClass="active" smooth spy to="wor">
              Werken Bij
            </Link>
            </li>
            <li className='header__li header__li--altNav' onClick={toggleMobileNav}>
                <FontAwesomeIcon icon={faBars} className='header__icon'/>
            </li>
            </ul>
        </nav>
        <nav className={mobileNavClasses}>
            <ul className="header__mobileUl">
            <Link href='#org' activeClass="active" smooth spy to="org">
            <li className='header__mobileLi'>Organisatie</li>
            </Link>
            <Link href='#pro' activeClass="active" smooth spy to="pro">
            <li className='header__mobileLi'>Projecten</li>
            </Link>
            <Link href='#wor' activeClass="active" smooth spy to="wor">
            <li className='header__mobileLi'>Werken Bij</li>
            </Link>
            </ul>
        </nav>
    </>
  );
};

export default HeaderNav;
