import { Header } from "@/components";
import { Footer } from "@/components";
const Custom404 = () => {
  return (
    <div>
      <Header />
      <div className="max-w-full flex justify-center">
        <div className="max-w-[1200px] flex flex-col gap-20 items-center mt-[100px]">
          <h1 className="font-bold text-8xl">404</h1>
          <h2 className="font-bold text-6xl">Oops... page not found.</h2>
          <p className="font-bold text-4xl">Go away now or u will go to hell</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Custom404;
