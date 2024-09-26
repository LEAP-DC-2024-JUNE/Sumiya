import { BlogCard } from "@/components";
export const BlogContainer = ({ articles }) => {
  return (
    <div className="max-w-7xl flex flex-wrap">
      {articles.map((article) => {
        return (
          <div>
            <BlogCard
              imgSrc={article.social_image}
              title={article.title}
              name={article.user.name}
              date={article.published_at}
            />
          </div>
        );
      })}
    </div>
  );
};
