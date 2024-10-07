import Link from "next/link";
import moment from "moment";
export const BlogCard = ({
  title,
  date,
  imgSrc,
  name,
  tags,
  id,
  profileImg,
}) => {
  return (
    <Link href={{ pathname: "/blog/single-post", query: { selectedId: id } }}>
      <div className="w-[392px] h-[488px] flex flex-col justify-around border-2 py-4 px-4">
        <img src={imgSrc} height={240} width={360} />
        <span className="bg-[rgba(75,107,251,0.05)] font-bold text-[#4B6BFB] px-2 py-2 w-[97px] rounded-xl">
          {tags}
        </span>
        <h1 className="font-bold">{title}</h1>
        <div className={` ${name && profileImg ? "flex justify-between" : ""}`}>
          {profileImg && (
            <img
              width={30}
              height={30}
              className="rounded-2xl"
              src={profileImg}
            ></img>
          )}
          {name && <p>{name}</p>}
          <p>{moment(date).format("YYYY-MM-DD")}</p>
        </div>
      </div>
    </Link>
  );
};
