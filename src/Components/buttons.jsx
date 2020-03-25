import React from "react";
import { NavLink } from "react-router-dom";
import Map from "./Images/map.png";
import Musics from "./Images/musics.png";
import Login from "./Images/login.png";
import LightOn from "./Images/Turn on light.png";
import LightOff from "./Images/Turn off light.png";

const picsHeight = window.innerHeight / 6;

const Buttons = () => {
  return (
    <ul className="nav flex-column">
      <li className="nav-item">
        <NavLink className="nav-link" to="/map">
          <img height={picsHeight} src={Map} alt="" />
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/musics">
          <img height={picsHeight} src={Musics} alt="" />
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/login">
          <img height={picsHeight} src={Login} alt="" />
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/light-on">
          <img height={picsHeight} src={LightOn} alt="" />
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/light-off">
          <img height={picsHeight} src={LightOff} alt="" />
        </NavLink>
      </li>
    </ul>
  );
};

export default Buttons;
