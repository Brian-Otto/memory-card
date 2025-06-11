import { ReactNode } from "react";
import { generation } from "../lib/utils";

type props = {
  children: ReactNode;
  generation: generation;
  onClick: (generation: generation) => void;
};

export default function RegionSelectionButton({
  children,
  generation,
  onClick,
}: props) {
  return (
    <button type="button" onClick={() => onClick(generation)}>
      {children}
    </button>
  );
}
