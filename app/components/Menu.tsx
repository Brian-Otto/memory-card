"use client";

import { useState } from "react";
import Settings from "./Settings";
import CloseIcon from "./CloseIcon";
import ThemeToggle from "./ThemeToggle";

type props = {
  onReset: () => void;
};

export default function Menu({ onReset }: props) {
  const [menuShown, setMenuShown] = useState(false);

  return (
    <>
      {menuShown ? (
        <div className="textbox flex w-min gap-4">
          <button type="button" onClick={() => setMenuShown(false)}>
            <CloseIcon className="menu-icon-size clickable" />
          </button>
          <Settings onResetClick={onReset} />
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
