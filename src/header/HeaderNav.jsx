import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import logo from './img/logo-gemeente-amsterdam.png';

const HeaderNav = () => {
    const [isMobileNavOpen, setMobileNavOpen] = useState(false);

    const toggleMobileNav = () => {
        setMobileNavOpen(!isMobileNavOpen);
      };
    
    const mobileNavClasses = `header__mobileNav ${isMobileNavOpen ? 'open' : ''}`;
  return (
    <>
        <nav className='header__nav'>
        <img src={logo} alt="" className='header__logo'/>
            <ul className='header__ul'>
            <Link activeClass="active" smooth spy to="org">
            <li className='header__li'>Organisatie</li>
            </Link>
            <Link activeClass="active" smooth spy to="pro">
            <li className='header__li'>Projecten</li>
            </Link>
            <Link activeClass="active" smooth spy to="wor">
            <li className='header__li'>Werken Bij</li>
            </Link>
            <li className='header__li header__li--altNav' onClick={toggleMobileNav}>
                <FontAwesomeIcon icon={faBars} className='header__icon'/>
            </li>
            </ul>
        </nav>
        <nav className={mobileNavClasses}>
            <ul className="header__mobileUl">
            <Link activeClass="active" smooth spy to="org">
            <li className='header__mobileLi'>Organisatie</li>
            </Link>
            <Link activeClass="active" smooth spy to="pro">
            <li className='header__mobileLi'>Projecten</li>
            </Link>
            <Link activeClass="active" smooth spy to="wor">
            <li className='header__mobileLi'>Werken Bij</li>
            </Link>
            </ul>
        </nav>
    </>
  );
};

export default HeaderNav;
