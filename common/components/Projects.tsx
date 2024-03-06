"use client";

import Image from "next/image";
import innerSoundscapesDesktop from "../../public/desktopInner.png";
import innerSoundscapesMobile from "../../public/mobileInner.png";
import foodleDesktop from "../../public/foodleDesktop.png";
import foodleMobile from "../../public/foodleMobile.png";
import mongoDbIcon from "../../public/icons/mongodb.svg";
import expressIcon from "../../public/icons/express.svg";
import reactIcon from "../../public/icons/react.svg";
import tailwindCssIcon from "../../public/icons/tailwindcss.svg";
import nodeJsIcon from "../../public/icons/nodejs.svg";
import typeScriptIcon from "../../public/icons/typescript.svg";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { motion, useScroll } from "framer-motion";
import { useRef } from "react";

const projectArray = [
  {
    name: "InnerSoundscapes",
    src: innerSoundscapesDesktop,
    alt: "InnerSoundscapes Desktop Preview",
    mobileSrc: innerSoundscapesMobile,
    mobileAlt: " InnerSoundscapes Mobile Preview",
    projectIcons: [
      { height: 40, width: 40, alt: "React Icon", src: reactIcon },
      { height: 120, width: 120, alt: "Tailwind Icon", src: tailwindCssIcon },
      { height: 60, width: 80, alt: "nodejs Icon", src: nodeJsIcon },
      { height: 100, width: 100, alt: "Express Icon", src: expressIcon },
      { height: 90, width: 90, alt: "Mongo Db Icon", src: mongoDbIcon },
    ],
    projectLinks: {
      githubLink: "https://github.com/TugberkAta/Innersoundscapes",
      pageLink: "https://www.innersoundscapes.com/homepage",
    },
  },
  {
    name: "Foodle",
    src: foodleDesktop,
    alt: "Foodle Desktop Preview",
    mobileSrc: foodleMobile,
    mobileAlt: " Foodle Mobile Preview",
    projectIcons: [
      { height: 40, width: 40, alt: "TypeScript Icon", src: typeScriptIcon },
      { height: 40, width: 40, alt: "React Icon", src: reactIcon },
      { height: 120, width: 120, alt: "Tailwind Icon", src: tailwindCssIcon },
      { height: 60, width: 80, alt: "nodejs Icon", src: nodeJsIcon },
      { height: 100, width: 100, alt: "Express Icon", src: expressIcon },
      { height: 90, width: 90, alt: "Mongo Db Icon", src: mongoDbIcon },
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
          className="text-white text-5xl text-center mt-20 mb-20 font-bold"
        >
          With these tools I build projects such as
        </motion.p>

        {projectArray.map((project, i) => (
          <div key={i} className="flex flex-col ">
            <div className="flex-col items-center flex">
              <div className="relative mb-20 md:mb-0">
                <div className="flex justify-center items-center gap-4 mb-6 ">
                  <h2 className="text-white text-2xl md:text-4xl font-bold">
                    {project.name}
                  </h2>
                  <div className="flex items-center gap-4">
                    <a href={project.projectLinks.githubLink} target="_blank">
                      <FaGithub className="fill-white size-7" />
                    </a>
                    <a href={project.projectLinks.pageLink} target="_blank">
                      <FaExternalLinkAlt className="fill-white size-6" />
                    </a>
                  </div>
                </div>
                <Image
                  key={project.alt}
                  height={540}
                  width={960}
                  src={project.src}
                  alt={project.alt}
                  className="rounded-md"
                />
                <div className="flex h-20 items-center gap-4 mt-6 mb-8 md:mb-20 flex-wrap">
                  {project.projectIcons.map((icon) => (
                    <Image
                      key={icon.alt}
                      height={icon.height}
                      width={icon.width}
                      alt={icon.alt}
                      src={icon.src}
                    />
                  ))}
                </div>
                {project.mobileAlt && (
                  <Image
                    key={project.mobileAlt}
                    height={900}
                    width={179}
                    src={project.mobileSrc}
                    alt={project.mobileAlt}
                    className="hidden md:block absolute right-10 z-10 bottom-28 rounded-md"
                  />
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
