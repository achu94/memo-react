import About from '../About/About';
import IconSection from '../../Components/IconSection/IconSection';
import CartList from '../../Components/CartList/CartList';
import Footer from '../Footer/Footer';

const Home = () => {
    
    return(
        <div className="main">
            <About />
            <IconSection />
            <CartList/>
            <Footer />
        </div>
    );
}

export default Home;