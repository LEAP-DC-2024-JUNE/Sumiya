export const BlogCard = ({ title, date, imgSrc, name }) => {
  return (
    <div className="w-[392px] h-[488px] flex flex-col justify-around border-2">
      <img src={imgSrc} height={240} width={360} />
      <h1 className="font-bold">{title}</h1>
      <div className="flex justify-around">
        <p>{name}</p>
        <p>{date}</p>
      </div>
    </div>
  );
};
