"use client";

import { useState } from "react";
import SettingsIcon from "./SettingsIcon";

export default function Settings() {
  const [settingsShown, setSettingsShown] = useState(false);
  return (
    <div className="inline relative">
      <SettingsIcon
        className="w-12 h-12"
        onClick={() => setSettingsShown(!settingsShown)}
      />
      {settingsShown && (
        <div className="absolute top-full bg-background textbox mt-2">test</div>
      )}
    </div>
  );
}
