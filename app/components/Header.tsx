export default function Header() {
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
        <p>Current Level: 1</p>
        <p>Current Score: 0</p>
        <p>Your Highscore: 0</p>
      </div>
    </div>
  );
}
