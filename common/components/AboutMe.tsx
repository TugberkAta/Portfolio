"use client";

import Image from "next/image";
import expressIcon from "../../public/icons/express.svg";
import framerMotionIcon from "../../public/icons/framermotion.svg";
import nextJsIcon from "../../public/icons/nextjs.svg";
import nodeJsIcon from "../../public/icons/nodejs.svg";
import tailwindCssIcon from "../../public/icons/tailwindcss.svg";
import typeScriptIcon from "../../public/icons/typescript.svg";
import reactIcon from "../../public/icons/react.svg";
import mongoDbIcon from "../../public/icons/mongodb.svg";
import swiftIcon from "../../public/icons/swift.svg";
import { easeIn, motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import useMousePosition from "../lib/useMousePosition";

const iconArray = [
  { height: 200, width: 200, alt: "Express Icon", src: expressIcon },
  { height: 50, width: 50, alt: "Framer Motion Icon", src: framerMotionIcon },
  { height: 160, width: 160, alt: "Next Js Icon", src: nextJsIcon },
  { height: 120, width: 120, alt: "nodejs Icon", src: nodeJsIcon },
  { height: 300, width: 200, alt: "Tailwind Icon", src: tailwindCssIcon },
  { height: 90, width: 90, alt: "TypeScript Icon", src: typeScriptIcon },
  { height: 90, width: 90, alt: "React Icon", src: reactIcon },
  { height: 180, width: 180, alt: "Mongo Db Icon", src: mongoDbIcon },
  { height: 90, width: 90, alt: "Swift Icon", src: swiftIcon },
];

export default function AboutMe() {
  return (
    <>
      <Introduction />
      <SkillIcons />
      <div className="h-screen"></div>
    </>
  );
}

export function Introduction() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start center"],
  });

  const [isHovered, setIsHovered] = useState(false);
  const [maskSize, setMaskSize] = useState(0);

  useEffect(() => {
    setMaskSize(isHovered ? 200 : 0);
  }, [isHovered]);

  const mousePosition = useMousePosition();

  // Provide fallback values for mousePosition.x and mousePosition.y
  const mouseX = mousePosition.mousePosition.x ?? 0;
  const mouseY = mousePosition.mousePosition.y ?? 0;

  return (
    <>
      <div className="relative text-white text-5xl text-center mt-20 mb-20 font-bold">
        <motion.p
          ref={ref}
          style={{ opacity: scrollYProgress }}
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
          I'm Tuğberk,
          <br /> An aspiring Full Stack developer
          <br /> who brings
          <span className="text-transparent bg-clip-text font-extrabold bg-gradient-to-r from-green-700 to-blue-800 p-2">
            passionate
          </span>
          <br /> experiences that engages users and <br />
          makes a difference.
        </motion.p>
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

export function SkillIcons() {
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
              height={icon.height}
              width={icon.width}
              alt={icon.alt}
              src={icon.src}
              scrollYProgress={scrollYProgress}
            />
          ))}
        </div>
        <div className="flex gap-20 w-full justify-center items-center flex-wrap">
          {iconArray.slice(4).map((icon, i) => (
            <Icon
              key={icon.alt}
              index={i + 4}
              total={iconArray.length}
              height={icon.height}
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
  height: number;
  width: number;
  alt: string;
  src: any;
  scrollYProgress: any;
};

export function Icon({
  height,
  width,
  alt,
  src,
  index,
  total,
  scrollYProgress,
}: IconProps & { index: number; total: number }) {
  const start = index / total;
  const end = start + 1 / total;

  const opacity = useTransform(scrollYProgress, [start, end], [0.1, 1]);

  return (
    <motion.div style={{ opacity: opacity }}>
      <Image height={height} width={width} alt={alt} src={src} />
    </motion.div>
  );
}
