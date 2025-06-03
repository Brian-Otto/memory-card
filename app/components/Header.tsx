import ExpBar from "./ExpBar";

type props = {
  level: number;
  score: number;
  highscore: number;
  filledPercentage?: number;
};

export default function Header({
  level,
  score,
  highscore,
  filledPercentage,
}: props) {
  return (
    <div className="flex justify-between">
      <div className="flex flex-col gap-4 textbox">
        <h1 className="text-4xl">
          <span className="text-yellow-500 logo-outline">Pokémon</span> Memory
          Game
        </h1>
        <p>
          Get points by clicking on a Card, but don&apos;t click on any more
          than once!
        </p>
      </div>
      <div className="flex flex-col justify-evenly text-right gap-2 textbox">
        <div className="flex justify-between">
          <p>HIGHSCORE:</p>
          <p className="w-20">{highscore}</p>
        </div>
        <div className="flex justify-between">
          <p>SCORE:</p>
          <p className="w-20">{score}</p>
        </div>
        <div className="flex justify-between mb-2">
          <p>LEVEL:</p>
          <p className="w-20">{level}</p>
        </div>
        {typeof filledPercentage === "number" && (
          <ExpBar filledPercentage={filledPercentage} />
        )}
      </div>
    </div>
  );
}
