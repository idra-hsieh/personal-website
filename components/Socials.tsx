import Link from "next/link";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiSubstack } from "react-icons/si";

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"

const socials = [
    { icon: <FaGithub />, path: "https://github.com/idra-hsieh", name: "GitHub" },
    { icon: <FaLinkedin />, path: "https://www.linkedin.com/in/idra-hsieh/", name: "LinkedIn" },
    { icon: <SiSubstack />, path: "https://thebuilderslibrary.substack.com/", name: "Substack" },
];

// Define props type

type SocialsProps = {
    containerStyles?: string;
    iconStyles?: string;
};

const Socials = ({ containerStyles, iconStyles }: SocialsProps) => {
    return (
        <div className={containerStyles}>
            {socials.map((item, index) => {
                return (
                    <TooltipProvider key={index} delayDuration={100}>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Link
                                    href={item.path}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={iconStyles}
                                >
                                    {item.icon}
                                </Link>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>{item.name}</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                );
            })}
        </div>
    );
};

export default Socials