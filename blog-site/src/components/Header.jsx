import Metablog from "@/icons/Metablog";
import Link from "next/link";
import { useRouter } from "next/router";
export const Header = ({ setInputValue }) => {
  const router = useRouter();
  return (
    <div className="max-w-full">
      <div className="flex justify-between h-[100px] items-center max-w-7xl mx-auto">
        <Metablog />
        <div className="flex gap-10">
          <Link href={"/"}>
            <p>Home</p>
          </Link>
          <Link href={"/blog"}>
            <p>Blog</p>
          </Link>
          <Link href={"/contact"}>
            <p>Contact</p>
          </Link>
        </div>
        {router.pathname == "/blog" ? (
          <input
            type="text"
            className="border-2 bg-[rgba(244,244,245,1)] rounded-md"
            placeholder="Search.."
            onChange={(event) => setInputValue(event.target.value)}
          ></input>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};
