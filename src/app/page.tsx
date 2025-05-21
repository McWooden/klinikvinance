import Hero from "@/components/hero";
import Service from "@/components/service";
import WhyChooseUs from "@/components/whyeverybody";

export default function Home() {
  return (
    <div>
      {/* disable for better performance */}
      {/* <div id="home" className="bg-[#F1F9F4]">
        <Hero />
      </div> */}

      <div id="service">
        <Service />
      </div>
      <WhyChooseUs />
    </div>
  );
}
