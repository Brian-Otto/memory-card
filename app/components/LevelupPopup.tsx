type props = {
  username?: string;
  newLevel: number;
};

export default function LevelupPopup({ username = "you", newLevel }: props) {
  return (
    <div className="popup textbox bg-background text-xl md:text-3xl big-whitespace transition duration-1000">
      {username.toUpperCase()} grew
      <br />
      to level {newLevel}!
    </div>
  );
}
