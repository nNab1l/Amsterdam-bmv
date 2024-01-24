import React from 'react';
import './projects.css';
import img from './img/spinoza.webp';
import img2 from './img/aics.webp';
import img3 from './img/wereldburger.webp';
import img4 from './img/amsterdam-museum-renovatie.webp'
import img5 from './img/afc.webp'
import img6 from './img/bostheater.webp';
import img7 from './img/brielstraat.webp';
import img8 from './img/slavernimuseum_logo.webp';
import { Link } from 'react-router-dom'

const projectsData = [
  {
    id: 1,
    name: 'Spinoza20first',
    imgSrc: img,
    content: '',
  },
  {
    id: 2,
    name: 'Sportpark Goed Genoeg & Clubgebouw AFC',
    imgSrc: img5,
    content: '',
  },
  {
    id: 3,
    name: 'Nieuwbouw AICS',
    imgSrc: img2,
    content: '',
  },
  {
    id: 4,
    name: 'Renovatie Amsterdam Museum',
    imgSrc: img4,
    content: '',
  },
  {
    id: 5,
    name: 'Nieuwbouw wereldburger',
    imgSrc: img3,
    content: '',
  },
  {
    id: 6,
    name: 'Renovatie Bostheater',
    imgSrc: img6,
    content: '',
  },
  {
    id: 7,
    name: 'Verbouwing en Nieuwbouw Werven en Overslagpunten',
    imgSrc: img7,
    content: '',
  },
  {
    id: 8,
    name: 'Nationaal Slavernijmuseum',
    imgSrc: img8,
    content: '',
  },
];


const Projects = () => {
  return (
    <section className='projects' id='pro'>
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