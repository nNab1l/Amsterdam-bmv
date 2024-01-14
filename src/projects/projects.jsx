import React from 'react';
import './projects.css';
import img from './img/4.jpg';
import img2 from './img/Img03.jpg';
import img3 from './img/wereldburger.jpg';
import img4 from './img/amsterdam-museum-renovatie.webp'
import img5 from './img/afc-new.jpg'
import img6 from './img/foto_2.png';
import img7 from './img/brielstraatjpg.jpg';
import img8 from './img/slavernimuseum_logo.jpg';
import { Link } from 'react-router-dom'

const projectsData = [
  {
    id: 1,
    name: 'Spinoza20first',
    imgSrc: img,
    content: 'Content for Spinoza20first project goes here.',
  },
  {
    id: 2,
    name: 'Sportpark Goed Genoeg & Clubgebouw AFC',
    imgSrc: img5,
    content: 'Content for Sportpark Goed Genoeg project goes here.',
  },
  {
    id: 3,
    name: 'Nieuwbouw AICS',
    imgSrc: img2,
    content: 'Content for Nieuwbouw AICS project goes here.',
  },
  {
    id: 4,
    name: 'Renovatie Amsterdam Museum',
    imgSrc: img4,
    content: 'Content for Renovatie Amsterdam Museum project goes here.',
  },
  {
    id: 5,
    name: 'Nieuwbouw wereldburger',
    imgSrc: img3,
    content: 'Content for Renovatie Amsterdam Museum project goes here.',
  },
  {
    id: 6,
    name: 'Renovatie Bostheater',
    imgSrc: img6,
    content: 'Content for Renovatie Amsterdam Museum project goes here.',
  },
  {
    id: 7,
    name: 'Verbouwing en Nieuwbouw Werven en Overslagpunten',
    imgSrc: img7,
    content: 'Content for Renovatie Amsterdam Museum project goes here.',
  },
  {
    id: 8,
    name: 'Nationaal Slavernijmuseum',
    imgSrc: img8,
    content: 'Content for Renovatie Amsterdam Museum project goes here.',
  },
];


const Projects = () => {
  return (
    <section className='projects'>
      <p className='h2'>
            <span>Projecten</span>
      </p>
      <article className='projects__article projects__article--one'>
        <Link to={`/details/${projectsData[0].id}`}>
        <img src={projectsData[0].imgSrc} alt="" className='projects__img'/>
        <h2 className='projects__h2'>{projectsData[0].name}<mark>.</mark></h2>
        </Link>
      </article>

      <article className='projects__article projects__article--two'>
        <Link to={`/details/${projectsData[1].id}`}>
          <h2 className='projects__h2'>{projectsData[1].name}<mark>.</mark></h2>
        <img src={projectsData[1].imgSrc} alt="" className='projects__img'/>
        </Link>
      </article>

      <article className='projects__article projects__article--three'>
        <Link to={`/details/${projectsData[2].id}`}>
          <h2 className='projects__h2'>{projectsData[2].name}<mark>.</mark></h2>
        <img src={projectsData[2].imgSrc} alt="" className='projects__img'/>
        </Link>
      </article>

      <article className='projects__article projects__article--four'>
        <Link to={`/details/${projectsData[3].id}`}>
          <h2 className='projects__h2'>{projectsData[3].name}<mark>.</mark></h2>
        <img src={projectsData[3].imgSrc} alt="" className='projects__img'/>
        </Link>
      </article>

      <article className='projects__article projects__article--five'>
        <Link to={`/details/${projectsData[4].id}`}>
          <h2 className='projects__h2'>{projectsData[4].name}<mark>.</mark></h2>
        <img src={projectsData[4].imgSrc} alt="" className='projects__img'/>
        </Link>
      </article>
      <article className='projects__article projects__article--six'>
        <Link to={`/details/${projectsData[5].id}`}>
          <h2 className='projects__h2'>{projectsData[5].name}<mark>.</mark></h2>
        <img src={projectsData[5].imgSrc} alt="" className='projects__img'/>
        </Link>
      </article>
      <article className='projects__article projects__article--seven'>
        <Link to={`/details/${projectsData[6].id}`}>
          <h2 className='projects__h2'>{projectsData[6].name}<mark>.</mark></h2>
        <img src={projectsData[6].imgSrc} alt="" className='projects__img'/>
        </Link>
      </article>
      <article className='projects__article projects__article--eight'>
        <Link to={`/details/${projectsData[7].id}`}>
          <h2 className='projects__h2'>{projectsData[7].name}<mark>.</mark></h2>
        <img src={projectsData[7].imgSrc} alt="" className='projects__img'/>
        </Link>
      </article>
    </section>
  );
};


export default Projects;