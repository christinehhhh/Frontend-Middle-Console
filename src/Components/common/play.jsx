import React from "react";

const Play = props => {
  let classes = "fa fa-";
  if (props.played !== true) {
    classes += "play";
  } else {
    classes += "pause";
  }

  return (
    <i
      onClick={props.onClick}
      style={{ cursor: "pointer" }}
      className={classes}
      aria-hidden="true"
    ></i>
  );
};

export default Play;
