"use client";

import { MotionValue, motion, useScroll, useTransform } from "framer-motion";
import { FaLinkedin } from "react-icons/fa";
import LightShow from "./LightShow";
import { FaGithub } from "react-icons/fa";
import { useRef } from "react";

export default function Conclusion() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start center"],
  });

  const firstText = "Interested in Working Together?".split(" ");
  return (
    <div className="mt-60" id="Contact">
      <motion.div
        ref={ref}
        className=" mb-80 flex flex-col items-center gap-4 "
        style={{ opacity: scrollYProgress }}
      >
        <p className="flex gap-2 flex-wrap justify-center text-white text-5xl text-center font-bold">
          {firstText.map((character, i) => {
            return (
              <AnimatedCharacter
                key={i}
                character={character}
                index={i}
                total={firstText.length}
                scrollYProgress={scrollYProgress}
              />
            );
          })}
        </p>
        <p className=" text-gray-400 text-2xl text-center">
          atatugberkwork@gmail.com
        </p>
        <div className="flex gap-4">
          <a href="https://github.com/TugberkAta" target="_blank">
            <FaGithub className="size-16 fill-white"></FaGithub>
          </a>
          <a
            href="https://www.linkedin.com/in/tuğberk-ata-617721162/"
            target="_blank"
          >
            <FaLinkedin className="size-16 fill-white" />
          </a>
        </div>
      </motion.div>
      <ScrollToTop></ScrollToTop>
      <div className="flex items-center w-full gap-4 justify-center">
        <p className=" text-gray-400 text-l text-center font-bold">
          ©2024 Tuğberk Ata
        </p>
      </div>
    </div>
  );
}

export function ScrollToTop() {
  return (
    <button
      className="mb-20 flex flex-col"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <motion.div
        animate={{
          translateY: [0, 20, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 3,
          ease: "easeInOut",
          repeatType: "loop",
        }}
      >
        <LightShow count={4} reverse={true}></LightShow>
        <p className="text-white text-center mt-2 font-medium">
          Go back to top
        </p>
      </motion.div>
    </button>
  );
}

type AnimatedCharacterProps = {
  character: string;
  index: number;
  total: number;
  scrollYProgress: MotionValue<number>;
};

function AnimatedCharacter({
  character,
  index,
  total,
  scrollYProgress,
}: AnimatedCharacterProps) {
  const start = index / total;
  const end = start + 1 / total;
  const opacity = useTransform(scrollYProgress, [start, end], [0, 1]);

  return <motion.span style={{ opacity }}>{character}</motion.span>;
}
