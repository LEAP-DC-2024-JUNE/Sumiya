import { Inter } from "next/font/google";
import Logo from "../Logos/Logo";
import Main from "../components/Main";
import Aboutme from "../components/Aboutme";
import Skill from "../components/Skill";
import Experience from "../components/Experience";
import Work from "../components/Work";
import Footer from "../components/Footer";
import { useTheme } from "next-themes";

export default function Home() {
  const { setTheme, theme } = useTheme();
  const toggleTheme = () => {
    if (theme == "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  // let obj = {
  //   name: "Duluu",
  //   lastName: "Billy",
  // };
  return (
    <div className="m-0 max-w-7xl">
      <header>
        <div className="flex justify-around ">
          <div className="text-3xl font-bold">Tom</div>
          <div className=" flex gap-2   items-center lg:gap-12">
            <ul className=" flex gap-2 marker:lg:flex lg:gap-12 ">
              <li>About</li>
              <li>Work</li>
              <li>Testimonials</li>
              <li>Contact</li>
            </ul>
            <button onClick={toggleTheme}>
              <Logo theme={theme} />
            </button>
            <button className="bg-gray-950 text-white lg:h-9 lg:w-40 rounded-3xl dark:bg-[rgb(249,250,251,1)] dark:font-bold dark:text-black">
              Download CV
            </button>
          </div>
        </div>
      </header>
      <Main theme={theme} />
      <Aboutme />
      <Skill theme={theme} />
      <Experience />
      <Work />
      <Footer />
      {/* {
        (obj.name =
          "Duluu" || obj.lastName === "Sumiya" ? (
            <div>Ur are welcome</div>
          ) : (
            <div>Ur are not welcome</div>
          ))
      } */}
    </div>
  );
}
