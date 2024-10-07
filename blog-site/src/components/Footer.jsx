import About from "./About";
import Bottomfooter from "./Bottomfooter";
export const Footer = () => {
  return (
    <div className="flex flex-col gap-8 bg-[rgba(246,246,247,1)] mt-24">
      <About />
      <Bottomfooter />
    </div>
  );
};
