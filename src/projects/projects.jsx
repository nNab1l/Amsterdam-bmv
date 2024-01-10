import React from 'react';
import './projects.css';
import img from './4.jpg';
import img2 from './Img03.jpg';
import img3 from './wereldburger.jpg';
import img4 from './amsterdam-museum-renovatie.webp'
import img5 from './afc-new.jpg'
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
];


const Projects = () => {
  return (
    <section className='projects'>
      <article className='projects__article projects__article--one'>
        <Link to={`/details/${projectsData[0].id}`}>
          <h2 className='projects__h2'>{projectsData[0].name}<mark>.</mark></h2>
        <img src={projectsData[0].imgSrc} alt="" className='projects__img'/>
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
    </section>
  );
};


export default Projects;