"use client";

import { useState } from "react";
import ResetIcon from "./icons/ResetIcon";

type props = {
  onResetClick: () => void;
  onResetHighscoreClick: () => void;
};

export default function Settings({
  onResetClick,
  onResetHighscoreClick,
}: props) {
  const [settingsShown, setSettingsShown] = useState(false);

  return (
    <div className="relative flex items-center">
      <button onClick={() => setSettingsShown(!settingsShown)}>
        <ResetIcon />
      </button>

      {settingsShown && (
        <div className="absolute top-full bg-background textbox mt-2 flex flex-wrap gap-4 z-1">
          <button
            type="button"
            onClick={onResetClick}
            className="clickable p-4"
          >
            Reset current game
          </button>
          <button
            type="button"
            onClick={onResetHighscoreClick}
            className="clickable p-4"
          >
            Reset highscore
          </button>
        </div>
      )}
    </div>
  );
}
