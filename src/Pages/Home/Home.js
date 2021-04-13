import About from '../About/About';
import IconSection from '../../Components/IconSection/IconSection';
import CartList from '../../Components/CartList/CartList';
import Footer from '../Footer/Footer';

const Home = () => {
    
    return(
        <>
            <About />
            <IconSection />
            <CartList/>
            <Footer />
        </>
    );
}

export default Home;