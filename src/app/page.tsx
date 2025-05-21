import Hero from "@/components/hero";
import Service from "@/components/service";

export default function Home() {
  return (
    <div>
      <div id="home" className="bg-[#F1F9F4]">
        <Hero />
      </div>
      <div id="service">
        <Service />
      </div>
      {/* Other Part */}
    </div>
  );
}
