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
    { icon: <FaLinkedin />, title: "LinkedIn", info: "@idra-hsieh" },
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
                <div className="flex flex-col lg:flex-row lg:gap-[30px]"
                >
                    {/* form */}
                    <div className="lg:w-[60%] order-2 lg:order-none font-sans">
                        <form className="flex flex-col gap-6 p-10 bg-[#E8E6E4] rounded-lg">
                            <h3 className="text-2xl font-bold text-accent font-primary">Let's build something meaningful together.</h3>
                            <p>
                                Whether it’s a collaboration, project idea, or opportunity, I’d love to hear from you.
                            </p>

                            {/* input */}
                            <div className="grid grid-cols-2 lg:grid-cols-1 gap-6">
                                <div className="flex flex-col">
                                    <label className="text-sm font-medium px-1 mb-1">
                                        First Name <span className="text-red-600">*</span>
                                    </label>
                                    <Input type="firstname" name="firstname" required placeholder="Idra" />
                                </div>
                                <div className="flex flex-col">
                                    <label className="text-sm font-medium px-1 mb-1">
                                        Last Name <span className="text-red-600">*</span>
                                    </label>
                                    <Input type="lastname" name="lastname" required placeholder="Hsieh" />
                                </div>
                                <div className="flex flex-col">
                                    <label className="text-sm font-medium px-1 mb-1">
                                        Email Address <span className="text-red-600">*</span>
                                    </label>
                                    <Input type="email" name="email" required placeholder="idra.hsieh@gmail.com" />
                                </div>
                                <div className="flex flex-col">
                                    <label className="text-sm font-medium px-1 mb-1">
                                        Phone Number
                                    </label>
                                    <Input type="phone" name="phone" placeholder="+886 975-665-265" />
                                </div>
                            </div>

                            {/* select */}
                            <div className="flex flex-col">
                                <label className="text-sm font-medium px-1 mb-1">
                                    What Brings You Here? <span className="text-red-600">*</span>
                                </label>
                                <Select required>
                                    <SelectTrigger className="w-full">
                                        <SelectValue
                                            placeholder={<span className="text-foreground/25 font-light">I’m reaching out about...</span>}
                                        />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            {/* <SelectLabel>I’m Reaching Out About...</SelectLabel> */}
                                            <SelectItem value="job">Job Opportunity</SelectItem>
                                            <SelectItem value="freelance">Freelance Project</SelectItem>
                                            <SelectItem value="lecture">Speaking/Lecture Invitation</SelectItem>
                                            <SelectItem value="collab">Collaboration Proposal</SelectItem>
                                            <SelectItem value="media">Media/Press Inquiry</SelectItem>
                                            <SelectItem value="other">Other</SelectItem>
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                            </div>

                            {/* textarea */}
                            <div className="flex flex-col">
                                <label className="text-sm font-medium px-1 mb-1">
                                    Leave a Message <span className="text-red-600">*</span>
                                </label>
                                <Textarea
                                    className="h-[200px]"
                                    placeholder="Type your message here..."
                                />
                            </div>

                            {/* btn */}
                            <Button size="md" className="max-w-40">
                                Send message
                            </Button>
                        </form>
                    </div>
                    {/* info */}
                    <div className="
                        flex-1 flex items-center lg:justify-end order-1
                        lg:order-none mb-8 lg:mb-0 mr-10
                        "
                    >
                        <ul className="flex flex-col gap-10">
                            {info.map((item, index) => {
                                return (
                                    <li key={index} className="flex items-center gap-6">
                                        <div
                                            className="
                                                w-[52px] h-[52px] lg:w-[72px] lg:h-[72px]
                                                bg-[#E8E6E4] text-accent rounded-md flex
                                                items-center justify-center
                                            "
                                        >
                                            <div className="text-[28px]">{item.icon}</div>
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-foreground/60">{item.title}</p>
                                            <h3 className="text-xl">{item.info}</h3>
                                        </div>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </motion.section>
    )
}

export default Contact;