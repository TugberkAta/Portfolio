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
import { motion, useScroll } from "framer-motion";
import { useRef } from "react";

export default function AboutMe() {
  const introductionRef = useRef(null);
  const skillLogosRef = useRef(null);

  const { scrollYProgress: scrollYProgressIntroduction } = useScroll({
    target: introductionRef,
    offset: ["start end", "start center"],
  });

  const { scrollYProgress: scrollYProgressSkillLogos } = useScroll({
    target: skillLogosRef,
    offset: ["start 0.9", "start center"],
  });

  return (
    <>
      <motion.div
        ref={introductionRef}
        style={{ opacity: scrollYProgressIntroduction }}
        className="mb-32"
      >
        <Introduction />
      </motion.div>

      <motion.div
        ref={skillLogosRef}
        style={{ opacity: scrollYProgressSkillLogos }}
      >
        <SkillLogos />
      </motion.div>
      <div className="h-screen"></div>
    </>
  );
}

export function Introduction() {
  return (
    <>
      <p className={` text-white text-5xl text-center font-bold `}>
        I'm Tuğberk,
        <br /> An aspiring Full Stack developer
        <br /> who brings
        <span className="text-transparent bg-clip-text font-extrabold bg-gradient-to-r from-green-700 to-blue-800 p-2">
          interactive
        </span>
        <br /> experiences that engages users and <br />
        makes a difference.
      </p>
    </>
  );
}

export function SkillLogos() {
  return (
    <>
      <div className="mr-4 ml-4 flex flex-col gap-20">
        <div className="flex gap-20 w-full justify-center items-center  flex-wrap">
          <Image
            height={200}
            width={200}
            alt="Express Icon"
            src={expressIcon}
          ></Image>
          <Image
            style={{ width: 50, height: 50 }}
            alt="Framer Motion Icon"
            src={framerMotionIcon}
          ></Image>
          <Image
            height={160}
            width={160}
            alt="Next Js Icon"
            src={nextJsIcon}
          ></Image>
          <Image
            height={120}
            width={120}
            alt="nodejs Icon"
            src={nodeJsIcon}
          ></Image>
        </div>
        <div className="flex gap-20 w-full justify-center items-center flex-wrap ">
          <Image
            height={300}
            width={300}
            alt="Tailwind Icon"
            src={tailwindCssIcon}
          ></Image>
          <Image
            height={90}
            width={90}
            alt="Type Script Icon"
            src={typeScriptIcon}
          ></Image>
          <Image
            height={90}
            width={90}
            alt="React Icon"
            src={reactIcon}
          ></Image>
          <Image
            height={180}
            width={180}
            alt="Mongo Db Icon"
            src={mongoDbIcon}
          ></Image>
          <Image
            height={90}
            width={90}
            alt="Swift Icon"
            src={swiftIcon}
          ></Image>
        </div>
      </div>
    </>
  );
}
