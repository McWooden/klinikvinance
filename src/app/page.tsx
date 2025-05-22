import Hero from "@/components/hero";
import Location from "@/components/location";
import Results from "@/components/results";
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

      {/* <div id="about-us">
        <WhyChooseUs />
      </div> */}

      {/* <div id="results">
        <Results />
      </div> */}

      {/* <div id="location">
        <Location />
      </div> */}

      <div></div>
    </div>
  );
}
