import Image from "next/image";

export default function Card() {
  return (
    <div className="flex flex-col text-center w-fit border border-white-500 p-4 gap-4">
      <Image
        src="/image.png"
        alt="placeholder image"
        width="250"
        height="250"
        className="border border-white-500"
      />
      <p className="text-xl">The placeholder</p>
    </div>
  );
}
