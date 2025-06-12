"use client";

import { useState } from "react";
import ResetSettings from "./ResetSettings";
import CloseIcon from "./icons/CloseIcon";
import ThemeToggle from "./ThemeToggle";
import ZenIcon from "./icons/ZenIcon";
import RegionIcon from "./icons/RegionIcon";
import { generation } from "../lib/utils";
import RegionButtons from "./RegionButtons";

type props = {
  onReset: () => void;
  onResetHighscoreClick: () => void;
  onZenClick: () => void;
  onRegionClick: (generation: generation) => void;
  selectedGenerations: generation[];
};

export default function Menu({
  onReset,
  onResetHighscoreClick,
  onZenClick,
  onRegionClick,
  selectedGenerations,
}: props) {
  const [menuShown, setMenuShown] = useState(false);
  const [regionPopupShown, setRegionPopupShown] = useState(false);

  return (
    <>
      {menuShown ? (
        <div className="textbox flex w-min gap-4 text-sm md:text-base">
          <button type="button" onClick={() => setMenuShown(false)}>
            <CloseIcon />
          </button>
          <ResetSettings
            onResetClick={onReset}
            onResetHighscoreClick={onResetHighscoreClick}
          />
          <button
            type="button"
            onClick={() => setRegionPopupShown(!regionPopupShown)}
          >
            <RegionIcon />
          </button>
          {regionPopupShown && (
            <RegionButtons
              onClick={onRegionClick}
              selectedGenerations={selectedGenerations}
            />
          )}
          <ThemeToggle />
          <button type="button" onClick={onZenClick}>
            <ZenIcon />
          </button>
        </div>
      ) : (
        <button
          type="button"
          className="clickable p-3 w-min text-nowrap text-sm md:text-base"
          onClick={() => setMenuShown(true)}
        >
          Show menu
        </button>
      )}
    </>
  );
}
