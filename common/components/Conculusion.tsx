import { easeInOut, motion } from "framer-motion";
import { FaLinkedin } from "react-icons/fa";
import LightShow from "./LightShow";

export default function Conclusion() {
  return (
    <div className="mt-40 mb-6" id="Contact">
      <div>
        <p className=" text-white text-5xl text-center mb-6 font-bold">
          Interested in Working Together?
        </p>
        <p className="text-gray-400 text-2xl mb-96 text-center">
          atatugberkwork@gmail.com
        </p>
      </div>
      <ScrollToTop></ScrollToTop>
      <div className="flex items-center w-full gap-4 justify-center">
        <p className=" text-gray-400 text-l text-center font-bold">
          ©2024 Tuğberk Ata
        </p>
        <a
          href="https://www.linkedin.com/in/tuğberk-ata-617721162/"
          target="_blank"
        >
          <FaLinkedin className="fill-gray-400 size-6" />
        </a>
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
