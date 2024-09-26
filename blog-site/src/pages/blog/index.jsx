import { useEffect, useState } from "react";
import { BlogContainer } from "@/components";
export const Blog = () => {
  const [articles, setArticles] = useState([]);
  const articleData = () => {
    fetch("https://dev.to/api/articles")
      .then((response) => response.json())
      .then((data) => setArticles(data));
  };
  useEffect(() => {
    articleData();
  }, []);
  return (
    <div>
      <BlogContainer articles={articles} />
    </div>
  );
};
export default Blog;
