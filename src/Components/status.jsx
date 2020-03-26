import React, { Component } from "react";
import Original from "./images/car original.png";

const picsHeight = window.innerHeight;

class Status extends Component {
  render() {
    return <img src={Original} alt="" height={picsHeight} />;
  }
}

export default Status;
