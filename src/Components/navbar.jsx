import React from "react";
import DarkModeToggle from "./common/darkModeToggle";
import "../styles.scss";

const Navbar = () => {
  return (
    <nav class="navbar navbar-light bg-light">
      <a class="navbar-brand" href="#">
        <DarkModeToggle />
      </a>
    </nav>
  );
};

export default Navbar;
