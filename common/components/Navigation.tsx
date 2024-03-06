"use client";

import { motion } from "framer-motion";
import { useRef, useState } from "react";

// Array of every tab to be shown in the nav bar
const tabs = [
  { id: "Homepage" },
  { id: "Projects" },
  { id: "Resume" },
  { id: "Contact" },
];

interface tab {
  id: string;
}

export default function Navigation() {
  // State for updating the active tab
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  function onClickNavigate(tab: tab) {
    if (tab.id === "Resume") {
      window.open("/Resume", "_blank");
    } else {
      const projectsElement = document.getElementById(tab.id);
      if (projectsElement) {
        projectsElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  }

  return (
    <div
      className="flex justify-center items-center text-lg w-full h-24 text-white"
      onMouseLeave={() => setActiveTab(tabs[0].id)}
    >
      <div className="w-96">
        <div className="flex justify-center gap-4">
          {/* Map the tab array into link components */}
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={"relative"}
              onClick={() => {
                onClickNavigate(tab);
              }}
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
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
