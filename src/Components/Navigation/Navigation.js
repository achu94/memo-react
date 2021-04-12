import {NavLink } from 'react-router-dom';

import React, { useState } from "react";
import "./Navigation.css";

import img from '../../media/bg.jpg'

export default function App() {
  const [state, setstate] = useState(false);

  const toogle = () => {
    setstate(!state);
    console.log("Show");
    console.log(state);
  };

  return (
    <>
<img src="https://picsum.photos/1920/1200" alt=""/>
      <div className="nav">
        <div className="logo">Branding</div>
        <div className="ab">
          <ul className="items">
            <li><NavLink to="/about"> Über uns </NavLink></li>
            <li><NavLink to="/leistungen"> Leistungen </NavLink></li>
            <li><NavLink to="/referenz"> Referenz </NavLink></li>
          </ul>
          <ul className="navbuttons">
            <button className="button">
              <li><NavLink to="/kontakt" > Kontakt </NavLink></li>
            </button>
          </ul>
        </div>
        <div className="toggler" onClick={toogle}>
          <img
            src="https://www.barberemerson.com/images/fa_bars.png"
            alt="toggle"
            className="img"
          />
        </div>
      </div>
      {state && (
        <div className="overlay">
          <div className="overlay_men">
            <ul>
              <li>
                <div className="overlay_close" onClick={toogle}>
                  <img className="landing-img"
                    className="overlay_close_button"
                    src="https://www.materialui.co/materialIcons/navigation/close_white_2048x2048.png"
                    alt="close"
                  />
                </div>
              </li>
              <li><NavLink to="/"> Home </NavLink></li>
            <li><NavLink to="/about"> Über uns </NavLink></li>
            <li><NavLink to="/referenz"> Referenz </NavLink></li>
            <li><NavLink to="/kontakt" > Kontakt </NavLink></li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
