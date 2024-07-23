import React from "react";
import { AnimatePresence, motion } from "framer-motion";

const BasicAnimations = () => {
  const [isVisible, setIsVisible] = React.useState(true);

  return (
    <div className="h-screen flex flex-col justify-center items-center gap-6">
      <motion.button
        layout
        onClick={() => setIsVisible((prev) => !prev)}
        className="bg-green-600 text-white text-xl px-8 py-3 font-bold rounded-md"
      >
        Show/Hide
      </motion.button>
      <AnimatePresence mode="popLayout">
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotate: "0deg", x: 0 }}
            animate={{
              opacity: 1,
              scale: 1,
              rotate: "360deg",
              x: [0, 100, 100, 0],
            }}
            exit={{ opacity: 0, scale: 0.5, rotate: "0deg", x: 0 }}
            transition={{
              duration: 1,
              ease: "backInOut",
              times: [0, 0.5, 0.7, 1],
            }}
            className="bg-blue-400 w-60 h-60 flex items-center justify-center"
          >
            <h1 className="text-2xl font-bold">Hello</h1>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default BasicAnimations;
