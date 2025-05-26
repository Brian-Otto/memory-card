import React from "react";
import Card from "./Card";

export default function Cards() {
  const cardCount: number = 8;
  const cards: React.ReactNode[] = [];

  for (let i = 0; i < cardCount; i++) {
    cards.push(
      <Card
        id={`${i + 1}`}
        key={crypto.randomUUID()}
        text={`I am Number ${i + 1}`}
        onClick={console.log("Test passed!")}
      />
    );
  }
  return <div className="flex flex-wrap gap-8">{cards}</div>;
}
