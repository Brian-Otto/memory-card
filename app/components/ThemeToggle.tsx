import { useState } from "react";
import DarkIcon from "./DarkIcon";
import LightIcon from "./LightIcon";

export default function ThemeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  return (
    <>
      <button type="button" onClick={() => setIsDarkMode(!isDarkMode)}>
        {isDarkMode ? <LightIcon /> : <DarkIcon />}
      </button>
    </>
  );
}
