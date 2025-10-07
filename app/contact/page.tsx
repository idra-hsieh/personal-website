"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaLinkedin, FaLink } from "react-icons/fa";

const info = [
    { icon: <FaPhoneAlt />, title: "Phone", info: "+886 975-665-265" },
    { icon: <FaEnvelope />, title: "Email", info: "idra.hsieh@gmail.com" },
    { icon: <FaLinkedin />, title: "LinkedIn", info: "linkedin.com/in/idra-hsieh/", path: "https://www.linkedin.com/in/idra-hsieh/" },
];

import { motion } from "framer-motion";

const Contact = () => {
    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }}
            className="py-6"
        >
            <div className="container m-auto">
                <div className="
                    flex flex-col lg:flex-row gap-[30px]
                    px-8
                    "
                >
                    {/* form */}
                    <div className="lg:h-[54%] order-2 lg:order-none font-sans">
                        <form className="flex flex-col gap-6 p-10 bg-[#E8E6E4] rounded-lg">
                            <h3 className="text-2xl font-bold text-accent font-primary">Let's build something meaningful together.</h3>
                            <p>
                                Whether it’s a collaboration, project idea, or opportunity, I’d love to hear from you.
                            </p>
                            {/* input */}
                            <div className="grid grid-cols-2 lg:grid-cols-1 gap-6">
                                <Input type="firstname" required placeholder="First Name" />
                                <Input type="lastname" required placeholder="Last Name" />
                                <Input type="email" required placeholder="Email Address" />
                                <Input type="phone" placeholder="Phone Number" />
                            </div>
                            {/* select */}
                            <Select>
                                <SelectTrigger className="w-full text-foreground/40">
                                    <SelectValue placeholder="What Brings You Here?" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>I’m Reaching Out About...</SelectLabel>
                                        <SelectItem value="job">Job Opportunity</SelectItem>
                                        <SelectItem value="freelance">Freelance Project</SelectItem>
                                        <SelectItem value="lecture">Speaking/Lecture Invitation</SelectItem>
                                        <SelectItem value="collab">Collaboration Proposal</SelectItem>
                                        <SelectItem value="media">Media/Press Inquiry</SelectItem>
                                        <SelectItem value="other">Other</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </form>
                    </div>
                    {/* info */}
                    <div className="
                        flex-1 flex items-center lg:justify-end order-1
                        lg:order-none mb:8 lg:mb-0
                        "
                    >
                        info
                    </div>
                </div>
            </div>
        </motion.section>
    )
}

export default Contact;