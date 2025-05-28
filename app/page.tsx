"use client";

import Header from "./components/Header";
import Cards from "./components/Cards";
import { useEffect, useState } from "react";
import { getRandomizedArray } from "./lib/utils";
import { getTestPokemon } from "./lib/data";
import { useLocalStorage } from "usehooks-ts";

export default function Home() {
  // waiting with rendering until client-side is ready
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  const initialCardAmount = 6;

  const [level, setLevel] = useLocalStorage("level", 1);
  const [score, setScore] = useLocalStorage("score", 0);
  const [highscore, setHighscore] = useLocalStorage("highscore", 0);
  const [clickedCardIds, setClickedCardIds] = useLocalStorage<string[]>(
    "clickedCardIds",
    []
  );
  const [pokemons, setPokemons] = useLocalStorage("pokemon", () =>
    getRandomizedArray(getTestPokemon(initialCardAmount))
  );

  const currentlyDisplayedCardAmount = initialCardAmount * level;
  const scoreNeededForLevelup = currentlyDisplayedCardAmount;

  if (!isClient) return null;

  const handleCardClick = (id: string) => {
    if (!clickedCardIds.includes(id)) {
      setScore((prev) => prev + 1);
      setClickedCardIds((prev) => [...prev, id]);
    } else {
      setHighscore(highscore < score ? score : highscore);
      setScore(0);
      setClickedCardIds([]);
    }
    setPokemons((prev) => getRandomizedArray(prev));
  };

  return (
    <div className="flex flex-col gap-4">
      <Header level={level} score={score} highscore={highscore} />
      <Cards onCardClick={(id) => handleCardClick(id)} pokemons={pokemons} />
    </div>
  );
}
