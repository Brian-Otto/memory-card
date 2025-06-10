import Image from "next/image";

type props = {
  text: string;
  onClick: () => void;
  imgUrl: string;
};

export default function Card({ text, imgUrl, onClick }: props) {
  return (
    <div
      className="flex flex-col text-center w-fit p-4 gap-4 clickable"
      onClick={onClick}
    >
      <Image
        src={imgUrl}
        alt={`image of ${text}`}
        width="200"
        height="200"
        unoptimized
      />
      <p className="text-xl">{text}</p>
    </div>
  );
}
