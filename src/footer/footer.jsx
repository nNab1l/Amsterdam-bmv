import './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'; 
import { Link } from 'react-router-dom'

const Footer = () => {

    return(
        <section className="footer">
            <footer className='footer__main'>
                <article className='footer__article'>
                    <h2 className='footer__h2'>contact<mark>.</mark></h2>
                    <ul className='footer__ul'>
                        <li className='footer__li'>PMB is bereikbaar op<br></br> werkdagen tussen 8.30 - 17.30 uur.</li>
                        <li className='footer__li'>Weesperstraat 432<br></br> 1018 DN Amsterdam <br></br>E: info.pmb@amsterdam.nl</li>
                        <li className='footer__li'>Postbus 1269 <br></br>1000 BG Amsterdam</li>
                    </ul>
                </article>
                <article className='footer__article'>
                    <h2 className='footer__h2'>Over deze site<mark>.</mark></h2>
                    <ul className='footer__ul'>
                        <li className='footer__li'>Colofon</li>
                        <li className='footer__li'>Proclaimer en Copyright</li>
                        <li className='footer__li'>Sitemap</li>
                    </ul>
                </article>
                <article className='footer__article'>
                    <h2 className='footer__h2'>Amsterdam.nl<mark>.</mark></h2>
                    <ul className='footer__ul'>
                        <li className='footer__li'>Nieuws en publieksinformatie van de <br></br>gemeente Amsterdam vindt u op amsterdam.nl</li>
                        <li className='footer__li'>
                            <a target='blank' href="https://www.amsterdam.nl/">Naar amsterdam.nl</a>
                        </li>
                    </ul>
                </article>
                <Link target='blank' to="https://www.linkedin.com/company/projectmanagement-bureau">
                    <FontAwesomeIcon icon={faLinkedinIn} className='footer__linkedin'/>
                </Link>
            </footer>
        </section>
    )
}

export default Footer;