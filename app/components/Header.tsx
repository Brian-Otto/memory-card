type props = {
  level: number;
  score: number;
  highscore: number;
};

export default function Header({ level, score, highscore }: props) {
  return (
    <div className="flex justify-between">
      <div className="flex flex-col gap-4 textbox">
        <h1 className="text-4xl">Pokemon Memory Game</h1>
        <p>
          Get points by clicking on a Card, but don't click on any more than
          once!
        </p>
      </div>
      <div className="flex flex-col text-right gap-2 textbox">
        <div className="flex justify-between">
          <p>CURRENT LEVEL:</p>
          <p className="w-20">{level}</p>
        </div>
        <div className="flex justify-between">
          <p>CURRENT SCORE:</p>
          <p>{score}</p>
        </div>
        <div className="flex justify-between">
          <p>YOUR HIGHSCORE:</p>
          <p>{highscore}</p>
        </div>
      </div>
    </div>
  );
}
