import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import BadgeWhatsapp from "../icons/BadgeWhatsapp";
import Image from "next/image";
import ServiceCard from "../service-card";
import ContactUsIllustration from "../ContactUsIllustration";

interface serviceData {
  title: string;
  description: string;
  link: string;
  imagePath: string;
}

export default function Service() {
  const services: serviceData[] = [
    {
      title: "Facial",
      imagePath: "/image/service/facial.png",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus quae, sed facilis debitis assumenda itaque!",
      link: "#service",
    },
    {
      title: "Mikrodermabrasi",
      imagePath: "/image/service/mikrodermabrasi.png",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus quae, sed facilis debitis assumenda itaque!",
      link: "#service",
    },
    {
      title: "Radiofrekuensi",
      imagePath: "/image/service/radiofrekuensi.png",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus quae, sed facilis debitis assumenda itaque!",
      link: "#service",
    },
    {
      title: "LED Light Therapy",
      imagePath: "/image/service/led.png",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus quae, sed facilis debitis assumenda itaque!",
      link: "#service",
    },
    {
      title: "Intense Pulsed Light (IPL)",
      imagePath: "/image/service/ipl.png",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus quae, sed facilis debitis assumenda itaque!",
      link: "#service",
    },
  ];

  return (
    <div className="w-full flex flex-col justify-center mx-auto max-w-[1180px] px-5">
      {/* Header */}
      <div className="flex gap-[20px]">
        {/* Header Icon */}
        <div className="items-end justify-center w-[88px] lg:flex-none relative hidden lg:flex">
          <Image
            src="/image/service/vector-1.png"
            alt="Layer 1"
            width={88}
            height={112}
          />
          <Image
            src="/image/service/vector-2.png"
            alt="Layer 2"
            width={63}
            height={80}
            className="absolute z-10"
          />
        </div>
        <div className="flex flex-col lg:px-0 gap-[20px]">
          <h3 className="font-semibold text-[22px] lg:text-[36px]">
            Register to Our Services
          </h3>
          <p className="text-[12px] text-[#447759] dark:text-gray-400 lg:text-[16px]">
            Our services are trusted and certified from the best doctors in
            town. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Praesent velit arcu, venenatis eget vulputate vel.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-wrap justify-center lg:grid gap-[26px] lg:grid-cols-3 py-5">
        {services.map((data, i) => (
          <ServiceCard
            key={i}
            description={data.description}
            title={data.title}
            imageAlt={data.title}
            imageUrl={data.imagePath}
            reserveLink={data.link}
          />
        ))}
        <SkinSolutionCard />
      </div>
    </div>
  );
}

function SkinSolutionCard() {
  return (
    <Card className="w-full max-w-sm bg-[#f0f7f1] rounded-3xl overflow-hidden p-6 border-none">
      <CardContent className="p-0 flex flex-col items-center text-center">
        <h2 className="text-[28px] font-bold text-black leading-tight text-left">
          Tell Us Your Skin Problems and We Will Find The Solution
        </h2>

        <div className="relative w-full h-64 md:h-72 flex items-center justify-center">
          <ContactUsIllustration />
        </div>

        <Button className="w-full max-w-2xs bg-[#547d5e] hover:bg-[#4a6b53] text-white font-semibold py-7 px-6 rounded-full text-lg flex items-center justify-center gap-2 shadow-md cursor-pointer">
          <BadgeWhatsapp width={24} height={24} className="size-[unset]" />
          Contact Us
        </Button>
      </CardContent>
    </Card>
  );
}
