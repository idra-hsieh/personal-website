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


// beyond data
const beyond = {
    title: "Beyond Engineering",
    description: "With experience in consulting and business, I bring strengths in project management, user insight, and cross-team communication — complementing my technical work with a strong product and market perspective.",
    info: [
        { fieldName: "Pre-Series A Startup (U.S.-based)", fieldValue: "2024-2025 Business Development Specialist" },
        { fieldName: "Boston Consulting Group", fieldValue: "2023-2024 Part-time Assistant" },
        { fieldName: "KPMG Management Consulting", fieldValue: "2022-2023 Data Science Researcher" },
        { fieldName: "Key Strengths", fieldValue: "Project Management, Market & User Experience, Teamwork" },
        { fieldName: "Projects", fieldValue: "Market Entry, User Segmentation, Sales Performance Optimization" },
        { fieldName: "Languages", fieldValue: "English (Professional, IELTS 8.0), Japanese (JLPT N1), Chinese (Native)" },
    ]
};

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
        { institution: "AppWorks, Jamie Lin (founder)", degree: "Gap Year Program (selected student)", duration: "2023-2024" },
        { institution: "University of London", degree: "BSc in Mathematics and Economics", duration: "2022-2023" },
    ],
};

// skills data
const skills = {
    title: "My skills",
    description: "",
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
            className='min-h-[80vh] flex items-center justify-center py-12 xl: py-0'
        >
            <div className='container mx-auto'>
                <Tabs
                    defaultValue='experience'
                    className='flex flex-col xl:flex-row gap-[60px]'
                >
                    <TabsList className='flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6'>
                        <TabsTrigger value="experience">Experience</TabsTrigger>
                        <TabsTrigger value="education">Education</TabsTrigger>
                        <TabsTrigger value="skills">Skills</TabsTrigger>
                        <TabsTrigger value="beyond">Beyond</TabsTrigger>
                    </TabsList>

                    {/* content */}
                    <div className='min-h-[70vh] w-full'>
                        {/* experience */}
                        <TabsContent value="experience" className='w-full'>
                            <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                                <h3 className='text- text-4xl font-bold'>{experience.title}</h3>
                                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>
                                    {experience.description}
                                </p>
                            </div>
                        </TabsContent>

                        {/* education */}
                        <TabsContent value="education" className='w-full'>
                            education
                        </TabsContent>
                        {/* skills */}
                        <TabsContent value="skills" className='w-full'>
                            skills
                        </TabsContent>
                        {/* beyond */}
                        <TabsContent value="beyond" className='w-full'>
                            beyond
                        </TabsContent>
                    </div>
                </Tabs>
            </div>
        </motion.div>
    )
}

export default About;