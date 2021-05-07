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
import Impresium from './Pages/Impresium/Impresium';

function App() {
  return (
    <>
      <Navigation />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/leistungen" exact component={Leistungen} />
        <Route path="/gallery" exact component={Gallery} />
        <Route path="/impresium" exact component={Impresium} />
        <Route component={() => <h1>Error Page !</h1>} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
