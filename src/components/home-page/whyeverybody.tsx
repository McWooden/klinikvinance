// components/sections/WhyChooseUs.tsx
import { cn } from "@/lib/utils";
import React from "react";
import ImageTextCard from "@/components/ImageTextCard";

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
