"use client";

import Conclusion from "@/common/components/Conculusion";
import Introduction from "@/common/components/Introduction";
import LightShow from "@/common/components/LightShow";
import Navigation from "@/common/components/Navigation";
import Projects from "@/common/components/Projects";
import SkillIcons from "@/common/components/SkillIcons";
import { ReactLenis, useLenis } from "@studio-freight/react-lenis";
import { nunito } from "@/common/styles/fonts";
import BackToTopArrow from "@/common/components/BackToTopArrow";
BackToTopArrow;

export default function Home() {
  const lenis = useLenis(({ scroll }) => {});

  return (
    <div>
      <ReactLenis root>
        <div className="bg-gray-950 flex-col h-fit w-screen">
          <Navigation />
          <div className="mt-20 mb-20 flex flex-col items-center">
            <p
              className={`text-white text-center text-3xl mb-4 font-bold ${nunito.className}`}
            >
              Crafting Excellence, Code by Code.
            </p>
            <LightShow count={20} />
          </div>
          <Introduction></Introduction>
          <SkillIcons></SkillIcons>
          <div className="mt-40 mb-20">
            <Projects></Projects>
          </div>
          <Conclusion></Conclusion>
        </div>
      </ReactLenis>
      <BackToTopArrow></BackToTopArrow>
    </div>
  );
}
