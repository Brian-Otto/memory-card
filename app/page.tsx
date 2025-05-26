import Header from "./components/Header";
import Cards from "./components/Cards";

export default function Home() {
  return (
    <div className="flex flex-col gap-4">
      <Header />
      <Cards />
    </div>
  );
}
