import React from 'react';
import img from './pexels-jan-kopřiva-3315512.jpg';
import img2 from './vertical2.jpg';

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
      <article className='info__article  info__article--alt'>
        <h2>
          Maak kennis<mark>.</mark>
        </h2>
        <p className='info__sub'>Mensen</p>
        <article className='info__content'>
        <figure className='info__figure info__figure--alt'>
            <img src={img2} alt="" className='info__img'/>
          </figure>
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
       
        </article>
      </article>
    </section>
  )
}

export default Info;