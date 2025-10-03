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

const projects = [
    {
        num: "01",
        category: "frontend",
        title: "project 1",
        description: "(placeholder for description",
        stack: [{ name: "HTML5" }, { name: "CSS3" }, { name: "JavaScript" }],
        // image: "/assets/work/thumb1.png", // placeholder for project 1 image
        live: "",
        github: "",
    },
    {
        num: "02",
        category: "fullstack",
        title: "project 2",
        description: "(placeholder for description",
        stack: [{ name: "Next.js" }, { name: "Tailwind Css" }, { name: "Node.js" }],
        // image: "/assets/work/thumb2.png", // placeholder for project 1 image
        live: "",
        github: "",
    },
    {
        num: "03",
        category: "fullstack",
        title: "project 3",
        description: "(placeholder for description",
        stack: [{ name: "Next.js" }, { name: "Tailwind CSS" }],
        // image: "/assets/work/thumb3.png", // placeholder for project 1 image
        live: "",
        github: "",
    },
]

const Work = () => {
    const [project, setProject] = useState(projects[0]);
    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="min-h-[80vh] flex flex-col justify-center py-12 lg:px-0"
        >
            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row lg:gap-[30px]">
                    <div
                        className={`
                            w-full lg:w-[50%] lg:h-[460px] flex flex-col
                            lg:justify-betweenorder-2 lg:order-none
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
                            <p className="text-foreground/60">
                                {project.description}
                            </p>
                            {/* stack */}
                            <ul className="flex gap-4">
                                {project.stack.map((item, index) => {
                                    return (
                                        <li key={index} className="text-xl text-accent">
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
                                                <BsArrowUpRight className="text-foregroubd text-3xl group-hover:text-accent" />
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
                    <div className="w-full lg:w-[50%]">slider</div>
                </div>
            </div>
        </motion.section>
    )
}

export default Work;