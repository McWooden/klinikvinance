// components/sections/WhyChooseUs.tsx
import Image from "next/image";
import { cn } from "@/lib/utils";
import React from "react";

export default function WhyEverybody() {
  return (
    <section className="py-0 bg-gray-50">
      <div className="container flex flex-col gap-10 mx-auto lg:px-0 max-w-[1180px] px-5">
        <div>
          <h2 className="text-3xl font-bold mb-4">
            Why Everybody Loves Venice Clinic?
          </h2>
          <p className="text-gray-600">
            We make sure that every services come to life, Lorem ipsum dolor
            sit, amet consectetur adipisicing elit. Velit harum, aliquam saepe
            itaque pariatur debitis.
          </p>
        </div>
        {/* Image kiri di desktop, image atas di mobile */}
        <ImageTextCard
          imagePath="/image/whychooseus/image-1.png"
          title="We Provide The Best Service"
          description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla, soluta corrupti necessitatibus temporibus facilis ipsa totam animi assumenda quis impedit ducimus veritatis sapiente unde illo quia distinctio incidunt velit voluptas dolorum! Dolores, iste deserunt distinctio maiores asperiores alias!"
          description2="Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam saepe reiciendis nulla a at quibusdam rem doloribus facilis harum! Beatae veniam nulla asperiores quibusdam!"
          reverse={false}
        />

        {/* Image kanan di desktop, image bawah di mobile */}
        <ImageTextCard
          imagePath="/image/whychooseus/image-2.png"
          title="We Provide The Best Facility"
          description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla, soluta corrupti necessitatibus temporibus facilis ipsa totam animi assumenda quis impedit ducimus veritatis sapiente unde illo quia distinctio incidunt velit voluptas dolorum! Dolores, iste deserunt distinctio maiores asperiores alias!"
          description2="Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam saepe reiciendis nulla a at quibusdam rem doloribus facilis harum! Beatae veniam nulla asperiores quibusdam!"
          reverse={true}
        />
      </div>
    </section>
  );
}

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
    <div className="flex flex-col md:flex-row items-center gap-8">
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
          width={1200}
          height={800}
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
