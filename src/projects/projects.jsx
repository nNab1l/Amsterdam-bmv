import React from 'react';
import './projects.css';
import img from './4.jpg';
import img2 from './Img03.jpg';
import img3 from './wereldburger.jpg';
import img4 from './foto_1.jpg'
import img5 from './afc.jpg'


const Projects = () => {
    return(
      <section className='projects'>
        <article className='projects__article projects__article--one'>
            <img src={img} alt="" className='projects__img'/>
            <h2 className='projects__h2'>Spinoza20first<mark>.</mark></h2>
            <p className='projects__p'>Spinoza20First: duurzame school en sporthal</p>
            <button className='projects__button'>naar project</button>

        </article>
        <article className='projects__article projects__article--two'>
            <img src={img2} alt="" className='projects__img'/>
            <h2 className='projects__h2'>Nieuwbouw AICS<mark>.</mark></h2>
            <p className='projects__p'>Amsterdam International Community School (AICS): wereldschool in wereldstad</p>
            <button className='projects__button'>naar project</button>
        </article>
        <article className='projects__article projects__article--two'>
            <img src={img3} alt="" className='projects__img'/>
            <h2 className='projects__h2'>Renovatie de Wereldburger<mark>.</mark></h2>
            <p className='projects__p'>Wereldburger: prijswinnende renovatie</p>
            <button className='projects__button'>naar project</button>
        </article>
        <article className='projects__article projects__article--two'>
            <img src={img4} alt="" className='projects__img'/>
            <h2 className='projects__h2'>Renovatie Amsterdam Museum<mark>.</mark></h2>
            <p className='projects__p'>Amsterdam Museum: renovatie in voorbereiding</p>
            <button className='projects__button'>naar project</button>
        </article>
        <article className='projects__article projects__article--two'>
            <img src={img5} alt="" className='projects__img'/>
            <h2 className='projects__h2'>Sportpark Goed Genoeg & Clubgebouw AFC<mark>.</mark></h2>
            <p className='projects__p'>AFC: nieuwe velden, nieuw clubhuis</p>
            <button className='projects__button'>naar project</button>
        </article>
      </section>
    )
  }

export default Projects;