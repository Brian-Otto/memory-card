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
        imgUrl={pokemon.imageUrl}
        onClick={() => onCardClick(pokemon.id)}
      />
    );
  });

  return <div className="flex flex-wrap gap-4 md:gap-8">{cards}</div>;
}
