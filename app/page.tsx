"use client";

import Header from "./components/Header";
import Cards from "./components/Cards";
import { useEffect, useState } from "react";
import { getRandomizedArray } from "./lib/utils";
import { getPokemons } from "./lib/data";
import { useLocalStorage } from "usehooks-ts";
import Pokemon from "./lib/Pokemon";
import Loading from "./Loading";
import Menu from "./components/Menu";

export default function Home() {
  // waiting with rendering until client-side is ready
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
    setIsLoading(false);
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
  const [pokemons, setPokemons] = useLocalStorage("pokemons", () =>
    getRandomizedArray<Pokemon>([])
  );
  const [isLoading, setIsLoading] = useState(true);

  const getPokemonsLoadingWrapper = async (count: number) => {
    setIsLoading(true);
    const newPokemons = await getPokemons(count);
    setIsLoading(false);
    return newPokemons;
  };

  // on fresh visit on site load initial cards
  useEffect(() => {
    if (localStorage.getItem("pokemons") === null) {
      const setFetchedPokemons = async (count: number) => {
        const newPokemons = await getPokemonsLoadingWrapper(count);
        setPokemons(newPokemons);
      };
      setFetchedPokemons(6);
    }
  }, [setPokemons]);

  const expNeededForLevelup = initialCardAmount * level;

  // waiting with rendering until client-side is ready
  if (!isClient) return null;

  // setting of theme
  const selectedTheme = localStorage.getItem("theme");
  if (selectedTheme) {
    document
      .querySelector("html")
      ?.setAttribute("data-theme", JSON.parse(selectedTheme));
  }

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
        newPokemons = await getPokemonsLoadingWrapper(
          newLevel * initialCardAmount
        );
        newClickedCards = [];
      }
      setPokemons(getRandomizedArray([...newPokemons]));
    } else {
      // if player loses
      reset();
    }

    setClickedCardIds([...newClickedCards]);
    setScore(newScore);
    setExp(newExp);
  };

  const reset = async () => {
    setLevel(1);
    setHighscore(highscore > score ? highscore : score);
    const newPokemons = await getPokemonsLoadingWrapper(initialCardAmount);
    setPokemons(newPokemons);
  };

  return (
    <div className="flex flex-col gap-4">
      <Header
        level={level}
        score={score}
        highscore={highscore}
        filledPercentage={(exp / expNeededForLevelup) * 100}
      />
      <Menu onReset={reset} />

      {!isLoading ? (
        <Cards onCardClick={(id) => handleCardClick(id)} pokemons={pokemons} />
      ) : (
        <Loading />
      )}
    </div>
  );
}
