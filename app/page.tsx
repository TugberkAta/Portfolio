import AboutMe from "@/common/components/AboutMe";
import LightShow from "@/common/components/LightShow";
import Navigation from "@/common/components/Navigation";

export default function Home() {
  return (
    <>
      <div className="bg-gray-950 flex-col h-fit w-screen">
        <Navigation />
        <div className="mt-20 mb-40">
          <LightShow />
        </div>
        <AboutMe />
      </div>
    </>
  );
}
