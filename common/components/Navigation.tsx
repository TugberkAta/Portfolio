"use client";

import clsx from "clsx";
import { motion } from "framer-motion";
import { useState } from "react";

// Array of every tab to be shown in the nav bar
let tabs = [
  { id: "Homepage" },
  { id: "Projects" },
  { id: "Resume" },
  { id: "Content" },
];

export default function Navigation() {
  // State for updating the active tab
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <div
      className="flex justify-center items-center text-lg w-full h-16 text-white"
      onMouseLeave={() => setActiveTab(tabs[0].id)}
    >
      <div className="w-96">
        <div className="flex justify-center gap-4">
          {/* Map the tab array into link components */}
          {tabs.map((tab) => (
            <a
              key={tab.id}
              href=""
              className={"relative"}
              onMouseEnter={() => setActiveTab(tab.id)}
            >
              {tab.id}
              {activeTab === tab.id && (
                /*This component uses layoutId to animate between positions*/
                <motion.div
                  layoutId="underline"
                  className="absolute bg-white w-full h-[0.10rem]"
                  transition={{ duration: 0.7, type: "spring" }}
                ></motion.div>
              )}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
