import React from 'react';
import img from './pexels-jan-kopřiva-3315512.jpg';

const Info = () => {
  return(
    <section className='info__section'>
      <article className='info__article'>
        <h2>
          Bijdragen aan een <br></br>toekomstbestendige stad<mark>.</mark>
        </h2>
        <p className='info__sub'>Duurzaamheid</p>
        <article className='info__content'>
          <div className='info__panel'>
            <div className='info__wrapper'>
              <h2 className='info__heading'>Groei</h2>
              <p className='info__dot'>⦁</p>
            </div>
         
            <div className='info__wrapper'>
              <h2 className='info__heading'>Sociaal-maatschappelijk</h2>
              <p className='info__dot'>⦁</p>
            </div>
            <div className='info__wrapper'>
              <h2 className='info__heading'>Werkplekken</h2>
              <p className='info__dot'>⦁</p>
            </div>
            <div className='info__wrapper'>
              <h2 className='info__heading'>Integrale aanpak</h2>
              <p className='info__dot'>⦁</p>
            </div>
            </div>
          <figure className='info__figure'>
            <img src={img} alt="" className='info__img'/>
          </figure>
        </article>
      </article>
    </section>
  )
}

export default Info;