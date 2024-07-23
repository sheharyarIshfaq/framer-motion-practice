import React, { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

const ViewBasedAnimations = () => {
  const ref = useRef();

  const isInView = useInView(ref);

  useEffect(() => {
    console.log(isInView);
  }, [isInView]);

  return (
    <>
      <div className="h-[150vh]" />
      <motion.div
        className="h-[100vh] bg-blue-400"
        initial={{ opacity: 0, x: -1000 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      />
      <div
        ref={ref}
        className={`
        h-[100vh] ${
          isInView ? "bg-red-400" : "bg-green-400"
        } transition-all duration-500 ease-in`}
      />
    </>
  );
};

export default ViewBasedAnimations;
