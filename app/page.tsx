import { Button } from "@/components/ui/button"
import { FiDownload } from "react-icons/fi"

// components
import Socials from "@/components/Socials";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

const Home = () => {
  return (
    <section className="h-full text-foreground">
      <div className="container mx-auto h-full">
        <div
          className="flex flex-col xl:flex-row items-center
        justify-between xl:pt-8 xl:pb-24"
        >
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none lg:-mt-10 px-10 lg:px-0">
            <span className="text-xl">Software Developer</span>
            <h1 className="h1">
              Hi, I'm <br /> <span className="text-accent">Idra Hsieh</span>
            </h1>
            <p className="max-w-[500px] mt-4 mb-9 text-foreground/80 font-sans">
              I craft elegant digital experiences through thoughtful design and
              up-to-date technologies. Let's get in touch!
            </p>

            {/* button and socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <a
                href="/assets/main/CV_IdraHsieh.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="uppercase flex itens-center gap-2"
                >
                  <span>Download my CV</span>
                  <FiDownload className="text-xl" />
                </Button>
              </a>
              <div className="mb-8 xl:mb-0">
                <Socials
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex
                    justify-center items-center text-accent text-base hover:bg-accent
                    hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          {/* photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0 lg:-mt-8">
            <Photo />
          </div>
        </div>
      </div>
      <div className="lg:-mt-8 mb-12">
        <Stats />
      </div>
    </section>
  );
}

export default Home;