"use client";

import Header from "./components/Header";
import Cards from "./components/Cards";
import { useState } from "react";
import { getRandomizedStringArray } from "./lib/utils";

export default function Home() {
  const [level, setLevel] = useState(1);
  const [score, setScore] = useState(0);
  const [highscore, setHighscore] = useState(0);
  const [clickedCardIds, setClickedCardIds] = useState<string[]>([]);

  const handleCardClick = (id: string) => {
    if (!clickedCardIds.includes(id)) {
      setScore((prev) => prev + 1);
      setClickedCardIds((prev) => [...prev, id]);
    } else {
      setHighscore(highscore < score ? score : highscore);
      setScore(0);
      setClickedCardIds([]);
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <Header level={level} score={score} highscore={highscore} />
      <Cards onCardClick={(id) => handleCardClick(id)} />
    </div>
  );
}
