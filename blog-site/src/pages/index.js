import { Header, Footer, CarouselCard, Trending, Allblog } from "../components";
import { useState } from "react";
export default function Home() {
  const [inputValue, setInputValue] = useState("");
  return (
    <div className="max-w-7xl">
      <Header setInputValue={setInputValue} />
      <CarouselCard />
      <Trending />
      <Allblog inputValue={inputValue} />
      <Footer />
    </div>
  );
}
