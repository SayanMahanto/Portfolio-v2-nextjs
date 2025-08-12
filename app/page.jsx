import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

const page = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24 xl:px-16">
          <div className="text-center xl:text-left">
            <span className="text-xl">MERN-Stack Developer</span>
            <h1 className="h1 mb-6">
              Hello I'm <br />
              <span className="text-accent">Sayan Mahanto</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              I excel at crafting elegant digital experiences and I am
              proficient in varios progeamming languages and technologies.
            </p>
          </div>
          <div>photo</div>
        </div>
      </div>
    </section>
  );
};

export default page;
