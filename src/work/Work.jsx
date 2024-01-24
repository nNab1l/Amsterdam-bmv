import './work.css';
import img from './img/werken-bij.webp';

const Work = () => {

    return(
        <section className="work" id='wor'>
            <p className='h2'>
                <span>Werken Bij</span>
            </p>
            <article className='work__article work__article--alt'>
            <h2>
            Werken of stage lopen<br></br> bij BMV<mark>.</mark>
            </h2>
            <p className='work__sub'>Werken Bij</p>
            </article>
            <article className='work__content'>
            <figure className='work__figure'>
                    <img src={img} alt='Jonge man in gesprek met vrouw' className='work__img' />
                </figure>
                <div className='work__textWrapper'>
                    <p className='work__paragraph'>
                        

                        BMV is altijd op zoek naar nieuwe collega’s, om aan de slag te gaan als junior-, medior- of senior-bouwmanager of projectmanager maatschappelijk vastgoed

                        Het team zoekt mensen met ervaring en een opleiding in het wetenschappelijk of hoger beroepsonderwijs, bijvoorbeeld op het gebied van bouwkunde, architectuur en vastgoedmanagement.

                        Maar ook aan mensen met een ogenschijnlijk minder voor de hand liggende achtergrond, bijvoorbeeld rechten, sociologie of psychologie, heeft BMV behoefte.<br></br><br></br>

                        En in alle gevallen zijn een brede blik, flexibiliteit, goede omgevingsgevoeligheid en affiniteit met maatschappelijk vastgoed en het sociaal domein vereisten voor het werken bij BMV.

                        Wie nog studeert, is van harte welkom om stage te lopen bij BMV. Werk mee in mooie projecten, krijg inzicht in het project- en bouwmanagement en leer de gemeente Amsterdam kennen.<br></br><br></br>

                        Stuur voor meer informatie over werken of stage lopen bij BMV een e-mail (met daarin in elk geval persoonlijke gegevens, een telefoonnummer en een curriculum vitae) naar capaciteit.BMV@amsterdam.nl.<br></br><br></br>

                        Kijk voor openstaande vacatures op https://werkenbij.amsterdam.nl.

                    </p>
                    </div>
            </article>
        </section>
    )
}

export default Work