import React, { Component } from "react";
import "./App.css";
import Map from "./Components/Images/map.png";
import Music from "./Components/Images/music.png";
import Settings from "./Components/Images/setting.png";
import LightOn from "./Components/Images/Turn on light.png";
import LightOff from "./Components/Images/Turn off light.png";

const picsHeight = window.innerHeight / 5;
class App extends Component {
  state = {};
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

export default App;
