import Hero from "@/components/hero";
import Location from "@/components/location";
import Reservation from "@/components/reservation";
import Results from "@/components/results";
import Service from "@/components/service";
import Testimonial from "@/components/testimonial";
import WhyChooseUs from "@/components/whyeverybody";

export default function Home() {
  return (
    <div className="flex flex-col gap-[150px]">
      {/* disable for better performance */}
      <div id="home" className="bg-[#F1F9F4]">
        <Hero />
      </div>

      <div id="service">
        <Service />
      </div>

      <div id="about-us">
        <WhyChooseUs />
      </div>

      <div id="results">
        <Results />
      </div>

      <div id="location">
        <Location />
      </div>

      <div id="testimonial">
        <Testimonial />
      </div>

      <div id="reservation">
        <Reservation />
      </div>
    </div>
  );
}
