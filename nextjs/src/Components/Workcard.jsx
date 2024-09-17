import Image from "next/image";
export const Workcard = ({ title, desc, imgSrc, reverse, buttons }) => {
  console.log(reverse);
  return (
    <div className="flex-1 lg:flex">
      <div className="lg:w-1/2">{reverse && <Image src={imgSrc} />}</div>
      <div className=" flex flex-col gap-6 lg:w-1/2">
        <p className="font-bold">{title}</p>
        <p className="self-center">{desc}</p>
        <div className="flex-1">
          {buttons.map((button) => {
            return (
              <button className="text-sm bg-gray-200 rounded-xl dark:bg-[rgb(55,65,81,1)] py-1 px-5">
                {button}
              </button>
            );
          })}
        </div>
      </div>
      <div>{!reverse && <Image src={imgSrc} />}</div>
    </div>
  );
};
export default Workcard;
