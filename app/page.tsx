"use client";

import Header from "./components/Header";
import Cards from "./components/Cards";
import { useState } from "react";

export default function Home() {
  const [level, setLevel] = useState(1);
  const [score, setScore] = useState(0);
  const [highscore, setHighscore] = useState(0);

  return (
    <div className="flex flex-col gap-4">
      <Header level={level} score={score} highscore={highscore} />
      <Cards />
    </div>
  );
}
