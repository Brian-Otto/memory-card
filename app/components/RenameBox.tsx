import { useState } from "react";
import OkButton from "./OkButton";

type props = {
  onSubmit: (username: string) => void;
};

export default function RenameBox({ onSubmit }: props) {
  const [newUsername, setNewUsername] = useState("");

  const handleOkClick = () => {
    onSubmit(newUsername.length > 0 ? newUsername : "you");
  };

  return (
    <div className="popup textbox bg-background flex flex-col gap-4 max-w-full">
      <label htmlFor="renameInput">What is your name?</label>
      <input
        id="usernameinput"
        type="text"
        className="clickable p-2 max-w-full w-3xs"
        onChange={(e) => setNewUsername(e.target.value)}
      />
      <OkButton onClick={handleOkClick} />
    </div>
  );
}
