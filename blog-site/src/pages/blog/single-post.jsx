import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import moment from "moment";
import { Header } from "@/components";
import { Footer } from "@/components";
const Singlepost = () => {
  const [singleArticle, setSingleArticle] = useState({});
  const searchParam = useSearchParams();
  const value = searchParam.get("selectedId");
  const fetchData = () => {
    fetch(`https://dev.to/api/articles/${value}`)
      .then((response) => response.json())
      .then((data) => setSingleArticle(data));
  };
  useEffect(() => {
    fetchData();
  }, [value]);

  console.log(singleArticle);
  return (
    <div className="max-w-full">
      <Header />
      <div className="max-w-full flex justify-center">
        <div className="w-[796px] flex flex-col gap-8">
          <div className="flex flex-col gap-5">
            <h1 className="font-bold">{singleArticle.title}</h1>
            <div className="flex gap-2">
              <p>Name</p>
              <p>{moment(singleArticle.published_at).format("YYYY-MM-DD")}</p>
            </div>
          </div>
          <img src={singleArticle.cover_image}></img>
          <div
            dangerouslySetInnerHTML={{ __html: singleArticle.body_html }}
          ></div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Singlepost;
