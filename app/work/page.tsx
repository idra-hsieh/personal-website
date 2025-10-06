"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react"
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
import { handleClientScriptLoad } from "next/script";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
    {
        num: "01",
        category: "frontend",
        title: "project 1",
        description: "(placeholder for description)",
        stack: [{ name: "HTML5" }, { name: "CSS3" }, { name: "JavaScript" }],
        image: "/assets/work/thumb1.jpg", // placeholder for project 1 image
        live: "",
        github: "",
    },
    {
        num: "02",
        category: "fullstack",
        title: "project 2",
        description: "(placeholder for description)",
        stack: [{ name: "Next.js" }, { name: "Tailwind Css" }, { name: "Node.js" }],
        image: "/assets/work/thumb2.jpg", // placeholder for project 1 image
        live: "",
        github: "",
    },
    {
        num: "03",
        category: "fullstack",
        title: "project 3",
        description: "(placeholder for description)",
        stack: [{ name: "Next.js" }, { name: "Tailwind CSS" }],
        image: "/assets/work/thumb3.jpg", // placeholder for project 1 image
        live: "",
        github: "",
    },
]

const Work = () => {
    const [project, setProject] = useState(projects[0]);

    const handleSlideChange = (swiper) => {
        // get current slide index
        const currentIndex = swiper.activeIndex;
        // update project state based on current slide index
        setProject(projects[currentIndex]);
    }

    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }}
            className="min-h-[80vh] flex flex-col justify-center py-12 px-12 lg:px-0 -mt-10"
        >
            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row lg:gap-[30px]">
                    <div
                        className={`
                            w-full lg:w-[40%] flex flex-col
                            lg:justify-between order-2 lg:order-none
                        `}
                    >
                        <div className="flex flex-col gap-[30px] h-[50%]">
                            {/* outline num */}
                            <div className="text-8xl leading-none font-extrabold text-transparent text-outline-foreground">
                                {project.num}
                            </div>
                            {/* project category */}
                            <h2
                                className={`
                                    text-[42px] font-bold leading-none text-foreground
                                    group-hover:text-accent transition-all duration-500 capitalize
                                `}
                            >
                                {project.category} project
                            </h2>
                            {/* project description */}
                            <p className="text-foreground/60 font-sans">
                                {project.description}
                            </p>
                            {/* stack */}
                            <ul className="flex gap-4">
                                {project.stack.map((item, index) => {
                                    return (
                                        <li key={index} className="text-l text-accent">
                                            {item.name}
                                            {/* make sure to not put comma after the last item*/}
                                            {index !== project.stack.length - 1 && ","}
                                        </li>
                                    )
                                })}
                            </ul>
                            {/* border */}
                            <div className="border border-foreground/20"></div>
                            {/* buttons */}
                            <div className="flex items-center gap-4">
                                {/* live project button */}
                                <Link href={project.live}>
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger
                                                className={`
                                                    w-[70px] h-[70px] rounded-full bg-foreground/5
                                                    flex justify-center items-center group
                                                `}
                                            >
                                                <BsArrowUpRight className="text-foreground text-3xl group-hover:text-accent" />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Live Project</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>
                                {/* github project button */}
                                <Link href={project.github}>
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger
                                                className={`
                                                    w-[70px] h-[70px] rounded-full bg-foreground/5
                                                    flex justify-center items-center group
                                                `}
                                            >
                                                <BsGithub className="text-foregroubd text-3xl group-hover:text-accent" />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>GitHub Repository</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:w-[60%]">
                        <Swiper
                            spaceBetween={30}
                            slidesPerView={1}
                            className="xl:h-[520px] mb-12"
                            onSlideChange={handleSlideChange}
                        >
                            {projects.map((project, index) => {
                                return (
                                    <SwiperSlide key={index} className="w-full">
                                        <div
                                            className="
                                                relative aspect-[4/3] group overflow-hidden
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
                                            {/* image */}
                                            <div className="relative w-full h-full z-0">
                                                <Image src={project.image} alt="" fill className="object-cover" />
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                )
                            })}
                            {/* slider buttons */}
                            <WorkSliderBtns
                                containerStyles="
                                    absolute inset-x-3 top-1/2 -translate-y-1/2 z-20 flex
                                    justify-between gap-3
                                "
                                btnStyles="
                                    bg-accent hover:bg-accent-hover text-primary text-[22px]
                                    w-[44px] h-[44px] flex justify-center items-center transition-all
                                "
                            />
                        </Swiper>
                    </div>
                </div>
            </div>
        </motion.section>
    )
}

export default Work;