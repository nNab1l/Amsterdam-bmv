import React, { useState } from 'react';
import img from './img/info-1.webp';
import img2 from './img/info-2.webp';



const Info = () => {
  const itemNames = ['Groei', 'Sociaal-maatschappelijk', 'Werkplekken', 'Integrale aanpak'];

  const additionalTexts = [
    'Voor veel mensen is en blijft Amsterdam een zeer aantrekkelijke plek om te wonen en dus blijven we bouwen aan de groei van de stad. Maar Amsterdam bestaat natuurlijk uit méér dan alleen woningen. Daarom bouwen we aan een sociaal-duurzaam Amsterdam: een stad die het welzijn van haar bewoners belangrijk vindt en verbetert, door niet alleen woningen te bouwen maar ook te zorgen voor maatschappelijke voorzieningen, voor huidige bewoners en toekomstige generaties.',
    'Bij BMV werken rond de 60 bouwmanagers en project- en procesmanagers maatschappelijk vastgoed, met als thuisbasis een kantoor in het hart van Amsterdam. Waar nodig schakelt BMV externe experts in, voor specifieke aspecten van een project. BMV stuurt projecten aan vanuit zelfstandig werkende teams met korte lijnen en veel dynamiek. In de teams hebben de betreffende medewerkers voldoende tijd om van elkaar te leren, innovatieve ideeën te ontwikkelen of zelfs met een compleet nieuwe aanpak te komen. Immers, een stad als Amsterdam staat – net als het leven zelf – nooit stil.',
    'Naast de maatschappelijke voorzieningen werkt BMV ook aan beheer en faciliteren van goede werkplekken - zoals kantoren, werven, garages en opslagruimtes - voor de mensen die de stad en het stadslandschap schoon en netjes houden. De stadsdeelkantoren en andere kantoren voor de gemeentelijke organisatie zijn ook onderdeel van ons werkveld.',
    'De werkgebieden en de expertise van bouwmanagement en maatschappelijk vastgoed overlappen elkaar, vullen elkaar aan en versterken elkaar. BMV hanteert daarom een integrale aanpak: een kruisbestuiving tussen verschillende disciplines, uiteenlopend van proces-, project- en bouwmanagement tot planning, financiën, grond en ontwikkeling, vastgoed en juridische zaken.',
  ];

  const itemNames2 = ['Wat is BMV?', 'Wat doet BMV?', '?', 'Integrale aanpak'];

  const additionalTexts2 = [
    'Het ontwikkelen en realiseren van maatschappelijke voorzieningen is binnen de gemeente Amsterdam in handen van team BMV: Bouwmanagement en Maatschappelijk Vastgoed, onderdeel van het Projectmanagementbureau. Bij BMV werken bouwmanagers en project- en procesmanagers, samen met collega’s van verschillende gemeentelijke afdelingen, aan de toekomst van de stad.',
    'BMV stond aan de wieg van het Amsterdamse beleid voor maatschappelijke voorzieningen. Dit beleid werd in 2018 verankerd in de ‘Referentienormen voor maatschappelijke voorzieningen, groen en spelen’. Het doel van deze normen is de groei van de stad te koppelen aan maatschappelijke voorzieningen en activiteiten. Deze worden niet vanzelfsprekend door de private sector opgepakt en vragen daarom een actieve rol van de gemeentelijke overheid.',
    'Bij BMV werken rond de 60 bouwmanagers en project- en procesmanagers maatschappelijk vastgoed, met als thuisbasis een kantoor in het hart van Amsterdam...',
    'De werkgebieden en de expertise van bouwmanagement en maatschappelijk vastgoed overlappen elkaar, vullen elkaar aan en versterken elkaar. BMV hanteert daarom een integrale aanpak...',
  ];

  const [activeDropdown1, setActiveDropdown1] = useState(null);
  const [activeDropdown2, setActiveDropdown2] = useState(null);

  const toggleDropdown1 = (index) => {
    setActiveDropdown1(activeDropdown1 === index ? null : index);
  };

  const toggleDropdown2 = (index) => {
    setActiveDropdown2(activeDropdown2 === index ? null : index);
  };

  const isDropdownOpen1 = (index) => {
    return activeDropdown1 === index;
  };

  const isDropdownOpen2 = (index) => {
    return activeDropdown2 === index;
  };

  return (
    <section className='info__section' id='org'>
      <article className='info__article'>
        <h2>
          Bijdragen aan een <br></br>toekomstbestendige stad<mark>.</mark>
        </h2>
        <p className='info__sub'>Duurzaamheid</p>
        <article className='info__content'>
          <div className='info__panel'>
            {itemNames.map((itemName, index) => (
              <div
                key={index}
                className={`info__wrapper ${isDropdownOpen1(index) ? 'open' : ''}`}
                onClick={() => toggleDropdown1(index)}
              >
                <h2 className='info__heading'>{itemName}</h2>
                {!isDropdownOpen1(index) && <p className='info__dot'>⦁</p>}
                {isDropdownOpen1(index) && (
                  <div className='info__textWrapper'>
                    <p className='info__paragraph'>{additionalTexts[index]}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
          <figure className='info__figure'>
            <img src={img} alt='' className='info__img' />
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
            <img src={img2} alt='' className='info__img' />
          </figure>
          <div className='info__panel'>
            {itemNames2.map((itemName, index) => (
              <div
                key={index}
                className={`info__wrapper ${isDropdownOpen2(index) ? 'open' : ''}`}
                onClick={() => toggleDropdown2(index)}
              >
                <h2 className='info__heading'>{itemName}</h2>
                {!isDropdownOpen2(index) && <p className='info__dot'>⦁</p>}
                {isDropdownOpen2(index) && (
                  <div className='info__textWrapper'>
                    <p className='info__paragraph'>{additionalTexts2[index]}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </article>
      </article>
    </section>
  );
};

export default Info;
