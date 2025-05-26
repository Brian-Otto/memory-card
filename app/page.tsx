import Header from "./components/Header";
import Card from "./components/Card";

export default function Home() {
  return (
    <div className="flex flex-col gap-4">
      <Header />
      <Card />
    </div>
  );
}
