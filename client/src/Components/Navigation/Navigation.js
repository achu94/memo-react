import { NavLink } from 'react-router-dom';

import React, { useState } from "react";
import "./Navigation.css";

import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';

import logo from '../../media/logo.png';
import homeImage from '../../media/logo-04.png';

const toggleIconStyle = {
  fontSize : 'xx-large',
  fill: '#E89B00',
}

export default function App() {
  const [state, setstate] = useState(false);

  const toogle = () => {
    setstate(!state);
    console.log("Show");
    console.log(state);
  };

  return (
    <>
      <div className="landing_img"> <img src={homeImage} alt="" /></div>
      <div className="nav">
        {/* <div className="logo"> 
          <NavLink to="/">
            <img style={{width: "10rem"}} src={logo} alt="Mehmed Hyusein" />
          </NavLink>
        </div> */}
        <div className="ab">
          <ul className="items">
            <li><NavLink to="/#about"> Über uns </NavLink></li>
            <li><NavLink to="/#leistungen"> Leistungen </NavLink></li>
            <li><NavLink to="/gallery"> Gallery </NavLink></li>
          </ul>
          <ul className="navbuttons">
            <button className="button">
              <li><NavLink style={{ color: "white" }} to="/#kontakt" > Kontakt </NavLink></li>
            </button>
          </ul>
        </div>
        <div className="toggler" onClick={toogle}>
         <Button>
          <MenuIcon style={ toggleIconStyle } />
         </Button>
        </div>
      </div>
      {state && (
        <div className="overlay">
          <div className="overlay_men">
            <ul>
              <li>
                <div className="overlay_close" onClick={toogle}>
                  <Button><CloseIcon style={toggleIconStyle} /></Button>
                </div>
              </li>
              <li><NavLink to="/"> Home </NavLink></li>
              <li><NavLink to="/#about"> Über uns </NavLink></li>
              <li><NavLink to="/#leistungen"> Leistungen </NavLink></li>
              <li><NavLink to="/gallery"> Gallery </NavLink></li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
