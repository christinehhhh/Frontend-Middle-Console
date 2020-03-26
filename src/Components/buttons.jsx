import React from "react";
import { NavLink } from "react-router-dom";
import Map from "./images/map.png";
import Musics from "./images/musics.png";
import Login from "./images/login.png";
import LightOn from "./images/Turn on light.png";
import LightOff from "./images/Turn off light.png";
import ColorPicker from "./images/colorPicker.png";
import Alarm from "./images/alarm.png";

const picsHeight = window.innerHeight / 8.5;

const Buttons = () => {
  return (
    <ul className="nav flex-column">
      <li className="nav-item">
        <NavLink className="nav-link" to="/alarm">
          <img height={picsHeight} src={Alarm} alt="" />
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
      <li className="nav-item">
        <NavLink className="nav-link" to="/color-picker">
          <img height={picsHeight} src={ColorPicker} alt="" />
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/musics">
          <img height={picsHeight} src={Musics} alt="" />
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/map">
          <img height={picsHeight} src={Map} alt="" />
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/login">
          <img height={picsHeight} src={Login} alt="" />
        </NavLink>
      </li>
    </ul>
  );
};

export default Buttons;
