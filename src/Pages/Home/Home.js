import About from '../About/About';
import IconSection from '../../Components/IconSection/IconSection';
import Leistungen from '../Leistungen/Leistungen';
import Kontakt from '../Kontakt/Kontakt';

const Home = () => {
    
    return(
        <>
            <About />
            <IconSection />
            <Leistungen/>
            <Kontakt />
        </>
    );
}

export default Home;