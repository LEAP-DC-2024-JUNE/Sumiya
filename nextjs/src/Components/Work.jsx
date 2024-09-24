/*const home = () => {
  return (
    <div>
      <Chip title="hello" />
      <Chip title="Test" />
    </div>
  );
};
export default home;
export const Chip = (props) => {
  const object = { Name: Sumi, Age: 12 };
  const { name } = object;
  const { title } = props;
  return (
    <div>
      <p>title</p>
    </div>
  );
};*/
import Workcard from "./Workcard";
import Ubcab from "../../public/Ubcab.png";
import Mentorhub from "../../public/Mentorhub.png";
import Itoim from "../../public/Itoim.png";
export const Work = () => {
  const projects = [
    {
      imgSrc: Ubcab,
      title: "Ubcab",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
      buttons: [
        "React",
        "Next.js",
        "Typescript",
        "Typescript",
        "PostgreSQL",
        "Tailwind",
        "Figma",
        "Cypress",
        "Storybook",
        "Git",
      ],
    },
    {
      imgSrc: Mentorhub,
      title: "Mentorhub",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
      buttons: [
        "React",
        "Next.js",
        "Typescript",
        "Typescript",
        "PostgreSQL",
        "Tailwind",
        "Figma",
        "Cypress",
        "Storybook",
        "Git",
      ],
    },
    {
      imgSrc: Itoim,
      title: "Itoim",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
      buttons: [
        "React",
        "Next.js",
        "Typescript",
        "Typescript",
        "PostgreSQL",
        "Tailwind",
        "Figma",
        "Cypress",
        "Storybook",
        "Git",
      ],
    },
  ];
  return (
    <div className="flex flex-col  items-center gap-10 mt-12">
      <div className="flex flex-col gap-5 justify-center items-center">
        <button className="rounded-xl bg-gray-200  dark:bg-[rgb(55,65,81,1)]  py-1 px-5">
          Work
        </button>
        <p>Some of the networthy projects I have built:</p>
      </div>
      <div>
        {projects.map((project, index) => {
          return (
            <Workcard
              imgSrc={project.imgSrc}
              title={project.title}
              desc={project.desc}
              buttons={project.buttons}
              reverse={index % 2 == 0 ? true : false}
            />
          );
        })}
      </div>
    </div>
  );
};
export default Work;
