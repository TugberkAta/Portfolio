import Introduction from "@/common/components/Introduction";
import LightShow from "@/common/components/LightShow";
import Navigation from "@/common/components/Navigation";
import SkillIcons from "@/common/components/SkillIcons";

export default function Home() {
  return (
    <>
      <div className="bg-gray-950 flex-col h-fit w-screen">
        <Navigation />
        <div className="mt-20 mb-40">
          <LightShow />
        </div>
        <Introduction></Introduction>
        <SkillIcons></SkillIcons>
      </div>
    </>
  );
}
