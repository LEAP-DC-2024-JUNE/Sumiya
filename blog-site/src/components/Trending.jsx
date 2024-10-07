import { useEffect, useState } from "react";
import { TrendingCard } from ".";
export const Trending = () => {
  const [articles, setArticles] = useState([]);
  const fetchData = () => {
    fetch("https://dev.to/api/articles?per_page=4&state=fresh")
      .then((response) => response.json())
      .then((data) => setArticles(data));
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="mt-24 flex flex-col gap-8">
      <h1 className="font-bold">Trending</h1>
      <TrendingCard articles={articles} />
    </div>
  );
};
