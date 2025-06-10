import Image from "next/image";

type props = {
  text: string;
  onClick: () => void;
  imgUrl: string;
};

export default function Card({ text, imgUrl, onClick }: props) {
  return (
    <div
      className="flex flex-col text-center w-contain p-4 gap-4 clickable"
      onClick={onClick}
    >
      <div className="relative w-25 h-25 md:w-50 md:h-50">
        <Image src={imgUrl} alt={`image of ${text}`} fill unoptimized />
      </div>
      <p className="text-xs md:text-xl">{text}</p>
    </div>
  );
}
