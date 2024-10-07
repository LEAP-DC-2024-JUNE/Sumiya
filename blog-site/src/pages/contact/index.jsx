import { Header } from "@/components";
import { Footer } from "@/components";
const Contact = () => {
  return (
    <div>
      <Header />
      <div className="max-w-[895px] max-h-[895px]">
        <div className="px-[63px]">
          <div className="px-[72px] pt-[14px] pb-[20px] flex flex-col gap-5">
            <h1 className="font-bold text-4xl">Contact Us</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam
            </p>
          </div>
          <div className="flex px-[65px] pb-[39px] gap-[50px]">
            <span className="pl-4 py-[15px] flex flex-col gap-[10px]">
              <h2>Addres</h2>
              <p>1328 Oak Ridge Drive, Saint Louis, Missouri</p>
            </span>
            <span className="pl-4  py-[15px] flex flex-col gap-[10px]">
              <h3>Contact</h3>
              <p>313-332-8662 info@email.com</p>
            </span>
          </div>
        </div>
        <div>
          <div className="mx-[126px] pb-[66px] bg-[#F6F6F7] h-[440px]">
            <p className="font-bold pt-[29px] pl-[35px]">Leave a Message</p>
            <div className="pl-[35px] pr-[130px] flex flex-col gap-5">
              <div className="flex gap-7">
                <input type="text" placeholder="Your Name"></input>
                <input type="text" placeholder="Your Email"></input>
              </div>
              <input type="text" placeholder="Subject"></input>
              <input
                type="text"
                placeholder="Write a message"
                className="h-[134px]"
              ></input>
            </div>
            <button className="bg-[#4B6BFB] px-1 py-2 text-[#FFFF] rounded-lg ml-[35px]">
              Send Message
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Contact;
