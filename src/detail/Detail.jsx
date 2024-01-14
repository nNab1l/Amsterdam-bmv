import React, { useEffect } from 'react';
import img from '../projects/img/4.jpg';
import img2 from '../projects/img/Img03.jpg';
import img3 from '../projects/img/wereldburger.jpg';
import img4 from '../projects/img/4.jpg'
import img5 from '../projects/img/afc-new.jpg'
import img6 from '../projects/img/foto_2.png';
import img7 from '../projects/img/brielstraatjpg.jpg';
import img8 from '../projects/img/slavernimuseum_logo.jpg';
import './detail.css'
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'


const projectsData = [
  {
    id: 1,
    name: 'Spinoza20first<mark>.</mark>',
    intro: 'Spinoza20first',
    tag: 'Nieuwbouw',
    imgSrc: img,
    content: 'Content for Spinoza20first project goes here.',
  },
  {
    id: 2,
    name: 'Sportpark Goed Genoeg & Clubgebouw AFC<mark>.</mark>',
    tag: 'Nieuwbouw',
    imgSrc: img5,
    content: 'Content for Sportpark Goed Genoeg project goes here.',
  },
  {
    id: 3,
    name: 'Nieuwbouw AICS<mark>.</mark>',
    tag: 'Nieuwbouw',
    imgSrc: img2,
    content: 'Content for Nieuwbouw AICS project goes here.',
  },
  {
    id: 4,
    name: 'Renovatie Amsterdam Museum<mark>.</mark>',
    tag: 'Renovatie',
    imgSrc: img4,
    content: 'Content for Renovatie Amsterdam Museum project goes here.',
  },
  {
    id: 5,
    name: 'Nieuwbouw wereldburger<mark>.</mark>',
    tag: 'Nieuwbouw',
    imgSrc: img3,
    content: 'Content for Renovatie Amsterdam Museum project goes here.',
  },
  {
    id: 6,
    name: 'Renovatie Bostheater<mark>.</mark>',
    tag: 'Renovatie',
    imgSrc: img6,
    content: 'Content for Renovatie Amsterdam Museum project goes here.',
  },
  {
    id: 7,
    name: 'Verbouwing en Nieuwbouw Werven en Overslagpunten<mark>.</mark>',
    tag: 'Verbouwing en Nieuwbouw',
    imgSrc: img7,
    content: 'Content for Renovatie Amsterdam Museum project goes here.',
  },
  {
    id: 8,
    name: 'Nationaal Slavernijmuseum<mark>.</mark>',
    tag: 'Cultuur',
    imgSrc: img8,
    content: 'Content for Renovatie Amsterdam Museum project goes here.',
  },
];

const Detail = () => {
  const { projectId } = useParams();
  const selectedProject = projectsData.find((project) => project.id === parseInt(projectId));
  


  if (!selectedProject) {
    return <div>Project not found</div>;
  }

  return (
    <section className='detail'>
       <nav className='detail__nav'>
        <ul className='detail__ul'>
          <li className='detail__li'>Home</li>
          <li className='detail__li'>Projecten</li>
          <li className='detail__li'>Werken Bij</li>
        </ul>
      </nav>
      <div class="detail__wrapper">
      <Link to={`/Amsterdam-bmv`} className='detail__link'>
        <div className='detail__buttonWrapper'>
          <button className='detail__button'>
            <FontAwesomeIcon icon={faArrowLeft} className='detail__arrow'/>
          </button>
          <p className='detail__back'>Terug</p>
        </div>
      </Link>
      <div className='detail__headerWrapper'>
        <p className='detail__tag'>
        { selectedProject.tag }
        </p>
          <h1 class="detail__infinite-text" id="movingtext" dangerouslySetInnerHTML={{ __html: selectedProject.name }}></h1>
      </div>
      </div>

      <figure className='detail__figure'>
        <img src={selectedProject.imgSrc} alt="" className='detail__img'/>
      </figure>
      <article className='detail__article'>
        <h2 className='detail__h2'dangerouslySetInnerHTML={{ __html: selectedProject.intro }}></h2>
        <p className='detail__p' dangerouslySetInnerHTML={{ __html: selectedProject.content }}></p>
      </article>
    </section>
  );
};


export default Detail;
