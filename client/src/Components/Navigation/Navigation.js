import React, { useState, useEffect } from "react";
import { NavLink } from 'react-router-dom';
import {Link} from 'react-scroll'

import IsHome from './IsHome';

import "./Navigation.css";

import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';

import homeImage from '../../media/logo-04.png';

const toggleIconStyle = {
  fontSize : 'xxx-large',
  fill: '#E89B00',
}

export default function App() {
  const [isMobil, setIsMobil] = useState(false);
  const [isHome, setIsHome] = useState(window.location.pathname)
  const toogle = () => {
    setIsMobil(!isMobil);
  };

  const path = window.location.pathname;

  useEffect( () => {
    setIsHome();
  },[isHome]);
  
  return (
    <>
      <div className="landing_img"> <img src={homeImage} alt="" /></div>
      <div className="nav">
        <div className="ab">
          <ul className="items">
              {
              path.length <= 1 ? (
              <>
                <li><Link onClick={ () => setIsHome(window.location.pathname)} to="about" spy={true} smooth={true}> Über uns </Link></li>
                <li><Link onClick={ () => setIsHome(window.location.pathname)} to="leistungen" spy={true} smooth={true}> Leistungen </Link></li>
                <li><NavLink onClick={ () => setIsHome(window.location.pathname)} to="/gallery"> Galerie </NavLink></li>
              </>
              )
            :(
              <>
                <li><NavLink onClick={ () => setIsHome(window.location.pathname)} to="/"> Startseite </NavLink></li>
              </>
              )
            }
            </ul>
              {
                path !== '/gallery' ? 
                (
                  <ul className="navbuttons">
                    <li>
                  <button className="button">
                      <Link style={{ color: "white" }} to="kontakt" spy={true} smooth={true} > Kontakt </Link>
                  </button>
                    </li>
                  </ul>
                ) 
                : ''}
        </div>
        <div className="toggler" onClick={toogle}>
         <Button>
          <MenuIcon style={ toggleIconStyle } />
         </Button>
        </div>
      </div>
      {isMobil && (
        <div className="overlay">
          <div className="overlay_men">
            <ul>
              <li>
                <div className="overlay_close" onClick={toogle}>
                  <Button><CloseIcon style={toggleIconStyle} /></Button>
                </div>
              </li>
              {
                path.length <= 1 ? (
                <>
                  <li><Link to="about"onClick={toogle}   spy={true} smooth={true}> Über uns </Link></li>
                  <li><Link onClick={toogle} to="leistungen" spy={true} smooth={true}> Leistungen </Link></li>
                  <li><NavLink onClick={toogle} to="/gallery"> Galerie </NavLink></li>
                  <li><Link onClick={toogle} to="kontakt" spy={true} smooth={true}> Kontakt </Link></li>
                </>
                 
               ) : (
                <>
                  <li><NavLink onClick={toogle} to="/"> Startseite </NavLink></li>
                </>
               ) 
              }
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
