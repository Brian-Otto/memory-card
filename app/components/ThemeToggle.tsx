import { useState } from "react";
import DarkIcon from "./DarkIcon";
import LightIcon from "./LightIcon";

export default function ThemeToggle() {
  const getUserWantsDarkmode = () => {
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  };

  const [isDarkMode, setIsDarkMode] = useState(() => getUserWantsDarkmode());

  return (
    <>
      <button type="button" onClick={() => setIsDarkMode(!isDarkMode)}>
        {isDarkMode ? <LightIcon /> : <DarkIcon />}
      </button>
      <p>
        {window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "prefersDark"
          : "noPrefersDark"}
      </p>
    </>
  );
}
