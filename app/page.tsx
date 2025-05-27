"use client";

import Header from "./components/Header";
import Cards from "./components/Cards";
import { useEffect, useState } from "react";
import { getRandomizedPokemonArray } from "./lib/utils";
import { getTestPokemon } from "./lib/data";
import Pokemon from "./lib/Pokemon";

export default function Home() {
  const [level, setLevel] = useState(1);
  const [score, setScore] = useState(0);
  const [highscore, setHighscore] = useState(0);
  const [clickedCardIds, setClickedCardIds] = useState<string[]>([]);
  const [pokemons, setPokemons] = useState<Pokemon[]>(() => getTestPokemon(8));

  const handleCardClick = (id: string) => {
    if (!clickedCardIds.includes(id)) {
      setScore((prev) => prev + 1);
      setClickedCardIds((prev) => [...prev, id]);
    } else {
      setHighscore(highscore < score ? score : highscore);
      setScore(0);
      setClickedCardIds([]);
    }
    setPokemons((prev) => getRandomizedPokemonArray(prev));
  };

  useEffect(() => {
    const storedHighscore: number = parseInt(
      localStorage.getItem("highscore") || "0"
    );
    setHighscore(storedHighscore);
  }, []);

  useEffect(() => {
    localStorage.setItem("highscore", highscore.toString());
  }, [highscore]);

  return (
    <div className="flex flex-col gap-4">
      <Header level={level} score={score} highscore={highscore} />
      <Cards onCardClick={(id) => handleCardClick(id)} pokemons={pokemons} />
    </div>
  );
}
