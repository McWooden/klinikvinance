import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react"; // Icon yang mirip WhatsApp
import Image from "next/image";
import ServiceCard from "./service-card";

// Placeholder images - ganti dengan path gambar Anda
const doctorImage1 =
  "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZG9jdG9yfGVufDB8fDB8fHww&auto=format&fit=crop&w=100&q=60";
const doctorImage2 =
  "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZG9jdG9yfGVufDB8fDB8fHww&auto=format&fit=crop&w=100&q=60";
const clinicImage =
  "https://images.unsplash.com/photo-1584515933487-779824d29358?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNsaW5pYyUyMHdhaXRpbmclMjByb29tfGVufDB8fDB8fHww&auto=format&fit=crop&w=100&q=60";

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
    <div className="w-full flex flex-col lg:px-28 justify-center">
      {/* Header */}
      <div className="flex">
        {/* Header Icon */}
        <div className="relative">
          <Image
            src="/image/service/vector-1.png"
            alt="Layer 1"
            width={48}
            height={72}
          />
          <Image
            src="/image/service/vector-2.png"
            alt="Layer 2"
            width={24}
            height={36}
            className="absolute z-10"
          />
        </div>
        <div>
          <h3>Register to Our Services</h3>
          <p>
            Our services are trusted and certified from the best doctors in
            town. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
      </div>
      {/* Content */}
      <div className="flex flex-wrap justify-center lg:grid lg:gap-4 lg:grid-cols-3 py-5">
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
    <Card className="w-full max-w-sm bg-[#f0f7f1] rounded-3xl shadow-xl overflow-hidden p-6 md:p-8 font-sans">
      <CardContent className="p-0 flex flex-col items-center text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-black mb-8 leading-tight">
          Tell Us Your Skin Problems and We Will Find The Solution
        </h2>

        <div className="relative mb-10 w-full h-64 md:h-72 flex items-center justify-center">
          {/* Decorative dashed circles */}
          {/* Lingkaran besar di tengah bawah */}
          <div
            className="absolute w-48 h-48 md:w-56 md:h-56 border-2 border-dashed border-[#cde0d5] rounded-full"
            style={{ top: "15%", left: "50%", transform: "translate(-50%, 0)" }}
          />
          {/* Lingkaran kiri atas */}
          <div
            className="absolute w-36 h-36 md:w-40 md:h-40 border-2 border-dashed border-[#cde0d5] rounded-full"
            style={{
              top: "0%",
              left: "20%",
              transform: "translate(-50%, -20%)",
            }}
          />
          {/* Lingkaran kanan atas */}
          <div
            className="absolute w-36 h-36 md:w-40 md:h-40 border-2 border-dashed border-[#cde0d5] rounded-full"
            style={{
              top: "0%",
              right: "20%",
              transform: "translate(50%, -20%)",
            }}
          />

          {/* Images - pastikan path gambar benar dan ukurannya sesuai */}
          <div className="absolute top-[10%] left-[15%] transform -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-4 border-white shadow-md">
              <Image
                src={doctorImage1}
                alt="Doctor consulting patient"
                width={96}
                height={96}
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          <div className="absolute top-[10%] right-[15%] transform translate-x-1/2 -translate-y-1/2 z-10">
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-4 border-white shadow-md">
              <Image
                src={doctorImage2}
                alt="Doctor writing on clipboard"
                width={96}
                height={96}
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          <div className="absolute bottom-[5%] left-1/2 transform -translate-x-1/2 translate-y-1/2 z-10">
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-4 border-white shadow-md">
              <Image
                src={clinicImage}
                alt="Clinic waiting room"
                width={96}
                height={96}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>

        <Button className="w-full max-w-xs bg-[#547d5e] hover:bg-[#4a6b53] text-white font-semibold py-3 px-6 rounded-full text-lg flex items-center justify-center gap-2 shadow-md">
          <MessageCircle className="w-5 h-5" />
          Contact Us
        </Button>
      </CardContent>
    </Card>
  );
}
