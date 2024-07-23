import React from "react";
import { motion, useAnimationControls } from "framer-motion";

const AnimationControls = () => {
  const controls = useAnimationControls();

  const handleFlip = () => {
    controls.start("animate");
    setTimeout(() => {
      controls.start("initial");
    }, 1000);
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center gap-6">
      <button
        onClick={handleFlip}
        className="bg-green-600 text-white text-xl px-8 py-3 font-bold rounded-md"
      >
        Flip It
      </button>
      <motion.div
        variants={{
          initial: { x: 0 },
          animate: { x: 100 },
        }}
        initial="initial"
        animate={controls}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="bg-blue-400 w-60 h-60 flex items-center justify-center"
      >
        <h1 className="text-2xl font-bold">Hello</h1>
      </motion.div>
    </div>
  );
};

export default AnimationControls;
