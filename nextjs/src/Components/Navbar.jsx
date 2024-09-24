import { useState } from "react";
import Scrollbar from "../Logos/Scrollbar";
import Logo from "@/Logos/Logo";
export const Navbar = ({ theme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };
  const toggleClose = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <button onClick={toggleOpen}>
        <Scrollbar />
      </button>
      {isOpen && (
        <div className="absolute w-full top-0 right-0 flex flex-col gap-4 bg-black h-screen px-6 py-4">
          <div className="flex justify-between">
            <h1 className="text-4xl font-bold">Tom</h1>
            <button className="text-2xl" onClick={toggleClose}>
              X
            </button>
          </div>
          <div className="flex flex-col gap-10">
            <ul className=" flex flex-col gap-3 text-2xl">
              <li>About</li>
              <li>Work</li>
              <li>Testimonials</li>
              <li>Contact</li>
            </ul>
            <div className="flex text-2xl justify-between">
              <p>Switch Theme</p>
              <button>
                <Logo theme={theme} />
              </button>
            </div>
            <button className="bg-gray-950 text-white lg:h-9 text-2xl lg:w-40 rounded-3xl dark:bg-[rgb(249,250,251,1)] dark:font-bold dark:text-black">
              Download CV
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
export default Navbar;
