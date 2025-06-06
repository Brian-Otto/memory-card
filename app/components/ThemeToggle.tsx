import { getDefaultPreferredColorScheme } from "../lib/utils";
import DarkIcon from "./DarkIcon";
import LightIcon from "./LightIcon";
import { useLocalStorage } from "usehooks-ts";

type themeType = "light" | "dark";

export default function ThemeToggle() {
  const [theme, setTheme] = useLocalStorage("theme", () =>
    getDefaultPreferredColorScheme()
  );

  const onButtonClick = () => {
    const newTheme: themeType = theme === "dark" ? "light" : "dark";

    setTheme(newTheme);
    document.querySelector("html")?.setAttribute("data-theme", newTheme);
  };

  return (
    <>
      <button type="button" onClick={onButtonClick}>
        {theme === "dark" ? <DarkIcon /> : <LightIcon />}
      </button>
    </>
  );
}
