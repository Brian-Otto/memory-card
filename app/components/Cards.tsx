import React from "react";
import Card from "./Card";
import Pokemon from "../lib/Pokemon";

type props = {
  onCardClick: (id: string) => void;
  pokemons: Pokemon[];
};

export default function Cards({ pokemons, onCardClick }: props) {
  const cards: React.ReactNode[] = pokemons.map((pokemon) => {
    return (
      <Card
        key={pokemon.id}
        text={pokemon.name}
        onClick={() => onCardClick(pokemon.id)}
      />
    );
  });

  return <div className="flex flex-wrap gap-8">{cards}</div>;
}
