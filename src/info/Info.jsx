import React, { useState } from 'react';
import img from './img/pexels-jan-kopřiva-3315512.jpg';
import img2 from './img/vertical2.jpg';

  const Info = () => {
    const itemNames = ['Groei', 'Sociaal-maatschappelijk', 'Werkplekken', 'Integrale aanpak'];

    const additionalTexts = [
      'Voor veel mensen is en blijft Amsterdam een zeer aantrekkelijke plek om te wonen en dus blijven we bouwen aan de groei van de stad. Maar Amsterdam bestaat natuurlijk uit méér dan alleen woningen. Daarom bouwen we aan een sociaal-duurzaam Amsterdam: een stad die het welzijn van haar bewoners belangrijk vindt en verbetert, door niet alleen woningen te bouwen maar ook te',
      'BMV stond aan de wieg van het Amsterdamse beleid voor maatschappelijke voorzieningen. Dit beleid werd in 2018 verankerd in de ‘Referentienormen voor maatschappelijke voorzieningen, groen en spelen’. Het doel van deze normen is de groei van de stad te koppelen aan maatschappelijke voorzieningen en activiteiten. Deze worden niet vanzelfsprekend door de private sector opgepakt en vragen daarom een actieve rol van de gemeentelijke overheid. Het gaat hierbij om gebouwen (zogenaamd maatschappelijk vastgoed) en het – letterlijk – creëren van ruimte voor sport, spel, kunst en cultuur.',
      'Bij BMV werken rond de 60 bouwmanagers en project- en procesmanagers maatschappelijk vastgoed, met als thuisbasis een kantoor in het hart van Amsterdam. Waar nodig schakelt BMV externe experts in, voor specifieke aspecten van een project. BMV stuurt projecten aan vanuit zelfstandig werkende teams met korte lijnen en veel dynamiek. In de teams hebben de betreffende medewerkers voldoende tijd om van elkaar te leren, innovatieve ideeën te ontwikkelen of zelfs met een compleet nieuwe aanpak te komen. Immers, een stad als Amsterdam staat – net als het leven zelf – nooit stil.',
      'De werkgebieden en de expertise van bouwmanagement en maatschappelijk vastgoed overlappen elkaar, vullen elkaar aan en versterken elkaar. BMV hanteert daarom een integrale aanpak: een kruisbestuiving tussen verschillende disciplines, uiteenlopend van proces-, project- en bouwmanagement tot planning, financiën, grond en ontwikkeling, vastgoed en juridische zaken.',
    ];
  
    const [activeDropdown, setActiveDropdown] = useState(null);
  
    const toggleDropdown = (index) => {
      setActiveDropdown(activeDropdown === index ? null : index);
    };
  
    const isDropdownOpen = (index) => {
      return activeDropdown === index;
    };
  

  return(
    <section className='info__section'>
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
                className={`info__wrapper ${isDropdownOpen(index) ? 'open' : ''}`}
                onClick={() => toggleDropdown(index)}
              >
                <h2 className='info__heading'>{itemName}</h2>
                {!isDropdownOpen(index) && <p className='info__dot'>⦁</p>}
                {isDropdownOpen(index) && (
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