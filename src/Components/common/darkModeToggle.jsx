// The action of toggling the darkmode
import React from "react";
import ToggleDarkMode from "./toggleDarkMode";

// import the component use-dark-mode with different attirbutes
import useDarkMode from "use-dark-mode";

const DarkModeToggle = () => {
  const darkMode = useDarkMode(false);

  return (
    <div className="dark-mode-toggle">
      {/* click on ☀ to disable the dark mode */}
      <button type="button" onClick={darkMode.disable}>
        ☀
      </button>

      <ToggleDarkMode checked={darkMode.value} onChange={darkMode.toggle} />

      {/* click on ☾ to enable the dark mode */}
      <button type="button" onClick={darkMode.enable}>
        ☾
      </button>
    </div>
  );
};

export default DarkModeToggle;
