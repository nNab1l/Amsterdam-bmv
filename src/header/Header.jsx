import React from 'react';

const Header = () => {
  return(
    <header className="header">
        <nav className="header__nav">
        <ul className='header__ul'>
            <li className='header__li'>Home</li>
            <li className='header__li'>Projecten</li>
            <li className='header__li'>Werken Bij</li>
        </ul>
        </nav>
        <article className='header__article'>
          <figure className='header__fig'>
            <img src="" alt="" className='header__img'/>
            <ul className='header__slide'>
              <li className='header__slider'></li>
            </ul>
          </figure>
        </article>
    </header>
  )
}

export default Header;