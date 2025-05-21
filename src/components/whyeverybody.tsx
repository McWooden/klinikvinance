// components/sections/WhyChooseUs.tsx
import Image from "next/image";
import { cn } from "@/lib/utils";

interface ImageTextCardProps {
  imagePath: string;
  title: string;
  description: string;
  description2?: string;
  reverse?: boolean;
}

function ImageTextCard({
  imagePath,
  title,
  description,
  description2,
  reverse = false,
}: ImageTextCardProps) {
  return (
    <div className="flex flex-col md:flex-row items-center gap-8 mb-20">
      {/* Image */}
      <div
        className={cn(
          "w-full md:w-1/2",
          reverse ? "order-2 md:order-2" : "order-1 md:order-1"
        )}
      >
        <Image
          src={imagePath}
          alt={title}
          width={600}
          height={400}
          className="rounded-xl w-full h-auto object-cover"
        />
      </div>

      {/* Text */}
      <div
        className={cn(
          "w-full md:w-1/2",
          reverse ? "order-1 md:order-1" : "order-2 md:order-2"
        )}
      >
        <h3 className="text-2xl font-bold mb-4">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        {description2 && <p className="text-gray-600">{description2}</p>}
      </div>
    </div>
  );
}

export default function WhyChooseUs() {
  return (
    <section id="about-us" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold  mb-4">
          Why Everybody Loves Venice Clinic?
        </h2>
        <p className="text-gray-600  max-w-3xl mb-16">
          We strive to set the highest standards in medical aesthetics. From the
          moment you walk in, every detail of the experience is designed to be
          exceptional.
        </p>

        {/* Image kiri di desktop, image atas di mobile */}
        <ImageTextCard
          imagePath="/image/image.png"
          title="We Provide The Best Service"
          description="lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet"
          description2="lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet"
          reverse={false}
        />

        {/* Image kanan di desktop, image bawah di mobile */}
        <ImageTextCard
          imagePath="/image/image-two.png"
          title="Another Reason to Love Us"
          description="lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet"
          description2="lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet"
          reverse={true}
        />
      </div>
    </section>
  );
}
