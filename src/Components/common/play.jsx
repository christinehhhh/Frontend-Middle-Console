import React from "react";

const Play = props => {
  let classes = "fa fa-";
  if (!props.played) classes += "play";
  else classes += "pause";

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
