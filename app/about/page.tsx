"use client";

import {
    FaHtml5,
    FaCss3,
    FaJs,
    FaReact,
    FaFigma,
    FaNodeJs,
    FaNode,
} from 'react-icons/fa'
import { FiFigma } from 'react-icons/fi';

import {
    SiTailwindcss,
    SiNextdotjs
} from 'react-icons/si'

// experience data

const experience = {
    // icon: ''
    title: "My experience",
    description: "Currently focusing on software engineering skills and idependent projects. For broader experience, please see the \"Beyond Engineering\" tab.",
    items: [
        { company: "Independent Projects", position: "Full Stack Engineer", duration: "2025-Present" },
    ],
};

// education data
const education = {
    // icon: ''
    title: "My education",
    description: "A mix of university study, self-directed learning, and a VC-sponsored gap year shaped my path toward practical software engineering.",
    items: [
        { institution: "freeCodeCamp Online Bootcamp", degree: "Full Stack Web Development", duration: "2025-2026" },
        { institution: "CS50, Harvard University", degree: "Introduction to Computer Science", duration: "2025" },
        { institution: "University of London", degree: "BSc in Computer Science ", duration: "2024" },
        { institution: "AppWorks, Jamie Lin (founder)", degree: "Gap Year Program Fellow", duration: "2023-2024" },
        { institution: "University of London", degree: "BSc in Mathematics and Economics", duration: "2022-2023" },
    ],
};

// skills data
const skills = {
    title: "My skills",
    description: "Full-stack web applications with modern frameworks, from clean UI design to responsive front-end and scalable back-end.",
    skilllist: [
        { icon: <FaHtml5 />, name: 'HTML5' },
        { icon: <FaCss3 />, name: 'CSS3' },
        { icon: <FaJs />, name: 'JavaScript' },
        { icon: <FaReact />, name: 'React' },
        { icon: <SiNextdotjs />, name: 'Next.js' },
        { icon: <SiTailwindcss />, name: 'Tailwind CSS v4' },
        { icon: <FaNodeJs />, name: 'Node.js' },
        { icon: <FaFigma />, name: 'Figma' },
    ],
};

// beyond data
const beyond = {
    title: "Beyond Engineering",
    description: "Consulting and business experience strengthen my technical work with project management, user insight, and cross-team communication, adding a strong product and market perspective.",
    info: [
        { fieldName: "2024-2025 | Pre-Series A Startup (U.S.-based)", fieldValue: "Business Development Specialist" },
        { fieldName: "2023-2024 | Boston Consulting Group", fieldValue: "Part-time Assistant" },
        { fieldName: "2022-2023 | KPMG Management Consulting", fieldValue: "Data Science Researcher" },
    ]
};
const beyondhighlight = {
    info: [
        { fieldName: "Key Strengths", fieldValue: "Project Management, User Experience, Market Analysis, Teamwork" },
        // { fieldName: "Projects", fieldValue: "Market Entry, User Segmentation, Sales Performance Optimization" },
        { fieldName: "Languages", fieldValue: "English (Professional, IELTS 8.0), Japanese (Conversational, JLPT N1), Chinese (Native)" },
    ]
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const About = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
            }}
            className='min-h-[80vh] flex items-center justify-center py-12 xl:py-0'
        >
            <div className='container mx-auto'>
                <Tabs
                    defaultValue='experience'
                    className='flex flex-col lg:flex-row gap-[60px]'
                >
                    <TabsList className='lg:flex lg:flex-col lg:w-auto lg:flex-[1] lg:max-w-[220px] w-full mx-auto xl:mx-0 gap-6 px-8 lg:px-0'>
                        <TabsTrigger value="experience">Experience</TabsTrigger>
                        <TabsTrigger value="education">Education</TabsTrigger>
                        <TabsTrigger value="skills">Skills</TabsTrigger>
                        <TabsTrigger value="beyond">Beyond</TabsTrigger>
                    </TabsList>

                    {/* content */}
                    <div className='flex-[3] min-h-[70vh] w-full'>
                        {/* experience */}
                        <TabsContent value="experience" className='w-full'>
                            <div className='flex flex-col gap-[30px] text-center lg:text-left px-8 lg:px-0'>
                                <h3 className='text-foreground text-4xl font-bold'>{experience.title}</h3>
                                <p className='max-w-[600px] text-foreground/60 mx-auto lg:mx-0'>
                                    {experience.description}
                                </p>
                                <ScrollArea className='h-[400px] font-sans'>
                                    <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                                        {experience.items.map((item, index) => {
                                            return (
                                                <li
                                                    key={index}
                                                    className={`
                                                        bg-white h-[184px] py-6 px-10 rounded-xl flex
                                                        flex-col justify-center items-center lg:items-start gap-1
                                                    `}
                                                >
                                                    <span className='text-accent'>{item.duration}</span>
                                                    <h3 className='text-xl max-w-[355px] min-h-[50px]
                                                    text-center lg:text-left'>
                                                        {item.position}
                                                    </h3>
                                                    <div className='flex items-center gap-3'>
                                                        {/* dot */}
                                                        <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                                                        <p className='text-foreground/60'>
                                                            {item.company}
                                                        </p>
                                                    </div>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>

                        {/* education */}
                        <TabsContent value="education" className='w-full'>
                            <div className='flex flex-col gap-[30px] text-center xl:text-left px-8 lg:px-0'>
                                <h3 className='text-foreground text-4xl font-bold'>{education.title}</h3>
                                <p className='max-w-[600px] text-foreground/60 mx-auto xl:mx-0'>
                                    {education.description}
                                </p>
                                <ScrollArea className='h-[400px] font-sans'>
                                    <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                                        {education.items.map((item, index) => {
                                            return (
                                                <li
                                                    key={index}
                                                    className={`
                                                        bg-white h-[184px] py-6 px-10 rounded-xl flex
                                                        flex-col justify-center items-center lg:items-start gap-1
                                                    `}
                                                >
                                                    <span className='text-accent'>{item.duration}</span>
                                                    <h3 className='text-xl max-w-[355px] min-h-[50px]
                                                    text-center lg:text-left'>
                                                        {item.degree}
                                                    </h3>
                                                    <div className='flex items-center gap-3'>
                                                        {/* dot */}
                                                        <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                                                        <p className='text-foreground/60'>
                                                            {item.institution}
                                                        </p>
                                                    </div>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>

                        {/* skills */}
                        <TabsContent value="skills" className='w-full'>
                            <div className="flex flex-col gap-[30px] px-8 lg:px-0">
                                <div className='flex flex-col gap-[30px] text-center lg:text-left'>
                                    <h3 className='text-foreground text-4xl font-bold'>{skills.title}</h3>
                                    <p className='max-w-[600px] text-foreground/60 mx-auto lg:mx-0'>
                                        {skills.description}
                                    </p>
                                </div>
                                <ul className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4 xl:gap-[30px]'>
                                    {skills.skilllist.map((skill, index) => {
                                        return (
                                            <li key={index}>
                                                <TooltipProvider delayDuration={100}>
                                                    <Tooltip>
                                                        <TooltipTrigger className='w-full h-[150px] bg-[white] rounded-xl flex justify-center items-center group'>
                                                            <div className='text-6xl group-hover:text-accent transition-all duration-300'>
                                                                {skill.icon}
                                                            </div>
                                                        </TooltipTrigger>
                                                        <TooltipContent>
                                                            <p>{skill.name}</p>
                                                        </TooltipContent>
                                                    </Tooltip>
                                                </TooltipProvider>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </TabsContent>

                        {/* beyond */}
                        <TabsContent value="beyond" className='w-full text-center lg:text-left'>
                            <div className='flex flex-col gap-[30px] px-8 lg:px-0'>
                                <h3 className='text-4xl font-bold'>{beyond.title}</h3>
                                <p className='max-w-[800px] text-foreground/60 mx-auto lg:mx-0'>
                                    {beyond.description}
                                </p>
                                <p className='text-xl font-bold -mt-1 -mb-2'>Other experience</p>
                                <ul className='grid grid-cols-1 lg:grid-cols-1 gap-y-4 max-w-[850px] mx-auto lg:mx-0'>
                                    {beyond.info.map((item, index) => {
                                        return (
                                            <li key={index} className='flex items-center justify-center lg:justify-start gap-4'>
                                                <span className='text-foreground'>{item.fieldName}</span>
                                                <span className='text-foreground/60 text-[16px] '>{item.fieldValue}</span>
                                            </li>
                                        )
                                    })}
                                </ul>
                                <p className='text-xl font-bold -mb-2'>Highlights</p>
                                <ul className='grid grid-cols-1 lg:grid-cols-1 gap-y-4 max-w-[850px] mx-auto lg:mx-0'>
                                    {beyondhighlight.info.map((item, index) => {
                                        return (
                                            <li key={index} className='flex items-center justify-center lg:justify-start gap-4'>
                                                <span className='text-foreground'>{item.fieldName}</span>
                                                <span className='text-foreground/60 text-[16px]'>{item.fieldValue}</span>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </TabsContent>
                    </div>
                </Tabs>
            </div>
        </motion.div>
    )
}

export default About;