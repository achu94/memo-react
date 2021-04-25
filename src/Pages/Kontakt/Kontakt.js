import PhoneIcon from '@material-ui/icons/Phone';
import HomeIcon from '@material-ui/icons/Home';

import KontaktFormular from './KontaktFormular';

import './Kontakt.css';

const Kontakt = () => {

    return(
        <div className="main">
            <h1>Kontakt</h1>
            <ul className="kontakt-container">
                <li>
                    <div>
                        <h2>Telefon</h2>
                        <span>
                            <PhoneIcon />
                            <p>123456789</p>  
                        </span>
                    </div>
                </li>
                <li>
                    <div>
                        <h2>Adresse</h2>
                        <HomeIcon /> 
                        <div> Lorem ipsum dolor sit amet.</div>
                        <div>Lorem ipsum.</div>
                    </div>
                </li>
                <li>
                    <div className="kontakt-oeffnungszeiten">
                        <h2>Öffnungszeiten</h2>
                        <h3>Montag-Samstag: 08:00-16:00</h3>
                        <h3>Sonntag:Geschlossen</h3>
                    </div>
                </li>
            </ul>

            <KontaktFormular />
        </div>
    );
}

export default Kontakt;