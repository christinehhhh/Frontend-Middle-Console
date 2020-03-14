import React, { Component } from "react";
import Map from "./Images/map.png";
import Music from "./Images/music.png";
import Settings from "./Images/setting.png";
import LightOn from "./Images/Turn on light.png";
import LightOff from "./Images/Turn off light.png";

const picsHeight = window.innerHeight / 6;

class Buttons extends Component {
  render() {
    return (
      <div
        className="btn-group-vertical"
        role="group"
        aria-label="Vertical button group"
      >
        <button type="button" className="btn btn-circle">
          <img height={picsHeight} src={Map} alt="" />
        </button>
        <button type="button" className="btn btn-circle">
          <img height={picsHeight} src={Music} alt="" />
        </button>
        <button type="button" className="btn btn-circle">
          <img height={picsHeight} src={Settings} alt="" />
        </button>
        <button type="button" className="btn btn-circle">
          <img height={picsHeight} src={LightOn} alt="" />
        </button>
        <button type="button" className="btn btn-circle">
          <img height={picsHeight} src={LightOff} alt="" />
        </button>
      </div>
    );
  }
}

export default Buttons;
