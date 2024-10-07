import { useEffect, useState } from "react";
import { BlogContainer, Header, Footer } from "@/components";
export const Blog = () => {
  const [articles, setArticles] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [count, setCount] = useState(12);
  const articleData = () => {
    fetch(`https://dev.to/api/articles?per_page=${count}`)
      .then((response) => response.json())
      .then((data) => setArticles(data));
  };
  useEffect(() => {
    articleData();
  }, [count]);
  const filteredValue = articles.filter((article) =>
    article.title.toLocaleLowerCase().includes(inputValue.toLocaleLowerCase())
  );
  const numbers = () => {
    setCount(count + 3);
  };

  return (
    <div className="max-w-7xl">
      <Header setInputValue={setInputValue} />
      {filteredValue.length == 0}
      <BlogContainer filteredValue={filteredValue} count={numbers} />
      <Footer />
    </div>
  );
};
export default Blog;
