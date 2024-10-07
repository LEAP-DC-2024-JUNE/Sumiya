import Facebook from "@/icons/Facebook";
import Twitter from "@/icons/Twitter";
import Instagram from "@/icons/Instagram";
import Linkedin from "@/icons/Linkedin";
export const About = () => {
  return (
    <div className="flex mr-[220px] justify-between">
      <div className="flex flex-col gap-6">
        <h1 className="font-bold">About</h1>
        <p className="w-[280px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam
        </p>
        <div>
          <p>
            <span className="font-bold">Email:</span>info@jstemplatenet
          </p>
          <p>
            <span className="font-bold"> Phone:</span>880123456789
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <p>Home</p>
        <p>Blog</p>
        <p>Contact</p>
      </div>
      <div className="flex gap-[26px]">
        <Facebook />
        <Twitter />
        <Instagram />
        <Linkedin />
      </div>
    </div>
  );
};
export default About;
