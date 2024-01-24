import img from '../projects/img/spinoza.webp';
import img2 from '../projects/img/aics.webp';
import img3 from '../projects/img/wereldburger.webp';
import img4 from '../projects/img/amsterdam-museum-renovatie.webp'
import img5 from '../projects/img/afc.webp'
import img6 from '../projects/img/bostheater.webp';
import img7 from '../projects/img/brielstraat.webp';
import img8 from '../projects/img/slavernimuseum_logo.webp';
import './detail.css'
import { HeaderNav } from '../header/Header';
import { Footer } from '../footer/Footer';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react';

const projectsData = [
  {
    id: 1,
    name: 'Spinoza20first<mark>.</mark>',
    intro: 'Spinoza20First: duurzame school en sporthal<mark>.</mark>',
    tag: 'Nieuwbouw',
    imgSrc: img,
    content: 'Waar ooit de parkeergarage van de voormalige Bijlmerbajes stond, zorgde een team van BMV voor de realisatie van nieuwbouw van de Spinoza20First-school en Sporthal Bajeskwartier, met daaraan gekoppeld een jongerencentrum. <br></br>Deze middelbare school biedt plek aan 1.000 tot 1.200 leerlingen. De sporthal bestaat uit drie zalen. Deze worden op doordeweekse dagen overdag gebruikt door Spinoza20First en in de avonden en weekenden door verenigingen. <br></br>Bij de ontwikkeling van de school en de sporthal besteedde BMV veel aandacht aan duurzaamheid. Zo is het gebouw flexibel indeelbaar, heeft het een lichte constructie en is bij de bouw gebruik gemaakt van duurzame materialen. <br></br>Verder is het gebouw aangesloten op de warmte/koude-opslaginstallatie (voor verwarming in de winter en verkoeling in de zomer) van het gebied Bajeskwartier. <br></br>Het dak van de school – met daarop het schoolplein – bevat veel groen, dat bijdraagt aan het vasthouden van regenwater. Op het dak van de sporthal bevinden zich hiernaast zonnepanelen.',
  },
  {
    id: 2,
    name: 'Sportpark Goed Genoeg & Clubgebouw AFC<mark>.</mark>',
    intro: 'AFC: nieuwe velden, nieuw clubhuis<mark>.</mark>',
    tag: 'Nieuwbouw',
    imgSrc: img5,
    content: 'In 2020 verzorgde een team van bouwmanagers van BMV vijf nieuwe kunstgrasvelden en een gloednieuw clubhuis voor AFC, de Amsterdamsche Football Club. Dit moest gebeuren om AFC in te passen in de almaar groeiende Zuidas. <br></br>BMV begeleidde de verplaatsing van de velden en het clubhuis in noordelijke richting, om op de ‘oude’ locatie ruimte te maken voor een nieuwe woonwijk.<br></br> De werkzaamheden vonden gefaseerd plaats, zodat er tijdens de bouw gewoon kon worden gevoetbald. <br></br>Het nieuwe clubgebouw is in 2020 opgeleverd. In september 2022 zijn het sportpark en het clubgebouw officieel in gebruik genomen.',
  },
  {
    id: 3,
    name: 'Nieuwbouw AICS<mark>.</mark>',
    intro: 'Amsterdam International<br> Community School (AICS): wereldschool in wereldstad<mark>.</mark>',
    tag: 'Nieuwbouw',
    imgSrc: img2,
    content: 'Vlak achter het VU-universiteitscomplex op de Zuidas is eind 2021 de Amsterdam International Community School (AICS) opgeleverd. <br></br>BMV was vanaf het prille begin betrokken bij de bouw van de school: van het locatieonderzoek tot aan de oplevering. Het schoolgebouw van 16.000 vierkante meter biedt plek aan 1.400 basis- en middelbare schoolleerlingen. <br></br>In het kader van duurzaamheid zijn diverse maatregelen getroffen. Zo is er een groen dak aangelegd en zijn er zonnepanelen geplaatst. De gevel is natuurinclusief,  over enkele jaren is deze verticale tuin begroeid met planten. <br></br>Ook zijn er kasten voor huismussen en vleermuizen geplaatst. In het gebouw is een wandelement in de centrale hal over de gehele lengte, gemaakt van de gekapte bomen die plaats moesten maken voor het gebouw, een belangrijke sfeermaker. <br></br>BMV stuurde het ontwerptraject aan, gaf vorm aan alle inkoopprocessen en vergunningtrajecten, organiseerde bewonersparticipatie en -communicatie, stemde af met de vele stakeholders in het gebied en verzorgde het contractmanagement met de aannemer. <br></br>En zo groeide de AICS uit tot wat het nu is: een school die met succes is gebouwd, op tijd, binnen budget en met de gewenste kwaliteit.',
  },
  {
    id: 4,
    name: 'Renovatie Amsterdam Museum<mark>.</mark>',
    intro: 'Amsterdam Museum: renovatie in voorbereiding<mark>.</mark>',
    tag: 'Renovatie',
    imgSrc: img4,
    content: 'Het nieuwe Amsterdam Museum wordt een publieksvriendelijke plek waar bezoekers en bewoners Amsterdam leren kennen, in een museumgebouw dat in verbinding staat met de buurt, de stad en haar bewoners.<br></br> Het ontwerp voor het nieuwe Amsterdam Museum is gebaseerd op uitvoerig onderzoek naar de ontstaansgeschiedenis van het monument, naar mogelijk hergebruik van materialen uit het verleden en naar inbedding in het middeleeuwse hart van de binnenstad. Met inventieve oplossingen verandert het gesloten monument in een open museum: met aandacht voor de geschiedenis van het gebouw en de plek. Dankzij de renovatie zal het gebouw bovendien voldoen aan actuele duurzaamheidseisen.<br></br> De voorbereidingen van de renovatie zijn inmiddels in volle gang. BMV begeleidt de gehele renovatie, van haalbaarheidsonderzoek tot de oplevering en opening van het nieuwe museum.',
  },
  {
    id: 5,
    name: 'Nieuwbouw wereldburger<mark>.</mark>',
    intro: 'Wereldburger: prijswinnende renovatie<mark>.</mark>',
    tag: 'Nieuwbouw',
    imgSrc: img3,
    content: 'Het gebouw van basisschool De Wereldburger in Amsterdam Nieuw-West (Osdorp) dateerde uit de jaren ’60. Grootschalige renovatie was nodig om het te laten voldoen aan de huidige onderwijskundige en technische eisen. Een team van BMV verzorgde de renovatie. <br></br>Het gebouw werd gesloopt tot op het betoncasco en vanaf daar weer opgebouwd. Bij de renovatie was hergebruik een belangrijk uitgangspunt. Waar mogelijk werden materialen uit het oorspronkelijke schoolgebouw gebruikt, evenals materialen uit andere panden.<br></br> Het resultaat mag er zijn en de vernieuwde Wereldburger viel al snel in de prijzen. In 2022 werd het gebouw bekroond met de publieksjuryprijs bij de jaarlijkse Amsterdamse Architectuurprijs en won het de NRP Gulden Fenix (de nationale prijs voor voorbeeldprojecten in renovatie en transformatie) in de categorie ‘renovatie’.',
  },
  {
    id: 6,
    name: 'Renovatie Bostheater<mark>.</mark>',
    intro: 'Bostheater: klassieke attractie, vernieuwde jas<mark>.</mark>',
    tag: 'Renovatie',
    imgSrc: img6,
    content: 'Op dinsdag 23 mei 2023 vond de officiële opening plaats van het grootste openluchttheater van Nederland: het Bostheater.<br></br> Het Bostheater is gebouwd in de jaren ’50 en voldeed niet meer aan de eisen van de huidige tijd. BMV bereidde de besluitvorming voor die geleid heeft tot het besluit om het Bostheater te renoveren.<br></br> Na het besluit verzorgde en begeleidde het BMV de ontwerp- en bouwwerkzaamheden.  Het ontwerp is in een multidisciplinaire bouwteam zorgvuldig uitgewerkt. De focus van de bouwwerkzaamheden lag op de renovatie en restauratie van de betonnen onderdelen, waar mogelijk het herstellen van het oorspronkelijke landschapsontwerp en het plaatsen van nieuwbouw voor kleed-, opslag- en techniekruimten. Tevens is de theaterinfrastructuur grotendeels vernieuwd en uitgebreid. Op deze wijze is het theater omgetoverd tot een moderne cultuuroase, die voldoet aan de eisen en wensen van de huidige tijd en daarmee weer vele jaren tegemoet kan gaan.',
  },
  {
    id: 7,
    name: 'Verbouwing en Nieuwbouw Werven en Overslagpunten<mark>.</mark>',
    intro: 'Programma Transitie Werven en Overslagpunten<mark>.</mark>',
    tag: 'Verbouwing en Nieuwbouw',
    imgSrc: img7,
    content: 'In Amsterdam zorgen meer dan 2500 ambtenaren  elke dag voor de reiniging, de handhaving, de afvalinzameling en het dagelijks onderhoud van de openbare ruimte van de stad inclusief de kades en de bruggen en het groen. Zij werken vanuit 37 locaties in de stad.<br></br> Sinds 2019 en ook nog de komende jaren werken 12 bouwmanagers van Team BMV met andere collega’s van de gemeente samen om die 37 werklocaties in de stad samen te voegen tot 23.<br></br> Deze nieuwe uitvoeringslocaties moeten optimaal zijn: slim ruimtegebruik, duurzaamheid en toekomstbestendigheid zijn leidend. Er wordt ook gekeken naar het verminderen van vervoerbewegingen en de mogelijkheid van vervoer over water.<br></br> Belangrijk uitgangspunt is het bieden van een prettige werkomgeving en de juiste faciliteiten aan de mensen die het zware werk doen voor de stad. Er wordt hard gewerkt om in 2027 alle 23 nieuwe locaties gereed te hebben.',
  },
  {
    id: 8,
    name: 'Nationaal Slavernijmuseum<mark>.</mark>',
    intro: 'Nationaal Slavernijmuseum<mark>.</mark>',
    tag: 'Cultuur',
    imgSrc: img8,
    content: 'Nederland krijgt een eigen Nationaal Slavernijmuseum. Over een paar jaar zal het museum zijn deuren openen voor het publiek.<br></br> Het trans-Atlantische slavernijverleden vormt het uitgangspunt voor het museum, met onder andere veel aandacht voor de Indisch-Oceanische slavernij. Inhoudelijk zal het museum zich richten op een breed publiek, met een focus op educatie, kunst, kennis en onderzoek. Het initiatief wordt mede mogelijk gemaakt door steun van het ministerie van  Onderwijs, Cultuur & Wetenschap (OCW).<br></br> Dit historische en grote project wordt opgezet door drie kwartiermakers (Maatschappelijk, Museaal en Fysiek) die de handen ineenslaan. Vanuit de afdeling BMV is de kwartiermaker fysiek bij het project geleverd. Hij werkt met de twee andere kwartiermakers mee aan alle benodigde producten voor de verdere besluitvorming in het project.',
  },
];




const Detail = () => {
  const { projectId } = useParams();
  const selectedProject = projectsData.find((project) => project.id === parseInt(projectId));

  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
     
      setTimeout(() => {
        scrollRef.current.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }, []);
  


  if (!selectedProject) {
    return <div>Project not found</div>;
  }


  

  return (
    <section className='detail'>
      <HeaderNav />
      <div class="detail__wrapper">
      <Link
        to="/Amsterdam-bmv#pro"
        className='detail__link'
        innerRef={scrollRef} 
      >
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
      <Footer />
    </section>
  );
};


export default Detail;
