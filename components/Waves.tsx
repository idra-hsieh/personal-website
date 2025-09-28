import { motion } from "framer-motion"

// variants
const waveAnimation = {
    initial: {
        top: "0%",
    },
    animate: {
        top: "100%",
    },
    exit: {
        top: ["100%", "0%"],
    },
}

// calculate the reverse index for staggered delay
const reverseIndex = (index: number) => {
    const totalSteps = 8; // number of steps
    return totalSteps - index - 1;
}

const Waves = () => {
    return <>

        {/* rendor 500 motion divs, each representing a part of the waves.
    
    Each div will have the same animation defined by the waveAnimation object.
    The delat for each div is calculated dynamically based on it's reversed index,
    creating a staggered effect with decreasing delay for each subsequent step.

    */}

        {[...Array(8)].map((_, index) => {
            return (
                <motion.div
                    key={index} variants={waveAnimation} initial="initial"
                    animate="animate" exit="exit" transition={{
                        duration: 0.4,
                        ease: 'easeInOut',
                        delay: reverseIndex(index) * 0.05,
                    }}
                    className="h-full w-full bg-[#d7d2ce] relative"
                />
            );
        })}

    </>
};

export default Waves;