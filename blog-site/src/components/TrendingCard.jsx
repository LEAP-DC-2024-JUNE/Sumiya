export const TrendingCard = ({ articles }) => {
  return (
    <div className="flex gap-6">
      {articles.map((article) => {
        return (
          <div className="relative w-[300px] h-[340px] z-1">
            <img
              className="absolute w-[300px] h-[340px] object-cover opacity-60 "
              src={article.cover_image}
            ></img>
            <h1 className="absolute font-bold text-[#FFFF] px-1 py-2 mt-[150px] bg-[rgba(75,107,251,1)] mx-8">
              {article.tag_list[0]}
            </h1>
            <p className="absolute font-bold   mt-[210px] mx-8">
              {article.title}
            </p>
          </div>
        );
      })}
    </div>
  );
};
