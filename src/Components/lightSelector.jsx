import React, { Component } from "react";
import { SwatchesPicker } from "react-color";

class LightSelector extends Component {
  render() {
    const picsHeight = window.innerHeight;
    const picsWidth = window.innerWidth / 2;

    return <SwatchesPicker height={picsHeight} width={picsWidth} />;
  }
}

export default LightSelector;
