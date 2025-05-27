import Hero from "@/components/home-page/hero";
import Location from "@/components/home-page/location";
import Reservation from "@/components/home-page/reservation";
import Results from "@/components/home-page/results";
import Service from "@/components/home-page/service";
import Testimonial from "@/components/home-page/testimonial";
import WhyEverybody from "@/components/home-page/whyeverybody";

export default function Home() {
  return (
    <div className="flex flex-col gap-[100px] lg:gap-[150px]">
      <div id="home" className="bg-[#F1F9F4]">
        <Hero />
      </div>

      <div id="service">
        <Service />
      </div>

      <div id="about-us">
        <WhyEverybody />
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
        <Reservation className="lg:mb-[150px]" />
      </div>
    </div>
  );
}
