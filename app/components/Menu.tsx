"use client";

import { useState } from "react";
import Settings from "./Settings";

type props = {
  onReset: () => void;
};

export default function Menu({ onReset }: props) {
  const [menuShown, setMenuShown] = useState(false);

  return (
    <>
      {menuShown ? (
        <div className="textbox w-min">
          <Settings onResetClick={onReset} />
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
