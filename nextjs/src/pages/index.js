import { Inter } from "next/font/google";
import Logo from "./logo";
import Main from "../Components/Main";
import Aboutme from "../Components/Aboutme";
import Skill from "../Components/Skill";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <header className="w-full">
        <div className="flex  box-border h-9 my-4 mx-40 justify-between">
          <div className="text-3xl font-bold">Tom</div>
          <div className=" flex  gap-20  items-center">
            <ul className=" flex gap-10 ">
              <li>About</li>
              <li>Work</li>
              <li>Testimonials</li>
              <li>Contact</li>
            </ul>
            <Logo />
            <button className="bg-gray-950 text-white h-8 w-40 rounded-3xl">
              Download CV
            </button>
          </div>
        </div>
      </header>
      <Main />
      <Aboutme />
      <Skill />
    </div>
  );
}
