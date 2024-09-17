import Email from "../Icons/Email";
import Icon from "../Icons/Icon";
import Phone from "../Icons/Phone";
import Cat from "../Logos/Cat";
import Twitter from "../Logos/Twitter";
import Figma from "../Logos/Figma";
export const Footer = () => {
  return (
    <div className="flex flex-col gap-8 items-center mt-12">
      <div className="flex flex-col gap-4 items-center">
        <button className="rounded-xl bg-gray-200 dark:bg-[rgb(55,65,81,1)]  py-1 px-5">
          Get in touch
        </button>
        <p>
          What’s next? Feel free to reach out to me if you're looking for a
          developer, have a query, or simply want to connect.
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <Email />
          <p className="text-4xl font-bold">tom@pinecone.mn</p>
          <Icon />
        </div>
        <div className="flex items-center gap-3 justify-center">
          <Phone />
          <p className="text-4xl font-bold">+976 88112233</p>
          <Icon />
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <p>You may also find me on these platforms</p>
        <div className="flex items-center justify-center">
          <Cat />
          <Twitter />
          <Figma />
        </div>
      </div>
    </div>
  );
};
export default Footer;
