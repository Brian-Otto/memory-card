type props = {
  username?: string;
};

export default function BlackoutPopup({ username = "you" }: props) {
  return (
    <div className="popup textbox bg-background text-xl md:text-3xl big-whitespace transition duration-1000">
      {username.toUpperCase()} blacked out!
    </div>
  );
}
