import { BlogCard, Chip } from "@/components";
export const BlogContainer = ({ filteredValue, count }) => {
  return (
    <div className=" flex flex-wrap gap-[48px]">
      {filteredValue.map((article) => {
        return (
          <div>
            <BlogCard
              imgSrc={article.social_image}
              tags={article.tag_list[0]}
              title={article.title}
              name={article.user.name}
              date={article.published_at}
              id={article.id}
              profileImg={article.user.profile_image}
            />
          </div>
        );
      })}
      <Chip count={count} />
    </div>
  );
};
