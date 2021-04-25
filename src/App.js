import { Route, Switch } from "react-router-dom";

import './App.css';

import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Referenz from './Pages/Referenz/Referenz';
import Kontakt from './Pages/Kontakt/Kontakt';
import Gallery from './Pages/Gallery/Gallery';

import Navigation from './Components/Navigation/Navigation';
import Footer from './Pages/Footer/Footer';
import Leistungen from "./Pages/Leistungen/Leistungen";

function App() {
  return (
    <>
      <Navigation />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/leistungen" exact component={Leistungen} />
        {/* <Route path="/#referenz" exact component={Referenz} /> */}
        <Route path="/gallery" exact component={Gallery} />
        <Route path="/kontakt" exact component={Kontakt} />
        <Route component={() => <h1>Error Page !</h1>} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
