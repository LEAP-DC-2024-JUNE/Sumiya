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

function Skill() {
  return (
    <div className="w-full">
      <div className="flex flex-col box-border py-24 px-40 gap-12 items-center">
        <div>
          <button className="bg-gray-200 rounded-3xl w-24 h-6 ">Skills</button>
        </div>
        <div>
          <p className="text-lg">
            The skills, tools and technologies I am really good at:
          </p>
        </div>
        <div>
          <div className="flex gap-24">
            <Javaicon />
            <Typeicon />
            <Reacticon />
            <Nodeicon />
            <Expressicon />
            <Nesticon />
          </div>
          <div className="flex gap-24">
            <Mongoicon />
            <Tailwindicon />
            <Cypressicon />
            <Storyicon />
            <Giticon />
            <Sassicon />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Skill;
