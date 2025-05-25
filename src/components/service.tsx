import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react"; // Icon yang mirip WhatsApp
import Image from "next/image";
import ServiceCard from "./service-card";
import ContactUsIllustration from "./ContactUsIllustration";

// Placeholder images - ganti dengan path gambar Anda
// const doctorImage1 = "/image/service/vector-1.png";
// const doctorImage2 = "/image/service/vector-1.png";
// const clinicImage = "/image/service/vector-1.png";

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
    <div className="w-full flex flex-col lg:px-28 justify-center p-4">
      {/* Header */}
      <div className="flex gap-[20px] mb-8">
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
        <div className="flex flex-col gap-[20px]">
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
          <MessageCircle className="w-5 h-5" />
          Contact Us
        </Button>
      </CardContent>
    </Card>
  );
}

{
  /* Decorative dashed circles */
}
{
  /* Lingkaran besar di tengah bawah */
}
// <div
//   className="absolute w-48 h-48 md:w-56 md:h-56 border-2 border-dashed border-[#cde0d5] rounded-full"
//   style={{ top: "15%", left: "50%", transform: "translate(-50%, 0)" }}
// />
{
  /* Lingkaran kiri atas */
}
// <div
//   className="absolute w-36 h-36 md:w-40 md:h-40 border-2 border-dashed border-[#cde0d5] rounded-full"
//   style={{
//     top: "0%",
//     left: "20%",
//     transform: "translate(-50%, -20%)",
//   }}
// />
{
  /* Lingkaran kanan atas */
}
// <div
//   className="absolute w-36 h-36 md:w-40 md:h-40 border-2 border-dashed border-[#cde0d5] rounded-full"
//   style={{
//     top: "0%",
//     right: "20%",
//     transform: "translate(50%, -20%)",
//   }}
// />

{
  /* Images - pastikan path gambar benar dan ukurannya sesuai */
}
// <div className="absolute top-[10%] left-[15%] transform -translate-x-1/2 -translate-y-1/2 z-10">
//   <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-4 border-white shadow-md">
//     <Image
//       src={doctorImage1}
//       alt="Doctor consulting patient"
//       width={96}
//       height={96}
//       className="object-cover w-full h-full"
//     />
//   </div>
// </div>

// <div className="absolute top-[10%] right-[15%] transform translate-x-1/2 -translate-y-1/2 z-10">
//   <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-4 border-white shadow-md">
//     <Image
//       src={doctorImage2}
//       alt="Doctor writing on clipboard"
//       width={96}
//       height={96}
//       className="object-cover w-full h-full"
//     />
//   </div>
// </div>

// <div className="absolute bottom-[5%] left-1/2 transform -translate-x-1/2 translate-y-1/2 z-10">
//   <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-4 border-white shadow-md">
//     <Image
//       src={clinicImage}
//       alt="Clinic waiting room"
//       width={96}
//       height={96}
//       className="object-cover w-full h-full"
//     />
//   </div>
// </div>
