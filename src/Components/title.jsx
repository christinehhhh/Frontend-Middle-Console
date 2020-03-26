import React from "react";
import DarkModeToggle from "./common/darkModeToggle";
import Clock from "./common/clock";
import Battery from "./common/battery";
import "../styles.scss";

const Title = () => {
  return (
    <div className="row">
      <div className="col-sm-4">
        <DarkModeToggle />
      </div>
      <div className="col">
        <Battery />
      </div>
      <div className="col">
        <Clock />
      </div>
    </div>
  );
};

export default Title;
