import React, { Component } from "react";
import { SwatchesPicker } from "react-color";

class LightSelector extends Component {
  render() {
    const picsWidth = window.innerWidth / 2;
    const picsHeight = window.innerHeight / 2;

    return (
      <div>
        <h3>Please Select Light Effect:</h3>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <label className="input-group-text" HTMLfor="selectEffect">
              Options
            </label>
          </div>
          <select className="custom-select" id="selectEffect">
            <option selected>Choose...</option>
            <option value="lowBeamIndicator">Low Beam Indicator</option>
            <option value="highBeamIndicator">High Beam Indicator</option>
            <option value="sideLightIndicator">Side Light Indicator</option>
            <option value="brakeWarningLight">BrakeWarningLight</option>
          </select>
        </div>
        <h3>Please Select Light Color:</h3>
        <SwatchesPicker width={picsWidth} height={picsHeight} />
      </div>
    );
  }
}

export default LightSelector;
