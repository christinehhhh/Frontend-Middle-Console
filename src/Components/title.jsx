import React from "react";
import DarkModeToggle from "./common/darkModeToggle";
import Clock from "./common/clock";
import "../styles.scss";

const Title = () => {
  return (
    <div className="row">
      <div className="col-sm-6">
        <DarkModeToggle />
      </div>
      <div className="col">
        <Clock />
      </div>
    </div>
  );
};

export default Title;
