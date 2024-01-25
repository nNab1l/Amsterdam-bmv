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
                        <li className='footer__li'>
                            <a target='blank' href="https://www.google.com/maps/place/Weesperstraat+432,+1018+DN+Amsterdam/@52.3627557,4.9065217,19.93z/data=!4m6!3m5!1s0x47c60997637d4bfb:0xd6c3c793b18363e3!8m2!3d52.3627315!4d4.9067103!16s%2Fg%2F11c28x8ydl?entry=ttu">Weesperstraat 432<br></br> 1018 DN Amsterdam <br></br></a>
                        <a href="mailto:info.pmb@amsterdam.nl">E: info.pmb@amsterdam.nl</a></li>
                        <li className='footer__li'>Postbus 1269 <br></br>1000 BG Amsterdam</li>
                    </ul>
                </article>
                <article className='footer__article'>
                    <h2 className='footer__h2'>Over deze site<mark>.</mark></h2>
                    <ul className='footer__ul'>
                        <li className='footer__li'>
                            <a target='blank' href="https://www.amsterdam.nl/pmb/algemene-onderdelen/colofon/">Colofon</a>
                        </li>
                        <li className='footer__li'>
                            <a target='blank' href="https://www.amsterdam.nl/pmb/algemene-onderdelen/proclaimer-copyright/">Proclaimer en Copyright</a>
                        </li>
                        <li className='footer__li'>
                            <a target='blank' href="https://www.amsterdam.nl/pmb/algemene-onderdelen/sitemap/">Sitemap</a>
                        </li>
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
export { Footer };