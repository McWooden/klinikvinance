import Driven from "@/components/about-us-page/driven";
import Reservation from "@/components/home-page/reservation";
import RepeatText from "@/components/about-us-page/repeat-text";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
import TeamExpertsAndLeaders from "@/components/about-us-page/teamExpertsAndLeaders";
import BadgeObat from "@/components/icons/BadgeObat";

interface parterData {
  name: string;
  src: string;
}
const partners: parterData[] = [
  {
    name: "karmen",
    src: "/image/about-us/karmen.png",
  },
  {
    name: "ciputra",
    src: "/image/about-us/ciputra.png",
  },
  {
    name: "stjude",
    src: "/image/about-us/stjude.png",
  },
  {
    name: "mayapada",
    src: "/image/about-us/mayapada.png",
  },
  {
    name: "siloan",
    src: "/image/about-us/siloan.png",
  },
];

export default function AboutUs() {
  return (
    <div className="flex flex-col gap-[100px] lg:gap-[150px]">
      <div></div>
      <div className="text-center px-5 lg:px-0 text-slate-800 w-full">
        <div className="relative flex justify-center gap-[14px] items-center mb-5">
          <h1
            className="text-[36px] lg:text-[64px] font-semibold text-slate-800 dark:text-slate-100 
            lg:text-6xl lg:leading-tight"
          >
            <span className="block md:inline">Behind</span> Venice Clinic
          </h1>
          <div className="absolute -top-10 -right-3 md:relative md:right-[unset] md:top-[unset] w-[80px] rounded-full flex justify-center items-center aspect-square bg-[#27AE60]/10 overflow-hidden">
            <Image
              src="/image/about-us/Vector.png"
              width={40}
              height={50}
              className="object-contain w-[40px] h-[50px]"
              alt="Vector"
            />
          </div>
        </div>
        <p className="max-w-[920px] mx-auto">
          Venice Clinic adalah Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Quasi, laudantium quo sequi inventore impedit minima
          optio repellat asperiores.
        </p>
      </div>

      <div className="flex flex-col">
        <div className="h-[55px] flex items-center">
          <RepeatText
            title="Venice Clinic"
            pauseOnHover={true}
            speed={50}
            icon={
              <BadgeObat width={24} className="size-[unset]" fill="#1D1D1D" />
            }
          />
        </div>
        <TeamExpertsAndLeaders />
      </div>

      <div>
        <Driven />
      </div>

      <div>
        <h1
          className="text-[24px] font-bold text-slate-800 dark:text-slate-100 
            lg:text-[36px] lg:leading-tight text-center mb-10"
        >
          Our Partner or Friends
        </h1>
        <Carousel
          className="max-w-[1180px] mx-auto"
          opts={{
            align: "start",
          }}
        >
          <CarouselContent className="gap-6">
            {partners.map((partner, i) => (
              <CarouselItem
                key={i}
                className="first:pl-5 last:pr-5 basis-1/2 md:basis-1/3 lg:basis-1/5 flex items-center justify-center "
              >
                <div className="p-1 flex items-center justify-center">
                  <Image
                    src={partner.src}
                    alt={partner.name}
                    width={300} // Increased width for better desktop appearance
                    height={249} // Increased height for better desktop appearance
                    className="object-contain"
                    style={{
                      width: "100%", // Make the image take the full width of the container
                      height: "auto", // Maintain aspect ratio
                      maxHeight: "130px", // Ensure it doesn't exceed the container
                    }}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

      <div className="about-us">
        <Reservation />
      </div>
    </div>
  );
}
