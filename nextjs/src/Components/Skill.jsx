import Javaicon from "../Icons/Javaicon";
import Typeicon from "../Icons/Typeicon";
import Reacticon from "../Icons/Reacticon";
import Nodeicon from "../Icons/Nodeicon";
import Expressicon from "@/Icons/Expressicon";
import Nesticon from "@/Icons/Nesticon";
import Mongoicon from "@/Icons/Mongoicon";
import Tailwindicon from "@/Icons/Tailwindicon";
import Cypressicon from "@/Icons/Cypressicon";
import Storyicon from "@/Icons/Storyicon";
import Giticon from "@/Icons/Giticon";
import Sassicon from "@/Icons/Sassicon";

function Skill({ theme }) {
  return (
    <div className="flex flex-col mt-12">
      <div className="flex flex-col items-center">
        <button className="bg-gray-200  rounded-3xl dark:bg-[rgb(55,65,81,1)] w-24 h-6 ">
          Skills
        </button>
        <p className="text-lg ">
          The skills, tools and technologies I am really good at:
        </p>
      </div>
      <div className="flex-1">
        <div className="flex lg:flex lg:gap-24">
          <Javaicon theme={theme} />
          <Typeicon theme={theme} />
          <Reacticon theme={theme} />
          <Nodeicon theme={theme} />
          <Expressicon theme={theme} />
          <Nesticon theme={theme} />
        </div>
        <div className=" flex lg:flex lg:gap-24">
          <Mongoicon theme={theme} />
          <Tailwindicon theme={theme} />
          <Cypressicon theme={theme} />
          <Storyicon theme={theme} />
          <Giticon theme={theme} />
          <Sassicon theme={theme} />
        </div>
      </div>
    </div>
  );
}
export default Skill;
