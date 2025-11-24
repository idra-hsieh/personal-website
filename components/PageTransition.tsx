"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

// Define props type
type PageTransitionProps = {
    children: React.ReactNode; // anything valid React can render
}

const PageTransition = ({ children }: PageTransitionProps) => {
    const pathname = usePathname();
    return (
      <AnimatePresence>
        <div key={pathname}>
          <motion.div
            initial={{ opacity: 1 }}
            animate={{
              opacity: 0,
              transition: { delay: 1, duration: 0.4, ease: "easeInOut" },
            }}
            className="h-screen w-screen fixed bg-primary top-0 pointer-events-none z-30"
          />
          {children}
        </div>
      </AnimatePresence>
    );
}

export default PageTransition;