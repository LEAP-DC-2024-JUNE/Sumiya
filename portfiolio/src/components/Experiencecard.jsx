export const Experiencecard = ({ title, descriptions, date, svg }) => {
  return (
    <div className=" flex flex-col gap-4 lg:flex-row lg:gap-20 lg:w-[896px] dark:bg-[rgb(31,41,55,1)] px-8 py-8">
      <div>{svg}</div>
      <div>
        <p className="font-bold">{title}</p>
        {descriptions.map((description) => {
          return <li>{description}</li>;
        })}
      </div>
      <p>{date}</p>
    </div>
  );
};
export default Experiencecard;
