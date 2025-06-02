"use client";

import Header from "./components/Header";
import Cards from "./components/Cards";
import { useEffect, useState } from "react";
import { getRandomizedArray } from "./lib/utils";
import { getPokemons } from "./lib/data";
import { useLocalStorage } from "usehooks-ts";
import Pokemon from "./lib/Pokemon";

export default function Home() {
  // waiting with rendering until client-side is ready
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  const initialCardAmount = 6;

  const [exp, setExp] = useLocalStorage("exp", 0);
  const [level, setLevel] = useLocalStorage("level", 1);
  const [score, setScore] = useLocalStorage("score", 0);
  const [highscore, setHighscore] = useLocalStorage("highscore", 0);
  const [clickedCardIds, setClickedCardIds] = useLocalStorage<string[]>(
    "clickedCardIds",
    []
  );
  const [pokemons, setPokemons] = useLocalStorage("pokemon", () =>
    getRandomizedArray<Pokemon>([])
  );

  useEffect(() => {
    const setFetchedPokemons = async (count: number) => {
      const newPokemons = await getPokemons(count);
      setPokemons(newPokemons);
    };
    setFetchedPokemons(6);
  }, []);

  const expNeededForLevelup = initialCardAmount * level;

  if (!isClient) return null;

  const handleCardClick = async (id: string) => {
    const userScored = !clickedCardIds.includes(id);
    const newScore = userScored ? score + 1 : 0;
    let newExp = userScored ? exp + 1 : 0;
    let newPokemons = pokemons;
    let newClickedCards = userScored ? [...clickedCardIds, id] : [];

    if (userScored) {
      // Levelup
      if (newExp === expNeededForLevelup) {
        const newLevel = level + 1;
        setLevel(newLevel);
        newExp = 0;
        newPokemons = await getPokemons(newLevel * initialCardAmount);
        newClickedCards = [];
      }
    } else {
      setLevel(1);
      setHighscore(highscore > score ? highscore : score);
      newPokemons = await getPokemons(initialCardAmount);
    }

    setClickedCardIds([...newClickedCards]);
    setScore(newScore);
    setExp(newExp);
    setPokemons(getRandomizedArray([...newPokemons]));
  };

  return (
    <div className="flex flex-col gap-4">
      <Header
        level={level}
        score={score}
        highscore={highscore}
        filledPercentage={(exp / expNeededForLevelup) * 100}
      />
      <Cards onCardClick={(id) => handleCardClick(id)} pokemons={pokemons} />
    </div>
  );
}
