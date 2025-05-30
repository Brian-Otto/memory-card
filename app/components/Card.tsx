import Image from "next/image";

type props = {
  text: string;
  onClick: () => void;
};

export default function Card({ text, onClick }: props) {
  return (
    <div
      className="flex flex-col text-center w-fit border border-white-500 p-4 gap-4 hover:cursor-pointer select-none hover:ring-4 ring-foreground"
      onClick={onClick}
    >
      <Image
        src="/image.png"
        alt="placeholder image"
        width="250"
        height="250"
        className="border border-white-500"
      />
      <p className="text-xl">{text}</p>
    </div>
  );
}
