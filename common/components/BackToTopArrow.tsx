import { motion, useScroll } from "framer-motion";
import { useEffect } from "react";
import { IoIosArrowUp } from "react-icons/io";

export default function BackToTopArrow() {
  const { scrollYProgress } = useScroll({
    offset: [0.15, 0.2],
  });

  // Apparently scrollTo or any related scroll action first needs the current scroll action to stop before scrolling,
  // So now the function checks if it triggered and we are at the top multiple times to make sure we scrolled to top
  function goToTop(attempts = 0) {
    if (window.scrollY !== 0 && attempts < 5) {
      // Checks if we are at the top and if there has been more than 5 attempts for edge case if it becomes infinite callback loop
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" }); // scroll to top function
        goToTop(attempts + 1);
      }, 200);
    }
  }

  return (
    <motion.button
      className="transition right-10 fixed bottom-10  border-2 rounded-full p-1 opacity-35 z-20"
      id="top-arrow"
      onClick={() => goToTop()}
      type="button"
      style={{ opacity: scrollYProgress }}
    >
      <IoIosArrowUp className="fill-gray-300 size-5 " />
    </motion.button>
  );
}
