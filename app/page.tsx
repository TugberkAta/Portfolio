"use client";

import Introduction from "@/common/components/Introduction";
import LightShow from "@/common/components/LightShow";
import Navigation from "@/common/components/Navigation";
import SkillIcons from "@/common/components/SkillIcons";
import Lenis from "@studio-freight/lenis/types";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <>
      <div className="bg-gray-950 flex-col h-fit w-screen">
        <Navigation />
        <div className="mt-20 mb-40">
          <LightShow />
        </div>
        <Introduction></Introduction>
        <SkillIcons></SkillIcons>
        <div className="h-screen"></div>
      </div>
    </>
  );
}
