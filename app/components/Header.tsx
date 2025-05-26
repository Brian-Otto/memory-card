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
        <div className="flex justify-between">
          <p>Current Level:</p>
          <p className="w-20">1</p>
        </div>
        <div className="flex justify-between">
          <p>Current Score:</p>
          <p>0</p>
        </div>
        <div className="flex justify-between">
          <p>Your Highscore:</p>
          <p>0</p>
        </div>
      </div>
    </div>
  );
}
