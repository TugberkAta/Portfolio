"use client";

import Image from "next/image";
import innerSoundscapesDesktop from "../../public/desktopInner.png";
import innerSoundscapesMobile from "../../public/mobileInner.png";
import foodleDesktop from "../../public/foodleDesktop.png";
import nevermoreDesktop from "../../public/nevermoreDesktop.png";
import nevermoreMobile from "../../public/nevermoreMobile.png";
import foodleMobile from "../../public/foodleMobile.png";
import mongoDbIcon from "../../public/icons/mongodb.svg";
import expressIcon from "../../public/icons/express.svg";
import reactIcon from "../../public/icons/react.svg";
import tailwindCssIcon from "../../public/icons/tailwindcss.svg";
import nodeJsIcon from "../../public/icons/nodejs.svg";
import nextJsIcon from "../../public/icons/nextjs.svg";
import postgresqlIcon from "../../public/icons/postgresql.svg";
import typeScriptIcon from "../../public/icons/typescript.svg";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { motion, useScroll } from "framer-motion";
import { useRef } from "react";

const projectArray = [
  {
    name: "Nevermore Skateboards | An E-commerce Site",
    src: nevermoreDesktop,
    alt: "Sports E-commerce Desktop Preview",
    mobileSrc: nevermoreMobile,
    mobileAlt: " Sports E-commerce Mobile Preview",
    projectIcons: [
      { width: 40, alt: "TypeScript Icon", src: typeScriptIcon },
      { width: 80, alt: "NextJs Icon", src: nextJsIcon },
      { width: 40, alt: "React Icon", src: reactIcon },
      { width: 120, alt: "Tailwind Icon", src: tailwindCssIcon },
      { width: 60, alt: "Postgresql Icon", src: postgresqlIcon },
    ],
    projectLinks: {
      githubLink: "https://github.com/TugberkAta/Nevermore-Skateboards",
      pageLink: "https://nevermore-skateboards.vercel.app",
    },
  },
  {
    name: "Innersoundscapes | A Music Magazine Website ",
    src: innerSoundscapesDesktop,
    alt: "InnerSoundscapes Desktop Preview",
    mobileSrc: innerSoundscapesMobile,
    mobileAlt: " InnerSoundscapes Mobile Preview",
    projectIcons: [
      { width: 40, alt: "React Icon", src: reactIcon },
      { width: 120, alt: "Tailwind Icon", src: tailwindCssIcon },
      { width: 80, alt: "nodejs Icon", src: nodeJsIcon },
      { width: 100, alt: "Express Icon", src: expressIcon },
      { width: 90, alt: "Mongo Db Icon", src: mongoDbIcon },
    ],
    projectLinks: {
      githubLink: "https://github.com/TugberkAta/Innersoundscapes",
      pageLink: "https://www.innersoundscapes.com/homepage",
    },
  },
  {
    name: "Foodle | Puzzle Site",
    src: foodleDesktop,
    alt: "Foodle Desktop Preview",
    mobileSrc: foodleMobile,
    mobileAlt: " Foodle Mobile Preview",
    projectIcons: [
      { width: 40, alt: "TypeScript Icon", src: typeScriptIcon },
      { width: 40, alt: "React Icon", src: reactIcon },
      { width: 120, alt: "Tailwind Icon", src: tailwindCssIcon },
      { width: 80, alt: "nodejs Icon", src: nodeJsIcon },
      { width: 100, alt: "Express Icon", src: expressIcon },
      { width: 90, alt: "Mongo Db Icon", src: mongoDbIcon },
    ],
    projectLinks: {
      githubLink: "https://github.com/TugberkAta/Foodle",
      pageLink: "https://www.foodle.fun",
    },
  },
];

export default function Projects() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start center"],
  });

  return (
    <>
      <div id="Projects">
        <motion.p
          ref={ref}
          style={{ opacity: scrollYProgress }}
          className="text-white text-5xl text-center mt-20 mb-20 font-bold "
        >
          With these tools I build projects such as
        </motion.p>
        <div className="flex flex-col gap-20">
          {projectArray.map((project, i) => (
            <div key={i} className="flex flex-col ">
              <div className="flex-col items-center flex">
                <div className="relative  md:mb-0">
                  <div className="flex justify-center items-center gap-4 mb-6 ">
                    <h2 className="text-white text-2xl md:text-4xl font-bold">
                      {project.name}
                    </h2>
                    <div className="flex items-center gap-4">
                      <a
                        href={project.projectLinks.githubLink}
                        aria-label="External link to the project repo on github"
                        target="_blank"
                      >
                        <FaGithub className="fill-white size-7" />
                      </a>
                      <a
                        href={project.projectLinks.pageLink}
                        aria-label="External link to the project website"
                        target="_blank"
                      >
                        <FaExternalLinkAlt className="fill-white size-6" />
                      </a>
                    </div>
                  </div>
                  <Image
                    key={project.alt}
                    width={960}
                    src={project.src}
                    alt={project.alt}
                    className="rounded-md"
                  />
                  <div className="flex h-20 items-center justify-center md:justify-normal gap-4 mt-6 mb-8 ml-4 mr-4 md:mb-20 flex-wrap">
                    {project.projectIcons.map((icon) => (
                      <Image
                        key={icon.alt}
                        width={icon.width}
                        alt={icon.alt}
                        src={icon.src}
                      />
                    ))}
                  </div>
                  {project.mobileAlt && (
                    <Image
                      key={project.mobileAlt}
                      width={179}
                      src={project.mobileSrc}
                      alt={project.mobileAlt}
                      className="hidden md:block absolute right-10 z-10 bottom-5 rounded-md"
                    />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
