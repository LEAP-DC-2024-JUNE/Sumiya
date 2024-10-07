import { useEffect, useState } from "react";
import { BlogCard } from "./BlogCard";
import { Chip } from ".";
export const Allblog = ({ inputValue }) => {
  const [articles, setArticles] = useState([]);
  const [tag, setTag] = useState("");
  const [count, setCount] = useState(9);
  const articleData = () => {
    fetch(`https://dev.to/api/articles?per_page=${count}&tag=${tag}`)
      .then((response) => response.json())
      .then((data) => setArticles(data));
  };
  useEffect(() => {
    articleData();
  }, [tag]);
  const pageNumbers = () => {
    setCount(count + 3);
  };

  const filteredValue = articles.filter((article) =>
    article.title.toLocaleLowerCase().includes(inputValue.toLocaleLowerCase())
  );
  if (filteredValue.length == 0) {
    return <div className="font-bold">No result</div>;
  }
  return (
    <div className="mt-24 flex flex-col gap-8">
      <h1 className="font-bold">All blog posts</h1>
      <div className="flex gap-10">
        <button onClick={() => setTag("")}>All</button>
        <button onClick={() => setTag("javacsript")}>Javascript</button>
        <button onClick={() => setTag("css")}>CSS</button>
        <button onClick={() => setTag("nextjs")}>Next JS</button>
      </div>
      <div className=" flex flex-wrap gap-[48px]">
        {filteredValue.map((article) => {
          return (
            <div>
              <BlogCard
                imgSrc={article.social_image}
                tags={article.tag_list[0]}
                title={article.title}
                date={article.published_at}
              />
            </div>
          );
        })}

        <Chip count={pageNumbers} />
      </div>
    </div>
  );
};
