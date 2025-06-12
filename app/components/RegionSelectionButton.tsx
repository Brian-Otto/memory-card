import { ReactNode } from "react";
import { generation } from "../lib/utils";

type props = {
  children: ReactNode;
  generation: generation;
  onClick: (generation: generation) => void;
  isSelected: boolean;
};

export default function RegionSelectionButton({
  children,
  generation,
  onClick,
  isSelected,
}: props) {
  const handleClick = () => {
    onClick(generation);
  };

  return (
    <button
      type="button"
      onClick={() => handleClick()}
      className={`clickable p-4 ${!isSelected && "not-selected-region"}`}
    >
      {children}
    </button>
  );
}
