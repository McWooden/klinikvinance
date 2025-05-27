"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import BadgeInstagram from "./BadgeInstagram";

interface MediaItem {
  name: string;
  src: string;
  type: "image" | "video";
  poster?: string;
}

const mediaData: MediaItem[] = [
  {
    name: "Venice Aesthetic Clinic Building",
    src: "/image/results/result1.png",
    type: "image",
  },
  {
    name: "Laser Skin Treatment Demo",
    src: "/video/sample-1.mp4",
    type: "video",
  },
  {
    name: "Facial treatment",
    src: "/image/results/result1.png",
    type: "image",
  },
  {
    name: "Clinic Interior Tour",
    src: "/video/sample-1.mp4",
    type: "video",
  },
  {
    name: "Pico Brightening device",
    src: "/image/results/result1.png",
    type: "image",
  },
  {
    name: "Clinic Interior Tour",
    src: "/video/sample-1.mp4",
    type: "video",
  },
];

export default function Results() {
  const [api, setApi] = useState<CarouselApi>();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slideCount, setSlideCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }
    setSlideCount(api.scrollSnapList().length);
    setCurrentSlide(api.selectedScrollSnap());

    const onSelect = () => {
      if (api) {
        setCurrentSlide(api.selectedScrollSnap());
      }
    };

    api.on("select", onSelect);

    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  const scrollToSlide = useCallback(
    (index: number) => {
      api?.scrollTo(index);
    },
    [api]
  );

  return (
    <section className="w-full py-0">
      <div className="container mx-auto max-w-[1180px] text-center">
        <h2 className="text-3xl md:text-4xl font-bold px-5 lg:px-0 text-zinc-800 mb-3">
          Our Real Results
        </h2>
        <p className="text-sm md:text-base px-5 lg:px-0 text-[#447759] mx-auto mb-8 md:mb-12 text-center">
          Real results from real customers, lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Praesent velit arcu, venenatis eget
          vulputate vel.
        </p>

        <Carousel
          setApi={setApi}
          opts={{
            loop: true,
            align: "center",
          }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent className="-ml-4">
            {" "}
            {mediaData.map((item, index) => (
              <CarouselItem
                key={index}
                className="basis-[70%] sm:basis-[50%] md:basis-1/3 lg:basis-1/5"
              >
                <div className="h-full">
                  <div className="relative aspect-[9/16] rounded-4xl overflow-hidden group h-full">
                    {item.type === "image" ? (
                      <Image
                        src={item.src}
                        alt={item.name}
                        fill
                        sizes="(max-width: 639px) 80vw, (max-width: 767px) 60vw, (max-width: 1023px) 33vw, (max-width: 1279px) 25vw, 20vw"
                        className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                        priority={index < 3}
                      />
                    ) : item.type === "video" ? (
                      <video
                        src={item.src}
                        poster={item.poster}
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover transition-opacity duration-300"
                        preload="metadata"
                        onMouseEnter={(e) => {
                          const video = e.target as HTMLVideoElement;
                          video.muted = true;
                          video.play().catch((error) => {
                            console.warn("Autoplay prevented:", error);
                          });
                        }}
                        onMouseLeave={(e) => {
                          const video = e.target as HTMLVideoElement;
                          video.pause();
                          video.currentTime = 0;
                        }}
                      >
                        Your browser does not support the video tag.
                      </video>
                    ) : (
                      <div className="flex items-center justify-center h-full bg-gray-200">
                        <p>Unsupported media type</p>
                      </div>
                    )}
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {slideCount > 1 && (
          <div className="flex justify-center space-x-2 mt-8 mb-10 md:mb-12">
            {Array.from({ length: slideCount }).map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToSlide(index)}
                className={`rounded-full transition-all duration-300 ease-in-out
                  ${
                    index === currentSlide
                      ? "w-6 h-2.5 md:w-8 md:h-3 bg-[#a0d8b1]"
                      : "w-2.5 h-2.5 md:w-3 md:h-3 bg-gray-300 hover:bg-gray-400"
                  }`}
                aria-label={`Go to slide ${index + 1}`}
                aria-current={index === currentSlide ? "true" : "false"}
              />
            ))}
          </div>
        )}

        <Button
          variant="default"
          size="lg"
          className="bg-[#547d5e] hover:bg-[#4a6b53] text-white font-semibold py-6 px-6 rounded-full text-base md:text-lg shadow-md mx-auto"
        >
          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 cursor-pointer"
          >
            <BadgeInstagram width={24} height={24} className="size-[unset]" />
            Check Out Our Instagram
          </a>
        </Button>
      </div>
    </section>
  );
}
