"use client";

import Image from "next/image";
import expressIcon from "../../public/express.svg";
import framerMotionIcon from "../../public/framermotion.svg";
import nextJsIcon from "../../public/nextjs.svg";
import nodeJsIcon from "../../public/nodejs.svg";
import tailwindCssIcon from "../../public/tailwindcss.svg";
import typeScriptIcon from "../../public/typescript.svg";
import reactIcon from "../../public/react.svg";
import mongoDbIcon from "../../public/mongodb.svg";
import swiftIcon from "../../public/swift.svg";
import { easeIn, motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

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

  return (
    <>
      <motion.p
        className={` text-white text-5xl text-center font-bold mb-32`}
        ref={ref}
        style={{ opacity: scrollYProgress }}
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
