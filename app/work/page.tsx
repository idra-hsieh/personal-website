"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "full stack",
    title: "Charm Money Indicator",
    description:
      "A modern Next.js 16 application designed to help users discover their financial archetypes...",
    stack: [
      { name: "Next.js" },
      { name: "TypeScript" },
      { name: "Docker" },
      { name: "Google Cloud" },
      { name: "Recharts" },
    ],
    video: "/assets/work/demo1.mp4",
    image: "/assets/work/thumb1.png",
    live: "https://charm-money.web.app/en/cmi-test",
    github: "https://github.com/idra-hsieh/charm",
  },
  {
    num: "02",
    category: "full stack",
    title: "Lumi Diary Digest",
    description: "(placeholder for description)",
    stack: [{ name: "Next.js" }, { name: "Tailwind Css" }, { name: "Node.js" }],
    video: "",
    image: "/assets/work/thumb2.png",
    live: "",
    github: "",
  },
  {
    num: "03",
    category: "frontend",
    title: "Personal Website",
    description: "(placeholder for description)",
    stack: [{ name: "Next.js" }, { name: "Tailwind CSS" }],
    video: "",
    image: "/assets/work/thumb3.png",
    live: "",
    github: "",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (swiper: SwiperClass) => {
    const index = swiper.activeIndex;
    setActiveIndex(index);
    setProject(projects[index]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 px-12 lg:px-0 -mt-10"
    >
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row lg:gap-[30px]">
          {/* LEFT — PROJECT INFO */}
          <div
            className="
              w-full lg:w-[40%] flex flex-col
              lg:justify-between order-2 lg:order-none
            "
          >
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* outline number */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline-foreground">
                {project.num}
              </div>

              {/* title */}
              <h3 className="text-3xl font-bold text-foreground">
                {project.title}
              </h3>

              {/* category */}
              <h4
                className="
                  text-md font-bold leading-none text-foreground/80
                  transition-all duration-500 capitalize
                "
              >
                {project.category} project
              </h4>

              {/* description */}
              <p className="text-foreground/60 font-sans">
                {project.description}
              </p>

              {/* tech stack */}
              <ul className="flex gap-4 flex-wrap">
                {project.stack.map((item, index) => (
                  <li
                    key={index}
                    className="text-l text-accent whitespace-nowrap"
                  >
                    {item.name}
                    {index !== project.stack.length - 1 && ","}
                  </li>
                ))}
              </ul>

              {/* divider */}
              <div className="border border-foreground/20"></div>

              {/* buttons */}
              <div className="flex items-center gap-4">
                {project.live && (
                  <Link href={project.live}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger
                          className="
                            w-[70px] h-[70px] rounded-full bg-foreground/5
                            flex justify-center items-center group
                          "
                        >
                          <BsArrowUpRight className="text-foreground text-3xl group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Live Project</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}

                {project.github && (
                  <Link href={project.github}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger
                          className="
                            w-[70px] h-[70px] rounded-full bg-foreground/5
                            flex justify-center items-center group
                          "
                        >
                          <BsGithub className="text-foreground text-3xl group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>GitHub Repository</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}
              </div>
            </div>
          </div>

          {/* RIGHT — SLIDER */}
          <div className="w-full lg:w-[60%] mt-10">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="mb-12 relative"
              onSlideChange={handleSlideChange}
            >
              {projects.map((proj, index) => (
                <SwiperSlide key={index} className="w-full">
                  <div
                    className="
                      relative aspect-[1.77/1] group overflow-hidden
                      bg-foreground/20
                    "
                  >
                    {/* overlay */}
                    <div
                      className="
                        absolute top-0 bottom-0 w-full h-full 
                        bg-foreground/10 z-10
                      "
                    ></div>

                    {/* video or image */}
                    <div className="relative w-full h-full z-0">
                      {proj.video ? (
                        <video
                          src={proj.video}
                          poster={proj.image}
                          autoPlay
                          muted
                          loop
                          playsInline
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <Image
                          src={proj.image}
                          alt=""
                          fill
                          className="object-cover"
                        />
                      )}
                    </div>
                  </div>
                </SwiperSlide>
              ))}

              {/* slider buttons */}
              <WorkSliderBtns
                containerStyles="
                  absolute inset-x-3 top-1/2 -translate-y-1/2 z-20
                  flex items-center justify-between gap-3
                "
                btnStyles="
                  bg-accent hover:bg-accent-hover text-primary text-[22px]
                  w-[44px] h-[44px] flex justify-center items-center transition-all
                "
                iconsStyles=""
                isFirst={activeIndex === 0}
                isLast={activeIndex === projects.length - 1}
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
