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
                            123456789
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
                        <span>Lorem ipsum dolor.</span>
                        <span>Lorem ipsum dolor.</span>
                        <span>Lorem ipsum dolor.</span>
                        <span>Lorem ipsum dolor.</span>
                        <span>Lorem ipsum dolor.</span>
                        <span>Lorem ipsum dolor.</span>
                        <span>Lorem ipsum dolor.</span>
                    </div>
                </li>
            </ul>

            <KontaktFormular />
        </div>
    );
}

export default Kontakt;