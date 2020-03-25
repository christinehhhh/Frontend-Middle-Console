import React from "react";

const ToggleDarkmode = ({ checked, onChange }) => (
  // The <span> tag is used to group inline-element in a document
  <span className="toggle-control">
    <input
      // Use className to specify the CSS attributes
      className="dmcheck"
      type="checkbox"
      // Can set wether the component is checked
      checked={checked}
      // Whenever a form field is changed, this event is fired
      onChange={onChange}
      // id specifies a unique id for an HTML element
      id="dmcheck"
    />

    {/* htmlFor property returns a string, representing
        the id of the element the label is bound to */}
    <label htmlFor="dmcheck" />
  </span>
);

export default ToggleDarkmode;
