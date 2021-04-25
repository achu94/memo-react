import About from '../About/About';
import IconSection from '../../Components/IconSection/IconSection';
import CartList from '../../Components/CartList/CartList';
import Kontakt from '../Kontakt/Kontakt';

const Home = () => {
    
    return(
        <>
            <About />
            <IconSection />
            <CartList/>
            <Kontakt />
        </>
    );
}

export default Home;