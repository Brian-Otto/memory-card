"use client";

import { useState } from "react";
import ResetSettings from "./ResetSettings";
import CloseIcon from "./CloseIcon";
import ThemeToggle from "./ThemeToggle";

type props = {
  onReset: () => void;
  onResetHighscoreClick: () => void;
};

export default function Menu({ onReset, onResetHighscoreClick }: props) {
  const [menuShown, setMenuShown] = useState(false);

  return (
    <>
      {menuShown ? (
        <div className="textbox flex w-min gap-4">
          <button type="button" onClick={() => setMenuShown(false)}>
            <CloseIcon className="menu-icon-size clickable" />
          </button>
          <ResetSettings
            onResetClick={onReset}
            onResetHighscoreClick={onResetHighscoreClick}
          />
          <ThemeToggle />
        </div>
      ) : (
        <button
          type="button"
          className="clickable p-3 w-min text-nowrap"
          onClick={() => setMenuShown(true)}
        >
          Show menu
        </button>
      )}
    </>
  );
}
