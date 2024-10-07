import { useEffect, useState } from "react";
import Rightslide from "@/icons/Rightslide";
import Leftslide from "@/icons/Leftslide";
export const CarouselCard = () => {
  const [articles, setArticles] = useState([]);
  const [count, setCount] = useState(0);
  const articleData = () => {
    fetch("https://dev.to/api/articles?per_page=2&state=fresh")
      .then((response) => response.json())
      .then((data) => setArticles(data));
  };
  useEffect(() => {
    articleData();
  }, []);
  // const handleLeft = () => {
  //   if (count == articles.length - 1) {
  //     setCount(0);
  //   } else {
  //     setCount(count + 1);
  //   }
  // };
  const handleLeft = () => {
    setCount((prevState) =>
      prevState == articles.length - 1 ? 0 : prevState + 1
    );
  };
  const handleRight = () => {
    if (count == 0) {
      setCount(articles.length - 1);
    } else {
      setCount(count - 1);
    }
  };
  return (
    <div className="max-w-[1200px]">
      {!articles ? null : (
        <div className="relative h-[600px]">
          <img
            className="h-[600px] absolute"
            src={articles[count]?.social_image}
          ></img>
          <div className="absolute mt-[400px] bg-slate-300 ml-[11px] rounded-xl">
            <div className="px-10 pt-10 pb-22 flex flex-col gap-4">
              <span className="bg-[rgba(75,107,251,1)] w-[77px] rounded-xl pl-2">
                {articles[count]?.tag_list[0]}
              </span>
              <p className="font-bold">{articles[count]?.title}</p>
            </div>
            <p className="pt-6 pl-10 pb-10">{articles[count]?.published_at}</p>
          </div>
        </div>
      )}
      <div className="flex gap-2 justify-end">
        <button onClick={() => handleLeft()}>
          <Leftslide />
        </button>
        <button onClick={() => handleRight()}>
          <Rightslide />
        </button>
      </div>
    </div>
  );
};
