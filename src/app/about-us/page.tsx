import Driven from "@/components/about-us-page/driven";
import Reservation from "@/components/home-page/reservation";

export default function AboutUs() {
  return (
    <>
    <div>
      <Driven />
    </div>

    <div className="about-us lg:my-[150px]">
      <Reservation />
    </div>
    </>

  );
}
