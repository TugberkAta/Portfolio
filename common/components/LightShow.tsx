"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import useDeviceDetection from "../lib/useDeviceDetection";

type LightShowProps = {
  count: number;
  reverse?: boolean;
};

export default function LightShow({ count, reverse }: LightShowProps) {
  return (
    <>
      <motion.div
        className="flex flex-col w-screen h-[427.81px] gap-5 items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <LightFragment count={count} reverse={reverse} />
      </motion.div>
    </>
  );
}

type FragmentArr = {
  id: number;
  width: number;
  transitionDelay: number;
};

type LightFragmentProps = {
  count: number;
  reverse?: boolean;
};

export function LightFragment({ count, reverse }: LightFragmentProps) {
  // Create state for the fragment array
  const [fragmentArr, setFragmentArr] = useState<FragmentArr[]>([]);

  const device = useDeviceDetection(); // Checks the device the user is using

  // On render trigger the createLightFragment function
  useEffect(() => {
    createLightFragment(count);
  }, [device]);

  function createLightFragment(amount: number) {
    const tempArr = []; // Create temp array to store the fragment objects

    // For loop to create the fragment objects and put them into fragmentArr state
    for (let index = amount; index > 0; index--) {
      // Width gets higher on every iteration, if the user is using a mobile device the with starts from lower value
      let width = device === "Desktop" ? (index + 1) * 20 : (index + 1) * 15;
      const transitionDelay = -index * 0.2; // Delay to keep them out of synch

      const fragment = {
        id: index, // for key value
        width: width,
        transitionDelay: transitionDelay,
      };
      tempArr.push(fragment);
    }
    reverse ? setFragmentArr(tempArr.reverse()) : setFragmentArr(tempArr);
  }

  return (
    <>
      {fragmentArr.map((fragment) => (
        <motion.div
          key={fragment.id}
          className={`h-[0.15rem] bg-white`}
          style={{ width: fragment.width }}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }} // Blink animation
          transition={{
            repeat: Infinity,
            duration: 4, // Animation duration
            delay: fragment.transitionDelay, // Animation delay
          }}
        />
      ))}
    </>
  );
}
