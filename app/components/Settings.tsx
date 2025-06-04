"use client";

import { useState } from "react";
import SettingsIcon from "./SettingsIcon";

type props = {
  onResetClick: () => void;
};

export default function Settings({ onResetClick }: props) {
  const [settingsShown, setSettingsShown] = useState(false);
  return (
    <div className="inline relative">
      <SettingsIcon
        className="w-12 h-12"
        onClick={() => setSettingsShown(!settingsShown)}
      />
      {settingsShown && (
        <div className="absolute top-full bg-background textbox mt-2">
          <button
            type="button"
            onClick={onResetClick}
            className="clickable p-4"
          >
            Reset
          </button>
        </div>
      )}
    </div>
  );
}
