import { Header, Footer, CarouselCard, Trending, Allblog } from "../components";
import { useState } from "react";
export default function Home() {
  const [inputValue, setInputValue] = useState("");
  return (
    <div className="max-w-full">
      <Header setInputValue={setInputValue} />
      <div className="max-w-full flex flex-col items-center">
        <div className="max-w-7xl">
          <CarouselCard />
          <Trending />
          <Allblog inputValue={inputValue} />
        </div>
      </div>
      <Footer />
    </div>
  );
}
