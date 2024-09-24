import Mainpic from "../Logos/Mainpic";
import Location from "../Logos/Location";
import Project from "../Logos/Project";
import Cat from "../Logos/Cat";
import Twitter from "../Logos/Twitter";
import Figma from "../Logos/Figma";

function Main({ theme }) {
  console.log(theme);
  return (
    <div className="mt-12 max-w-full">
      <div className="flex flex-col-reverse gap-6 mx-4 lg:flex-row lg:justify-between lg:my-20 lg:mx-20">
        <div className="flex flex-col lg:w-1/2 lg:gap-12 gap-6 ">
          <div className="flex flex-col gap-2">
            <h1 className="text-6xl font-bold">Hi, I'm Tom 👋</h1>
            <p className="overflow-clip">
              I specialize in full stack development, particularly with React.js
              and Node.js. My main goal is to create exceptional digital
              experiences that are fast, visually appealing, and accessible to
              everyone. With over 7 years of experience in web development, I
              continue to find joy in crafting innovative solutions and designs
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-2 ">
              <Location theme={theme} />
              <div>Ulaanbaatar, Mongolia</div>
            </div>
            <div className="flex items-center gap-2 ml-2">
              <Project />
              <div>Available for new projects</div>
            </div>
          </div>
          <div className="flex flex-row  items-center">
            <Cat theme={theme} />
            <Twitter theme={theme} />
            <Figma theme={theme} />
          </div>
        </div>
        <div className="self-center">
          <Mainpic />
        </div>
      </div>
    </div>
  );
}
export default Main;
