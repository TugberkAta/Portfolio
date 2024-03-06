"use client";

import Image from "next/image";
import innerSoundscapesDesktop from "../../public/desktopInner.png";
import innerSoundscapesMobile from "../../public/mobileInner.png";
import mongoDbIcon from "../../public/icons/mongodb.svg";
import expressIcon from "../../public/icons/express.svg";
import reactIcon from "../../public/icons/react.svg";
import tailwindCssIcon from "../../public/icons/tailwindcss.svg";
import nodeJsIcon from "../../public/icons/nodejs.svg";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { motion, useScroll } from "framer-motion";
import { useRef } from "react";

const projectArray = [
  {
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
];

export default function Projects() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start center"],
  });

  return (
    <>
      <motion.p
        ref={ref}
        style={{ opacity: scrollYProgress }}
        id="Projects"
        className="text-white text-5xl text-center mt-20 mb-20 font-bold"
      >
        With these tools I build projects such as
      </motion.p>
      {projectArray.map((project, i) => (
        <div key={i} className="flex flex-col pl-28">
          <div className="relative flex-col items-end flex pr-28">
            <div>
              <div className="flex items-center gap-4  mb-6 ">
                <h2 className="text-white text-4xl font-bold">
                  InnerSoundscapes
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
                style={{ maxHeight: 540, maxWidth: 960 }}
                height={540}
                width={960}
                src={project.src}
                alt={project.alt}
                className="rounded-md"
              />
              <div className="flex h-20 items-center gap-4 pr-28 flex-wrap">
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
            </div>
          </div>
          {project.mobileAlt && (
            <Image
              key={project.mobileAlt}
              height={900}
              width={179}
              src={project.mobileSrc}
              alt={project.mobileAlt}
              className="rounded-md flex-grow-0 self-end z-20 -mt-60 mr-20"
            />
          )}
        </div>
      ))}
    </>
  );
}
