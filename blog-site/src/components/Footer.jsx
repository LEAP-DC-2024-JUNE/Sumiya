import About from "./About";
import Bottomfooter from "./Bottomfooter";
export const Footer = () => {
  return (
    <div className="bg-[rgba(246,246,247,1)] mt-24 max-w-full ">
      <div className="flex flex-col gap-8 max-w-7xl mx-auto h-[420px] justify-center">
        <About />
        <Bottomfooter />
      </div>
    </div>
  );
};
