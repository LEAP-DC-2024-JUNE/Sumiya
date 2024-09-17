// import Upwork from "../Logos/Upwork";
// export const Experience = () => {
//   const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//   return (
//     <div className="flex flex-col gap-12">
//       {arr.map((element) => {
//         return <Exper />;
//       })}
//     </div>
//   );
// };
// export const Exper = () => {
//   return (
//     <div className="flex justify-center gap-24">
//       <Icon />
//       <Text />
//       <Date />
//     </div>
//   );
// };
// export const Icon = () => {
//   return (
//     <div>
//       <Upwork />
//     </div>
//   );
// };
// export const Text = () => {
//   return (
//     <div className="flex flex-col gap-5">
//       <p className="font-bold">Sr. Frontend Developer</p>
//       <ul className="list-disc">
//         <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
//         <li>Ut pretium arcu et massa semper, id fringilla leo semper.</li>
//         <li>Sed quis justo ac magna.</li>
//         <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
//       </ul>
//     </div>
//   );
// };
// export const Date = () => {
//   return <div>Nov 2021 - Present</div>;
// };
// export default Experience;
import Experiencecard from "./Experiencecard";
import Upwrk from "../Logos/Upwrk";
export const Experience = () => {
  const jobs = [
    {
      svg: <Upwrk />,
      title: "Sr. Frontend Develope",
      descriptions: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Ut pretium arcu et massa semper, id fringilla leo semper.",
        "Sed quis justo ac magna.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      ],
      date: "Nov 2021 - Present",
    },
    {
      svg: <Upwrk />,
      title: "Team Lead",
      descriptions: [
        "Sed quis justo ac magna.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Sed quis justo ac magna.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      ],
      date: "Jul 2017 - Oct 2021",
    },
    {
      svg: <Upwrk />,
      title: "Full Stack Developer",
      descriptions: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      ],
      date: "Dec 2015 - May 2017",
    },
  ];

  return (
    <div className="flex flex-col gap-12 items-center mt-12">
      <button className="rounded-xl bg-gray-200 dark:bg-[rgb(55,65,81,1)] py-1 px-5">
        Experience
      </button>
      <p>Here is a quick summary of my most recent experiences:</p>

      {jobs.map((job) => {
        return (
          <Experiencecard
            svg={job.svg}
            title={job.title}
            descriptions={job.descriptions}
            date={job.date}
          />
        );
      })}
    </div>
  );
};
export default Experience;
