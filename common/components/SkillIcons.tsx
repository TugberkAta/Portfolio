"use client";

import expressIcon from "../../public/icons/express.svg";
import framerMotionIcon from "../../public/icons/framermotion.svg";
import nextJsIcon from "../../public/icons/nextjs.svg";
import nodeJsIcon from "../../public/icons/nodejs.svg";
import tailwindCssIcon from "../../public/icons/tailwindcss.svg";
import typeScriptIcon from "../../public/icons/typescript.svg";
import reactIcon from "../../public/icons/react.svg";
import mongoDbIcon from "../../public/icons/mongodb.svg";
import swiftIcon from "../../public/icons/swift.svg";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

// Icon array to be used in mapping of icons
const iconArray = [
  { width: 90, alt: "TypeScript Icon", src: typeScriptIcon },
  { width: 90, alt: "React Icon", src: reactIcon },
  { width: 160, alt: "Next Js Icon", src: nextJsIcon },
  { width: 200, alt: "Express Icon", src: expressIcon },
  { width: 200, alt: "Tailwind Icon", src: tailwindCssIcon },
  { width: 120, alt: "nodejs Icon", src: nodeJsIcon },
  { width: 180, alt: "Mongo Db Icon", src: mongoDbIcon },
  { width: 50, alt: "Framer Motion Icon", src: framerMotionIcon },
  { width: 90, alt: "Swift Icon", src: swiftIcon },
];

export default function SkillIcons() {
  // Getting the value of scrollY for responsive opacity change on scroll
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "center center"],
  });

  return (
    <>
      <motion.div className="mr-4 ml-4 flex flex-col gap-20" ref={ref}>
        <div className="flex gap-20 w-full justify-center items-center flex-wrap">
          {iconArray.slice(0, 4).map((icon, i) => (
            <Icon
              key={icon.alt}
              index={i}
              total={iconArray.length}
              width={icon.width}
              alt={icon.alt}
              src={icon.src}
              scrollYProgress={scrollYProgress}
            />
          ))}
        </div>
        <div className="flex gap-20 w-full justify-center items-center flex-wrap">
          {iconArray.slice(4, 7).map((icon, i) => (
            <Icon
              key={icon.alt}
              index={i + 4} // Adding the already offset index to regulate the animation
              total={iconArray.length}
              width={icon.width}
              alt={icon.alt}
              src={icon.src}
              scrollYProgress={scrollYProgress}
            />
          ))}
        </div>
        <div className="flex gap-20 w-full justify-center items-center flex-wrap">
          {iconArray.slice(7).map((icon, i) => (
            <Icon
              key={icon.alt}
              index={i + 7}
              total={iconArray.length}
              width={icon.width}
              alt={icon.alt}
              src={icon.src}
              scrollYProgress={scrollYProgress}
            />
          ))}
        </div>
      </motion.div>
    </>
  );
}

type IconProps = {
  width: number;
  alt: string;
  src: any;
  scrollYProgress: any;
};

export function Icon({
  width,
  alt,
  src,
  index,
  total,
  scrollYProgress,
}: IconProps & { index: number; total: number }) {
  // Calculating the start and end values for the object
  const start = index / total;
  const end = start + 1 / total;

  // Depending on the start and end values make them delay
  const opacity = useTransform(scrollYProgress, [start, end], [0.1, 1]); // The shadow value starts at 0.1 to add an outline

  return (
    <motion.div style={{ opacity: opacity }}>
      <Image width={width} alt={alt} src={src} />
    </motion.div>
  );
}
