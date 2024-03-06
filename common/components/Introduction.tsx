"use client";

import { useEffect, useRef, useState } from "react";
import useMousePosition from "../lib/useMousePosition";
import { motion, useScroll } from "framer-motion";

export default function Introduction() {
  // Getting the value of scrollY for responsive opacity change on scroll
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start center"],
  });

  const [isHovered, setIsHovered] = useState(false); // Toggles when the component is hovered
  const [maskSize, setMaskSize] = useState(0);

  useEffect(() => {
    setMaskSize(isHovered ? 200 : 0); // When hovered make the mask icon bigger
  }, [isHovered]);

  const mousePosition = useMousePosition(); // Get the mouse position values from the useMousePosition function

  // Provide fallback values for mousePosition.x and mousePosition.y
  const mouseX = mousePosition.mousePosition.x ?? 0;
  const mouseY = mousePosition.mousePosition.y ?? 0;

  return (
    <>
      <div className="relative text-white text-5xl text-center mt-20 mb-20 font-bold">
        <motion.p
          ref={ref}
          style={{ opacity: scrollYProgress }}
          // Calculate the mouse position based on the mouse position, scroll amount and the size of the mask
          animate={{
            WebkitMaskPosition: `${mouseX - maskSize / 2}px ${
              mouseY - maskSize / 2 - mousePosition.totalScrollY / 8
            }px`,
            WebkitMaskSize: `${maskSize}px`,
          }}
          transition={{ type: "tween", ease: "backOut" }}
          className="absolute w-full  text-green-400 bg-white mask p-32 z-10 cursor-none"
          onMouseEnter={() => {
            setIsHovered(true);
          }}
          onMouseLeave={() => {
            setIsHovered(false);
          }}
        >
          {/* Mask layer that shows when hovered*/}
          I'm Tuğberk,
          <br /> An aspiring Full Stack developer
          <br /> who brings
          <span className="text-transparent bg-clip-text font-extrabold bg-gradient-to-r from-green-700 to-blue-800 p-2">
            innovative
          </span>
          <br /> experiences that engages users and <br />
          makes a difference.
        </motion.p>
        {/* The default layer */}
        <motion.p
          ref={ref}
          style={{ opacity: scrollYProgress }}
          className="p-32"
        >
          I'm Tuğberk,
          <br /> An aspiring Full Stack developer
          <br /> who brings
          <span className="text-transparent bg-clip-text font-extrabold bg-gradient-to-r from-green-700 to-blue-800 p-2">
            interactive
          </span>
          <br /> experiences that engages users and <br />
          makes a difference.
        </motion.p>
      </div>
    </>
  );
}
