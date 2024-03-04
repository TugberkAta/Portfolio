import AboutMe from "@/common/components/AboutMe";
import LightShow from "@/common/components/LightShow";
import Navigation from "@/common/components/Navigation";

export default function Home() {
  return (
    <>
      <div className="bg-black h-fit w-screen">
        <Navigation />
        <LightShow />
        <AboutMe />
      </div>
    </>
  );
}
