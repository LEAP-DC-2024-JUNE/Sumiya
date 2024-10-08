import { BlogCard, Chip } from "@/components";
export const BlogContainer = ({ filteredValue, count }) => {
  if (filteredValue.length == 0) {
    return (
      <div className="flex flex-col items-center h-[400px] justify-center gap-20">
        <h1 className="font-bold text-7xl">Oops... No result</h1>
        <p className="font-bold text-5xl">Okay!!!</p>
      </div>
    );
  }
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
