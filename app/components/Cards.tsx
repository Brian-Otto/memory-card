import React from "react";
import Card from "./Card";

export default function Cards() {
  const cardCount: number = 8;
  const cards: React.ReactNode[] = [];

  for (let i = 0; i < cardCount; i++) {
    cards.push(<Card key={crypto.randomUUID()} />);
  }
  return <div className="flex flex-wrap gap-8">{cards}</div>;
}
