import React from "react";
import { motion, MotionConfig } from "framer-motion";

const Gestures = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center gap-6">
      <MotionConfig transition={{ duration: 0.125, ease: "easeInOut" }}>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9, rotate: "2.5deg" }}
          className="bg-green-600 text-white text-3xl px-8 py-3 font-bold rounded-md"
        >
          Show/Hide
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.25 }}
          whileTap={{ scale: 0.7, rotate: "-2.5deg" }}
          className="bg-red-600 text-white text-3xl px-8 py-3 font-bold rounded-md"
        >
          Show/Hide
        </motion.button>
      </MotionConfig>
    </div>
  );
};

export default Gestures;
