import { Header } from "@/components";
import { Footer } from "@/components";
const Contact = () => {
  return (
    <div className="max-w-full">
      <Header />
      <div className="max-w-full flex justify-center">
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
                <h2 className="font-bold">Address</h2>
                <p className="w-[260px]">
                  1328 Oak Ridge Drive, Saint Louis, Missouri
                </p>
              </span>
              <span className="pl-4  py-[15px] flex flex-col gap-[10px]">
                <h3 className="font-bold">Contact</h3>
                <p className="w-[160px]">313-332-8662 info@email.com</p>
              </span>
            </div>
          </div>
          <div>
            <div className="mx-[126px] pb-[66px] bg-[#F6F6F7] h-[440px] flex flex-col gap-5">
              <p className="font-bold pt-[29px] pl-[35px] text-3xl">
                Leave a Message
              </p>
              <div className="pl-[35px] pr-[130px] flex flex-col gap-5">
                <div className="flex gap-6">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-[225px] h-[38px]"
                  ></input>
                  <input
                    type="text"
                    placeholder="Your Email"
                    className="w-[225px] h-[38px]"
                  ></input>
                </div>
                <input
                  type="text"
                  placeholder="Subject"
                  className="h-[35px] "
                ></input>
                <textarea
                  placeholder="Write a message"
                  className="h-[134px]"
                ></textarea>
              </div>
              <button className="bg-[#4B6BFB] px-1 py-2 text-[#FFFF] rounded-lg ml-[35px] mt-[29px] w-[150px]">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Contact;
