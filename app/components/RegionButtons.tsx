import { generation } from "../lib/utils";
import OkButton from "./OkButton";
import RegionSelectionButton from "./RegionSelectionButton";

type props = {
  onClick: (generation: generation) => void;
  selectedGenerations: generation[];
  onSubmit: () => void;
};

export default function RegionButtons({
  onClick,
  selectedGenerations,
  onSubmit,
}: props) {
  const regions: [generation, string][] = [
    [1, "Kanto"],
    [2, "Johto"],
    [3, "Hoenn"],
    [4, "Sinnoh"],
    [5, "Unova"],
    [6, "Kalos"],
    [7, "Alola"],
    [8, "Galar"],
    [9, "Paldea"],
  ];

  return (
    <div className="popup textbox bg-background flex flex-col">
      <div id="regionbuttons" className="flex flex-row flex-wrap gap-4">
        {regions.map((region) => {
          const isSelected = selectedGenerations.includes(region[0]);

          return (
            <RegionSelectionButton
              onClick={onClick}
              generation={region[0]}
              key={region[0]}
              isSelected={isSelected}
            >
              {region[1]}
            </RegionSelectionButton>
          );
        })}
      </div>
      <OkButton onClick={onSubmit} />
    </div>
  );
}
