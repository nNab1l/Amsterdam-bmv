import React, { useEffect } from 'react';
import img from '../projects/4.jpg';
import img2 from '../projects/Img03.jpg';
import img4 from '../projects/4.jpg'
import img5 from '../projects/afc-new.jpg'
import './detail.css'
import { useParams } from 'react-router-dom';

const projectsData = [
  {
    id: 1,
    name: 'Spinoza20First',
    intro: 'Spinoza20First: duurzame school en sporthal',
    imgSrc: img,
    content: 'Waar ooit de parkeergarage van de voormalige Bijlmerbajes stond, zorgde een team van BMV voor de realisatie van nieuwbouw van de Spinoza20First-school en Sporthal Bajeskwartier, met daaraan gekoppeld een jongerencentrum. Deze middelbare school biedt plek aan 1.000 tot 1.200 leerlingen. De sporthal bestaat uit drie zalen. Deze worden op doordeweekse dagen overdag gebruikt door Spinoza20First en in de avonden en weekenden door verenigingen.<br><br>Bij de ontwikkeling van de school en de sporthal besteedde BMV veel aandacht aan duurzaamheid. Zo is het gebouw flexibel indeelbaar, heeft het een lichte constructie en is bij de bouw gebruik gemaakt van duurzame materialen. Verder is het gebouw aangesloten op de warmte/koude-opslaginstallatie (voor verwarming in de winter en verkoeling in de zomer) van het gebied Bajeskwartier. Het dak van de school – met daarop het schoolplein – bevat veel groen, dat bijdraagt aan het vasthouden van regenwater. Op het dak van de sporthal bevinden zich hiernaast zonnepanelen.',
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


const Detail = () => {
  const { projectId } = useParams();
  const selectedProject = projectsData.find((project) => project.id === parseInt(projectId));
  


  if (!selectedProject) {
    return <div>Project not found</div>;
  }

  return (
    <section className='detail'>
      <div class="detail__wrapper">
        <h1 class="detail__infinite-text" id="movingtext">{selectedProject.name }</h1>
      </div>

      <figure className='detail__figure'>
        <img src={selectedProject.imgSrc} alt="" className='detail__img'/>
      </figure>
      <article className='detail__article'>
        <h2 className='detail__h2'>{selectedProject.intro}</h2>
        <p className='detail__p' dangerouslySetInnerHTML={{ __html: selectedProject.content }}></p>
      </article>
    </section>
  );
};


export default Detail;
