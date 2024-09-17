import Pic from "../../public/Pic.png";
import Image from "next/image";
function Aboutme() {
  return (
    <div className=" bg-gray-100 dark:bg-[rgb(17,24,39,1)] mt-12">
      <div className="flex-1">
        <div className="text-center">
          <button className="bg-gray-300 rounded-3xl w-28 h-7 dark:bg-[rgb(55,65,81,1)]">
            About me
          </button>
        </div>
        <div className="flex flex-col gap-12 lg:flex-row justify-center">
          <div>
            <Image src={Pic} />
          </div>
          <div className="flex flex-col gap-6 lg:w-1/2">
            <h2 className="text-3xl font-bold">
              Curious about me? Here you have it:
            </h2>
            <p>
              I'm a designer turned full stack developer, passionate about
              React.js and Node.js. I excel in blending technical and visual
              aspects to craft exceptional digital products, prioritizing user
              experience, precise design, and optimized code.
            </p>
            <p>
              Since starting my web development journey in 2015, I've embraced
              challenges and kept up with the latest tech trends. Now in my
              early thirties, seven years in, I'm building cutting-edge web apps
              using Next.js, TypeScript, Nestjs, Tailwindcss, Supabase, and
              more.
            </p>
            <p>
              With a progressive mindset, I enjoy the entire product development
              process, from ideation to execution. Off duty, you'll find me on
              Twitter, tracking startup journeys, or unwinding. Follow me for
              tech insights and public project updates on Twitter or GitHub.
            </p>
            <p>Finally, some quick bits about me.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Aboutme;
