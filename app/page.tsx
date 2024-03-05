"use client";

import Introduction from "@/common/components/Introduction";
import LightShow from "@/common/components/LightShow";
import Navigation from "@/common/components/Navigation";
import Projects from "@/common/components/Projects";
import SkillIcons from "@/common/components/SkillIcons";
import { ReactLenis, useLenis } from "@studio-freight/react-lenis";

export default function Home() {
  const lenis = useLenis(({ scroll }) => {});

  return (
    <ReactLenis root>
      <div className="bg-gray-950 flex-col h-fit w-screen">
        <Navigation />
        <div className="mt-20 mb-40">
          <LightShow />
        </div>
        <Introduction></Introduction>
        <SkillIcons></SkillIcons>
        <div className="mt-40 mb-20">
          <Projects></Projects>
        </div>
        <div className="h-screen"></div>
      </div>
    </ReactLenis>
  );
}
