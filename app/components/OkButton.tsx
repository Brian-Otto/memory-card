type props = {
  onClick: () => void;
};

export default function OkButton({ onClick }: props) {
  return (
    <button
      type="button"
      className="clickable py-2 px-8 w-min wrap self-end"
      onClick={onClick}
    >
      OK
    </button>
  );
}
