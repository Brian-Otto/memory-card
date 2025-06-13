"use client";

import { useState } from "react";
import ResetSettings from "./ResetSettings";
import CloseIcon from "./icons/CloseIcon";
import ThemeToggle from "./ThemeToggle";
import ZenIcon from "./icons/ZenIcon";
import RegionIcon from "./icons/RegionIcon";
import { generation } from "../lib/utils";
import RegionButtons from "./RegionButtons";
import RenameIcon from "./icons/RenameIcon";
import RenameBox from "./RenameBox";

type props = {
  onReset: () => void;
  onResetHighscoreClick: () => void;
  onZenClick: () => void;
  onRegionClick: (generation: generation) => void;
  selectedGenerations: generation[];
  onRename: (username: string) => void;
};

export default function Menu({
  onReset,
  onResetHighscoreClick,
  onZenClick,
  onRegionClick,
  selectedGenerations,
  onRename,
}: props) {
  const [menuShown, setMenuShown] = useState(false);
  const [regionPopupShown, setRegionPopupShown] = useState(false);
  const [renameShown, setRenameShown] = useState(false);

  const handleRegionSubmit = () => {
    setRegionPopupShown(false);
  };

  const handleRename = (newUsername: string) => {
    setRenameShown(false);
    onRename(newUsername);
  };

  const closeAll = () => {
    setRegionPopupShown(false);
    setRenameShown(false);
  };

  const showRegion = () => {
    closeAll();
    setRegionPopupShown(true);
  };

  const showRename = () => {
    closeAll();
    setRenameShown(true);
  };

  return (
    <>
      {menuShown ? (
        <div className="textbox flex-row flex-wrap flex gap-4 text-sm md:text-base">
          <button type="button" onClick={() => setMenuShown(false)}>
            <CloseIcon />
          </button>
          <ResetSettings
            onResetClick={onReset}
            onResetHighscoreClick={onResetHighscoreClick}
          />
          <button type="button" onClick={showRegion}>
            <RegionIcon />
          </button>
          {regionPopupShown && (
            <RegionButtons
              onClick={onRegionClick}
              selectedGenerations={selectedGenerations}
              onSubmit={handleRegionSubmit}
            />
          )}
          <ThemeToggle />
          <button type="button" onClick={onZenClick}>
            <ZenIcon />
          </button>
          <button type="button" onClick={showRename}>
            <RenameIcon />
          </button>
          {renameShown && (
            <RenameBox onSubmit={(newUsername) => handleRename(newUsername)} />
          )}
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
