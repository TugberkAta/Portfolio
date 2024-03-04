import LightShow from "@/common/components/LightShow";
import Navigation from "@/common/components/Navigation";

export default function Home() {
  return (
    <>
      <div className="bg-black h-screen w-screen">
        <Navigation />
        <LightShow />
      </div>
    </>
  );
}
