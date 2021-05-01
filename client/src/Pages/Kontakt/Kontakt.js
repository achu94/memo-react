import PhoneIcon from '@material-ui/icons/Phone';
import HomeIcon from '@material-ui/icons/Home';

import KontaktFormular from './KontaktFormular';

import './Kontakt.css';

const Kontakt = () => {

    return(
        <div className="main" id="kontakt">
            <h1>Kontakt</h1>
            <ul className="kontakt-container">
                <li>
                    <div>
                        <h2>Telefon</h2>
                        <span>
                            <h3>+49 1575 3866363</h3>
                        </span>
                    </div>
                </li>
                <li>
                    <div className="kontakt-oeffnungszeiten" >
                        <h2>Adresse</h2>
                        <h3>Friesenstraße 13</h3>
                        <h3>26655 Westerstede</h3>
                    </div>
                </li>
                <li>
                    <div className="kontakt-oeffnungszeiten">
                        <h2>Öffnungszeiten</h2>
                        <h3>Montag-Samstag: 08:00-16:00</h3>
                        <h3>Sonntag: Geschlossen</h3>
                    </div>
                </li>
            </ul>

            <KontaktFormular />
        </div>
    );
}

export default Kontakt;